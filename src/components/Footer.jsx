// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Tentang */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Tentang Kami</h2>
          <p className="text-sm">
            Kami adalah platform edukasi dan informasi seputar sistem hidroponik di Indonesia. Membantu petani dan masyarakat umum mengenal cara tanam tanpa tanah secara modern.
          </p>
        </div>

        {/* Kontak */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Kontak</h2>
          <p className="text-sm">Email: hidroponik@contoh.com</p>
          <p className="text-sm">Telepon: +62 812 3456 7890</p>
          <p className="text-sm">Instagram: @hidroponik_id</p>
        </div>

        {/* Alamat */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Alamat</h2>
          <p className="text-sm">
            Jl. Hijau Subur No. 123<br />
            Banyuwangi, Jawa Timur<br />
            Indonesia - 68431
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-xs text-gray-200">
        © {new Date().getFullYear()} Hidroponik.ID — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;