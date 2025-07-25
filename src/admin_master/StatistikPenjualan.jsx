import React from 'react';
import { Helmet } from 'react-helmet';

const StatistikPenjualan = () => {
  return (
    <div className="bg-green-50 min-h-screen p-6 text-gray-800 font-sans">
      <Helmet>
        <title>Statistik Penjualan</title>
        <meta name="description" content="Analisis statistik penjualan produk bulanan." />
      </Helmet>

      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-green-700 mb-4">📊 Statistik Penjualan</h1>
        <p className="mb-6 text-green-900">Analisis performa penjualan produk bulan ini secara visual.</p>

        {/* Ringkasan statistik */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white border border-green-200 rounded-lg p-4 shadow">
            <h2 className="text-lg font-semibold text-green-600">Total Penjualan</h2>
            <p className="text-2xl font-bold text-gray-700 mt-2">Rp 12.500.000</p>
          </div>
          <div className="bg-white border border-green-200 rounded-lg p-4 shadow">
            <h2 className="text-lg font-semibold text-green-600">Produk Terjual</h2>
            <p className="text-2xl font-bold text-gray-700 mt-2">320 pcs</p>
          </div>
          <div className="bg-white border border-green-200 rounded-lg p-4 shadow">
            <h2 className="text-lg font-semibold text-green-600">Terbanyak</h2>
            <p className="text-2xl font-bold text-gray-700 mt-2">Sayuran A</p>
          </div>
        </div>

        {/* Grafik dummy */}
        <div className="bg-white border border-green-200 rounded-lg p-6 shadow">
          <h3 className="text-lg font-semibold text-green-600 mb-2">Grafik Penjualan Bulanan</h3>
          <div className="h-64 bg-green-100 flex items-center justify-center text-green-700 rounded">
            (📈 Grafik Dummy)
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatistikPenjualan;
