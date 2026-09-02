import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './src/config/db.js';
import { loginUser, getMe, getSetupStatus, registerFirstAdmin } from './src/controllers/authController.js';
import { protect, requireAdmin } from './src/middleware/auth.js';
import { getHomeHero, updateHomeHero, uploadHomeHero, uploadHomeHeroVideo } from './src/controllers/siteSettingsController.js';
import { getPackages, updatePackages, uploadPackageImage, uploadPackageImageFile } from './src/controllers/packagesController.js';
import { getHeroMedia, uploadHeroMedia, uploadHeroMediaFile } from './src/controllers/heroMediaController.js';
import { getCoupleContent, updateCoupleContent } from './src/controllers/coupleContentController.js';
import { getStories, updateStories } from './src/controllers/storiesController.js';
import { getFilms, updateFilms } from './src/controllers/filmsController.js';
import { getHomeGallery, updateHomeGallery, getTestimonials, updateTestimonials } from './src/controllers/websiteContentController.js';
import { Inquiry } from './src/models/Inquiry.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const configuredOrigins = [process.env.CLIENT_URL, process.env.ADMIN_URL]
  .filter(Boolean)
  .flatMap((value) => value.split(',').map((origin) => origin.trim()))
  .filter(Boolean);

app.set('trust proxy', 1);
app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(
  cors({
    origin(origin, callback) {
      // Requests without an Origin header are health checks or server-to-server requests.
      if (!origin || configuredOrigins.includes(origin)) return callback(null, true);
      return callback(new Error('Origin is not allowed by CORS.'));
    },
  })
);
app.use(express.json({ limit: '2mb' }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to MongoDB
connectDB();

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', studio: 'CMC Films API', time: new Date() });
});

const publicInquiryLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 8,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many enquiries submitted. Please try again in 15 minutes.' },
});

app.post('/api/inquiries', publicInquiryLimiter, async (req, res) => {
  const { name, partner, email, phone, date, city, venue, eventType, referral, story } = req.body || {};
  const clientName = String(name || '').trim();
  const clientEmail = String(email || '').trim().toLowerCase();
  if (!clientName || !/^\S+@\S+\.\S+$/.test(clientEmail)) {
    return res.status(400).json({ success: false, message: 'Please enter a valid name and email address.' });
  }
  const parsedDate = date ? new Date(String(date)) : null;
  if (parsedDate && Number.isNaN(parsedDate.getTime())) {
    return res.status(400).json({ success: false, message: 'Please enter a valid wedding date.' });
  }
  if (mongoose.connection.readyState !== 1) {
    return res.status(503).json({ success: false, message: 'Database is unavailable. Please try again shortly.' });
  }
  try {
    const inquiry = await Inquiry.create({
      coupleName: partner ? `${clientName} & ${String(partner).trim()}` : clientName,
      email: clientEmail,
      phone: String(phone || '').trim(),
      weddingDate: parsedDate,
      venueLocation: [venue, city].filter(Boolean).map((value) => String(value).trim()).join(', '),
      estimatedBudget: '',
      servicesRequested: eventType ? [String(eventType).trim()] : [],
      notes: [
        story ? `Story: ${String(story).trim()}` : '',
        referral ? `Referral: ${String(referral).trim()}` : '',
      ].filter(Boolean).join('\n'),
    });
    return res.status(201).json({ success: true, data: { id: inquiry.id }, message: 'Your enquiry has been received.' });
  } catch (error) {
    return res.status(503).json({ success: false, message: 'Unable to save your enquiry right now. Please try again shortly.' });
  }
});

// Auth Routes
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many sign-in attempts. Please try again in 15 minutes.' },
});
app.get('/api/auth/setup-status', getSetupStatus);
app.post('/api/auth/register-first-admin', authLimiter, registerFirstAdmin);
app.post('/api/auth/login', authLimiter, loginUser);
app.get('/api/auth/me', protect, getMe);

