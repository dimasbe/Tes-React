import React, { useState } from 'react';
import { Link, useLocation, useMatch } from 'react-router-dom';
import greenGrowLogo from '../assets/logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinkClasses = (path) => {
    const isActiveMatch = useMatch({ path: path, end: path === '/' });
    const isActive = !!isActiveMatch;

    return `
      block py-3 px-6 transition-all duration-200 ease-in-out
      text-lg font-medium
      
      // Mobile/Sidebar Styling (Hanya warna teks dan bold)
      ${isActive
        ? 'text-green-700 font-semibold' // Aktif mobile: hijau gelap, bold
        : 'text-gray-700 hover:text-green-800' // Default & hover mobile: abu-abu gelap, berubah hijau gelap saat hover
      }
      
      focus:outline-none focus:text-green-800 focus:font-semibold
      
      // Desktop Styling (lg:)
      lg:py-0 lg:px-2 
      lg:bg-transparent lg:shadow-none
      lg:no-underline 
      lg:hover:no-underline 
      
      ${isActive
        ? 'lg:text-white lg:font-semibold'
        : 'lg:text-white/60'
      }
      lg:focus:outline-none lg:focus:text-white lg:focus:font-semibold
    `;
  };

  // Definisikan link navigasi agar mudah di-loop
  const navLinks = [
    { to: '/', label: 'Beranda' },
    { to: '/tentang', label: 'Tentang' },
    { to: '/blog', label: 'Blog' },
    { to: '/produk', label: 'Produk' },
    { to: '/kontak', label: 'Kontak' },
  ];

  return (
    <nav
      className="bg-green-800 p-4 text-white shadow fixed top-0 w-full z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Container utama untuk logo, menu, dan tombol */}
      <div className="w-full flex items-center relative px-6 lg:pl-16">
        {/* Logo tetap di kiri */}
        <div className="text-2xl font-bold z-20 flex items-center space-x-2">
          <Link
            to="/"
            className="flex items-center hover:text-green-200 transition-colors focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-opacity-75"
            aria-label="Beranda GreenGrow"
            onClick={() => setIsOpen(false)}
          >
            {/* Mengganti SVG dengan tag <img> yang mengimpor logo Anda */}
            <img 
              src={greenGrowLogo} 
              alt="GreenGrow Logo" 
              className="w-9 h-9 mr-2 -mt-2" // Sesuaikan ukuran sesuai kebutuhan
            />
            <span>GreenGrow</span>
          </Link>
        </div>

        {/* Hamburger Menu Button (hanya terlihat di layar kecil) */}
        <button
          className="lg:hidden text-white focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-opacity-75 p-2 rounded-md z-20 absolute right-4"
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
            lg:flex lg:flex-row lg:items-center 
            lg:w-auto lg:bg-transparent lg:text-white 
            lg:p-0 
            lg:ml-[12rem] 
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
            {navLinks.map((link, index) => (
              <li
                key={link.to}
                className={`list-none lg:!translate-y-0 lg:!opacity-100 transition-all duration-300 ease-out
                                ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                `}
                // Menggunakan style inline untuk delay agar mudah diatur per item
                style={{ transitionDelay: isOpen ? `${index * 50}ms` : `${(navLinks.length - 1 - index) * 50}ms` }}
                role="none"
              >
                <Link to={link.to} className={navLinkClasses(link.to)} onClick={() => setIsOpen(false)} role="menuitem">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Tombol Login/Register untuk MOBILE (di dalam sidebar) */}
          <div className="lg:hidden flex flex-col space-y-3 mt-8 pt-4 border-t border-gray-200">
            <Link
              to="/login"
              className="block py-2 px-6 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-opacity-75 text-center"
              aria-label="Login"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/register"
              className="block py-2 px-6 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-opacity-75 text-center"
              aria-label="Register"
              onClick={() => setIsOpen(false)}
            >
              Register
            </Link>
          </div>
        </div>

        {/* Bagian untuk Tombol Login/Register DESKTOP (di navbar) */}
        <div className="hidden lg:flex items-center space-x-4 ml-auto">
          <Link
            to="/login"
            className="py-1.5 px-3 bg-white text-green-600 rounded-lg hover:bg-green-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-opacity-75"
            aria-label="Login"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="py-1.5 px-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-opacity-75"
            aria-label="Register"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;