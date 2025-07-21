import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav 
      className="bg-green-600 p-4 text-white shadow relative"
      // Peran navigasi utama situs ini penting bagi pembaca layar dan mesin pencari
      role="navigation" 
      aria-label="Main navigation" 
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between relative">
        {/* Logo tetap di kiri */}
        <div className="text-2xl font-bold">
          <Link 
            to="/" 
            className="hover:text-green-200 transition-colors"
            // Tambahkan aria-label untuk kejelasan aksesibilitas pada logo link
            aria-label="Beranda HidroponikKu"
          >
            HidroponikKu
          </Link>
        </div>

        {/* Menu navigasi tepat di tengah */}
        {/* Gunakan tag <ul role="menu"> dan <li role="none"> jika ini adalah menu interaktif yang kompleks,
            tapi untuk daftar link sederhana, div dengan space-x-6 sudah cukup.
            Namun, untuk semantik yang lebih kuat, ul/li lebih disarankan untuk daftar link.
        */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          {/* Mengganti div dengan ul/li untuk semantik daftar link yang lebih baik */}
          <ul className="flex space-x-6 text-lg">
            <li className="list-none"> {/* list-none dari Tailwind untuk menghapus bullet */}
              <Link 
                to="/" 
                className="hover:underline"
                aria-current="page" // Menandakan halaman aktif jika sedang di beranda
              >
                Beranda
              </Link>
            </li>
            <li className="list-none">
              <Link to="/tentang" className="hover:underline">Tentang</Link>
            </li>
            <li className="list-none">
              <Link to="/produk" className="hover:underline">Produk</Link>
            </li>
            <li className="list-none">
              <Link to="/kontak" className="hover:underline">Kontak</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;