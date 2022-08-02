import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    polyfillModulePreload: false,
    // target: 'esnext',
    // sourcemap: true,
    minify: false,
    cssCodeSplit: false,
    lib: {
      entry: resolve(__dirname, '/src/lib.js'),
      // formats: ['iife'],
      name: 'UILib',
      fileName: 'ui-lib',
    },
    rollupOptions: {
      // input: {
      //   main: resolve(__dirname, 'index.html'),
      //   lib: resolve(__dirname, 'lib.html')
      // },
      output: {
        assetFileNames: 'assets/[name][extname]', // default: "assets/[name]-[hash][extname]"
        chunkFileNames: '[name].js', // Default: "[name]-[hash].js"
      },
    },
  },
});
