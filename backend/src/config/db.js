import mongoose from 'mongoose';

export const isDatabaseAvailable = () => mongoose.connection.readyState === 1;

export const connectDB = async () => {
  if (!process.env.MONGODB_URI) {
    console.error('[MongoDB Error]: MONGODB_URI is not configured.');
    return;
  }

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`[MongoDB Connected]: ${conn.connection.host}`);
  } catch (error) {
    console.error(`[MongoDB Error]: Database connection failed (${error.message}).`);
  }
};
