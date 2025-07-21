import React from 'react';
import { FaSeedling } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async'; // <-- Tambahkan ini

const produk = [
  { nama: 'Lettuce', harga: 'Rp 10.000', img: '/assets/produk/lettuce.jpg' },
  // ... produk lainnya
];

const Produk = () => {
  const currentYear = new Date().getFullYear(); // Untuk harga yang mungkin dinamis
  const currency = 'IDR'; // Mata uang

  // Buat data Schema.org untuk ItemList
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Produk Hidroponik Segar HidroponikKu",
    "description": "Daftar lengkap sayuran dan buah-buahan hidroponik yang tersedia di HidroponikKu.",
    "itemListElement": produk.map((item, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "Product",
        "name": item.nama,
        "image": `https://www.yourdomain.com${item.img}`, // Pastikan URL gambar absolut
        "offers": {
          "@type": "Offer",
          "priceCurrency": currency,
          "price": parseFloat(item.harga.replace('Rp ', '').replace('.', '')), // Konversi harga ke format angka
          "availability": "https://schema.org/InStock", // Asumsi selalu tersedia
          "seller": {
            "@type": "Organization",
            "name": "HidroponikKu"
          }
        }
      }
    }))
  };

  return (
    <> {/* Gunakan React.Fragment */}
      <Helmet>
        <title>Produk Hidroponik Segar - Sayuran & Buah | HidroponikKu</title>
        <meta
          name="description"
          content="Temukan berbagai pilihan sayuran dan buah hidroponik segar berkualitas tinggi dari HidroponikKu. Tersedia lettuce, bayam, pakcoy, tomat, dan banyak lagi."
        />
        <link rel="canonical" href="https://www.yourdomain.com/produk" />{" "}
        {/* Ganti dengan URL halaman produk Anda */}

        {/* Schema Markup untuk daftar produk */}
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      </Helmet>

      <div className="p-6 max-w-6xl mx-auto font-poppins">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-700">Produk Kami</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {produk.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition duration-300 ease-in-out p-4 text-center group"
            >
              <img
                src={item.img}
                alt={item.nama}
                className="h-40 w-full object-cover rounded-md mb-3 group-hover:opacity-90"
              />
              <h3 className="font-semibold text-lg group-hover:text-green-700">{item.nama}</h3>
              <p className="text-green-600">{item.harga}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center flex flex-col items-center">
          <FaSeedling className="text-green-500 text-4xl mb-2 animate-bounce" />
          <p className="text-xl font-medium text-green-800">
            Siap antar ke rumah kamu dalam keadaan fresh!!!
          </p>
        </div>
      </div>
    </>
  );
};

export default Produk;