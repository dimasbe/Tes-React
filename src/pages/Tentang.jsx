import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { Helmet } from 'react-helmet-async';

import tentangImg from '../assets/tentang.jpg';
import founderImage from '../assets/founder.jpeg';

import visionIcon from '../assets/vision.png';
import missionIcon from '../assets/mission.jpg';
import whyChooseUsIcon from '../assets/choose.jpeg';

// --- Skeleton Components ---

const HeroSkeleton = () => (
  <div className="relative bg-gray-300 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl mb-8 sm:mb-12 h-80 sm:h-80 animate-pulse flex items-center justify-center">
    <div className="h-10 bg-gray-200 w-3/4 rounded mb-4"></div>
  </div>
);

const TextBlockSkeleton = () => (
  <div className="space-y-3 px-4 py-8 sm:py-12 bg-gray-100 rounded-2xl shadow-sm mb-8 sm:mb-12 animate-pulse">
    <div className="h-8 bg-gray-300 rounded w-1/2 mx-auto mb-4"></div>
    <div className="h-4 bg-gray-200 rounded w-full"></div>
    <div className="h-4 bg-gray-200 rounded w-11/12"></div>
    <div className="h-4 bg-gray-200 rounded w-full"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto"></div>
  </div>
);

const ZigzagSkeleton = ({ reverse }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center mt-8 sm:mt-12 mb-12 sm:mb-16 px-4 animate-pulse">
    <div className={`text-center ${reverse ? 'md:order-2' : 'md:order-1'} order-2`}>
      <div className="h-8 bg-gray-300 rounded w-1/3 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-full"></div>
    </div>
    <div className={`flex justify-center ${reverse ? 'md:justify-start' : 'md:justify-end'} ${reverse ? 'md:order-1' : 'md:order-2'} order-1`}>
      <div className="w-64 h-64 sm:w-64 sm:h-64 bg-gray-300 rounded-2xl md:rounded-3xl shadow-lg"></div>
    </div>
  </div>
);

const FounderSkeleton = () => (
  <section className="mt-8 sm:mt-16 py-8 sm:py-12 bg-gray-100 rounded-2xl md:rounded-3xl shadow-xl px-4 sm:px-6 animate-pulse">
    <div className="h-8 bg-gray-300 rounded w-1/2 mx-auto mb-10"></div>
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-10">
      <div className="text-center">
        <div className="w-56 h-56 sm:w-48 sm:h-48 bg-gray-300 rounded-full mx-auto mb-4 sm:mb-6"></div>
        <div className="h-6 bg-gray-200 rounded w-1/3 mx-auto mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-1"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
    </div>
  </section>
);


