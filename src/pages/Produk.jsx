// src/pages/Produk.jsx

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { allProducts } from '../data/produk'; // Pastikan path ini benar

const Produk = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [isLoading, setIsLoading] = useState(true);
  // Tidak ada lagi kebutuhan untuk sortDropdownRef karena kita menggunakan <select> native

  const categories = ['Semua', 'Bibit', 'Alat Hidroponik', 'Sayur'];

  useEffect(() => {
    // Simulasi loading data
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Cleanup untuk event listener handleClickOutside sudah tidak diperlukan
  // karena tidak ada custom dropdown logic lagi.

  const getNumericPrice = (priceString) => {
    // Menghapus 'Rp ', '.' dan mengkonversi ke angka
    if (!priceString) return 0; // Tambahkan penanganan untuk string kosong/null
    return parseInt(priceString.replace('Rp ', '').replace(/\./g, ''), 10);
  };

  const filteredAndSortedProducts = useMemo(() => {
    let currentProducts = [...allProducts];

    // Filter berdasarkan kategori
    if (selectedCategory !== 'Semua') {
      currentProducts = currentProducts.filter(p => p.category === selectedCategory);
    }

    // Filter berdasarkan search term (nama produk)
    if (searchTerm) {
      currentProducts = currentProducts.filter(p =>
        p.nama.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sorting produk
    currentProducts.sort((a, b) => {
      if (sortBy === 'price-asc') return getNumericPrice(a.harga) - getNumericPrice(b.harga);
      if (sortBy === 'price-desc') return getNumericPrice(b.harga) - getNumericPrice(a.harga);
      if (sortBy === 'name-asc') return a.nama.localeCompare(b.nama);
      if (sortBy === 'name-desc') return b.nama.localeCompare(a.nama);
      return 0; // Default: tidak berubah urutan
    });

    return currentProducts;
  }, [selectedCategory, searchTerm, sortBy]);

  // Digunakan untuk Schema.org markup
  // Pastikan allProducts tidak kosong sebelum mencoba Math.max/min
  const allPrices = allProducts.map(item => getNumericPrice(item.harga));
  const highPrice = allPrices.length > 0 ? Math.max(...allPrices) : 0;
  const lowPrice = allPrices.length > 0 ? Math.min(...allPrices) : 0;

  // --- JSON-LD Object Creation (ProductGroup) ---
  // Gunakan JSON.stringify untuk Schema.org yang lebih aman dan valid
  const productGroupSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Produk GreenGrow",
    "description": "Temukan berbagai bibit, alat hidroponik, dan sayuran hidroponik segar berkualitas tinggi seperti lettuce, kale, bayam, pakcoy, dan lainnya dari GreenGrow.",
    "url": "https://www.yourdomain.com/produk",
    "image": "https://www.yourdomain.com/assets/produk/lettuce.jpg", // Ganti dengan gambar umum produk Anda
    "offers": {
      "@type": "AggregateOffer",
      "highPrice": highPrice,
      "lowPrice": lowPrice,
      "priceCurrency": "IDR",
      "offerCount": allProducts.length
    }
  };


  // --- Skeleton Components ---
  const SkeletonCard = () => (
    <div className="bg-white border rounded-xl shadow-md animate-pulse flex flex-col overflow-hidden">
      <div className="w-full h-48 sm:h-56 bg-gray-200"></div>
      <div className="p-4 flex flex-col flex-grow space-y-2">
        <div className="h-5 bg-gray-200 rounded w-3/4"></div> {/* Nama produk */}
        <div className="h-4 bg-gray-200 rounded w-1/2"></div> {/* Harga */}
        <div className="h-4 bg-gray-200 rounded w-1/4"></div> {/* Stok */}
        <div className="h-8 bg-gray-300 rounded w-full mt-auto"></div> {/* Tombol */}
      </div>
    </div>
  );

  const SkeletonFilterBar = () => (
    <div className="bg-white p-5 rounded-lg shadow-md mb-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4 animate-pulse">
      <div className="flex flex-wrap gap-3 justify-start md:justify-start">
        {Array(4).fill(0).map((_, i) => (
          <div key={i} className="w-20 h-8 bg-gray-200 rounded-full" />
        ))}
      </div>
      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
        <div className="h-10 bg-gray-200 rounded w-full sm:w-64"></div>
        <div className="h-10 bg-gray-200 rounded w-full sm:w-44"></div>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Produk Hidroponik Segar | GreenGrow</title>
        <meta name="description" content="Temukan berbagai bibit, alat hidroponik, dan sayuran hidroponik segar berkualitas tinggi seperti lettuce, kale, bayam, pakcoy, dan lainnya dari GreenGrow." />
        <link rel="canonical" href="https://www.yourdomain.com/produk" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Produk Hidroponik Segar | GreenGrow" />
        <meta property="og:description" content="Bibit, alat hidroponik, dan sayuran segar sehat siap antar ke rumah kamu dari GreenGrow." />
        <meta property="og:image" content="https://www.yourdomain.com/assets/produk/lettuce.jpg" /> {/* Ganti dengan gambar representatif produk */}
        <meta property="og:url" content="https://www.yourdomain.com/produk" />
        <meta property="og:type" content="product.group" /> {/* Perubahan ke product.group jika merepresentasikan daftar produk */}
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Produk Hidroponik Segar | GreenGrow" />
        <meta name="twitter:description" content="Bibit, alat hidroponik, dan sayuran segar sehat siap antar ke rumah kamu dari GreenGrow." />
        <meta name="twitter:image" content="https://www.yourdomain.com/assets/produk/lettuce.jpg" /> {/* Ganti dengan gambar representatif produk */}
        {/* Schema.org JSON-LD for ProductGroup */}
        <script type="application/ld+json">
          {JSON.stringify(productGroupSchema)}
        </script>
      </Helmet>

      {/* Main content container with padding-top for fixed navbar */}
      <div className="pt-20 min-h-screen bg-gray-100 py-8 px-4 lg:px-16">
        <div className="max-w-6xl mx-auto font-poppins">

          {/* Filter and Sort Bar - Responsive */}
          {isLoading ? (
            <SkeletonFilterBar />
          ) : (
            <div className="bg-white p-5 rounded-lg shadow-md mb-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
              {/* Category Buttons */}
              <div className="flex flex-wrap gap-2 lg:gap-3 justify-start md:justify-start w-full md:w-auto">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
                                            ${selectedCategory === category
                        ? 'bg-green-800 text-white shadow'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Search and Sort Inputs */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
                {/* Search Input */}
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder="Cari produk..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    aria-label="Cari produk"
                  />
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>

                {/* Sort Dropdown */}
                <div className="relative w-full sm:w-auto">
                  <select
                    className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-green-500 transition duration-200"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)} // Langsung set state
                  >
                    <option value="default">Urutkan</option>
                    <option value="price-asc">Harga Terendah</option>
                    <option value="price-desc">Harga Tertinggi</option>
                    <option value="name-asc">Nama (A-Z)</option>
                    <option value="name-desc">Nama (Z-A)</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {isLoading ? (
              Array.from({ length: 8 }).map((_, index) => <SkeletonCard key={index} />)
            ) : filteredAndSortedProducts.length > 0 ? (
              filteredAndSortedProducts.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out flex flex-col overflow-hidden"
                >
                  <Link to={`/produk/detail/${item.id}`} className="block">
                    <img
                      src={item.img}
                      alt={`Gambar ${item.nama}`} // Alt text yang deskriptif
                      className="w-full h-48 sm:h-56 object-cover"
                      loading="lazy" // Native lazy loading
                    />
                    <div className="p-4 flex flex-col flex-grow">
                      <h4 className="font-semibold text-lg sm:text-xl mb-1 text-gray-800 flex-grow">{item.nama}</h4>
                      <p className="text-green-600 font-bold text-md sm:text-lg mb-1">{item.harga}</p>
                      <p className="text-gray-600 text-sm mb-3">
                        Stok: {item.stock > 0 ? (
                          <span className="font-semibold text-green-700">{item.stock}</span>
                        ) : (
                          <span className="font-semibold text-red-600">Habis</span>
                        )}
                      </p>
                      {/* Link tombol Lihat Detail */}
                      <span
                        className="mt-auto inline-block bg-green-800 text-white px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-green-700 transition-colors duration-200"
                      >
                        Lihat Detail
                      </span>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-600 text-lg col-span-full mt-10">
                Produk tidak ditemukan. Coba filter atau kata kunci lain.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Produk;