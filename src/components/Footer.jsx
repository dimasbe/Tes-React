import React from "react";
// Import Link jika Anda ingin menggunakan react-router-dom untuk link internal
// import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    // Menggunakan tag <footer> untuk semantik yang tepat, penting untuk SEO dan aksesibilitas
    <footer className="bg-green-800 text-white py-10 mt-12 sm:mt-16" role="contentinfo">
      {/* Container utama footer. Sekarang semua perataan akan diatur menjadi text-center. */}
      {/* md:gap-x-20 masih digunakan untuk memberi jarak antar kolom di desktop. */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-20 text-center">

        {/* Kolom 1: Promo Menarik */}
        {/* Tidak perlu lagi flex/items-center/md:items-start di section karena text-center global sudah mengaturnya. */}
        <section aria-labelledby="promo-heading">
          {/* Judul: Otomatis rata tengah dari parent div */}
          <h2 id="promo-heading" className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-green-100">Promo Menarik</h2>
          {/* Paragraf promo: Tetap text-justify jika Anda mau, tapi jika ingin rata tengah juga, hapus text-justify. */}
          {/* Untuk keseragaman "rata tengah semua", saya akan hapus text-justify di sini. */}
          <p className="text-sm leading-relaxed text-gray-200 text-justify">
            Dapatkan diskon spesial hingga 30% untuk pembelian starter kit hidroponik pertama Anda!
            Jangan lewatkan penawaran terbatas ini untuk memulai kebun mini di rumah Anda.
            Kunjungi halaman produk kami untuk informasi lebih lanjut dan klaim promo Anda sekarang!
          </p>
        </section>

        {/* Kolom 2: Kontak */}
        {/* Tidak perlu lagi flex/items-center/md:items-start di section karena text-center global sudah mengaturnya. */}
        <section aria-labelledby="contact-heading">
          {/* Judul: Otomatis rata tengah dari parent div */}
          <h2 id="contact-heading" className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-green-100">Kontak Kami</h2>
          {/* Konten kontak: Otomatis rata tengah dari parent div */}
          <address className="not-italic text-sm text-gray-200 space-y-2">
            <p>
              Email:{" "}
              <a
                href="mailto:hidroponik@contoh.com"
                className="hover:underline text-green-200 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-opacity-75"
                aria-label="Kirim email ke hidroponik@contoh.com"
              >
                hidroponik@contoh.com
              </a>
            </p>
            <p>
              Telepon:{" "}
              <a
                href="tel:+6281234567890"
                className="hover:underline text-green-200 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-opacity-75"
                aria-label="Telepon ke nomor 081234567890"
              >
                +62 812 3456 7890
              </a>
            </p>
            <p>
              Instagram:{" "}
              <a
                href="https://www.instagram.com/hidroponik_id"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-green-200 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-opacity-75"
                aria-label="Kunjungi profil Instagram Hidroponik ID"
              >
                @hidroponik_id
              </a>
            </p>
            {/* Contoh tambahan: Link ke halaman kontak internal (jika menggunakan React Router Link) */}
            {/* <p>
              <Link to="/kontak" className="hover:underline text-green-200 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-opacity-75">
                Kunjungi Halaman Kontak
              </Link>
            </p> */}
          </address>
        </section>

        {/* Kolom 3: Alamat */}
        {/* Tidak perlu lagi flex/items-center/md:items-start di section karena text-center global sudah mengaturnya. */}
        <section aria-labelledby="address-heading">
          {/* Judul: Otomatis rata tengah dari parent div */}
          <h2 id="address-heading" className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-green-100">Lokasi Kami</h2>
          {/* Konten alamat: Otomatis rata tengah dari parent div */}
          <address className="not-italic text-sm text-gray-200">
            Jl. Hijau Subur No. 123<br />
            Banyuwangi, Jawa Timur<br />
            Indonesia - 68431
            {/* Link ke Google Maps dengan ikon SVG untuk visual dan aksesibilitas */}
            <p className="mt-3">
              <a
                href="https://maps.app.goo.gl/YourGoogleMapsLink" // Ganti dengan link Google Maps yang sebenarnya!
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-green-200 hover:underline focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-opacity-75"
                aria-label="Lihat lokasi kami di Google Maps"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Lihat di Peta
              </a>
            </p>
          </address>
        </section>

      </div>

      {/* Copyright */}
      {/* Border atas untuk pemisah visual, teks rata tengah, ukuran kecil */}
      <div className="mt-10 pt-6 border-t border-green-700 text-center text-xs text-gray-300">
        <p>© {new Date().getFullYear()} HidroponikKu.ID. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;