import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

// Pastikan path gambar sudah benar dan gambar ada di folder assets
import heroImage from "../assets/Hidroponik.jpeg";
import manfaat1 from "../assets/efisien-air.jpg";
import manfaat2 from "../assets/tanpa-tanah.jpg";
import manfaat3 from "../assets/cepat-panen.jpg";
import manfaat4 from "../assets/ramah-lingkungan.jpg";

// Data untuk bagian "Manfaat Hidroponik"
const manfaat = [
  {
    img: manfaat1,
    title: "Efisien Air",
    alt: "Ilustrasi tetesan air pada tanaman hidroponik, menunjukkan efisiensi air yang tinggi",
    desc: "Menggunakan hingga 90% lebih sedikit air dibandingkan dengan bertani konvensional, sehingga bisa menghemat sumber daya alam berharga untuk generasi masa depan.",
  },
  {
    img: manfaat2,
    title: "Tanpa Tanah",
    alt: "Ilustrasi tanaman tumbuh di air tanpa media tanah, cocok untuk lahan terbatas",
    desc: "Tidak memerlukan lahan luas atau media tanah, sehingga sangat cocok untuk pertanian perkotaan dan area dengan ruang terbatas.",
  },
  {
    img: manfaat3,
    title: "Pertumbuhan Cepat",
    alt: "Ilustrasi tanaman hijau tumbuh dengan pesat di sistem hidroponik",
    desc: "Tanaman tumbuh lebih cepat karena nutrisi langsung diserap akar tanpa hambatan tanah, mempercepat siklus panen dan hasil.",
  },
  {
    img: manfaat4,
    title: "Ramah Lingkungan",
    alt: "Ilustrasi tangan merawat tanaman hidroponik yang bersih dan bebas pestisida",
    desc: "Meminimalkan penggunaan pestisida dan lebih bersih dari kontaminan tanah, ideal untuk lingkungan rumah dan konsumsi yang lebih sehat.",
  },
];

// Data untuk bagian "Alur Membuat Hidroponik"
const langkah = [
  "Persiapan",
  "Perakitan",
  "Penanaman",
  "Perawatan",
  "Panen",
];