const Tentang = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate 2 seconds loading time

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <>
      {/* Helmet for SEO Metadata */}
      <Helmet>
        <title>Tentang Kami - HidroponikKu | Visi, Misi, Sejarah</title>
        <meta
          name="description"
          content="Pelajari lebih lanjut tentang HidroponikKu, visi, misi, dan komitmen kami dalam memajukan pertanian hidroponik modern dan berkelanjutan di Indonesia."
        />
        <link rel="canonical" href="https://www.yourdomain.com/tentang" />
        <meta property="og:title" content="Tentang Kami - HidroponikKu: Pertanian Modern & Berkelanjutan" />
        <meta property="og:description" content="Ketahui lebih dalam tentang semangat HidroponikKu dalam berinovasi dan berkontribusi untuk masa depan pangan yang lebih baik." />
        <meta property="og:image" content="https://www.yourdomain.com/assets/tentang.jpg" />
        <meta property="og:url" content="https://www.yourdomain.com/tentang" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tentang HidroponikKu - Membangun Masa Depan Pertanian" />
        <meta name="twitter:description" content="HidroponikKu adalah platform yang berdedikasi untuk edukasi dan penyediaan solusi hidroponik terbaik." />
        <meta name="twitter:image" content="https://www.yourdomain.com/assets/tentang.jpg" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "Tentang HidroponikKu",
              "description": "Platform edukasi, produk, dan komunitas hidroponik modern di Indonesia.",
              "url": "https://www.yourdomain.com/tentang",
              "image": "https://www.yourdomain.com/assets/tentang.jpg",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.yourdomain.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </script>
      </Helmet>

      <div className="pt-16 bg-gray-100">
        <div className="p-4 sm:p-6 max-w-6xl mx-auto font-poppins text-gray-800">
          {/* Hero Section */}
          {isLoading ? <HeroSkeleton /> : (
            <div className="relative bg-gradient-to-r from-green-600 to-green-800 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl mb-8 sm:mb-12">
              <img
                src={tentangImg}
                alt="Ilustrasi Hidroponik Modern"
                className="w-full h-80 sm:h-80 object-cover brightness-50 rounded-2xl md:rounded-3xl"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 sm:p-8 text-center">
                <h1 className="text-3xl md:text-5xl font-extrabold mb-2 sm:mb-4 drop-shadow-lg">Tentang HidroponikKu</h1>
                <p className="text-base md:text-xl max-w-3xl leading-relaxed opacity-90 text-justify">
                  Platform kami hadir sebagai jembatan bagi Anda untuk memasuki dunia pertanian modern yang inovatif, berkelanjutan, dan ramah lingkungan.
                  Kami memadukan semangat teknologi dengan kecintaan pada alam untuk menciptakan solusi hidroponik yang mudah diakses dan bermanfaat bagi semua.
                </p>
              </div>
            </div>
          )}

          {/* Bagian Perkenalan - Lebih Detail */}
          {isLoading ? <TextBlockSkeleton /> : (
            <section className="pt-0 pb-4 sm:pt-0 sm:pb-6 px-4">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-green-700 text-center">Mengenal HidroponikKu Lebih Dekat</h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto text-justify">
                Di era modern ini, keterbatasan lahan dan isu lingkungan semakin mendesak kita untuk mencari solusi pertanian yang lebih cerdas.
                HidroponikKu hadir sebagai jawaban, sebuah inisiatif yang didedikasikan untuk menyebarkan praktik hidroponik,
                teknik bercocok tanam tanpa tanah yang menjanjikan efisiensi air, pertumbuhan lebih cepat, dan hasil yang lebih bersih.
                Kami tidak hanya menyediakan produk berkualitas, tetapi juga berupaya membangun komunitas yang teredukasi dan peduli lingkungan.
              </p>
            </section>
          )}

          {/* Bagian Sejarah Hidroponik - Dengan Detail Tambahan */}
          {isLoading ? <TextBlockSkeleton /> : (
            <section className="py-8 sm:py-12 px-4 bg-green-50 rounded-2xl shadow-sm mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-green-700 text-center">Kilasan Sejarah Hidroponik</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto text-justify">
                Konsep bercocok tanam tanpa tanah sebenarnya sudah ada sejak zaman kuno, contohnya Taman Gantung Babilonia.
                Namun, teknik modern yang kita kenal sebagai hidroponik mulai dikembangkan secara ilmiah pada awal abad ke-20.
                Kata "hidroponik" sendiri diperkenalkan oleh Dr. W.F. Gericke dari University of California pada tahun 1937,
                yang berasal dari bahasa Yunani: "hydro" berarti air, dan "ponos" berarti kerja.
                Dari sekadar eksperimen ilmiah, kini hidroponik telah bertransformasi menjadi solusi pertanian yang vital,
                terutama di area perkotaan dengan lahan terbatas, menjanjikan produksi pangan yang stabil dan berkelanjutan.
              </p>
            </section>
          )}

          {/* Bagian Visi Kami (Zig-Zag Item 1) */}
          {isLoading ? <ZigzagSkeleton /> : (
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center mt-8 sm:mt-12 mb-12 sm:mb-16 px-4">
              <div className="md:order-1 order-2 text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-green-700 mb-3 sm:mb-4">Visi Kami</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify">
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
                  className="w-64 h-64 sm:w-64 sm:h-64 object-cover rounded-2xl md:rounded-3xl shadow-lg border-4 border-green-200"
                />
              </div>
            </section>
          )}

          {/* Bagian Misi Kami (Zig-Zag Item 2) */}
          {isLoading ? <ZigzagSkeleton reverse={true} /> : (
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center mb-12 sm:mb-16 px-4">
              <div className="md:order-2 order-2 text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-green-700 mb-3 sm:mb-4">Misi Kami</h3>
                <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 leading-relaxed text-left max-w-xl md:ml-auto md:pr-4 text-justify">
                  <li>Menyediakan informasi dan tutorial hidroponik yang akurat, praktis, dan mudah diakses oleh semua kalangan, dari pemula hingga ahli.</li>
                  <li>Menawarkan rangkaian lengkap alat dan bahan hidroponik berkualitas premium, yang bersumber secara etis dan terjangkau, untuk mendukung keberhasilan setiap proyek.</li>
                  <li>Menginspirasi dan mendorong adopsi gaya hidup sehat dan ramah lingkungan melalui praktik urban farming di rumah dan komunitas.</li>
                  <li>Membangun komunitas hidroponik yang solid dan suportif, menjadi wadah berbagi pengetahuan dan pengalaman.</li>
                </ul>
              </div>
              <div className="md:order-1 order-1 flex justify-center md:justify-start">
                <img
                  src={missionIcon}
                  alt="Misi Icon"
                  className="w-64 h-64 sm:w-64 sm:h-64 object-cover rounded-2xl md:rounded-3xl shadow-lg border-4 border-green-200"
                />
              </div>
            </section>
          )}

          {/* Bagian Kenapa Memilih Kami? (Zig-Zag Item 3) */}
          {isLoading ? <ZigzagSkeleton /> : (
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center mb-12 sm:mb-16 px-4">
              <div className="md:order-1 order-2 text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-green-700 mb-3 sm:mb-4">Mengapa Memilih HidroponikKu?</h3>
                <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 leading-relaxed text-left max-w-xl md:mr-auto md:pl-4 text-justify">
                  <li>Edukasi Holistik: Kami menyediakan panduan dan sumber daya yang terperinci untuk memastikan Anda sukses dalam setiap langkah.</li>
                  <li>Kualitas Terjamin: Setiap produk yang kami tawarkan telah melalui seleksi ketat untuk memastikan standar kualitas tertinggi.</li>
                  <li>Layanan Pelanggan Responsif: Tim kami siap membantu dengan cepat dan ramah untuk setiap pertanyaan atau kendala Anda.</li>
                  <li>Komitmen Lingkungan: Kami bukan hanya bisnis, tetapi bagian dari gerakan menuju pertanian yang lebih hijau dan berkelanjutan.</li>
                </ul>
              </div>
              <div className="md:order-2 order-1 flex justify-center md:justify-end">
                <img
                  src={whyChooseUsIcon}
                  alt="Why Choose Us Icon"
                  className="w-64 h-64 sm:w-64 sm:h-64 object-cover rounded-2xl md:rounded-3xl shadow-lg border-4 border-green-200"
                />
              </div>
            </section>
          )}

          {/* Garis pemisah, jika diperlukan atau bisa dihapus */}
          {isLoading ? null : <hr className="border-t-2 border-green-200 my-10 sm:my-12" />}

          {/* Bagian Pendiri HidroponikKu - Tampilan Lebih Elegan */}
          {isLoading ? <FounderSkeleton /> : (
            <section className="mt-8 sm:mt-16 py-8 sm:py-12 bg-green-100 rounded-2xl md:rounded-3xl shadow-xl px-4 sm:px-6">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 text-green-800 text-center">Tim di Balik HidroponikKu</h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-10">
                <div className="text-center">
                  <img
                    src={founderImage}
                    alt="Foto Pendiri Ahmad Sulaiman"
                    className="w-56 h-56 sm:w-48 sm:h-48 object-cover rounded-full border-4 sm:border-6 border-green-500 shadow-xl mb-4 sm:mb-6 mx-auto"
                  />
                  <h4 className="text-xl sm:text-2xl font-bold text-green-700 mb-1 sm:mb-2">Ahmad Sulaiman</h4>
                  <p className="text-base sm:text-lg text-gray-600 italic mb-3 sm:mb-4">Founder & Chief Visionary Officer</p>
                  <p className="text-sm sm:text-base text-gray-700 max-w-xl mx-auto leading-relaxed text-justify">
                    Ahmad Sulaiman adalah otak dan hati di balik HidroponikKu. Dengan latar belakang yang kuat dalam agribisnis
                    dan kecintaan mendalam terhadap teknologi ramah lingkungan, Ahmad memimpikan sebuah dunia di mana
                    setiap orang bisa menanam makanannya sendiri, bahkan di tengah keterbatasan lahan perkotaan.
                    Visinya yang inovatif dan dedikasinya yang tak kenal lelah telah membentuk HidroponikKu menjadi
                    platform yang berharga bagi ribuan petani urban di seluruh Indonesia.
                  </p>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default Tentang;