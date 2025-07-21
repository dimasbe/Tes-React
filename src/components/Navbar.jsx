import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-green-600 p-4 text-white shadow relative">
      <div className="max-w-6xl mx-auto flex items-center justify-between relative">
        {/* Logo tetap di kiri */}
        <div className="text-2xl font-bold">
          <Link to="/">HidroponikKu</Link>
        </div>

        {/* Menu navigasi tepat di tengah */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-6 text-lg">
            <Link to="/" className="hover:underline">Beranda</Link>
            <Link to="/tentang" className="hover:underline">Tentang</Link>
            <Link to="/produk" className="hover:underline">Produk</Link>
            <Link to="/kontak" className="hover:underline">Kontak</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
