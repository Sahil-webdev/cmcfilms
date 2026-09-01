import multer from 'multer';
import mongoose from 'mongoose';
import { SiteSetting } from '../models/SiteSetting.js';
import { imageKitErrorResponse, uploadToImageKit } from '../services/imageKit.js';

const PACKAGES_KEY = 'packages';
let inMemoryPackages = null;
const databaseAvailable = () => mongoose.connection.readyState === 1;

export const uploadPackageImage = multer({
  storage: multer.memoryStorage(),
  fileFilter: (_req, file, callback) => callback(file.mimetype.startsWith('image/') ? null : new Error('Only image files are supported.'), file.mimetype.startsWith('image/')),
  // ImageKit Free accepts images up to 25 MB.
  limits: { fileSize: 25 * 1024 * 1024 },
});

const readPackages = async () => {
  if (!databaseAvailable()) return inMemoryPackages;
  const setting = await SiteSetting.findOne({ key: PACKAGES_KEY }).lean();
  return Array.isArray(setting?.value?.packages) ? setting.value.packages : null;
};

const savePackages = async (packages) => {
  inMemoryPackages = packages;
  if (databaseAvailable()) {
    await SiteSetting.findOneAndUpdate(
      { key: PACKAGES_KEY },
      { value: { packages } },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
  }
};

export const getPackages = async (_req, res) => {
  try {
    return res.json({ success: true, data: { packages: await readPackages() } });
  } catch {
    return res.status(500).json({ success: false, message: 'Unable to load packages.' });
  }
};

export const updatePackages = async (req, res) => {
  const { packages } = req.body;
  if (!Array.isArray(packages)) {
    return res.status(400).json({ success: false, message: 'Packages must be provided as a list.' });
  }

  try {
    await savePackages(packages);
    return res.json({ success: true, data: { packages }, message: 'Packages saved and published to the website.' });
  } catch {
    return res.status(500).json({ success: false, message: 'Unable to save packages.' });
  }
};

export const uploadPackageImageFile = async (req, res) => {
  if (!req.file) return res.status(400).json({ success: false, message: 'Please choose an image file.' });
  try {
    const media = await uploadToImageKit({ file: req.file, folder: '/cmc-films/images', tags: ['cmc-films', 'image'] });
    return res.json({ success: true, data: { imageUrl: media.url, media }, message: 'Image uploaded to ImageKit.' });
  } catch (error) {
    const response = imageKitErrorResponse(error, 'Unable to upload the image to ImageKit.');
    return res.status(response.status).json({ success: false, message: response.message });
  }
};
