import compress from 'vite-plugin-compression';
import { robots } from 'vite-plugin-robots'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),robots({
    sitemap: 'https://www.nexum.net.ar/sitemap.xml',
    host: 'https://www.nexum.net.ar',
  }),compress({ algorithm: 'gzip', ext: '.gz' }),
    compress({ algorithm: 'brotliCompress', ext: '.br' }),
    ],
  build: {
    sourcemap: process.env.NODE_ENV !== 'production',
    minify: 'esbuild', // Más rápido que Terser
  },
  resolve: {
    alias: {
      '@': '/src', // Alias para la carpeta src
      '@components': '/src/components', // Alias para componentes
      '@styles': '/src/styles', // Alias para estilos
      '@router': '/src/router', // Alias para el router
      '@pages': '/src/pages', // Alias para el router
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/global.scss";`
      }
    }
  }
})
