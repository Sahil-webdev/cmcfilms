import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';

export const protect = async (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization?.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'Not authorized.' });
  }

  if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32) {
    return res.status(500).json({ success: false, message: 'Server authentication is not configured.' });
  }

  try {
    const token = authorization.slice(7);
    const decoded = jwt.verify(token, process.env.JWT_SECRET, {
      issuer: 'cmcfilms-api',
      audience: 'cmcfilms-admin',
    });
    const user = await User.findById(decoded.sub).select('_id name email role avatar');
    if (!user) {
      return res.status(401).json({ success: false, message: 'Not authorized.' });
    }
    req.user = user;
    return next();
  } catch (_error) {
    return res.status(401).json({ success: false, message: 'Not authorized.' });
  }
};

export const requireAdmin = (req, res, next) => {
  if (req.user?.role !== 'admin') {
    return res.status(403).json({ success: false, message: 'Administrator access is required.' });
  }
  return next();
};
