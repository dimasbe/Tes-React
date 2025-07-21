import React from 'react';
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Kontak = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200 flex items-center justify-center px-4 py-10">
      <div className="max-w-lg w-full bg-white/80 backdrop-blur-md rounded-3xl shadow-lg p-8 text-center border border-green-200">
        <h2 className="text-4xl font-bold mb-4 text-green-700">Hubungi Kami</h2>
        <p className="text-gray-600 mb-6">
          Punya pertanyaan atau tertarik bekerja sama? Kami siap membantu Anda mewujudkan kebun hidroponik impian!
        </p>

        <div className="flex flex-col gap-4">
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full shadow-md transition transform hover:scale-105"
          >
            <FaWhatsapp size={20} />
            Chat via WhatsApp
          </a>

          <a
            href="mailto:hidroponikku@example.com"
            className="flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full shadow-md transition transform hover:scale-105"
          >
            <FaEnvelope size={20} />
            Kirim Email
          </a>

          <a
            href="https://instagram.com/hidroponikku"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-full shadow-md transition transform hover:scale-105"
          >
            <FaInstagram size={20} />
            DM via Instagram
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-500 italic">
          “Kami percaya setiap orang bisa bertani, mulai dari rumah.” 🌿
        </p>
      </div>
    </div>
  );
};

export default Kontak;
