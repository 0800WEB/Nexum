import compress from 'vite-plugin-compression';
import { robots } from 'vite-plugin-robots';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isProduction = process.env.VITE_ENV === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    robots({
      sitemap: process.env.VITE_SITEMAP_URL,
      host: process.env.VITE_HOST_URL,
    }),
    compress({ algorithm: 'gzip', ext: '.gz' }),
    ...(isProduction
      ? [compress({ algorithm: 'brotliCompress', ext: '.br' })]
      : []),
  ],
  build: {
    sourcemap: !isProduction,
    minify: 'esbuild', // Más rápido que Terser
  },
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@styles': '/src/styles',
      '@router': '/src/router',
      '@pages': '/src/pages',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/global.scss";`,
      },
    },
  },
});
