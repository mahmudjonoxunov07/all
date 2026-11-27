import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'src',
  base: './',
  plugins: [react()],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve('src/index.html'),
        week11_2: resolve('src/week11_2.html'),
        portfolioWidget: resolve('src/portfolio-widget.jsx'),
      },
      output: {
        entryFileNames: 'assets/[name].js',
      },
    },
  },
});
