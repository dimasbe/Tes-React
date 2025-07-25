import React from 'react';
import { Helmet } from 'react-helmet';

const ProdukCRUD = () => {
  return (
    <div className="bg-green-50 min-h-screen p-6 text-gray-800 font-sans">
      <Helmet>
        <title>CRUD Produk</title>
        <meta name="description" content="Kelola produk di halaman admin menggunakan CRUD." />
      </Helmet>

      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-green-700 mb-6">CRUD Produk</h1>

        {/* Form Tambah Produk (Statis) */}
        <div className="bg-white p-6 rounded-lg shadow border border-green-200 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-green-600">➕ Tambah Produk</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nama Produk</label>
              <input type="text" className="w-full p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Contoh: Sayur Kangkung" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Harga</label>
              <input type="number" className="w-full p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Contoh: 10000" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Deskripsi</label>
              <textarea className="w-full p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Deskripsi singkat..."></textarea>
            </div>
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Simpan</button>
          </form>
        </div>

        {/* Daftar Produk (Statis) */}
        <div className="bg-white p-6 rounded-lg shadow border border-green-200">
          <h2 className="text-xl font-semibold mb-4 text-green-600">📦 Daftar Produk</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-green-100">
                <th className="border-b p-2">#</th>
                <th className="border-b p-2">Nama</th>
                <th className="border-b p-2">Harga</th>
                <th className="border-b p-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-b">1</td>
                <td className="p-2 border-b">Sayur Kangkung</td>
                <td className="p-2 border-b">Rp10.000</td>
                <td className="p-2 border-b space-x-2">
                  <button className="text-blue-600 hover:underline">Edit</button>
                  <button className="text-red-600 hover:underline">Hapus</button>
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b">2</td>
                <td className="p-2 border-b">Pakcoy</td>
                <td className="p-2 border-b">Rp12.000</td>
                <td className="p-2 border-b space-x-2">
                  <button className="text-blue-600 hover:underline">Edit</button>
                  <button className="text-red-600 hover:underline">Hapus</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProdukCRUD;
