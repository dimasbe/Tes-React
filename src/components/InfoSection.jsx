import React from "react";

export default function InfoSection() {
  return (
    <section id="info" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-blue-800 text-center mb-10">
          Persyaratan & Jadwal Seleksi
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Persyaratan Umum */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <h4 className="text-xl font-semibold text-blue-700 mb-4">
              📋 Persyaratan Umum
            </h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Warga Negara Indonesia</li>
              <li>Usia minimal 18 tahun dan maksimal 35 tahun</li>
              <li>Tidak pernah terlibat kasus pidana</li>
              <li>Lulusan D3/S1 sesuai dengan formasi yang dilamar</li>
            </ul>
          </div>

          {/* Jadwal Penting */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <h4 className="text-xl font-semibold text-blue-700 mb-4">
              🗓️ Jadwal Seleksi 2025
            </h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Pendaftaran Online: 1 - 30 Agustus 2025</li>
              <li>Seleksi Administrasi: 1 - 10 September 2025</li>
              <li>Pengumuman Hasil Administrasi: 15 September 2025</li>
              <li>Pelaksanaan SKD & SKB: Oktober - November 2025</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
