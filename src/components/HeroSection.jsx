import React from "react";
import cpnsImg from "../assets/cpns.jpg"; // pastikan file ini ada di folder /assets

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full h-[85vh] md:h-screen overflow-hidden">
      {/* Gambar Latar */}
      <img
        src={cpnsImg}
        alt="Ilustrasi CPNS"
        className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
      />

      {/* Overlay hitam transparan */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      {/* Teks di atas gambar */}
      <div className="relative z-20 flex items-center justify-center h-full text-center px-4">
        <div className="text-white max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-blue-200 drop-shadow-lg">
            Informasi Penerimaan CPNS 2025
          </h1>
          <p className="text-base md:text-lg text-blue-100">
            Dapatkan info resmi terkait jadwal, persyaratan, formasi, dan tahapan seleksi CPNS tahun 2025 di sini.
          </p>

          <a
            href="https://sscasn.bkn.go.id"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-6 px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Buka Portal SSCASN
          </a>
        </div>
      </div>
    </section>
  );
}
