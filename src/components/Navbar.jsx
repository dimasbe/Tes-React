import React, { useState } from 'react';
import { Link, useLocation, useMatch } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinkClasses = (path) => {
    // Tentukan apakah link saat ini adalah halaman aktif dengan useMatch
    // useMatch lebih handal untuk rute React Router
    const isActiveMatch = useMatch({ path: path, end: path === '/' }); // end: true untuk exact match pada root
    const isActive = !!isActiveMatch; // Mengubah objek match menjadi boolean

    return `
      block py-3 px-6 transition-all duration-200 ease-in-out
      text-lg font-medium
      
      // Mobile/Sidebar Styling (Hanya warna teks dan bold)
      ${isActive
        ? 'text-green-700 font-semibold' // Aktif mobile: hijau gelap, bold
        : 'text-gray-700 hover:text-green-800' // Default & hover mobile: abu-abu gelap, berubah hijau gelap saat hover
      }
      
      // PERBAIKAN FOKUS (Mobile): Menghilangkan ring/outline yang kotak
      focus:outline-none focus:text-green-800 focus:font-semibold
      
      // Desktop Styling (lg:)
      lg:py-0 lg:px-2 
      lg:bg-transparent lg:shadow-none
      lg:no-underline 
      lg:hover:no-underline 
      
      // Perubahan PENTING untuk desktop
      ${isActive
        ? 'lg:text-white lg:font-semibold' // Aktif desktop: putih menyala, bold
        : 'lg:text-white/60' // Default desktop: abu-abu samar
      }
      // PERBAIKAN FOKUS DESKTOP: Menghilangkan ring/outline yang kotak
      lg:focus:outline-none lg:focus:text-white lg:focus:font-semibold // Fokus desktop: putih menyala, bold
    `;
  };

  return (
    <nav
      className="bg-green-600 p-4 text-white shadow relative z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between relative">
        {/* Logo tetap di kiri */}
        <div className="text-2xl font-bold z-20">
          <Link
            to="/"
            className="hover:text-green-200 transition-colors focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-opacity-75"
            aria-label="Beranda HidroponikKu"
            onClick={() => setIsOpen(false)}
          >
            HidroponikKu
          </Link>
        </div>

        {/* Hamburger Menu Button (hanya terlihat di layar kecil) */}
        <button
          className="lg:hidden text-white focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-opacity-75 p-2 rounded-md z-20"
          onClick={toggleMenu}
          aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          aria-expanded={isOpen}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            )}
          </svg>
        </button>

        {/* Overlay gelap saat menu mobile terbuka */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
            onClick={toggleMenu}
            aria-hidden="true"
          ></div>
        )}

        {/* Menu Navigasi (Sidebar Content untuk mobile, Normal untuk desktop) */}
        <div
          className={`
            fixed lg:static top-0 right-0 h-full lg:h-auto
            w-64 sm:w-72 md:w-80 
            bg-white text-gray-800 
            shadow-xl lg:shadow-none 
            rounded-l-xl lg:rounded-none 
            flex flex-col 
            transform transition-transform duration-300 ease-in-out 
            ${isOpen ? 'translate-x-0' : 'translate-x-full'} 
            lg:translate-x-0 
            py-8 px-6 
            z-50 
            
            // Kelas khusus untuk desktop (lg:)
            lg:flex lg:flex-row lg:items-center lg:justify-center 
            lg:w-auto lg:bg-transparent lg:text-white 
            lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 
            lg:p-0 
          `}
          role="menu"
          aria-orientation={window.innerWidth < 1024 ? "vertical" : "horizontal"}
        >
          {/* Tombol Close di dalam sidebar (hanya terlihat di mobile) */}
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-400 p-2 rounded-md"
            onClick={toggleMenu}
            aria-label="Tutup menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          {/* Wrapper untuk link navigasi */}
          <ul className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-6 text-lg w-full mt-10 lg:mt-0 text-center lg:text-left">
            <li className="list-none" role="none">
              <Link to="/" className={navLinkClasses('/')} onClick={() => setIsOpen(false)} role="menuitem">
                Beranda
              </Link>
            </li>
            <li className="list-none" role="none">
              <Link to="/tentang" className={navLinkClasses('/tentang')} onClick={() => setIsOpen(false)} role="menuitem">
                Tentang
              </Link>
            </li>
            <li className="list-none" role="none">
              <Link to="/produk" className={navLinkClasses('/produk')} onClick={() => setIsOpen(false)} role="menuitem">
                Produk
              </Link>
            </li>
            <li className="list-none" role="none">
              <Link to="/kontak" className={navLinkClasses('/kontak')} onClick={() => setIsOpen(false)} role="menuitem">
                Kontak
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;