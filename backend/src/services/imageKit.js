import ImageKit, { toFile } from '@imagekit/nodejs';

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

  const fileName = safeFileName(file.originalname);
  const client = getClient();
  const result = await client.files.upload({
    file: await toFile(file.buffer, fileName, { type: file.mimetype }),
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
    mimeType: file.mimetype,
    provider: 'imagekit',
  };
};

export const imageKitErrorResponse = (error, fallbackMessage) => ({
  status: error?.statusCode || 500,
  message: error?.statusCode ? error.message : fallbackMessage,
});
