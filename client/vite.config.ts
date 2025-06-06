import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'lucide-icons': ['lucide-react'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['lucide-react'],
  },
});