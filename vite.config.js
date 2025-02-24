import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Sample2/', // ✅ Ensure this matches your repository name exactly!
  build: {
    outDir: 'dist',
  },
});
