import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import multer from 'multer';
import mongoose from 'mongoose';
import { SiteSetting } from '../models/SiteSetting.js';

const HOME_HERO_KEY = 'homeHero';
let inMemoryHeroVideoUrl = '';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const homeHeroUploadDirectory = path.resolve(__dirname, '../../uploads/home-hero');

fs.mkdirSync(homeHeroUploadDirectory, { recursive: true });

const homeHeroUploadStorage = multer.diskStorage({
  destination: (_req, _file, callback) => callback(null, homeHeroUploadDirectory),
  filename: (_req, file, callback) => {
    const extension = path.extname(file.originalname).toLowerCase() || '.mp4';
    callback(null, `home-hero-${Date.now()}${extension}`);
  },
});

export const uploadHomeHeroVideo = multer({
  storage: homeHeroUploadStorage,
  fileFilter: (_req, file, callback) => {
    const isMp4 = file.mimetype === 'video/mp4' || path.extname(file.originalname).toLowerCase() === '.mp4';
    callback(isMp4 ? null : new Error('Only MP4 video files are supported.'), isMp4);
  },
  limits: { fileSize: 150 * 1024 * 1024 },
});

const databaseAvailable = () => mongoose.connection.readyState === 1;

const readHeroVideoUrl = async () => {
  if (!databaseAvailable()) return inMemoryHeroVideoUrl;

  const setting = await SiteSetting.findOne({ key: HOME_HERO_KEY }).lean();
  return typeof setting?.value?.videoUrl === 'string' ? setting.value.videoUrl : '';
};

const saveHeroVideoUrl = async (videoUrl) => {
  inMemoryHeroVideoUrl = videoUrl;

  if (databaseAvailable()) {
    await SiteSetting.findOneAndUpdate(
      { key: HOME_HERO_KEY },
      { value: { videoUrl } },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
  }
};

export const getHomeHero = async (req, res) => {
  try {
    const videoUrl = await readHeroVideoUrl();
    return res.json({ success: true, data: { videoUrl } });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Unable to load the home hero setting.' });
  }
};

export const updateHomeHero = async (req, res) => {
  const { videoUrl } = req.body;

  if (typeof videoUrl !== 'string') {
    return res.status(400).json({ success: false, message: 'A video URL is required.' });
  }

  const normalizedUrl = videoUrl.trim();
  if (normalizedUrl) {
    try {
      const parsedUrl = new URL(normalizedUrl);
      if (!['http:', 'https:'].includes(parsedUrl.protocol)) throw new Error('Unsupported protocol');
    } catch {
      return res.status(400).json({ success: false, message: 'Enter a valid public http(s) MP4 URL.' });
    }
  }

  try {
    await saveHeroVideoUrl(normalizedUrl);

    return res.json({
      success: true,
      data: { videoUrl: normalizedUrl },
      message: normalizedUrl ? 'Home hero video updated.' : 'Home hero reset to the website default video.',
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Unable to update the home hero setting.' });
  }
};

export const uploadHomeHero = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'Please choose an MP4 video file.' });
  }

  try {
    const videoUrl = `${req.protocol}://${req.get('host')}/uploads/home-hero/${req.file.filename}`;
    await saveHeroVideoUrl(videoUrl);

    return res.json({
      success: true,
      data: { videoUrl },
      message: 'Home hero video uploaded and updated.',
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'The video was uploaded but the hero setting could not be saved.' });
  }
};
