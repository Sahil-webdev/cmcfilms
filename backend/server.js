import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './src/config/db.js';
import { loginUser, getMe } from './src/controllers/authController.js';
import { protect } from './src/middleware/auth.js';
import { getHomeHero, updateHomeHero, uploadHomeHero, uploadHomeHeroVideo } from './src/controllers/siteSettingsController.js';
import { getPackages, updatePackages, uploadPackageImage, uploadPackageImageFile } from './src/controllers/packagesController.js';
import { getHeroMedia, uploadHeroMedia, uploadHeroMediaFile } from './src/controllers/heroMediaController.js';
import { getCoupleContent, updateCoupleContent } from './src/controllers/coupleContentController.js';
import { getStories, updateStories } from './src/controllers/storiesController.js';
import { getHomeGallery, updateHomeGallery, getTestimonials, updateTestimonials } from './src/controllers/websiteContentController.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to MongoDB
connectDB();

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', studio: 'CMC Films API', time: new Date() });
});

// Auth Routes
app.post('/api/auth/login', loginUser);
app.get('/api/auth/me', protect, getMe);

// Public website configuration + protected CMS update route
app.get('/api/site-settings/home-hero', getHomeHero);
app.put('/api/site-settings/home-hero', protect, updateHomeHero);
app.post('/api/site-settings/home-hero/upload', protect, uploadHomeHeroVideo.single('video'), uploadHomeHero);
app.get('/api/packages', getPackages);
app.put('/api/packages', protect, updatePackages);
app.post('/api/packages/upload-image', protect, uploadPackageImage.single('image'), uploadPackageImageFile);
app.get('/api/site-settings/hero-media', getHeroMedia);
app.post('/api/site-settings/hero-media/upload', protect, uploadHeroMediaFile.single('media'), uploadHeroMedia);
app.get('/api/couple-content', getCoupleContent);
app.put('/api/couple-content', protect, updateCoupleContent);
app.get('/api/stories', getStories);
app.put('/api/stories', protect, updateStories);
app.get('/api/home-gallery', getHomeGallery);
app.put('/api/home-gallery', protect, updateHomeGallery);
app.get('/api/testimonials', getTestimonials);
app.put('/api/testimonials', protect, updateTestimonials);
app.use((error, _req, res, next) => {
  if (error?.name === 'MulterError' || error?.message === 'Only MP4 video files are supported.' || error?.message === 'Only image files are supported.' || error?.message === 'Choose an image or MP4 video file.') {
    return res.status(400).json({ success: false, message: error.code === 'LIMIT_FILE_SIZE' ? 'The selected file is too large.' : error.message });
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

app.get('/api/inquiries', protect, (req, res) => {
  res.json({ success: true, count: DUMMY_INQUIRIES.length, data: DUMMY_INQUIRIES });
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
