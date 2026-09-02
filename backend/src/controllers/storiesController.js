import mongoose from 'mongoose';
import { SiteSetting } from '../models/SiteSetting.js';

const KEY = 'weddingStories';
let memoryStories = null;
const databaseAvailable = () => mongoose.connection.readyState === 1;

export const getStories = async (_req, res) => {
  try {
    if (!databaseAvailable()) return res.json({ success: true, data: { stories: memoryStories } });
    const setting = await SiteSetting.findOne({ key: KEY }).lean();
    return res.json({ success: true, data: { stories: Array.isArray(setting?.value?.stories) ? setting.value.stories : null } });
  } catch { return res.status(500).json({ success: false, message: 'Unable to load wedding stories.' }); }
};

export const updateStories = async (req, res) => {
  if (!Array.isArray(req.body?.stories)) return res.status(400).json({ success: false, message: 'Stories must be a list.' });
  if (!databaseAvailable()) return res.status(503).json({ success: false, message: 'Database is unavailable. Story changes were not saved.' });
  try {
    memoryStories = req.body.stories;
    if (databaseAvailable()) await SiteSetting.findOneAndUpdate({ key: KEY }, { value: { stories: memoryStories } }, { new: true, upsert: true, setDefaultsOnInsert: true });
    return res.json({ success: true, data: { stories: memoryStories } });
  } catch { return res.status(500).json({ success: false, message: 'Unable to save wedding stories.' }); }
};
