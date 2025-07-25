import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const menuItems = [
  { path: '/admin', name: 'Beranda' },
  { path: '/admin/produk', name: 'CRUD Produk' },
  { path: '/admin/statistik', name: 'Statistik Penjualan' },
  { path: '/admin/laporan', name: 'Cetak Laporan' },
];

const AdminSidebar = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Tombol Hamburger (Mobile only) */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-green-700 text-white z-50 flex items-center justify-between px-4 py-3 shadow">
        <h1 className="text-lg font-bold">Admin Panel</h1>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-green-700 text-white shadow-lg z-40 transform transition-transform duration-300 md:relative md:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Logo */}
        <div className="p-6 text-2xl font-bold border-b border-green-600 hidden md:block">
          Admin Panel
        </div>

        {/* Menu navigasi */}
        <nav className="mt-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setSidebarOpen(false)} // Tutup saat mobile
              className={`block px-6 py-3 text-lg transition duration-200 ${
                location.pathname === item.path
                  ? 'bg-green-800 font-semibold'
                  : 'hover:bg-green-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Overlay saat sidebar dibuka di mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default AdminSidebar;
