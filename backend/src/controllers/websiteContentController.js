import mongoose from 'mongoose';
import { SiteSetting } from '../models/SiteSetting.js';

const HOME_GALLERY_KEY = 'homeGallery';
const TESTIMONIALS_KEY = 'testimonials';
let memoryGallery = null;
let memoryTestimonials = null;

const databaseAvailable = () => mongoose.connection.readyState === 1;

async function readContent(key, fallback) {
  if (!databaseAvailable()) return fallback();
  const setting = await SiteSetting.findOne({ key }).lean();
  return setting?.value ?? null;
}

async function saveContent(key, value, setMemory) {
  setMemory(value);
  if (databaseAvailable()) {
    await SiteSetting.findOneAndUpdate(
      { key },
      { value },
      { new: true, upsert: true, setDefaultsOnInsert: true },
    );
  }
}

export const getHomeGallery = async (_req, res) => {
  try {
    const value = await readContent(HOME_GALLERY_KEY, () => memoryGallery);
    return res.json({ success: true, data: { images: Array.isArray(value?.images) ? value.images : null } });
  } catch {
    return res.status(500).json({ success: false, message: 'Unable to load the home gallery.' });
  }
};

export const updateHomeGallery = async (req, res) => {
  if (!Array.isArray(req.body?.images)) return res.status(400).json({ success: false, message: 'Images must be a list.' });
  if (!databaseAvailable()) return res.status(503).json({ success: false, message: 'Database is unavailable. Gallery changes were not saved.' });
  try {
    const value = { images: req.body.images };
    await saveContent(HOME_GALLERY_KEY, value, (next) => { memoryGallery = next; });
    return res.json({ success: true, data: value, message: 'Home gallery published.' });
  } catch {
    return res.status(500).json({ success: false, message: 'Unable to save the home gallery.' });
  }
};

export const getTestimonials = async (_req, res) => {
  try {
    const value = await readContent(TESTIMONIALS_KEY, () => memoryTestimonials);
    return res.json({ success: true, data: { testimonials: Array.isArray(value?.testimonials) ? value.testimonials : null } });
  } catch {
    return res.status(500).json({ success: false, message: 'Unable to load testimonials.' });
  }
};

export const updateTestimonials = async (req, res) => {
  if (!Array.isArray(req.body?.testimonials)) return res.status(400).json({ success: false, message: 'Testimonials must be a list.' });
  if (!databaseAvailable()) return res.status(503).json({ success: false, message: 'Database is unavailable. Testimonial changes were not saved.' });
  try {
    const value = { testimonials: req.body.testimonials };
    await saveContent(TESTIMONIALS_KEY, value, (next) => { memoryTestimonials = next; });
    return res.json({ success: true, data: value, message: 'Testimonials published.' });
  } catch {
    return res.status(500).json({ success: false, message: 'Unable to save testimonials.' });
  }
};
