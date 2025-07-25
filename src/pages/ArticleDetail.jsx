// src/pages/ArticleDetail.jsx

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import blogArticlesData from '../data/blogArticles'; // Ensure this path is correct
import ArticleCard, { ArticleCardSkeleton } from '../components/ArticleCard'; // Import ArticleCardSkeleton

// Fungsi helper escapeJsonString tidak lagi diperlukan jika kita pakai JSON.stringify
// const escapeJsonString = (str) => {
//   if (typeof str !== 'string') return "";
//   return str.replace(/\\/g, '\\\\')
//             .replace(/"/g, '\\"')
//             .replace(/\n/g, '\\n')
//             .replace(/\r/g, '\\r')
//             .replace(/\t/g, '\\t');
// };


// --- Skeleton Component for Main Article Detail ---
const ArticleDetailSkeleton = () => (
    // Padding top disesuaikan dengan tinggi navbar Anda, misalnya pt-16 (64px) untuk fix-top navbar
    <div className="pt-20 bg-gray-50 min-h-screen"> {/* DIUBAH DARI pt-20 MENJADI pt-16 */}
        <div className="max-w-7xl mx-auto p-4 md:p-8 animate-pulse">
            {/* Back Link Placeholder */}
            <div className="h-4 bg-gray-200 rounded w-24 mb-6"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Main Article Content Skeleton (3/4 width) */}
                <div className="md:col-span-3 bg-white shadow-lg rounded-lg p-6 md:p-8">
                    {/* Image Placeholder */}
                    <div className="w-full h-64 md:h-80 bg-gray-300 rounded-md mb-6"></div>

                    {/* Category & Date Placeholder */}
                    <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>

                    {/* Title Placeholder */}
                    <div className="h-8 bg-gray-300 rounded w-full mb-3"></div>
                    <div className="h-8 bg-gray-300 rounded w-5/6 mb-4"></div>

                    {/* Full Content Paragraphs Placeholder */}
                    <div className="space-y-3 mb-6">
                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                        <div className="h-4 bg-gray-200 rounded w-11/12"></div>
                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                        <div className="h-4 bg-gray-200 rounded w-10/12"></div>
                    </div>

                    {/* Author/Date Info Placeholder */}
                    <div className="border-t border-gray-200 pt-4 mt-8 space-y-2">
                        <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                    </div>
                </div>

                {/* Related Articles Skeleton (1/4 width) */}
                <div className="md:col-span-1 bg-white shadow-lg rounded-lg p-4 md:p-6">
                    <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto mb-4"></div> {/* Title placeholder */}
                    <div className="flex flex-col gap-4">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <ArticleCardSkeleton key={index} isRelated={true} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const ArticleDetail = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [relatedArticles, setRelatedArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on component mount/id change
        setIsLoading(true);
        const loadArticle = async () => {
            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 800));

            const foundArticle = blogArticlesData.find(art => art.id === parseInt(id));
            setArticle(foundArticle);

            if (foundArticle) {
                // Filter related articles by category, excluding current article
                const filteredRelated = blogArticlesData.filter(
                    art => art.category === foundArticle.category && art.id !== foundArticle.id
                )
                // Sort by date (newest first) and take top 3
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .slice(0, 3);
                setRelatedArticles(filteredRelated);
            }
            setIsLoading(false);
        };

        loadArticle();
    }, [id]); // Dependency array: re-run effect if 'id' changes

    if (!isLoading && !article) {
        return (
            <div className="pt-16 min-h-screen bg-gray-100 flex items-center justify-center p-4"> {/* DIUBAH DARI pt-20 MENJADI pt-16 */}
                <Helmet>
                    <title>Artikel Tidak Ditemukan - GreenGrow</title>
                    <meta name="description" content="Halaman artikel tidak ditemukan." />
                    <link rel="canonical" href="https://www.yourdomain.com/blog" /> {/* Ganti dengan URL blog utama Anda */}
                </Helmet>
                <p className="text-xl text-gray-700 text-center">Artikel tidak ditemukan.</p>
            </div>
        );
    }

    if (isLoading) {
        return <ArticleDetailSkeleton />;
    }

    // --- JSON-LD Object Creation for Schema.org Article ---
    // Pastikan semua properti yang ada di sini juga ada di objek artikel Anda
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": article.title,
        "image": [
            `https://www.yourdomain.com${article.imageUrl}` // Ganti dengan domain Anda
        ],
        "datePublished": article.date,
        "dateModified": article.lastUpdated || article.date, // Gunakan lastUpdated jika ada, jika tidak, gunakan date
        "author": {
            "@type": "Person",
            "name": article.author
        },
        "publisher": {
            "@type": "Organization",
            "name": "GreenGrow", // Ganti dengan nama organisasi Anda
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.yourdomain.com/path-to-your-logo.png" // Ganti dengan URL logo Anda
            }
        },
        "description": article.description,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.yourdomain.com/blog/${article.id}` // Ganti dengan domain Anda
        }
    };


    return (
        <>
            <Helmet>
                <title>{article.title} - GreenGrow Blog</title>
                <meta name="description" content={article.description.substring(0, 160) + (article.description.length > 160 ? "..." : "")} />
                <link rel="canonical" href={`https://www.yourdomain.com/blog/${article.id}`} /> {/* Ganti dengan domain Anda */}
                {/* Open Graph Tags for Social Media Sharing */}
                <meta property="og:title" content={`${article.title} - GreenGrow Blog`} />
                <meta property="og:description" content={article.description.substring(0, 160) + (article.description.length > 160 ? "..." : "")} />
                <meta property="og:image" content={`https://www.yourdomain.com${article.imageUrl}`} /> {/* Ganti dengan domain Anda */}
                <meta property="og:url" content={`https://www.yourdomain.com/blog/${article.id}`} /> {/* Ganti dengan domain Anda */}
                <meta property="og:type" content="article" />
                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${article.title} - GreenGrow Blog`} />
                <meta name="twitter:description" content={article.description.substring(0, 160) + (article.description.length > 160 ? "..." : "")} />
                <meta name="twitter:image" content={`https://www.yourdomain.com${article.imageUrl}`} /> {/* Ganti dengan domain Anda */}

                {/* Schema.org JSON-LD for Article */}
                <script type="application/ld+json">
                    {JSON.stringify(articleSchema)}
                </script>
            </Helmet>

            {/* DIUBAH DARI pt-20 MENJADI pt-16 */}
            <div className="pt-16 bg-gray-50 min-h-screen font-poppins">
                <div className="max-w-7xl mx-auto p-4 md:p-8">
                    <Link to="/blog" className="text-green-600 hover:text-green-800 text-sm font-semibold mb-6 inline-block">
                        &larr; Kembali
                    </Link>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Main Article Content */}
                        <div className="md:col-span-3 bg-white shadow-lg rounded-lg p-6 md:p-8">
                            <img
                                src={article.imageUrl}
                                alt={article.title}
                                className="w-full h-64 md:h-80 object-cover rounded-md mb-6 shadow-md"
                                loading="lazy"
                            />
                            <span className="text-gray-500 text-sm block mb-2">
                                {article.category} | {article.date}
                            </span>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 leading-tight">
                                {article.title}
                            </h1>
                            {/* Tambahkan text-justify di sini */}
                            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 whitespace-pre-line text-justify">
                                {article.fullContent}
                            </p>

                            <div className="border-t border-gray-200 pt-4 mt-8 text-gray-600 text-sm">
                                <p>Ditulis oleh: <span className="font-semibold">{article.author}</span></p>
                                <p>Terakhir diperbarui: <span className="font-semibold">{article.lastUpdated || article.date}</span></p>
                            </div>
                        </div>

                        {/* Related Articles Section */}
                        {relatedArticles.length > 0 && (
                            <div className="md:col-span-1 bg-white shadow-lg rounded-lg p-4 md:p-6">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center">Artikel Terkait</h2>
                                <div className="flex flex-col gap-4">
                                    {relatedArticles.map(relArticle => (
                                        <ArticleCard key={relArticle.id} article={relArticle} isRelated={true} />
                                    ))}
                                </div>
                            </div>
                        )}
                         {/* Fallback jika tidak ada artikel terkait */}
                         {relatedArticles.length === 0 && !isLoading && (
                            <div className="md:col-span-1 bg-white shadow-lg rounded-lg p-4 md:p-6 flex items-center justify-center">
                                <p className="text-gray-500 text-center text-sm">Tidak ada artikel terkait.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ArticleDetail;