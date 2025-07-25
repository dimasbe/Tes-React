// src/components/Footer.jsx

import React from "react";
// Import Link jika Anda ingin menggunakan react-router-dom untuk link internal
// import { Link } from 'react-router-dom';
import greenGrowLogo from '../assets/Logo.png'; // Import logo seperti di Navbar
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'; // Import ikon media sosial

const Footer = () => {
  return (
    // Menggunakan tag <footer> untuk semantik yang tepat, penting untuk SEO dan aksesibilitas
    <footer className="bg-green-800 text-white py-10 mt-12 sm:mt-16" role="contentinfo">
      {/* Container utama footer. Menggunakan flexbox untuk membagi logo dan konten utama. */}
      {/* Di mobile, akan flex-col (logo di atas). Di desktop (md+), akan flex-row (logo di kiri). */}
      {/* items-center untuk menengahkan logo dan kolom konten secara vertikal */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-x-12"> {/* Mengubah max-w-7xl menjadi max-w-6xl dan md:flex-row-reverse menjadi md:flex-flex-row */}

        {/* Kolom Logo (kiri di desktop, atas di mobile) */}
        {/* flex justify-center untuk rata tengah di mobile, md:justify-start untuk rata kiri di desktop */}
        {/* items-center untuk menengahkan logo secara vertikal di dalam div-nya */}
        <div className="w-full md:w-1/5 flex justify-center md:justify-start items-center mb-8 md:mb-0"> {/* Mengubah md:w-1/4 menjadi md:w-1/5 */}
          <img
            // Menggunakan variabel logo yang diimpor, sama seperti di Navbar
            src={greenGrowLogo}
            alt="GreenGrow Logo"
            className="h-36 sm:h-48" // Ukuran logo diperbesar lagi menjadi h-36 (mobile) dan sm:h-48 (tablet/desktop)
          />
        </div>

        {/* Wrapper untuk Kolom Konten (kanan di desktop, bawah di mobile) */}
        {/* Menggunakan grid 4 kolom di desktop dan menyesuaikan gap agar lebih lebar */}
        {/* text-center untuk mobile, md:text-left untuk rata kiri di desktop agar konten tidak menempel ke logo */}
        <div className="w-full md:w-4/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 md:gap-x-10"> {/* Mengubah md:w-3/4 menjadi md:w-4/5 */}

          {/* Kolom 1: Promo Menarik */}
          <section aria-labelledby="promo-heading">
            <h2 id="promo-heading" className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-green-100">Promo Menarik</h2>
            {/* Tambahkan text-justify di sini */}
            <p className="text-sm leading-relaxed text-gray-200 text-justify">
              Dapatkan diskon spesial untuk pembelian starter kit hidroponik pertama Anda!
              Jangan lewatkan penawaran terbatas ini yakni diskon sampai dengan 40% untuk memulai kebun mini di rumah Anda.
              Kunjungi halaman produk kami untuk informasi lebih lanjut dan jangan lewatkan promonya!
            </p>
          </section>

          {/* Kolom 2: Layanan Kami */}
          <section aria-labelledby="services-heading">
            <h2 id="services-heading" className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-green-100">Layanan Kami</h2>
            {/* Ubah list-none p-0 menjadi list-disc pl-5 untuk numbering titik */}
            <ul className="text-sm text-gray-200 space-y-2 list-disc pl-5">
              <li>Bibit Hidroponik Berkualitas</li>
              <li>Peralatan Hidroponik Lengkap</li>
              <li>Sayuran Hidroponik Segar</li>
              <li>Konsultasi & Panduan Menanam</li>
              <li>Pengiriman Cepat & Aman</li>
            </ul>
          </section>

          {/* Kolom 3: Lokasi Kami (Alamat Kantor & Embedded Map) */}
          <section aria-labelledby="address-heading">
            <h2 id="address-heading" className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-green-100">Lokasi Kami</h2>
            <address className="not-italic text-sm text-gray-200 mb-4">
              Jl. Hijau Subur No. 123<br />
              Banyuwangi, Jawa Timur<br />
              Indonesia - 68431
            </address>
            {/* Embedded Google Map */}
            <div className="relative w-full h-48 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.123456789!2d114.36456789!3d-8.21456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ5JzQ4LjEiUyAxMTTCsDIxJzQ4LjEiRQ!5e0!3m2!1sen!2sid!4v1678901234567!5m2!1sen!2sid" // Ganti dengan URL embed Google Maps lokasi Anda yang sebenarnya!
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Kantor GreenGrow di Google Maps"
                className="rounded-lg"
              ></iframe>
            </div>
          </section>

          {/* Kolom 4: Social Media */}
          <section aria-labelledby="social-media-heading">
            <h2 id="social-media-heading" className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-green-100">Ikuti Kami</h2>
            {/* Ikon sosial media rata kiri di mobile */}
            <div className="flex justify-start space-x-4">
              <a href="https://www.facebook.com/greengrow" target="_blank" rel="noopener noreferrer" aria-label="Kunjungi Facebook GreenGrow"
                className="text-green-200 hover:text-white transition-colors">
                <FaFacebook className="w-7 h-7" />
              </a>
              <a href="https://www.instagram.com/greengrow_id" target="_blank" rel="noopener noreferrer" aria-label="Kunjungi Instagram GreenGrow"
                className="text-green-200 hover:text-white transition-colors">
                <FaInstagram className="w-7 h-7" />
              </a>
              <a href="https://www.youtube.com/greengrowchannel" target="_blank" rel="noopener noreferrer" aria-label="Kunjungi YouTube GreenGrow"
                className="text-green-200 hover:text-white transition-colors">
                <FaYoutube className="w-7 h-7" />
              </a>
            </div>
          </section>

        </div> {/* Akhir dari wrapper untuk Kolom Konten */}

      </div> {/* Akhir dari container utama footer */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mt-10 pt-6 border-t border-green-700 text-xs text-gray-300 text-center"> {/* Menambahkan text-center di sini */}
          <p>© {new Date().getFullYear()} GreenGrow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;