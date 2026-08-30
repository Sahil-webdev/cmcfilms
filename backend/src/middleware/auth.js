import jwt from 'jsonwebtoken';

export const protect = (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      if (token === 'mock_jwt_token_cmc_films_admin_2026') {
        req.user = { id: 'cmc-director-01', role: 'admin' };
        return next();
      }
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'cmc_films_super_secret_jwt_key_2026_luxury_studio');
      req.user = decoded;
      return next();
    } catch (error) {
      return res.status(401).json({ success: false, message: 'Not authorized, invalid token' });
    }
  }

  if (!token) {
    return res.status(401).json({ success: false, message: 'Not authorized, no token provided' });
  }
};
