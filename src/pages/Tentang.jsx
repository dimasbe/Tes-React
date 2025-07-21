import React from 'react';
import tentangImg from '../assets/tentang.jpg';
import founderImage from '../assets/founder.jpeg';

// Pastikan gambar-gambar ini memiliki aspek rasio yang baik untuk object-cover
import visionIcon from '../assets/vision.png';
import missionIcon from '../assets/mission.jpg';
import whyChooseUsIcon from '../assets/choose.jpeg';

const Tentang = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto font-poppins text-gray-800">
      {/* Hero Section Halaman Tentang - Modern & Clean */}
      <div className="relative bg-gradient-to-r from-green-600 to-green-800 rounded-3xl overflow-hidden shadow-xl mb-12">
        <img
          src={tentangImg}
          alt="Ilustrasi Hidroponik Modern"
          // MENGGANTI: opacity-60 mix-blend-multiply
          className="w-full h-80 object-cover brightness-50 rounded-3xl" // FOTO LEBIH GELAP, TEKS LEBIH JELAS
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">Tentang HidroponikKu</h1>
          <p className="text-lg md:text-xl max-w-3xl leading-relaxed opacity-90">
            Platform kami hadir sebagai jembatan bagi Anda untuk memasuki dunia pertanian modern yang inovatif, berkelanjutan, dan ramah lingkungan.
            Kami memadukan semangat teknologi dengan kecintaan pada alam untuk menciptakan solusi hidroponik yang mudah diakses dan bermanfaat bagi semua.
          </p>
        </div>
      </div>

      {/* Bagian Perkenalan - Lebih Detail */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold mb-6 text-green-700 text-center">Mengenal HidroponikKu Lebih Dekat</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
          Di era modern ini, keterbatasan lahan dan isu lingkungan semakin mendesak kita untuk mencari solusi pertanian yang lebih cerdas.
          **HidroponikKu** hadir sebagai jawaban, sebuah inisiatif yang didedikasikan untuk menyebarkan praktik hidroponik,
          teknik bercocok tanam tanpa tanah yang menjanjikan efisiensi air, pertumbuhan lebih cepat, dan hasil yang lebih bersih.
          Kami tidak hanya menyediakan produk berkualitas, tetapi juga berupaya membangun komunitas yang teredukasi dan peduli lingkungan.
        </p>
      </section>

      {/* Bagian Sejarah Hidroponik - Dengan Detail Tambahan */}
      <section className="py-12 px-4 bg-green-50 rounded-2xl shadow-sm mb-12">
        <h3 className="text-2xl font-bold mb-6 text-green-700 text-center">Kilasan Sejarah Hidroponik</h3>
        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
          Konsep bercocok tanam tanpa tanah sebenarnya sudah ada sejak zaman kuno, contohnya Taman Gantung Babilonia.
          Namun, teknik modern yang kita kenal sebagai hidroponik mulai dikembangkan secara ilmiah pada awal abad ke-20.
          Kata **"hidroponik"** sendiri diperkenalkan oleh Dr. W.F. Gericke dari University of California pada tahun 1937,
          yang berasal dari bahasa Yunani: "hydro" berarti air, dan "ponos" berarti kerja.
          Dari sekadar eksperimen ilmiah, kini hidroponik telah bertransformasi menjadi solusi pertanian yang vital,
          terutama di area perkotaan dengan lahan terbatas, menjanjikan produksi pangan yang stabil dan berkelanjutan.
        </p>
      </section>

      {/* Bagian Visi Kami (Zig-Zag Item 1) - Tampilan Modern & Gambar Bulat/Sudut Lembut */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-12 mb-16 px-4">
        <div className="md:order-1 order-2 text-center md:text-left">
          <h3 className="text-3xl font-bold text-green-700 mb-4">Visi Kami</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Menjadi pionir utama dan platform terdepan di Indonesia dalam industri hidroponik,
            secara aktif memberdayakan individu dan komunitas melalui penyediaan edukasi komprehensif,
            akses terhadap teknologi hijau terkini, serta mempromosikan praktik pertanian yang berkelanjutan dan inovatif.
            Kami bercita-cita untuk menciptakan masa depan pangan yang lebih aman dan mandiri.
          </p>
        </div>
        <div className="md:order-2 order-1 flex justify-center md:justify-end">
          <img
            src={visionIcon}
            alt="Visi Icon"
            className="w-64 h-64 object-cover rounded-3xl shadow-lg border-4 border-green-200"
          />
        </div>
      </section>

      {/* Bagian Misi Kami (Zig-Zag Item 2) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16 px-4">
        <div className="md:order-2 order-2 text-center md:text-left">
          <h3 className="text-3xl font-bold text-green-700 mb-4">Misi Kami</h3>
          <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed text-left max-w-xl md:ml-auto md:pr-4">
            <li>Menyediakan **informasi dan tutorial hidroponik** yang akurat, praktis, dan mudah diakses oleh semua kalangan, dari pemula hingga ahli.</li>
            <li>Menawarkan **rangkaian lengkap alat dan bahan hidroponik** berkualitas premium, yang bersumber secara etis dan terjangkau, untuk mendukung keberhasilan setiap proyek.</li>
            <li>Menginspirasi dan mendorong adopsi **gaya hidup sehat dan ramah lingkungan** melalui praktik *urban farming* di rumah dan komunitas.</li>
            <li>Membangun **komunitas hidroponik** yang solid dan suportif, menjadi wadah berbagi pengetahuan dan pengalaman.</li>
          </ul>
        </div>
        <div className="md:order-1 order-1 flex justify-center md:justify-start">
          <img
            src={missionIcon}
            alt="Misi Icon"
            className="w-64 h-64 object-cover rounded-3xl shadow-lg border-4 border-green-200"
          />
        </div>
      </section>

      {/* Bagian Kenapa Memilih Kami? (Zig-Zag Item 3) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16 px-4">
        <div className="md:order-1 order-2 text-center md:text-left">
          <h3 className="text-3xl font-bold text-green-700 mb-4">Mengapa Memilih HidroponikKu?</h3>
          <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed text-left max-w-xl md:mr-auto md:pl-4">
            <li>**Edukasi Holistik:** Kami menyediakan panduan dan sumber daya yang terperinci untuk memastikan Anda sukses dalam setiap langkah.</li>
            <li>**Kualitas Terjamin:** Setiap produk yang kami tawarkan telah melalui seleksi ketat untuk memastikan standar kualitas tertinggi.</li>
            <li>**Layanan Pelanggan Responsif:** Tim kami siap membantu dengan cepat dan ramah untuk setiap pertanyaan atau kendala Anda.</li>
            <li>**Komitmen Lingkungan:** Kami bukan hanya bisnis, tetapi bagian dari gerakan menuju pertanian yang lebih hijau dan berkelanjutan.</li>
          </ul>
        </div>
        <div className="md:order-2 order-1 flex justify-center md:justify-end">
          <img
            src={whyChooseUsIcon}
            alt="Why Choose Us Icon"
            className="w-64 h-64 object-cover rounded-3xl shadow-lg border-4 border-green-200"
          />
        </div>
      </section>

      ---

      {/* Bagian Pendiri HidroponikKu - Tampilan Lebih Elegan */}
      <section className="mt-16 py-12 bg-green-100 rounded-3xl shadow-xl px-6">
        <h3 className="text-3xl font-bold mb-10 text-green-800 text-center">Tim di Balik HidroponikKu</h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="text-center">
            <img
              src={founderImage}
              alt="Foto Pendiri"
              className="w-48 h-48 object-cover rounded-full border-6 border-green-500 shadow-xl mb-6 mx-auto"
            />
            <h4 className="text-2xl font-bold text-green-700 mb-2">Ahmad Sulaiman</h4>
            <p className="text-lg text-gray-600 italic mb-4">Founder & Chief Visionary Officer</p>
            <p className="text-gray-700 max-w-xl mx-auto leading-relaxed">
              **Ahmad Sulaiman** adalah otak dan hati di balik **HidroponikKu**. Dengan latar belakang yang kuat dalam agribisnis
              dan kecintaan mendalam terhadap teknologi ramah lingkungan, Ahmad memimpikan sebuah dunia di mana
              setiap orang bisa menanam makanannya sendiri, bahkan di tengah keterbatasan lahan perkotaan.
              Visinya yang inovatif dan dedikasinya yang tak kenal lelah telah membentuk HidroponikKu menjadi
              platform yang berharga bagi ribuan petani urban di seluruh Indonesia.
            </p>
          </div>
          {/* Anda bisa menambahkan lebih banyak profil tim di sini jika ada */}
        </div>
      </section>

      <div className="mt-12 text-center text-md text-gray-600 italic">
        Mari wujudkan masa depan pertanian yang lebih hijau dan mandiri bersama HidroponikKu 🌱
      </div>
    </div>
  );
};

export default Tentang;