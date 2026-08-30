import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import multer from 'multer';
import mongoose from 'mongoose';
import { SiteSetting } from '../models/SiteSetting.js';

const PACKAGES_KEY = 'packages';
let inMemoryPackages = null;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packageUploadDirectory = path.resolve(__dirname, '../../uploads/packages');

fs.mkdirSync(packageUploadDirectory, { recursive: true });

const databaseAvailable = () => mongoose.connection.readyState === 1;

const packageImageStorage = multer.diskStorage({
  destination: (_req, _file, callback) => callback(null, packageUploadDirectory),
  filename: (_req, file, callback) => {
    const extension = path.extname(file.originalname).toLowerCase() || '.jpg';
    callback(null, `package-${Date.now()}${extension}`);
  },
});

export const uploadPackageImage = multer({
  storage: packageImageStorage,
  fileFilter: (_req, file, callback) => callback(file.mimetype.startsWith('image/') ? null : new Error('Only image files are supported.'), file.mimetype.startsWith('image/')),
  limits: { fileSize: 10 * 1024 * 1024 },
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
  const imageUrl = `${req.protocol}://${req.get('host')}/uploads/packages/${req.file.filename}`;
  return res.json({ success: true, data: { imageUrl }, message: 'Image uploaded.' });
};
