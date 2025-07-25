import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaTelegramPlane, FaEnvelope, FaPlus, FaMinus } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

// --- Skeleton Component for Contact Section ---
const ContactSkeleton = () => (
  <div className="mt-14 max-w-xl w-full bg-white/80 backdrop-blur-md rounded-3xl shadow-lg p-5 sm:p-6 text-center border border-green-200 mb-6 animate-pulse">
    {/* Title Placeholder */}
    <div className="h-8 bg-gray-300 rounded w-3/4 mx-auto mb-3"></div>
    {/* Description Placeholder */}
    <div className="h-4 bg-gray-200 rounded w-11/12 mx-auto mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-10/12 mx-auto mb-5"></div>

    {/* Buttons Placeholder */}
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-5">
      <div className="h-10 w-28 bg-gray-300 rounded-full"></div>
      <div className="h-10 w-28 bg-gray-300 rounded-full"></div>
      <div className="h-10 w-28 bg-gray-300 rounded-full"></div>
    </div>
  </div>
);

// --- Skeleton Component for FAQ Item ---
const FaqItemSkeleton = () => (
  <div className="border-b border-green-200 pb-2 last:border-b-0 animate-pulse">
    {/* Question Placeholder */}
    <div className="h-5 bg-gray-300 rounded w-full mb-1 py-1"></div>
    {/* Answer Placeholder (initially hidden, but good to have a conceptual placeholder) */}
    {/* <div className="h-4 bg-gray-200 rounded w-5/6 mt-1.5"></div> */}
  </div>
);

// --- Kontak Main Component ---
const Kontak = () => {
  const [openFaqId, setOpenFaqId] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // New state for loading

  // Data FAQ
  const faqs = [
    {
      id: 'faq1',
      question: 'Bagaimana cara memesan produk GreenGrow?',
      answer: 'Anda dapat memesan produk kami langsung melalui halaman "Produk" di website ini. Pilih produk yang Anda inginkan, tambahkan ke keranjang, dan ikuti langkah-langkah pembayaran.'
    },
    {
      id: 'faq2',
      question: 'Apakah GreenGrow melayani pengiriman ke seluruh Indonesia?',
      answer: 'Saat ini, kami melayani pengiriman ke wilayah Jawa Timur. Untuk wilayah di luar itu, mohon hubungi kami untuk informasi lebih lanjut mengenai kemungkinan pengiriman.'
    },
    {
      id: 'faq3',
      question: 'Apakah ada garansi untuk bibit atau alat hidroponik?',
      answer: 'Kami memberikan garansi kualitas untuk semua bibit dan alat hidroponik. Jika ada masalah, silakan hubungi tim dukungan kami dalam waktu 7 hari setelah penerimaan barang.'
    },
    {
      id: 'faq4',
      question: 'Bagaimana jika saya pemula dan butuh panduan menanam?',
      answer: 'Kami menyediakan panduan menanam lengkap di bagian "Blog" kami. Selain itu, Anda juga bisa mendapatkan konsultasi gratis dengan tim ahli kami melalui WhatsApp atau email.'
    },
  ];

  // Simulate data fetching delay
  useEffect(() => {
    setIsLoading(true); // Start loading
    const timer = setTimeout(() => {
      setIsLoading(false); // End loading after 1.5 seconds
    }, 1500); // Adjust duration as needed

    return () => clearTimeout(timer); // Cleanup timer
  }, []); // Empty dependency array means this runs once on mount

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <>
      <Helmet>
        <title>Kontak & FAQ - GreenGrow | Kirim Pesan & Temukan Jawaban</title>
        <meta
          name="description"
          content="Hubungi tim GreenGrow untuk pertanyaan, dukungan, atau temukan jawaban cepat di bagian Pertanyaan Umum (FAQ) kami."
        />
        <link rel="canonical" href="https://www.yourdomain.com/kontak" />

        {/* JSON-LD Script - Only render if not loading to ensure data is available */}
        {!isLoading && (
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  ${faqs.map(faq => `
                    {
                      "@type": "Question",
                      "name": "${faq.question}",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "${faq.answer}"
                      }
                    }
                  `).join(',')}
                ]
              }
            `}
          </script>
        )}
      </Helmet>

      {/* Main Content Wrapper */}
      <div className="pt-20 min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200 flex flex-col items-center px-4 py-6 sm:py-8">

        {isLoading ? (
          // Render Skeletons when loading
          <>
            <ContactSkeleton />
            <div className="max-w-xl w-full bg-white/80 backdrop-blur-md rounded-3xl shadow-lg p-5 sm:p-6 text-center border border-green-200 animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-1/2 mx-auto mb-3"></div> {/* FAQ Title Placeholder */}
              <div className="text-left space-y-2">
                {Array.from({ length: faqs.length }).map((_, index) => (
                  <FaqItemSkeleton key={index} />
                ))}
              </div>
            </div>
          </>
        ) : (
          // Render actual content when not loading
          <>
            {/* Bagian Hubungi Kami (Kartu Utama) */}
            <div className="mt-14 max-w-xl w-full bg-white/80 backdrop-blur-md rounded-3xl shadow-lg p-5 sm:p-6 text-center border border-green-200 mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-green-700">Hubungi Kami</h2>
              <p className="text-sm text-gray-600 mb-5">
                Punya pertanyaan, butuh dukungan, atau tertarik bekerja sama? Tim GreenGrow siap membantu Anda!
              </p>

              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-5">
                <a
                  href="https://wa.me/6281234567890" // Ganti dengan nomor WhatsApp Anda
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full shadow-md transition transform hover:scale-105 text-sm font-medium"
                >
                  <FaWhatsapp size={16} />
                  WhatsApp
                </a>

                <a
                  href="https://t.me/greengrow_support" // Ganti dengan username atau link grup/channel Telegram Anda
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full shadow-md transition transform hover:scale-105 text-sm font-medium"
                >
                  <FaTelegramPlane size={16} />
                  Telegram
                </a>

                <a
                  href="mailto:greengrow@example.com" // Ganti dengan email Anda
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full shadow-md transition transform hover:scale-105 text-sm font-medium"
                >
                  <FaEnvelope size={16} />
                  Email
                </a>
              </div>
            </div>

            {/* Bagian FAQ (Kartu Kedua, di bawah Hubungi Kami) */}
            <div className="max-w-xl w-full bg-white/80 backdrop-blur-md rounded-3xl shadow-lg p-5 sm:p-6 text-center border border-green-200">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-green-700">Pertanyaan Umum (FAQ)</h2>
              <div className="text-left space-y-2">
                {faqs.map((faq) => (
                  <div key={faq.id} className="border-b border-green-200 pb-2 last:border-b-0">
                    <button
                      className="flex justify-between items-center w-full text-base font-semibold text-green-800 hover:text-green-600 focus:outline-none py-1"
                      onClick={() => toggleFaq(faq.id)}
                      aria-expanded={openFaqId === faq.id}
                      aria-controls={`faq-answer-${faq.id}`}
                    >
                      {faq.question}
                      {openFaqId === faq.id ? <FaMinus size={16} /> : <FaPlus size={16} />}
                    </button>
                    {openFaqId === faq.id && (
                      <p id={`faq-answer-${faq.id}`} className="mt-1.5 text-gray-700 text-sm leading-relaxed animate-fade-in-down">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Kontak;