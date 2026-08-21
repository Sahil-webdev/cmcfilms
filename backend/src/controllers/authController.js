import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';

const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET || 'cmc_films_super_secret_jwt_key_2026_luxury_studio', {
    expiresIn: '30d',
  });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Demo fallback for instant preview without MongoDB running
  if (email === 'admin@cmcfilms.com' && password === 'admin123') {
    const token = generateToken('demo-admin-id', 'admin');
    return res.json({
      success: true,
      token,
      user: {
        id: 'demo-admin-id',
        name: 'CMC Director',
        email: 'admin@cmcfilms.com',
        role: 'admin',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
      },
    });
  }

  try {
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      return res.json({
        success: true,
        token: generateToken(user._id, user.role),
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          avatar: user.avatar,
        },
      });
    } else {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getMe = async (req, res) => {
  res.json({
    success: true,
    user: req.user,
  });
};
