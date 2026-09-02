import mongoose from 'mongoose';
import { SiteSetting } from '../models/SiteSetting.js';

const CONTENT_KEY = 'coupleContent';
let inMemoryContent = null;
const databaseAvailable = () => mongoose.connection.readyState === 1;

const readContent = async () => {
  if (!databaseAvailable()) return inMemoryContent;
  const setting = await SiteSetting.findOne({ key: CONTENT_KEY }).lean();
  return setting?.value?.content || null;
};

export const getCoupleContent = async (_req, res) => {
  try { return res.json({ success: true, data: { content: await readContent() } }); }
  catch { return res.status(500).json({ success: false, message: 'Unable to load couple content.' }); }
};

export const updateCoupleContent = async (req, res) => {
  const { content } = req.body;
  if (!content || !Array.isArray(content.galleryImages) || !Array.isArray(content.blogs)) return res.status(400).json({ success: false, message: 'Gallery images and blogs are required.' });
  if (!databaseAvailable()) return res.status(503).json({ success: false, message: 'Database is unavailable. Couple Shoot changes were not saved.' });
  try {
    inMemoryContent = content;
    if (databaseAvailable()) await SiteSetting.findOneAndUpdate({ key: CONTENT_KEY }, { value: { content } }, { new: true, upsert: true, setDefaultsOnInsert: true });
    return res.json({ success: true, data: { content }, message: 'Couple Shoot content published.' });
  } catch { return res.status(500).json({ success: false, message: 'Unable to save couple content.' }); }
};
