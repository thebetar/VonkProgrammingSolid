import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { compression } from 'vite-plugin-compression2';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [
    solidPlugin(),

    compression({
      algorithms: ['gzip', 'brotliCompress'],
      // Skip tiny files where compression saves nothing, like the old plugin did
      threshold: 1025,
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

    assetsInlineLimit: 0,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  }
});
