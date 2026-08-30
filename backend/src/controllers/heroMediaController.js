import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import multer from 'multer';
import mongoose from 'mongoose';
import { SiteSetting } from '../models/SiteSetting.js';

const HERO_MEDIA_KEY = 'heroMedia';
const allowedKeys = new Set(['home', 'portfolio', 'films', 'couples', 'testimonials', 'packages', 'about']);
let inMemoryHeroMedia = {};
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const heroMediaDirectory = path.resolve(__dirname, '../../uploads/hero-media');
fs.mkdirSync(heroMediaDirectory, { recursive: true });

const databaseAvailable = () => mongoose.connection.readyState === 1;
const storage = multer.diskStorage({
  destination: (_req, _file, callback) => callback(null, heroMediaDirectory),
  filename: (_req, file, callback) => {
    const extension = path.extname(file.originalname).toLowerCase() || (file.mimetype === 'video/mp4' ? '.mp4' : '.jpg');
    callback(null, `hero-${Date.now()}${extension}`);
  },
});

export const uploadHeroMediaFile = multer({
  storage,
  fileFilter: (_req, file, callback) => callback(file.mimetype.startsWith('image/') || file.mimetype === 'video/mp4' ? null : new Error('Choose an image or MP4 video file.'), file.mimetype.startsWith('image/') || file.mimetype === 'video/mp4'),
  limits: { fileSize: 150 * 1024 * 1024 },
});

const readHeroMedia = async () => {
  if (!databaseAvailable()) return inMemoryHeroMedia;
  const setting = await SiteSetting.findOne({ key: HERO_MEDIA_KEY }).lean();
  const media = setting?.value?.media && typeof setting.value.media === 'object' ? setting.value.media : {};
  if (media.home?.url) return media;
  const legacyHomeHero = await SiteSetting.findOne({ key: 'homeHero' }).lean();
  const legacyUrl = legacyHomeHero?.value?.videoUrl;
  return typeof legacyUrl === 'string' && legacyUrl ? { ...media, home: { url: legacyUrl, type: 'video' } } : media;
};

const saveHeroMedia = async (media) => {
  inMemoryHeroMedia = media;
  if (databaseAvailable()) {
    await SiteSetting.findOneAndUpdate({ key: HERO_MEDIA_KEY }, { value: { media } }, { new: true, upsert: true, setDefaultsOnInsert: true });
  }
};

export const getHeroMedia = async (_req, res) => {
  try {
    return res.json({ success: true, data: { media: await readHeroMedia() } });
  } catch {
    return res.status(500).json({ success: false, message: 'Unable to load hero media.' });
  }
};

export const uploadHeroMedia = async (req, res) => {
  const key = req.body?.key;
  if (!allowedKeys.has(key)) return res.status(400).json({ success: false, message: 'Invalid website page selected.' });
  if (!req.file) return res.status(400).json({ success: false, message: 'Please choose a media file.' });

  try {
    const media = await readHeroMedia();
    const url = `${req.protocol}://${req.get('host')}/uploads/hero-media/${req.file.filename}`;
    const updatedMedia = { ...media, [key]: { url, type: req.file.mimetype === 'video/mp4' ? 'video' : 'image' } };
    await saveHeroMedia(updatedMedia);
    return res.json({ success: true, data: { media: updatedMedia }, message: 'Hero media saved and published.' });
  } catch {
    return res.status(500).json({ success: false, message: 'Unable to save hero media.' });
  }
};
