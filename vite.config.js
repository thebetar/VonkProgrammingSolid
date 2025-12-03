import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import viteCompression from 'vite-plugin-compression';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [
    solidPlugin(),

    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ],
  server: {
    port: 3000,
    proxy: {
      '/scripts': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      }
    }
  },
  build: {
    target: 'esnext',

    minify: 'terser',
    cssMinify: 'lightningcss',

    assetsInlineLimit: 0,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      mangle: {
        properties: true
      }
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  }
});
