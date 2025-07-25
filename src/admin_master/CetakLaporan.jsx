import React from 'react';
import { Helmet } from 'react-helmet';

const CetakLaporan = () => {
  return (
    <div className="bg-green-50 min-h-screen p-6 text-gray-800 font-sans">
      <Helmet>
        <title>Cetak Laporan</title>
        <meta name="description" content="Cetak laporan penjualan bulanan dari sistem." />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Cetak Laporan</h1>
        <p className="mb-6 text-green-900">🖨️ Cetak laporan penjualan bulanan dari sistem.</p>

        {/* Konten Statis Dummy */}
        <div className="bg-white p-6 rounded-lg shadow border border-green-200">
          <p className="text-gray-700 mb-4">📅 Pilih bulan dan tahun laporan:</p>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <select className="border border-green-300 rounded p-2 w-full sm:w-1/2">
              <option>Januari</option>
              <option>Februari</option>
              <option>Maret</option>
              <option>April</option>
              <option>Mei</option>
              <option>Juni</option>
              <option>Juli</option>
              <option>Agustus</option>
              <option>September</option>
              <option>Oktober</option>
              <option>November</option>
              <option>Desember</option>
            </select>
            <select className="border border-green-300 rounded p-2 w-full sm:w-1/2">
              <option>2025</option>
              <option>2024</option>
              <option>2023</option>
            </select>
          </div>

          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded transition">
            Cetak Laporan
          </button>
        </div>
      </div>
    </div>
  );
};

export default CetakLaporan;
