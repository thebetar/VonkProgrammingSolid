import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import gzipPlugin from 'rollup-plugin-gzip'
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [
    solidPlugin(),
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
    terserOptions: {
      mangle: {
        properties: true
      }
    },
    assetsInlineLimit: 0,
    rollupOptions: {
      plugins: [gzipPlugin()]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  }
});
