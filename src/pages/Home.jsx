import React, { useState, useEffect } from "react";
import { Link, useLocation, useMatch } from 'react-router-dom';
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaShippingFast, FaTags, FaLeaf, FaHandsHelping } from "react-icons/fa";

// Import icons from lucide-react for the "Alur Memesan" section
import {
  UserPlus,
  LogIn,
  ShoppingCart,
  CheckCircle,
} from 'lucide-react';

// Pastikan path gambar sudah benar dan gambar ada di folder assets
import heroImage from "../assets/Hidroponik.jpeg";
import manfaat1 from "../assets/efisien-air.jpg";
import manfaat2 from "../assets/tanpa-tanah.jpg";
import manfaat3 from "../assets/cepat-panen.jpg";
import manfaat4 from "../assets/ramah-lingkungan.jpg";

// Konstanta untuk URL domain (direkomendasikan untuk diletakkan di file terpisah, misal: src/constants/index.js)
const BASE_URL = "https://www.yourdomain.com";
const SOCIAL_SHARE_IMAGE = `${BASE_URL}/social-share-image.jpg`; // Ganti dengan gambar relevan

// Data untuk bagian "Manfaat Hidroponik"
const manfaatData = [
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
const langkahData = [
  "Persiapan",
  "Perakitan",
  "Penanaman",
  "Perawatan",
  "Panen",
];

// Data untuk bagian "Prospek Bisnis Hidroponik"
const prospekData = [
  {
    title: "Pasar Konsumen yang Luas",
    desc: "Sayuran segar berkualitas tinggi sangat dibutuhkan oleh restoran, hotel, supermarket, serta rumah tangga yang semakin peduli kesehatan dan asal-usul makanan.",
  },
  {
    title: "Minim Risiko Cuaca",
    desc: "Tanaman hidroponik dapat tumbuh di lingkungan terkontrol seperti rumah kaca atau indoor, meminimalkan dampak buruk dari perubahan iklim yang tak terduga.",
  },
  {
    title: "Skalabilitas Usaha",
    desc: "Fleksibilitas hidroponik memungkinkan Anda memulai dari skala kecil rumahan hingga mengembangkan menjadi usaha komersial besar yang memasok berbagai daerah.",
  },
];

// Data for the "Alur Memesan" section
const steps = [
  {
    icon: <UserPlus className="w-10 h-10 text-green-600" />,
    title: 'Buat Akun',
    desc: 'Daftar sebagai pengguna untuk mulai memesan berbagai kebutuhan hidroponik.',
  },
  {
    icon: <LogIn className="w-10 h-10 text-green-600" />,
    title: 'Login',
    desc: 'Masuk ke akun kamu untuk mengakses fitur pembelian yang tersedia.',
  },
  {
    icon: <ShoppingCart className="w-10 h-10 text-green-600" />,
    title: 'Pilih & Pesan Produk',
    desc: 'Telusuri produk lalu tambahkan ke keranjang dan lakukan pemesanan.',
  },
  {
    icon: <CheckCircle className="w-10 h-10 text-green-600" />,
    title: 'Selesaikan Pemesanan',
    desc: 'Isi detail pengiriman dan konfirmasi pesanan, kami akan segera proses pesananmu!',
  },
];


// Komponen Skeleton untuk Manfaat
const ManfaatSkeleton = () => (
  <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 flex flex-col items-center text-center animate-pulse">
    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-3 sm:mb-4 rounded-full bg-gray-200"></div>
    <div className="h-6 bg-gray-200 rounded w-3/4 mb-1 sm:mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-full mb-1"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
);

// Komponen Skeleton untuk Alur
const LangkahSkeleton = () => (
  <div className="min-w-[60px] h-[60px] sm:min-w-[80px] sm:h-[80px] md:min-w-[120px] md:h-[120px] rounded-full bg-gray-300 flex flex-shrink-0 items-center justify-center text-center animate-pulse">
    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
  </div>
);

// Komponen Skeleton untuk Prospek Bisnis
const ProspekSkeleton = () => (
  <div className="bg-green-100 p-4 sm:p-6 rounded-2xl shadow animate-pulse">
    <div className="h-6 bg-gray-200 rounded w-4/5 mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-full mb-1"></div>
    <div className="h-4 bg-gray-200 rounded w-full"></div>
  </div>
);


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [manfaat, setManfaat] = useState([]);
  const [langkah, setLangkah] = useState([]);
  const [prospek, setProspek] = useState([]);

  useEffect(() => {
    // Simulasi pengambilan data dari API dengan delay
    const fetchData = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulasi delay 1.5 detik
      setManfaat(manfaatData);
      setLangkah(langkahData);
      setProspek(prospekData);
      setIsLoading(false);
    };

    fetchData();
  }, []); // [] agar hanya dijalankan sekali saat komponen mount

  return (
    <>
      {/* Helmet untuk mengelola metadata SEO */}
      <Helmet>
        <title>GreenGrow - Belajar & Beli Alat Hidroponik Modern untuk Pemula</title>
        <meta
          name="description"
          content="Temukan panduan lengkap, tips praktis, dan produk hidroponik berkualitas tinggi di GreenGrow. Mulai bertani tanpa tanah, lebih efisien, dan ramah lingkungan sekarang!"
        />
        <link rel="canonical" href={BASE_URL + "/"} />
        <meta property="og:title" content="GreenGrow - Pertanian Modern Tanpa Tanah" />
        <meta property="og:description" content="Platform edukasi dan penjualan produk hidroponik terdepan untuk gaya hidup hijau dan hasil panen melimpah." />
        <meta property="og:image" content={SOCIAL_SHARE_IMAGE} />
        <meta property="og:url" content={BASE_URL + "/"} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GreenGrow - Bertani Tanpa Batas" />
        <meta name="twitter:description" content="Mulai revolusi pertanian Anda dengan panduan dan alat hidroponik lengkap dari GreenGrow." />
        <meta name="twitter:image" content={SOCIAL_SHARE_IMAGE} />
      </Helmet>

      <div className="pt-16 bg-gray-100">
        {/* Hero Section */}
        <div className="relative h-[60vh] sm:h-screen overflow-hidden">
          <img
            src={heroImage}
            alt="Ilustrasi sistem hidroponik modern dengan berbagai tanaman hijau segar dan pencahayaan alami"
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay gelap untuk membuat teks lebih terlihat */}
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center">
            <motion.h1
              className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg px-2"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Solusi Cerdas untuk Hidroponik Masa Kini
            </motion.h1>
            <motion.p
              className="text-sm sm:text-lg max-w-2xl leading-relaxed drop-shadow-md px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              "Kami menjual berbagai perlengkapan hidroponik, mulai dari alat, bibit, hingga sayuran segar hasil panen. Tak hanya itu, Anda juga bisa mendapatkan tips menanam langsung dari kami - semua tersedia di platform GreenGrow."
            </motion.p>

            {/* New Buttons for Hero Section */}
            {/* INI BAGIAN YANG SAYA UBAH */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"> {/* Kembali ke flex-col di mobile, flex-row di sm ke atas */}
              <Link to="/produk">
                <motion.button
                  className="bg-green-800 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 w-full sm:w-auto min-w-[200px] text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                >
                  Lihat Produk
                </motion.button>
              </Link>
              <Link to="/kontak">
                <motion.button
                  className="bg-transparent text-white border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75 w-full sm:w-auto min-w-[200px] text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.7, duration: 0.5 }}
                >
                  Kontak Sekarang
                </motion.button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bagian Perkenalan & Informasi Singkat */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-16 lg:px-24 max-w-6xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-700 mb-4 sm:mb-6">
            Apa Itu Hidroponik?
          </h2>

          {isLoading ? (
            <div className="space-y-2 animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto"></div>
            </div>
          ) : (
            <>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify indent-8">
                Hidroponik adalah metode bercocok tanam tanpa menggunakan tanah, melainkan memanfaatkan air yang kaya akan nutrisi.
                Sistem ini memungkinkan tanaman tumbuh lebih cepat, sehat, dan higienis karena lingkungan tumbuh yang terkontrol.
                Hidroponik menjadi solusi pertanian modern yang efisien, ramah lingkungan, dan cocok diaplikasikan di lahan terbatas
                seperti rumah perkotaan atau indoor garden.
              </p>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify indent-8 mt-4">
                Di sinilah GreenGrow hadir sebagai solusi lengkap untuk Anda yang ingin memulai atau mengembangkan kebun hidroponik sendiri.
                Kami menyediakan berbagai alat, bibit unggul, hingga hasil panen sayuran hidroponik yang segar dan sehat. Tidak hanya itu,
                kami juga berbagi tips, panduan, dan inspirasi seputar hidroponik melalui blog kami — semua dalam satu platform yang praktis.
                Dengan GreenGrow, bertanam hidroponik jadi lebih mudah, menyenangkan, dan produktif. Mari mulai gaya hidup sehat dan ramah lingkungan bersama kami!
              </p>
            </>
          )}
        </section>

        {/* Mengapa Memilih GreenGrow? */}
        <section className="py-12 sm:py-16 px-4 bg-green-50">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-green-700 mb-8 sm:mb-12">
            Mengapa Memilih GreenGrow?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <FaShippingFast size={32} className="text-green-600 mx-auto mb-3" />,
                title: "Pengiriman Cepat",
                desc: "Pesanan Anda akan diproses dan dikirim dengan cepat ke seluruh Indonesia, sehingga produk sampai dalam kondisi terbaik dan siap pakai.",
              },
              {
                icon: <FaTags size={32} className="text-green-600 mx-auto mb-3" />,
                title: "Harga Terjangkau",
                desc: "Kami memberikan harga kompetitif tanpa mengorbankan kualitas, cocok untuk pemula maupun pelaku usaha hidroponik skala besar.",
              },
              {
                icon: <FaHandsHelping size={32} className="text-green-600 mx-auto mb-3" />,
                title: "Konsultasi & Panduan",
                desc: "Dapatkan bimbingan langsung, tips menanam, dan panduan lengkap untuk membantu Anda sukses dalam bercocok tanam hidroponik.",
              },
              {
                icon: <FaLeaf size={32} className="text-green-600 mx-auto mb-3" />,
                title: "Produk Berkualitas",
                desc: "GreenGrow hanya menyediakan produk pilihan mulai dari benih, alat tanam, hingga hasil panen yang sehat dan segar.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 text-center"
              >
                {item.icon}
                <h3 className="text-lg font-semibold text-green-700 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700 text-justify">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Manfaat Hidroponik */}
        <section className="max-w-6xl mx-auto py-12 sm:py-16 px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-700 text-center mb-8 sm:mb-12">
            Manfaat Utama Berkebun Hidroponik yang Perlu Anda Tahu
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {isLoading
              ? Array.from({ length: 4 }).map((_, idx) => <ManfaatSkeleton key={idx} />)
              : manfaat.map((item, index) => (
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
                  <p className="text-xs sm:text-sm text-gray-600 text-justify">{item.desc}</p>
                </motion.div>
              ))}
          </div>
        </section>

        {/* Alur Memesan Produk di GreenGrow */}
        <section className="py-12 bg-white px-4 sm:px-6 md:px-12 lg:px-20" id="alur-pesan">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-green-700 text-center mb-8 sm:mb-12"
          >
            Alur Memesan Produk di GreenGrow
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2 + index * 0.2 }}
                className="bg-green-50 p-6 rounded-full border-2 border-green-200 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <div className="mb-3 flex justify-center">{step.icon}</div>
                <h3 className="text-lg font-semibold text-green-700 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}