export default function Home() {
  return (
    <>
      {/* Helmet untuk mengelola metadata SEO di bagian <head> dari dokumen HTML.
          Ini penting untuk judul halaman, deskripsi, dan tampilan di media sosial.
          Pastikan untuk mengganti placeholder URL (https://www.yourdomain.com/) dengan domain Anda yang sebenarnya. */}
      <Helmet>
        <title>HidroponikKu - Belajar & Beli Alat Hidroponik Modern untuk Pemula</title>
        <meta
          name="description"
          content="Temukan panduan lengkap, tips praktis, dan produk hidroponik berkualitas tinggi di HidroponikKu. Mulai bertani tanpa tanah, lebih efisien, dan ramah lingkungan sekarang!"
        />
        <link rel="canonical" href="https://www.yourdomain.com/" />{" "}
        {/* Ganti dengan URL domain Anda */}
        {/* Meta tag Open Graph (untuk Facebook, LinkedIn, dll.) */}
        <meta property="og:title" content="HidroponikKu - Pertanian Modern Tanpa Tanah" />
        <meta property="og:description" content="Platform edukasi dan penjualan produk hidroponik terdepan untuk gaya hidup hijau dan hasil panen melimpah." />
        <meta property="og:image" content="https://www.yourdomain.com/social-share-image.jpg" />{" "}
        {/* Ganti dengan URL gambar yang relevan untuk thumbnail sosial media */}
        <meta property="og:url" content="https://www.yourdomain.com/" />
        <meta property="og:type" content="website" />
        {/* Meta tag Twitter Card (untuk Twitter) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HidroponikKu - Bertani Tanpa Batas" />
        <meta name="twitter:description" content="Mulai revolusi pertanian Anda dengan panduan dan alat hidroponik lengkap dari HidroponikKu." />
        <meta name="twitter:image" content="https://www.yourdomain.com/social-share-image.jpg" />
      </Helmet>

      {/* Hero Section: Bagian paling atas halaman, memperkenalkan website */}
      {/* Tinggi disesuaikan: h-[80vh] untuk mobile, h-screen untuk tablet/desktop */}
      <div className="relative h-[45vh] sm:h-screen overflow-hidden">
        <img
          src={heroImage}
          alt="Ilustrasi sistem hidroponik modern dengan berbagai tanaman hijau segar dan pencahayaan alami"
          className="w-full h-full object-cover object-top brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center">
          <motion.h1
            className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg px-2"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Selamat Datang di Dunia Hidroponik Modern
          </motion.h1>
          <motion.p
            className="text-sm sm:text-lg max-w-2xl leading-relaxed drop-shadow-md px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Temukan cara modern bertani tanpa tanah, lebih efisien, dan ramah lingkungan
            bersama "HidroponikKu", platform lengkap untuk semua kebutuhan hidroponik Anda.
          </motion.p>
        </div>
      </div>

      {/* Bagian Perkenalan & Informasi Singkat: Memberikan gambaran singkat tentang hidroponik */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-16 lg:px-24 max-w-6xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-700 mb-4 sm:mb-6">
          Mengapa Hidroponik adalah Masa Depan Pertanian Kita?
        </h2>
        {/* Ditambahkan: text-justify */}
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
          Hidroponik bukan hanya sekadar metode bertani, melainkan sebuah inovasi yang
          menjawab tantangan pangan modern seperti keterbatasan lahan dan kebutuhan akan
          produksi yang berkelanjutan. Dengan sistem ini, Anda bisa menanam di mana saja,
          kapan saja, dan menghasilkan sayuran atau buah-buahan yang lebih segar,
          bersih, serta kaya nutrisi. Di **HidroponikKu**, kami berkomitmen untuk
          mempermudah Anda memulai perjalanan ini, dengan panduan yang jelas, alat
          berkualitas, dan komunitas yang mendukung.
        </p>
      </section>

      {/* Alur Membuat Hidroponik: Menjelaskan langkah-langkah dasar dengan visual */}
      <section className="py-12 sm:py-16 px-4 bg-green-50">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-green-700 mb-8 sm:mb-12">
          Alur Mudah Memulai Hidroponik Bersama HidroponikKu
        </h2>
        {/* Pastikan div ini memiliki kelas no-scrollbar, yang definisinya harus ada di CSS global Anda */}
        {/* Mengurangi padding horizontal di mobile (px-2) dan gap antar item (gap-2) */}
        <div className="flex justify-center items-center gap-2 sm:gap-4 overflow-x-auto px-2 sm:px-4 pb-4 no-scrollbar">
          {langkah.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                // Perkecil ukuran dasar di mobile (min-w, h, text size)
                className="min-w-[60px] h-[60px] text-[9px] sm:min-w-[80px] sm:h-[80px] sm:text-xs md:min-w-[120px] md:h-[120px] md:text-base rounded-full bg-green-600 text-white flex flex-shrink-0 items-center justify-center text-center font-semibold shadow-lg p-1 sm:p-3"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: index * 0.2 }}
              >
                {step}
              </motion.div>

              {/* Garis penghubung antar lingkaran, disembunyikan di layar sangat kecil dan muncul di sm ke atas */}
              {index < langkah.length - 1 && (
                <div className="w-4 sm:w-8 h-1 bg-green-500 hidden sm:block"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Manfaat Hidroponik: Menampilkan keuntungan-keuntungan hidroponik */}
      <section className="max-w-6xl mx-auto py-12 sm:py-16 px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-700 text-center mb-8 sm:mb-12">
          Manfaat Utama Bertanam Hidroponik yang Perlu Anda Tahu
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {manfaat.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={item.img}
                alt={item.alt}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-3 sm:mb-4 rounded-full object-cover border-2 border-green-500"
              />
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-green-700 mb-1 sm:mb-2">
                {item.title}
              </h3>
              {/* Ditambahkan: text-justify */}
              <p className="text-xs sm:text-sm text-gray-600 text-justify">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Prospek Bisnis Hidroponik: Menjelaskan potensi bisnisnya */}
      <section className="py-12 bg-white px-4 sm:px-6 md:px-12 lg:px-20" id="prospek">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-green-700 text-center mb-8 sm:mb-12"
        >
          Prospek Bisnis Hidroponik yang Sangat Menjanjikan
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2 }}
            className="bg-green-100 p-4 sm:p-6 rounded-2xl shadow hover:scale-105 transition"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-green-700 mb-2">Pasar Konsumen yang Luas</h3>
            {/* Ditambahkan: text-justify */}
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify">
              Sayuran segar berkualitas tinggi sangat dibutuhkan oleh restoran, hotel, supermarket,
              serta rumah tangga yang semakin peduli kesehatan dan asal-usul makanan.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4 }}
            className="bg-green-100 p-4 sm:p-6 rounded-2xl shadow hover:scale-105 transition"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-green-700 mb-2">Minim Risiko Cuaca</h3>
            {/* Ditambahkan: text-justify */}
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify">
              Tanaman hidroponik dapat tumbuh di lingkungan terkontrol seperti rumah kaca atau *indoor*,
              meminimalkan dampak buruk dari perubahan iklim yang tak terduga.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.6 }}
            className="bg-green-100 p-4 sm:p-6 rounded-2xl shadow hover:scale-105 transition"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-green-700 mb-2">Skalabilitas Usaha</h3>
            {/* Ditambahkan: text-justify */}
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify">
              Fleksibilitas hidroponik memungkinkan Anda memulai dari skala kecil rumahan
              hingga mengembangkan menjadi usaha komersial besar yang memasok berbagai daerah.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}