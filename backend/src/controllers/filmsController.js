import mongoose from 'mongoose';
import { SiteSetting } from '../models/SiteSetting.js';

const KEY = 'weddingFilms';
let memoryValue = null;

const databaseAvailable = () => mongoose.connection.readyState === 1;

const normalizeFilms = (films) => films.map((film) => ({
  id: String(film.id || ''),
  title: String(film.title || '').trim(),
  youtubeUrl: String(film.youtubeUrl || '').trim(),
  featured: Boolean(film.featured),
  createdAt: String(film.createdAt || ''),
})).filter((film) => film.id && film.title && film.youtubeUrl);

export const getFilms = async (_req, res) => {
  try {
    const setting = databaseAvailable() ? await SiteSetting.findOne({ key: KEY }).lean() : null;
    const value = setting?.value || memoryValue;
    return res.json({
      success: true,
      data: {
        films: Array.isArray(value?.films) ? value.films : null,
        introTitle: typeof value?.introTitle === 'string' ? value.introTitle : '',
        introText: typeof value?.introText === 'string' ? value.introText : '',
      },
    });
  } catch {
    return res.status(500).json({ success: false, message: 'Unable to load wedding films.' });
  }
};

export const updateFilms = async (req, res) => {
  if (!Array.isArray(req.body?.films)) {
    return res.status(400).json({ success: false, message: 'Films must be a list.' });
  }
  if (!databaseAvailable()) return res.status(503).json({ success: false, message: 'Database is unavailable. Wedding film changes were not saved.' });

  const value = {
    films: normalizeFilms(req.body.films),
    introTitle: String(req.body.introTitle || '').trim(),
    introText: String(req.body.introText || '').trim(),
  };

  try {
    memoryValue = value;
    if (databaseAvailable()) {
      await SiteSetting.findOneAndUpdate(
        { key: KEY },
        { value },
        { new: true, upsert: true, setDefaultsOnInsert: true },
      );
    }
    return res.json({ success: true, data: value, message: 'Wedding films published.' });
  } catch {
    return res.status(500).json({ success: false, message: 'Unable to save wedding films.' });
  }
};
