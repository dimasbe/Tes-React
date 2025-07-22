import React from 'react';
import { FaSeedling } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async'; // Menggunakan react-helmet-async

const produk = [
  { nama: 'Lettuce', harga: 'Rp 10.000', img: '/assets/produk/lettuce.jpg' },
  { nama: 'Bayam Hijau', harga: 'Rp 8.000', img: '/assets/produk/bayam.jpeg' },
  { nama: 'Pakcoy', harga: 'Rp 12.000', img: '/assets/produk/pakcoy.jpeg' },
  { nama: 'Kangkung', harga: 'Rp 7.500', img: '/assets/produk/kangkung.jpeg' },
  { nama: 'Sawi Hijau', harga: 'Rp 9.000', img: '/assets/produk/sawi.jpg' },
  { nama: 'Tomat Ceri', harga: 'Rp 15.000', img: '/assets/produk/tomat.jpeg' },
  { nama: 'Selada Merah', harga: 'Rp 11.000', img: '/assets/produk/seladamerah.jpg' },
  { nama: 'Seledri', harga: 'Rp 10.500', img: '/assets/produk/seledri.jpeg' },
  { nama: 'Basil', harga: 'Rp 13.000', img: '/assets/produk/basil.jpeg' },
  { nama: 'Timun Jepang', harga: 'Rp 14.000', img: '/assets/produk/timun.jpeg' },
  { nama: 'Cabe Rawit', harga: 'Rp 9.500', img: '/assets/produk/cabe.jpg' },
  { nama: 'Kale', harga: 'Rp 16.000', img: '/assets/produk/kale.jpg' },
];

const Produk = () => {
  // Fungsi helper untuk mendapatkan harga numerik dari string harga
  const getNumericPrice = (priceString) => {
    return parseInt(priceString.replace(/[^0-9]/g, ''), 10);
  };

  // Hitung harga tertinggi dan terendah untuk Schema Markup
  const allPrices = produk.map(item => getNumericPrice(item.harga));
  const highPrice = allPrices.length > 0 ? Math.max(...allPrices) : 0;
  const lowPrice = allPrices.length > 0 ? Math.min(...allPrices) : 0;

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto font-poppins">
      {/* SEO Metadata menggunakan react-helmet-async */}
      <Helmet>
        <title>Produk Hidroponik Segar | HidroponikKu</title>
        <meta
          name="description"
          content="Temukan berbagai sayuran hidroponik segar berkualitas tinggi seperti lettuce, kale, bayam, pakcoy, dan lainnya dari HidroponikKu. Dikirim langsung dari kebun ke rumah Anda!"
        />
        {/* URL Kanonis: Ganti dengan URL halaman produk Anda yang sebenarnya */}
        <link rel="canonical" href="https://www.yourdomain.com/produk" />
        
        {/* Open Graph Meta Tags untuk berbagi di media sosial */}
        <meta property="og:title" content="Produk Hidroponik Segar | HidroponikKu" />
        <meta property="og:description" content="Sayuran hidroponik segar dan sehat siap antar ke rumah kamu dari HidroponikKu." />
        {/* Ganti dengan URL absolut gambar yang relevan untuk thumbnail sosial media */}
        <meta property="og:image" content="https://www.yourdomain.com/assets/produk/lettuce.jpg" />
        <meta property="og:url" content="https://www.yourdomain.com/produk" />
        <meta property="og:type" content="product.group" /> {/* Tipe yang lebih spesifik */}

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Produk Hidroponik Segar | HidroponikKu" />
        <meta name="twitter:description" content="Sayuran hidroponik segar dan sehat siap antar ke rumah kamu dari HidroponikKu." />
        {/* Ganti dengan URL absolut gambar yang relevan untuk thumbnail Twitter */}
        <meta name="twitter:image" content="https://www.yourdomain.com/assets/produk/lettuce.jpg" />
        
        {/* Schema Markup (JSON-LD) untuk daftar produk */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProductGroup", // Atau "OfferCatalog" jika lebih cocok
              "name": "Produk Hidroponik Segar HidroponikKu",
              "description": "Berbagai pilihan sayuran dan buah hidroponik segar berkualitas tinggi dari HidroponikKu.",
              "url": "https://www.yourdomain.com/produk",
              "image": "https://www.yourdomain.com/assets/produk/lettuce.jpg",
              "offers": {
                "@type": "AggregateOffer",
                "highPrice": "${highPrice}",
                "lowPrice": "${lowPrice}",
                "priceCurrency": "IDR",
                "offerCount": "${produk.length}"
              }
            }
          `}
        </script>
      </Helmet>

      {/* Judul Halaman Produk */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-green-700">Produk Kami</h2>

      {/* Grid untuk menampilkan daftar produk */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {produk.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition duration-300 ease-in-out p-3 sm:p-4 text-center group"
          >
            <img
              src={item.img}
              alt={`Gambar ${item.nama}`}
              className="h-32 sm:h-40 w-full object-cover rounded-md mb-3 group-hover:opacity-90"
              loading="lazy" // Memuat gambar secara lazy untuk performa
            />
            <h3 className="font-semibold text-base sm:text-lg group-hover:text-green-700">{item.nama}</h3>
            <p className="text-green-600 text-sm sm:text-base">{item.harga}</p>
          </div>
        ))}
      </div>

      {/* Bagian penutup atau tagline */}
      <div className="mt-8 sm:mt-10 text-center flex flex-col items-center">
        <FaSeedling className="text-green-500 text-3xl sm:text-4xl mb-2 animate-bounce" />
        <p className="text-base sm:text-xl font-medium text-green-800">
          Siap antar ke rumah kamu dalam keadaan fresh!!!
        </p>
      </div>
    </div>
  );
};

export default Produk;