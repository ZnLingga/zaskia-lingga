import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base path so the build works on any GitHub Pages repository URL.
export default defineConfig({
  base: './',
  plugins: [react()],
});

