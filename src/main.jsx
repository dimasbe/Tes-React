// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Pastikan path dan ekstensi .jsx benar
import './index.css'; // Pastikan path ke CSS global Anda benar

// --- INI ADALAH BARIS KRUSIAL YANG HARUS ADA ---
import { HelmetProvider } from 'react-helmet-async';
// ---------------------------------------------

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* --- INI ADALAH BAGIAN KRUSIAL YANG HARUS MEMBUNGKUS <App /> --- */}
    <HelmetProvider>
      <App />
    </HelmetProvider>
    {/* --------------------------------------------------------------- */}
  </React.StrictMode>,
);