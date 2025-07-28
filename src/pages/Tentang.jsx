import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

// Pastikan path gambar sudah benar
import tentangImg from '../assets/tentang.jpg'; // Gambar untuk Hero Section
import founderImage from '../assets/founder.jpg'; // Gambar founder
import visionIcon from '../assets/visi.jpg'; // Icon untuk Visi
import missionIcon from '../assets/mission.jpg'; // Icon untuk Misi
import companyProfileIcon from '../assets/kantor.jpg'; // Mengganti whyChooseUsIcon menjadi Company Profile

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

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate 2 seconds loading time

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <>
      {/* Helmet for SEO Metadata */}
      <Helmet>
        <title>Tentang Kami - GreenGrow | Visi, Misi, Profil Perusahaan</title>
        <meta
          name="description"
          content="Pelajari lebih lanjut tentang GreenGrow di bawah naungan PT GreenGrow Indonesia. Temukan visi, misi, profil perusahaan, dan komitmen kami dalam memajukan pertanian hidroponik modern dan berkelanjutan."
        />
        <link rel="canonical" href="https://www.yourdomain.com/tentang" />
        <meta property="og:title" content="Tentang GreenGrow - PT GreenGrow Indonesia: Pertanian Modern & Berkelanjutan" />
        <meta property="og:description" content="Ketahui lebih dalam tentang semangat GreenGrow dalam berinovasi dan berkontribusi untuk masa depan pangan yang lebih baik melalui solusi hidroponik." />
        <meta property="og:image" content="https://www.yourdomain.com/assets/tentang.jpg" />
        <meta property="og:url" content="https://www.yourdomain.com/tentang" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tentang GreenGrow - Membangun Masa Depan Pertanian dengan Hidroponik" />
        <meta name="twitter:description" content="GreenGrow adalah platform edukasi dan penyedia solusi hidroponik terbaik di bawah naungan PT GreenGrow Indonesia." />
        <meta name="twitter:image" content="https://www.yourdomain.com/assets/tentang.jpg" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "Tentang GreenGrow",
              "description": "Platform edukasi, produk, dan komunitas hidroponik modern di Indonesia di bawah naungan PT GreenGrow Indonesia.",
              "url": "https://www.yourdomain.com/tentang",
              "image": "https://www.yourdomain.com/assets/tentang.jpg",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.yourdomain.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "publisher": {
                "@type": "Organization",
                "name": "PT GreenGrow Indonesia",
                "url": "https://www.yourdomain.com"
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
                alt="Ilustrasi pertanian hidroponik modern dengan berbagai sayuran hijau segar"
                className="w-full h-80 sm:h-80 object-cover brightness-50 rounded-2xl md:rounded-3xl"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 sm:p-8 text-center">
                <h1 className="text-3xl md:text-5xl font-extrabold mb-2 sm:mb-4 drop-shadow-lg">GreenGrow</h1>
                <p className="text-base md:text-xl max-w-3xl leading-relaxed opacity-90 text-justify">
                  GreenGrow hadir sebagai suatu platform penyedia layanan dalam sektor perkebunan modern yang inovatif, berkelanjutan, dan ramah lingkungan.
                  Kami memadukan semangat teknologi dengan kecintaan pada alam untuk menciptakan solusi hidroponik yang mudah diakses dan bermanfaat bagi semua.
                </p>
              </div>
            </div>
          )}

          {/* Bagian Perkenalan & Latar Belakang Perusahaan */}
          {isLoading ? <TextBlockSkeleton /> : (
            <section className="pt-0 pb-4 sm:pt-0 sm:pb-6 px-4">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-green-700 text-center">
                Mengenal GreenGrow Lebih Dekat
              </h2>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto text-justify indent-8">
                Di era modern ini, keterbatasan lahan dan isu lingkungan semakin mendesak kita untuk mencari solusi pertanian yang lebih
                cerdas dan berkelanjutan. GreenGrow hadir sebagai jawaban atas tantangan tersebut, sebuah inisiatif yang dibentuk pada
                tahun 2025 dengan semangat inovasi dan kepedulian terhadap masa depan bumi. Berdiri di bawah naungan PT GreenGrow Indonesia,
                perusahaan ini memfokuskan diri pada penyebaran praktik hidroponik, yaitu teknik bercocok tanam tanpa tanah yang menawarkan
                berbagai keunggulan seperti efisiensi penggunaan air, pertumbuhan tanaman yang lebih cepat, serta hasil panen yang higienis
                dan ramah lingkungan. Kantor pusat GreenGrow berlokasi di Banyuwangi, Jawa Timur, sebuah daerah yang dikenal akan potensi alam
                dan semangat masyarakatnya dalam inovasi pertanian. Dari sana, kami membangun jaringan luas untuk menjangkau seluruh Indonesia,
                membawa teknologi pertanian modern ke tangan masyarakat luas.
              </p>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto text-justify indent-8 mt-4">
                GreenGrow tidak hanya menyediakan produk-produk hidroponik berkualitas tinggi,
                tetapi juga berkomitmen membangun komunitas yang teredukasi dan peduli lingkungan. Kami rutin mengadakan pelatihan, workshop, dan kampanye kesadaran
                lingkungan untuk mendorong gaya hidup sehat dan berkelanjutan di kalangan masyarakat. Visi kami adalah berkontribusi nyata terhadap ketahanan pangan
                nasional melalui pertanian urban yang efisien dan inklusif. Dengan dukungan tim yang profesional dan semangat kolaborasi, GreenGrow terus berinovasi
                menciptakan solusi pertanian masa depan yang dapat diterapkan di rumah, sekolah, perkantoran, hingga skala industri. Kami percaya bahwa masa depan
                pertanian ada di tangan kita semua — dan bersama GreenGrow, masa depan itu dimulai sekarang.
              </p>
            </section>
          )}

          {/* Bagian Sejarah Hidroponik */}
          {isLoading ? <TextBlockSkeleton /> : (
            <section className="py-8 sm:py-12 px-4 bg-green-50 rounded-2xl shadow-sm mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-green-700 text-center">
                Kilasan Sejarah Hidroponik
              </h3>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto text-justify indent-8">
                Konsep bercocok tanam tanpa tanah sebenarnya bukan hal baru. Sejak zaman kuno, praktik serupa telah diterapkan, salah satunya adalah
                Taman Gantung Babilonia yang terkenal sebagai salah satu keajaiban dunia. Selain itu, peradaban Mesir Kuno dan Aztec juga diketahui
                menggunakan sistem tanam tanpa media tanah di atas perairan. Namun, pendekatan ini baru mulai dikembangkan secara ilmiah pada awal abad ke-20.
                Istilah "hidroponik" sendiri diperkenalkan oleh Dr. W.F. Gericke dari University of California pada tahun 1937, yang berasal dari bahasa Yunani:
                "hydro" berarti air, dan "ponos" berarti kerja. Ia berhasil menumbuhkan tanaman tomat besar di larutan nutrisi tanpa tanah, yang membuka mata dunia
                terhadap potensi besar metode ini.
              </p>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto text-justify indent-8 mt-4">
                Seiring berjalannya waktu, hidroponik berkembang pesat seiring dengan kemajuan teknologi. Di masa Perang Dunia II, metode ini dimanfaatkan untuk
                menyediakan sayuran segar bagi pasukan militer Amerika Serikat di daerah terpencil. Kini, hidroponik telah menjadi solusi pertanian modern
                yang sangat relevan, terutama di tengah urbanisasi dan krisis lingkungan. Dengan kontrol nutrisi dan lingkungan yang presisi, hidroponik menjanjikan
                hasil panen yang lebih cepat, lebih banyak, dan lebih bersih. Di berbagai negara maju dan berkembang, teknologi ini terus diadopsi baik dalam skala
                rumah tangga, komersial, maupun industri. Hidroponik tidak hanya menjadi simbol inovasi pertanian, tetapi juga harapan bagi masa depan ketahanan pangan dunia.
              </p>
            </section>
          )}

          {/* Bagian Visi Kami (Zig-Zag Item 1) */}
          {isLoading ? <ZigzagSkeleton /> : (
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center mt-8 sm:mt-12 mb-12 sm:mb-16 px-4">
              <div className="md:order-1 order-2 text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-green-700 mb-3 sm:mb-4">Visi Kami</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify indent-8">
                  GreenGrow memiliki visi untuk menjadi pelopor utama dalam transformasi perkebunan modern di Indonesia melalui teknologi hidroponik.
                  Kami berkomitmen untuk menciptakan ekosistem pertanian urban yang berkelanjutan, inklusif, dan terjangkau, serta memberdayakan masyarakat
                  dari berbagai latar belakang untuk menghasilkan pangan yang sehat dan ramah lingkungan.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify indent-8 mt-4">
                  Dengan menggabungkan edukasi, inovasi teknologi hijau, dan komunitas yang peduli lingkungan, kami bercita-cita menjadi platform
                  hidroponik terdepan yang mendorong gaya hidup sehat dan ketahanan pangan lokal, serta membawa dampak positif bagi lingkungan dan generasi mendatang.
                </p>
              </div>
              <div className="md:order-2 order-1 flex justify-center md:justify-end">
                <img
                  src={visionIcon}
                  alt="Visi GreenGrow - Ilustrasi pertumbuhan dan inovasi"
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
                <ul className="text-base sm:text-lg text-gray-700 leading-relaxed text-left max-w-xl md:ml-auto md:pr-4 text-justify space-y-3">
                  <li>
                    <span className="font-semibold">Meningkatkan Literasi Hidroponik</span> — Memberikan akses edukasi yang luas, praktis, dan terstruktur tentang pertanian hidroponik kepada masyarakat dari berbagai usia dan latar belakang
                  </li>
                  <li>
                    <span className="font-semibold">Mendukung Pertanian Mandiri</span> — Menyediakan produk, bibit, dan peralatan hidroponik berkualitas tinggi yang mudah digunakan, terjangkau, dan cocok untuk kebutuhan rumahan maupun komersial
                  </li>
                  <li>
                    <span className="font-semibold">Mendorong Inovasi Hijau</span> — Mengembangkan solusi pertanian modern berbasis teknologi terkini yang efisien, ramah lingkungan, dan berkelanjutan
                  </li>
                  <li>
                    <span className="font-semibold">Membangun Ekosistem Komunitas</span> — Menghubungkan para pelaku hidroponik melalui platform berbagi pengalaman, pelatihan, dan kolaborasi demi mendorong pertumbuhan bersama
                  </li>
                  <li>
                    <span className="font-semibold">Berkontribusi pada Ketahanan Pangan</span> — Menjadi bagian dari solusi pangan masa depan dengan mendorong produksi lokal, konsumsi sehat, dan pertanian urban yang adaptif terhadap tantangan zaman
                  </li>
                </ul>
              </div>
              <div className="md:order-1 order-1 flex justify-center md:justify-start">
                <img
                  src={missionIcon}
                  alt="Misi GreenGrow - Ilustrasi kerja sama dan tujuan"
                  className="w-64 h-64 sm:w-64 sm:h-64 object-cover rounded-2xl md:rounded-3xl shadow-lg border-4 border-green-200"
                />
              </div>
            </section>
          )}

          {/* Bagian Profil Perusahaan */}
          {isLoading ? <ZigzagSkeleton /> : (
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center mb-12 sm:mb-16 px-4">
              <div className="md:order-1 order-2 text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-green-700 mb-3 sm:mb-4">Profil Perusahaan</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify" style={{ textIndent: "2em" }}>
                  PT GreenGrow Indonesia adalah perusahaan yang berdedikasi pada pengembangan dan penyebaran solusi pertanian modern, khususnya hidroponik.
                  Didirikan pada tahun 2025 dan berpusat di Banyuwangi, perusahaan ini lahir dari semangat inovasi serta kepedulian terhadap lingkungan.
                  Kami berkomitmen untuk menyediakan produk dan layanan berkualitas tinggi yang mendukung keberlanjutan pangan di Indonesia, sekaligus membangun ekosistem hijau yang cerdas dan berdaya saing.
                </p>
                <ul className="text-base sm:text-lg text-gray-700 leading-relaxed text-left max-w-xl md:mr-auto md:pl-0 mt-4 space-y-2">
                  <li><strong>Nama Perusahaan:</strong> PT GreenGrow Indonesia</li>
                  <li><strong>Didirikan:</strong> Tahun 2025</li>
                  <li><strong>Kantor Pusat:</strong> Jl. Hijau Subur No. 123 Banyuwangi, Jawa Timur, Indonesia - 68431</li>
                  <li><strong>Fokus Bisnis:</strong> Edukasi hidroponik, penjualan peralatan dan bibit hidroponik, konsultasi pertanian urban</li>
                  <li><strong>Legalitas:</strong> Terdaftar dan berizin sesuai hukum Republik Indonesia</li>
                </ul>
              </div>
              <div className="md:order-2 order-1 flex justify-center md:justify-end">
                <img
                  src={companyProfileIcon}
                  alt="Profil Perusahaan GreenGrow - Ilustrasi bangunan dan branding perusahaan"
                  className="w-64 h-64 sm:w-64 sm:h-64 object-cover rounded-2xl md:rounded-3xl shadow-lg border-4 border-green-200"
                />
              </div>
            </section>
          )}

          {/* Garis pemisah */}
          {isLoading ? null : <hr className="border-t-2 border-green-200 my-10 sm:my-12" />}

          {/* Bagian Pendiri GreenGrow */}
          {isLoading ? <FounderSkeleton /> : (
            <section className="mt-8 sm:mt-16 py-8 sm:py-12 bg-green-100 rounded-2xl md:rounded-3xl shadow-xl px-4 sm:px-6">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 text-green-800 text-center">Profil Pendiri</h3>
              <div className="flex flex-col items-center justify-center"> {/* Removed md:flex-row and gap from here */}
                <div className="text-center max-w-4xl mx-auto"> {/* Added max-w-4xl mx-auto */}
                  <img
                    src={founderImage}
                    alt="Foto Pendiri Ahmad Sulaiman"
                    className="w-56 h-56 sm:w-48 sm:h-48 object-cover rounded-full border-4 sm:border-6 border-green-500 shadow-xl mb-4 sm:mb-6 mx-auto"
                  />
                  <h4 className="text-xl sm:text-2xl font-bold text-green-700 mb-1 sm:mb-2">Dimas Bagus Kusuma</h4>
                  <p className="text-base sm:text-lg text-gray-600 italic mb-3 sm:mb-4">Founder & CEO PT GreenGrow Indonesia</p>
                  {/* Applied classes to individual paragraphs */}
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify indent-8">
                    Dimas Bagus Kusuma adalah tokoh muda visioner asal Banyuwangi yang lahir pada 28 Januari 2003. Sejak usia dini, Dimas menunjukkan ketertarikan mendalam terhadap pertanian modern dan isu lingkungan hidup. Pengamatannya terhadap krisis pangan global, keterbatasan lahan, dan kerusakan lingkungan membuatnya sadar bahwa sistem pertanian tradisional memerlukan transformasi mendesak.
                  </p>

                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify indent-8 mt-4">
                    Dari keprihatinan tersebut, Dimas memutuskan untuk mendalami konsep pertanian berkelanjutan berbasis teknologi, terutama hidroponik. Ia percaya bahwa hidroponik bukan sekadar metode bercocok tanam tanpa tanah, melainkan solusi masa depan untuk urbanisasi dan keterbatasan ruang. Dengan semangat belajar tinggi, ia merancang platform edukatif dan produktif yang kini dikenal sebagai GreenGrow.
                  </p>

                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify indent-8 mt-4">
                    Melalui PT GreenGrow Indonesia, Dimas bukan hanya mengembangkan teknologi pertanian modern, tetapi juga mendorong partisipasi masyarakat luas dalam transformasi hijau. Ia menginisiasi berbagai pelatihan, kampanye literasi pangan, hingga kolaborasi lintas sektor demi menciptakan ekosistem pertanian yang cerdas, efisien, dan inklusif.
                  </p>

                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify indent-8 mt-4">
                    Di bawah kepemimpinannya, GreenGrow berkembang pesat menjadi gerakan nasional yang membawa dampak nyata. Visi besarnya adalah menjadikan Indonesia pelopor pertanian modern di Asia Tenggara—pertanian yang tidak hanya menghasilkan pangan berkualitas, tetapi juga menjaga kelestarian lingkungan dan memberdayakan generasi muda.
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

export default About;