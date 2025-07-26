// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Hapus 'sans: ['Arial', 'sans-serif']' jika ada
        // Dan tambahkan atau pastikan 'poppins' ada
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [], // <--- Array plugins sekarang kosong, atau berisi plugin lain jika ada
};