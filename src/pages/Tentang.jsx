import React from 'react'
import tentangImg from '../assets/tentang.jpg' // pastikan path ini sesuai

const Tentang = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Gambar ilustrasi */}
      <img
        src={tentangImg}
        alt="Ilustrasi Hidroponik"
        className="w-full h-64 object-cover rounded-xl shadow mb-6"
      />

      <h2 className="text-3xl font-bold mb-4 text-green-700">Tentang Kami</h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        <strong>HidroponikKu</strong> adalah platform edukasi dan penjualan produk hidroponik.
        Kami hadir untuk mempermudah siapa saja dalam memulai bercocok tanam secara modern, efisien, dan ramah lingkungan.
        Kami percaya bahwa masa depan pertanian ada di tangan teknologi dan inovasi.
      </p>

      <h3 className="text-xl font-semibold mt-6 text-green-600">Sejarah Hidroponik</h3>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Teknik bercocok tanam tanpa tanah ini pertama kali dikembangkan oleh ilmuwan pada awal abad ke-20.
        Kata "hidroponik" berasal dari bahasa Yunani, yaitu "hydro" (air) dan "ponos" (kerja).
        Kini, hidroponik menjadi solusi pertanian modern di lahan sempit dan kota-kota besar.
      </p>

      <h3 className="text-xl font-semibold mt-6 text-green-600">Visi Kami</h3>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Menjadi platform hidroponik terdepan di Indonesia yang memberdayakan masyarakat melalui edukasi dan teknologi hijau.
      </p>

      <h3 className="text-xl font-semibold mt-6 text-green-600">Misi Kami</h3>
      <ul className="list-disc list-inside text-gray-700 mb-4 leading-relaxed">
        <li>Menyediakan informasi dan tutorial seputar hidroponik yang mudah dipahami.</li>
        <li>Menjual alat dan bahan hidroponik berkualitas tinggi dengan harga terjangkau.</li>
        <li>Mendorong gaya hidup sehat dan ramah lingkungan melalui urban farming.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 text-green-600">Kenapa Memilih Kami?</h3>
      <ul className="list-disc list-inside text-gray-700 mb-4 leading-relaxed">
        <li>Dukungan edukasi lengkap untuk pemula maupun lanjutan.</li>
        <li>Produk berkualitas dan layanan pelanggan ramah.</li>
        <li>Berkomitmen pada pertanian berkelanjutan dan lingkungan hijau.</li>
      </ul>

      <div className="mt-8 text-center text-sm text-gray-500 italic">
        Mari wujudkan masa depan pertanian yang lebih hijau bersama HidroponikKu 🌱
      </div>
    </div>
  )
}

export default Tentang
