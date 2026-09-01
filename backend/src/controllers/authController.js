import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';
import { isDatabaseAvailable } from '../config/db.js';

const getJwtSecret = () => {
  if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32) {
    throw new Error('JWT_SECRET must be configured with a strong value.');
  }
  return process.env.JWT_SECRET;
};

const generateToken = (id, role) => {
  return jwt.sign({ sub: id.toString(), role }, getJwtSecret(), {
    expiresIn: process.env.JWT_EXPIRES_IN || '8h',
    issuer: 'cmcfilms-api',
    audience: 'cmcfilms-admin',
  });
};

const toProfile = (user) => ({
  id: user._id.toString(),
  name: user.name,
  email: user.email,
  role: user.role,
  avatar: user.avatar,
});

const isValidPassword = (password) =>
  typeof password === 'string' &&
  password.length >= 12 &&
  /[a-z]/.test(password) &&
  /[A-Z]/.test(password) &&
  /\d/.test(password) &&
  /[^A-Za-z0-9]/.test(password);

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const databaseUnavailable = (res) =>
  res.status(503).json({
    success: false,
    message: 'Database is unavailable. Please restore the database connection and try again.',
  });

export const getSetupStatus = async (_req, res) => {
  if (!isDatabaseAvailable()) return databaseUnavailable(res);

  try {
    const hasAdmin = Boolean(await User.exists({ role: 'admin' }));
    return res.json({ success: true, setupRequired: !hasAdmin });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Could not check administrator setup.' });
  }
};

export const registerFirstAdmin = async (req, res) => {
  if (!isDatabaseAvailable()) return databaseUnavailable(res);

  const name = typeof req.body.name === 'string' ? req.body.name.trim() : '';
  const email = typeof req.body.email === 'string' ? req.body.email.trim().toLowerCase() : '';
  const { password } = req.body;

  if (name.length < 2 || name.length > 80 || !isValidEmail(email)) {
    return res.status(400).json({ success: false, message: 'Enter a valid name and email address.' });
  }

  if (!isValidPassword(password)) {
    return res.status(400).json({
      success: false,
      message: 'Password must have 12+ characters with uppercase, lowercase, number, and symbol.',
    });
  }

  try {
    // Validate configuration before writing the first account, so setup cannot
    // create an account and then fail to issue its first secure session.
    getJwtSecret();
    const existingAdmin = await User.exists({ role: 'admin' });
    if (existingAdmin) {
      return res.status(403).json({ success: false, message: 'Administrator setup is already complete.' });
    }

    const user = await User.create({ name, email, password, role: 'admin' });
    return res.status(201).json({
      success: true,
      token: generateToken(user._id, user.role),
      user: toProfile(user),
    });
  } catch (error) {
    if (error?.code === 11000) {
      return res.status(409).json({ success: false, message: 'This email address is already registered.' });
    }
    return res.status(500).json({ success: false, message: 'Could not create the administrator account.' });
  }
};

export const loginUser = async (req, res) => {
  if (!isDatabaseAvailable()) return databaseUnavailable(res);
  const email = typeof req.body.email === 'string' ? req.body.email.trim().toLowerCase() : '';
  const { password } = req.body;

  if (!email || typeof password !== 'string') {
    return res.status(400).json({ success: false, message: 'Email and password are required.' });
  }

  try {
    const user = await User.findOne({ email }).select('+password');

    if (user && (await user.matchPassword(password))) {
      return res.json({
        success: true,
        token: generateToken(user._id, user.role),
        user: toProfile(user),
      });
    }
    return res.status(401).json({ success: false, message: 'Invalid email or password.' });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Could not sign in. Please try again.' });
  }
};

export const getMe = async (req, res) => {
  res.json({
    success: true,
    user: toProfile(req.user),
  });
};
