/**
 * Deployment URLs for the admin application.
 * Keep local defaults so `npm run dev` works without any setup.
 */
export const API_URL = (import.meta.env.VITE_API_URL || "http://localhost:5001").replace(/\/$/, "");
export const WEBSITE_URL = (import.meta.env.VITE_WEBSITE_URL || "http://localhost:5173").replace(/\/$/, "");
