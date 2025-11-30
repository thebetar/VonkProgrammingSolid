import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import gzipPlugin from 'rollup-plugin-gzip'
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
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
