import multer from 'multer';
import mongoose from 'mongoose';
import { SiteSetting } from '../models/SiteSetting.js';
import { imageKitErrorResponse, uploadToImageKit } from '../services/imageKit.js';

const HERO_MEDIA_KEY = 'heroMedia';
const allowedKeys = new Set(['home', 'portfolio', 'films', 'couples', 'testimonials', 'packages', 'about']);
let inMemoryHeroMedia = {};
const databaseAvailable = () => mongoose.connection.readyState === 1;

export const uploadHeroMediaFile = multer({
  storage: multer.memoryStorage(),
  fileFilter: (_req, file, callback) => callback(file.mimetype.startsWith('image/') || file.mimetype === 'video/mp4' ? null : new Error('Choose an image or MP4 video file.'), file.mimetype.startsWith('image/') || file.mimetype === 'video/mp4'),
  // ImageKit Free: images <=25 MB, videos <=100 MB.
  limits: { fileSize: 100 * 1024 * 1024 },
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
  if (!databaseAvailable()) return res.status(503).json({ success: false, message: 'Database is unavailable. Hero media was not saved.' });

  try {
    const media = await readHeroMedia();
    const uploadedMedia = await uploadToImageKit({
      file: req.file,
      folder: `/cmc-films/hero-media/${key}`,
      tags: ['cmc-films', 'hero-media', key],
    });
    const updatedMedia = {
      ...media,
      [key]: { ...uploadedMedia, type: req.file.mimetype === 'video/mp4' ? 'video' : 'image' },
    };
    await saveHeroMedia(updatedMedia);
    return res.json({ success: true, data: { media: updatedMedia }, message: 'Hero media saved and published.' });
  } catch (error) {
    const response = imageKitErrorResponse(error, 'Unable to upload and save hero media.');
    return res.status(response.status).json({ success: false, message: response.message });
  }
};
