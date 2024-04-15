import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { join } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: join(__dirname, 'index.html')
      },
      output: {
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
});
