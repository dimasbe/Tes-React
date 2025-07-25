// src/pages/BlogPage.jsx

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ArticleCard from '../components/ArticleCard'; // Sesuaikan path jika berbeda
import blogArticlesData from '../data/blogArticles'; // Sesuaikan path jika berbeda

// Component Skeleton untuk ArticleCard
export const BlogCardSkeleton = () => ( // Export ini jika belum
  <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse flex flex-col h-full"> {/* Tambah flex flex-col h-full */}
    <div className="w-full h-48 bg-gray-300"></div> {/* Gambar */}
    <div className="p-5 flex flex-col flex-grow"> {/* Tambah flex flex-col flex-grow */}
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-3"></div> {/* Judul */}
      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div> {/* Deskripsi baris 1 */}
      <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div> {/* Deskripsi baris 2 */}
      {/* Tombol Baca Selengkapnya placeholder didorong ke bawah */}
      <div className="h-8 bg-gray-200 rounded w-1/3 mt-auto"></div> {/* mt-auto dorong ke bawah */}
    </div>
  </div>
);


const BlogPage = () => {
  const [filter, setFilter] = useState('Semua');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('Terbaru');
  const [articles, setArticles] = useState([]); // State untuk menyimpan artikel setelah dimuat
  const [isLoading, setIsLoading] = useState(true); // State untuk loading

  useEffect(() => {
    // Simulasi pengambilan data dari API dengan delay
    const fetchArticles = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulasi delay 1.5 detik
      setArticles(blogArticlesData); // Set data asli setelah delay
      setIsLoading(false);
    };

    fetchArticles();
  }, []);

  // Filter dan sorting data
  const filteredAndSortedArticles = articles.filter(article => {
    const matchesCategory = filter === 'Semua' || article.category === filter;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    // Parsing tanggal yang lebih robust jika format tidak standar ISO
    // Contoh: "DD Mon YYYY" (misal: "25 Jul 2025") -> new Date("Jul 25 2025")
    const parseDateString = (dateStr) => {
      const parts = dateStr.split(' ');
      if (parts.length === 3) {
        const day = parts[0];
        const month = parts[1];
        const year = parts[2];
        return new Date(`${month} ${day}, ${year}`);
      }
      return new Date(dateStr); // Coba parse langsung jika tidak sesuai format di atas
    };

    const dateA = parseDateString(a.date);
    const dateB = parseDateString(b.date);
    return sortOrder === 'Terbaru' ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime();
  });

  // Ambil kategori unik untuk filter dari data yang sudah dimuat
  const uniqueCategories = ['Semua', ...new Set(blogArticlesData.map(article => article.category))];

  // --- JSON-LD Object Creation for Blog Page ---
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog HidroponikKu",
    "description": "Temukan berbagai artikel, panduan, tips, dan berita terbaru seputar hidroponik dan pertanian modern dari HidroponikKu.",
    "url": "https://www.yourdomain.com/blog", // Ganti dengan URL blog Anda yang sebenarnya
    "inLanguage": "id-ID",
    "publisher": {
      "@type": "Organization",
      "name": "HidroponikKu",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.yourdomain.com/path-to-your-logo.png" // Ganti dengan URL logo organisasi Anda
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.yourdomain.com/blog" // Ganti dengan URL blog Anda yang sebenarnya
    }
  };


  return (
    <>
      <Helmet>
        <title>Blog - HidroponikKu | Artikel, Panduan, Berita Terbaru</title>
        <meta
          name="description"
          content="Temukan berbagai artikel, panduan, tips, dan berita terbaru seputar hidroponik dan pertanian modern di Blog HidroponikKu."
        />
        <link rel="canonical" href="https://www.yourdomain.com/blog" /> {/* Ganti dengan URL blog Anda yang sebenarnya */}
        <meta property="og:title" content="Blog HidroponikKu: Kumpulan Artikel & Panduan Hidroponik" />
        <meta property="og:description" content="Selami dunia hidroponik dengan artikel informatif kami. Dari pemula hingga ahli, temukan inspirasi dan pengetahuan baru di sini." />
        <meta property="og:image" content="https://www.yourdomain.com/assets/blog-hero.jpg" /> {/* Ganti dengan gambar relevan untuk blog Anda */}
        <meta property="og:url" content="https://www.yourdomain.com/blog" /> {/* Ganti dengan URL blog Anda yang sebenarnya */}
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog HidroponikKu - Pertanian Modern di Ujung Jari" />
        <meta name="twitter:description" content="Dapatkan wawasan terbaru tentang teknik hidroponik, tren, dan inovasi pertanian berkelanjutan." />
        <meta name="twitter:image" content="https://www.yourdomain.com/assets/blog-hero.jpg" /> {/* Ganti dengan gambar relevan untuk blog Anda */}

        {/* Schema.org JSON-LD for Blog Page (Pastikan tidak ada backticks di sekitar JSON.stringify()) */}
        <script type="application/ld+json">
          {JSON.stringify(blogSchema)}
        </script>
      </Helmet>

      <div className="pt-20 min-h-screen bg-gray-100 py-8 px-4 lg:px-16">
        <div className="max-w-7xl mx-auto font-poppins">
          {/* Header dan Filter */}
          <div className="bg-white rounded-lg shadow-md p-5 mb-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
            {/* Filter Kategori - RATA KIRI UNTUK MOBILE */}
            <div className="flex flex-wrap gap-2 lg:gap-3 justify-start w-full md:w-auto">
              {isLoading ? (
                // Skeleton untuk tombol filter
                Array.from({ length: 4 }).map((_, idx) => (
                  <div key={idx} className="px-6 py-2 rounded-full bg-gray-200 animate-pulse w-24 h-8"></div>
                ))
              ) : (
                uniqueCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
                                        ${filter === cat ? 'bg-green-800 text-white shadow' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  >
                    {cat}
                  </button>
                ))
              )}
            </div>

            {/* Search dan Sort Controls */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
              {/* Search Input */}
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Cari artikel..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  disabled={isLoading} // Disable input saat loading
                  aria-label="Cari artikel blog"
                />
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-green-500 transition duration-200"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  disabled={isLoading} // Disable select saat loading
                  aria-label="Urutkan artikel blog"
                >
                  <option value="Terbaru">Terbaru</option>
                  <option value="Terlama">Terlama</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Grid Artikel */}
          {/* Ubah grid-rows-X menjadi auto-rows-fr atau hanya grid-cols untuk flexibilitas tinggi */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"> {/* Tambah auto-rows-fr */}
            {isLoading ? (
              Array.from({ length: 6 }).map((_, index) => <BlogCardSkeleton key={index} />)
            ) : filteredAndSortedArticles.length > 0 ? (
              filteredAndSortedArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-600 text-lg py-10">Tidak ada artikel yang cocok dengan kriteria Anda.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;