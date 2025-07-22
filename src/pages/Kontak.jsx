import React from 'react';
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async'; // Import Helmet di sini

const Kontak = () => {
  return (
    // Gunakan React.Fragment atau shorthand <> </> jika ada lebih dari satu elemen root
    // karena Helmet juga dianggap sebagai child yang perlu di-render
    <>
      {/* Helmet untuk mengelola metadata SEO khusus halaman Kontak */}
      <Helmet>
        <title>Kontak Kami - HidroponikKu | Hubungi Dukungan</title>
        <meta
          name="description"
          content="Hubungi tim HidroponikKu untuk pertanyaan, dukungan, atau kerjasama. Temukan informasi kontak WhatsApp, Email, dan Instagram kami di sini."
        />
        <link rel="canonical" href="https://www.yourdomain.com/kontak" />{" "}
        {/* Ganti dengan URL halaman kontak Anda yang sebenarnya */}

        {/* Opsional: Contoh Schema Markup untuk informasi kontak (JSON-LD) */}
        {/* Ini membantu mesin pencari memahami data kontak Anda secara terstruktur */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage", // Atau "WebPage" atau "Organization" jika lebih luas
              "name": "Kontak Kami",
              "url": "https://www.yourdomain.com/kontak",
              "description": "Halaman untuk menghubungi HidroponikKu via WhatsApp, Email, atau Instagram.",
              "potentialAction": [
                {
                  "@type": "CommunicateAction",
                  "target": {
                    "@type": "EntryPoint",
                    "actionPlatform": ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
                    "urlTemplate": "https://wa.me/6281234567890"
                  },
                  "name": "Chat via WhatsApp"
                },
                {
                  "@type": "CommunicateAction",
                  "target": {
                    "@type": "EntryPoint",
                    "actionPlatform": ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
                    "urlTemplate": "mailto:hidroponikku@example.com"
                  },
                  "name": "Kirim Email"
                }
              ]
            }
          `}
        </script>
        {/* Akhir dari Schema Markup */}
      </Helmet>

      {/* Konten utama halaman Kontak */}
      {/* py-10 diubah menjadi py-8 untuk sedikit mengurangi padding vertikal di mobile */}
      <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200 flex items-center justify-center px-4 py-8 sm:py-10">
        {/* max-w-lg tetap, p-8 diubah menjadi p-6 untuk sedikit mengurangi padding di mobile */}
        <div className="max-w-lg w-full bg-white/80 backdrop-blur-md rounded-3xl shadow-lg p-6 sm:p-8 text-center border border-green-200">
          {/* text-4xl diubah menjadi text-3xl untuk mobile, lalu 4xl di sm ke atas */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-green-700">Hubungi Kami</h2>
          {/* text-gray-600 tetap, mb-6 tetap */}
          <p className="text-sm sm:text-base text-gray-600 mb-6">
            Punya pertanyaan atau tertarik bekerja sama? Kami siap membantu Anda mewujudkan kebun hidroponik impian!
          </p>

          <div className="flex flex-col gap-4">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              // py-3 px-6 sudah cukup responsif. Ukuran icon 20px juga oke.
              className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full shadow-md transition transform hover:scale-105 text-sm sm:text-base"
            >
              <FaWhatsapp size={20} />
              Chat via WhatsApp
            </a>

            <a
              href="mailto:hidroponikku@example.com"
              className="flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full shadow-md transition transform hover:scale-105 text-sm sm:text-base"
            >
              <FaEnvelope size={20} />
              Kirim Email
            </a>

            <a
              href="https://instagram.com/hidroponikku"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-full shadow-md transition transform hover:scale-105 text-sm sm:text-base"
            >
              <FaInstagram size={20} />
              DM via Instagram
            </a>
          </div>

          {/* mt-6 tetap, text-sm tetap */}
          <p className="mt-6 text-sm text-gray-500 italic">
            “Kami percaya setiap orang bisa bertani, mulai dari rumah.” 🌿
          </p>
        </div>
      </div>
    </>
  );
};

export default Kontak;