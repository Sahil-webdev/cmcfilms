import ImageKit, { toFile } from '@imagekit/nodejs';
import sharp from 'sharp';

const requiredEnvironmentVariables = ['IMAGEKIT_PRIVATE_KEY'];

const isConfigured = () => requiredEnvironmentVariables.every((name) => Boolean(process.env[name]?.trim()));

const getClient = () => {
  if (!isConfigured()) {
    const error = new Error('ImageKit is not configured. Add IMAGEKIT_PRIVATE_KEY to the backend environment.');
    error.statusCode = 503;
    throw error;
  }

  return new ImageKit({ privateKey: process.env.IMAGEKIT_PRIVATE_KEY });
};

const safeFileName = (fileName = 'upload') => {
  const normalized = fileName
    .replace(/[^a-zA-Z0-9._-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  return normalized || `upload-${Date.now()}`;
};

// ImageKit will accept a large source upload but cannot serve images above its
// 25 MP resolution limit. Resize camera originals before uploading so every
// saved gallery image remains viewable on the website.
const prepareImageForImageKit = async (file) => {
  if (!file.mimetype?.startsWith('image/') || file.mimetype === 'image/svg+xml' || file.mimetype === 'image/gif') {
    return file;
  }

  try {
    const metadata = await sharp(file.buffer).metadata();
    const sourcePixels = (metadata.width || 0) * (metadata.height || 0);
    const MAX_PIXELS = 16_000_000;

    // Already web-safe: preserve the original bytes and format.
    if (sourcePixels > 0 && sourcePixels <= MAX_PIXELS) return file;

    const optimized = sharp(file.buffer)
      .rotate()
      .resize({ width: 3840, height: 3840, fit: 'inside', withoutEnlargement: true });

    if (metadata.hasAlpha) {
      const buffer = await optimized.png({ compressionLevel: 9, adaptiveFiltering: true }).toBuffer();
      return { ...file, buffer, mimetype: 'image/png', originalname: file.originalname.replace(/\.[^.]+$/, '') + '.png' };
    }

    const buffer = await optimized.jpeg({ quality: 88, mozjpeg: true }).toBuffer();
    return { ...file, buffer, mimetype: 'image/jpeg', originalname: file.originalname.replace(/\.[^.]+$/, '') + '.jpg' };
  } catch {
    // Let ImageKit handle unsupported image formats as before.
    return file;
  }
};

/**
 * Upload a Multer in-memory file to ImageKit. Only metadata/URL is persisted
 * in MongoDB; the file itself never touches the deployed server filesystem.
 */
export const uploadToImageKit = async ({ file, folder, tags = [] }) => {
  if (!file?.buffer) {
    const error = new Error('Please choose a media file.');
    error.statusCode = 400;
    throw error;
  }

  const preparedFile = await prepareImageForImageKit(file);
  const fileName = safeFileName(preparedFile.originalname);
  const client = getClient();
  const result = await client.files.upload({
    file: await toFile(preparedFile.buffer, fileName, { type: preparedFile.mimetype }),
    fileName,
    folder,
    useUniqueFileName: true,
    tags,
  });

  return {
    url: result.url,
    fileId: result.fileId,
    filePath: result.filePath,
    name: result.name,
    size: result.size,
    mimeType: preparedFile.mimetype,
    provider: 'imagekit',
  };
};

export const imageKitErrorResponse = (error, fallbackMessage) => ({
  status: error?.statusCode || 500,
  message: error?.statusCode ? error.message : fallbackMessage,
});
