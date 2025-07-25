// client/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Konfigurasi proxy untuk mengarahkan permintaan API ke backend
    proxy: {
      '/api': { // Setiap permintaan yang dimulai dengan /api
        target: 'http://localhost:5000', // Akan dialihkan ke backend Node.js
        changeOrigin: true, // Diperlukan untuk host virtual (penting untuk CORS)
        // rewrite: (path) => path.replace(/^\/api/, ''), // Baris ini TIDAK PERLU karena backend Anda sudah punya /api
      },
    },
    port: 5173, // Port frontend Anda (default Vite)
  },
});
