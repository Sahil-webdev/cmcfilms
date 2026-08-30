import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // Production is hosted by the public website at /admin. Development keeps
  // the existing standalone URL at http://localhost:5175.
  base: process.env.NODE_ENV === 'production' ? '/admin/' : '/',
  plugins: [react()],
  server: {
    port: 5175,
    open: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // This folder is included in the public website's Cloudflare asset bundle.
    outDir: path.resolve(__dirname, '../website/public/admin'),
    emptyOutDir: true,
  },
});
