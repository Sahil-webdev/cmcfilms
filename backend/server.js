import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './src/config/db.js';
import { loginUser, getMe } from './src/controllers/authController.js';
import { protect } from './src/middleware/auth.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', studio: 'CMC Films API', time: new Date() });
});

// Auth Routes
app.post('/api/auth/login', loginUser);
app.get('/api/auth/me', protect, getMe);

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

app.listen(PORT, () => {
  console.log(`🚀 [CMC Films Backend] running on http://localhost:${PORT}`);
});