// Public website configuration + protected CMS update route
app.get('/api/site-settings/home-hero', getHomeHero);
app.put('/api/site-settings/home-hero', protect, requireAdmin, updateHomeHero);
app.post('/api/site-settings/home-hero/upload', protect, requireAdmin, uploadHomeHeroVideo.single('video'), uploadHomeHero);
app.get('/api/packages', getPackages);
app.put('/api/packages', protect, requireAdmin, updatePackages);
app.post('/api/packages/upload-image', protect, requireAdmin, uploadPackageImage.single('image'), uploadPackageImageFile);
app.get('/api/site-settings/hero-media', getHeroMedia);
app.post('/api/site-settings/hero-media/upload', protect, requireAdmin, uploadHeroMediaFile.single('media'), uploadHeroMedia);
app.get('/api/couple-content', getCoupleContent);
app.put('/api/couple-content', protect, requireAdmin, updateCoupleContent);
app.get('/api/stories', getStories);
app.put('/api/stories', protect, requireAdmin, updateStories);
app.get('/api/films', getFilms);
app.put('/api/films', protect, requireAdmin, updateFilms);
app.get('/api/home-gallery', getHomeGallery);
app.put('/api/home-gallery', protect, requireAdmin, updateHomeGallery);
app.get('/api/testimonials', getTestimonials);
app.put('/api/testimonials', protect, requireAdmin, updateTestimonials);
app.use((error, _req, res, next) => {
  if (error?.name === 'MulterError' || error?.message === 'Only MP4 video files are supported.' || error?.message === 'Only image files are supported.' || error?.message === 'Choose an image or MP4 video file.') {
    return res.status(400).json({ success: false, message: error.code === 'LIMIT_FILE_SIZE' ? 'The selected file is too large.' : error.message });
  }
  if (error?.message === 'Origin is not allowed by CORS.') {
    return res.status(403).json({ success: false, message: 'Request origin is not allowed.' });
  }
  return next(error);
});

// Dummy Inquiries Data Endpoint for instant demo
const DUMMY_INQUIRIES = [
  {
    id: 'INQ-1001',
    coupleName: 'Aarav & Ananya',
    email: 'aarav.ananya@gmail.com',
    phone: '+91 98765 43210',
    weddingDate: '2026-11-15',
    venueLocation: 'The Leela Palace, Udaipur',
    estimatedBudget: '₹8,50,000',
    servicesRequested: ['Full Wedding Film', 'Pre-Wedding Shoot', 'Drone Cinematography'],
    status: 'New',
    createdAt: '2026-08-20T10:30:00.000Z',
  },
  {
    id: 'INQ-1002',
    coupleName: 'Rohan & Meera',
    email: 'rohan.m@outlook.com',
    phone: '+91 99887 76655',
    weddingDate: '2026-12-04',
    venueLocation: 'Taj Lake Palace, Udaipur',
    estimatedBudget: '₹12,00,000',
    servicesRequested: ['Royal Cinematic Film', 'Teaser & Highlights', 'Traditional Photography'],
    status: 'Contacted',
    createdAt: '2026-08-19T14:15:00.000Z',
  },
  {
    id: 'INQ-1003',
    coupleName: 'Kabir & Rhea',
    email: 'rhea.kabir@yahoo.com',
    phone: '+91 97112 23344',
    weddingDate: '2026-10-28',
    venueLocation: 'Rambagh Palace, Jaipur',
    estimatedBudget: '₹15,00,000',
    servicesRequested: ['Full Wedding Package', 'Same Day Edit', 'Editorial Album'],
    status: 'Confirmed',
    createdAt: '2026-08-18T09:45:00.000Z',
  },
  {
    id: 'INQ-1004',
    coupleName: 'Vikram & Ishita',
    email: 'vikram.ishita@gmail.com',
    phone: '+91 91234 56789',
    weddingDate: '2027-01-18',
    venueLocation: 'Alila Fort, Bishangarh',
    estimatedBudget: '₹6,50,000',
    servicesRequested: ['Pre-Wedding Story', 'Candid Photography'],
    status: 'Proposal Sent',
    createdAt: '2026-08-17T16:20:00.000Z',
  },
];

app.get('/api/inquiries', protect, requireAdmin, async (_req, res) => {
  if (mongoose.connection.readyState !== 1) {
    return res.status(503).json({ success: false, message: 'Database is unavailable.' });
  }
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 }).lean();
    return res.json({ success: true, count: inquiries.length, data: inquiries.map((inquiry) => ({
      id: String(inquiry._id),
      coupleName: inquiry.coupleName,
      email: inquiry.email,
      phone: inquiry.phone,
      weddingDate: inquiry.weddingDate ? new Date(inquiry.weddingDate).toISOString().slice(0, 10) : '',
      venueLocation: inquiry.venueLocation,
      estimatedBudget: inquiry.estimatedBudget,
      servicesRequested: inquiry.servicesRequested,
      status: inquiry.status,
      createdAt: inquiry.createdAt,
    })) });
  } catch {
    return res.status(500).json({ success: false, message: 'Unable to load enquiries.' });
  }
});

const server = app.listen(PORT, () => {
  console.log(`🚀 [CMC Films Backend] running on http://localhost:${PORT}`);
  console.log(`🔑 Auth: POST http://localhost:${PORT}/api/auth/login`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\n❌ Port ${PORT} is already in use.`);
    console.error(`   Run this to free it: lsof -ti :${PORT} | xargs kill -9\n`);
    process.exit(1);
  } else {
    throw err;
  }
});
