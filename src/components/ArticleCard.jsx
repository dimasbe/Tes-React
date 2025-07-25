// src/components/ArticleCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';

// ArticleCardSkeleton (jika Anda memisahkannya ke sini atau tetap di BlogPage)
export const ArticleCardSkeleton = ({ isRelated = false }) => (
    // Skeleton disesuaikan untuk tata letak gambar di atas
    <div className={`bg-white rounded-lg shadow-md overflow-hidden animate-pulse ${isRelated ? '' : 'flex flex-col h-full'}`}> {/* Tambah flex flex-col h-full */}
        {isRelated ? (
            // Untuk related articles: placeholder gambar di atas
            <div className="w-full h-32 bg-gray-300 rounded-t-lg"></div> // Ukuran gambar untuk related
        ) : (
            // Untuk main articles: placeholder gambar di atas
            <div className="w-full h-48 bg-gray-300"></div>
        )}
        <div className={`p-4 flex flex-col flex-grow`}> {/* Tambah flex flex-col flex-grow */}
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div> {/* Kategori/Tanggal */}
            <div className="h-5 bg-gray-300 rounded w-full mb-2"></div> {/* Judul */}
            <div className="h-4 bg-gray-200 rounded w-5/6"></div> {/* Deskripsi baris 1 */}
            {isRelated ? null : ( // Sembunyikan baris kedua deskripsi untuk related articles
                <>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mt-1"></div>
                    {/* Placeholder untuk tombol Baca Selengkapnya */}
                    <div className="h-8 bg-gray-200 rounded w-1/3 mt-auto"></div> {/* mt-auto dorong ke bawah */}
                </>
            )}
        </div>
    </div>
);


const ArticleCard = ({ article, isRelated = false }) => {
    // Fungsi untuk memotong deskripsi agar tidak terlalu panjang
    const truncateDescription = (text, maxLength) => {
        if (!text) return ''; // Tambahkan penanganan jika teks kosong
        if (text.length <= maxLength) return text;
        
        // Memotong berdasarkan jumlah kata atau karakter
        let truncated = text.substring(0, maxLength);
        // Pastikan tidak memotong di tengah kata
        truncated = truncated.substring(0, Math.min(truncated.length, truncated.lastIndexOf(' ')));
        return truncated + '...';
    };

    // Sesuaikan panjang pemotongan deskripsi
    // Untuk artikel utama, berikan lebih banyak ruang (misal 180-200 karakter)
    // Untuk artikel terkait, tetap pendek (misal 80-100 karakter)
    const displayDescription = isRelated ? truncateDescription(article.description, 100) : truncateDescription(article.description, 180);

    return (
        <Link
            to={`/blog/${article.id}`}
            // Tambah flex flex-col dan h-full untuk membuat kartu mengisi tinggi kolom
            className={`block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 
                         ${isRelated ? 'p-3' : 'overflow-hidden flex flex-col h-full'}`} // h-full penting di sini
        >
            {/* Gambar selalu di bagian atas */}
            <img
                src={article.imageUrl}
                alt={article.title}
                // Sesuaikan ukuran gambar berdasarkan isRelated
                className={`w-full object-cover rounded-md ${isRelated ? 'h-32 mb-3' : 'h-48 object-center'}`}
                loading="lazy"
            />

            {/* Konten teks, gunakan flex-grow untuk mengisi sisa ruang */}
            <div className={`flex flex-col flex-grow ${isRelated ? '' : 'p-5'}`}>
                <span className="text-gray-500 text-xs sm:text-sm block mb-1">
                    {article.category} | {article.date}
                </span>
                <h3 className={`font-semibold text-gray-800 ${isRelated ? 'text-base leading-tight mb-1' : 'text-lg md:text-xl mb-2 leading-snug'}`}>
                    {article.title}
                </h3>
                {/* Deskripsi dengan text-justify. Tambah overflow-hidden jika perlu */}
                <p className={`text-gray-600 ${isRelated ? 'text-xs' : 'text-sm'} leading-relaxed text-justify mb-4`}>
                    {displayDescription}
                </p>
                
                {/* Tombol "Baca Selengkapnya" didorong ke bagian bawah kartu */}
                {!isRelated && (
                    <span className="inline-block text-green-600 hover:text-green-800 font-medium text-sm mt-auto"> {/* mt-auto akan mendorong elemen ini ke bawah */}
                        Baca Selengkapnya &rarr;
                    </span>
                )}
            </div>
        </Link>
    );
};

export default ArticleCard;