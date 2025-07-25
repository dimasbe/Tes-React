// src/pages/DetailProduk.jsx

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';

import { allProducts } from '../data/produk'; // Pastikan path ini benar

// --- Skeleton Components for Detail Page ---
// (Tidak ada perubahan pada komponen Skeleton)
const DetailHeroSkeleton = () => (
    <div className="flex flex-col md:flex-row gap-8 sm:gap-12 animate-pulse mb-10 p-4 sm:p-6 bg-white rounded-xl shadow-lg">
        <div className="w-full md:w-1/2 bg-gray-300 rounded-lg h-64 sm:h-80 md:h-96 flex-shrink-0"></div>
        <div className="w-full md:w-1/2 space-y-4 flex-grow">
            <div className="h-10 bg-gray-300 rounded w-3/4"></div> {/* Title */}
            <div className="h-6 bg-gray-200 rounded w-1/3"></div> {/* Price */}
            <div className="h-4 bg-gray-200 rounded w-full"></div> {/* Desc line 1 */}
            <div className="h-4 bg-gray-200 rounded w-11/12"></div> {/* Desc line 2 */}
            <div className="h-4 bg-gray-200 rounded w-full"></div> {/* Desc line 3 */}
            <div className="h-4 bg-gray-200 rounded w-5/6"></div> {/* Desc line 4 */}
            <div className="h-8 bg-gray-200 rounded w-1/4 mt-4"></div> {/* Quantity */}
            <div className="h-12 bg-gray-300 rounded w-full mt-6"></div> {/* Button */}
        </div>
    </div>
);

const RelatedProductsSkeleton = () => (
    <div className="animate-pulse bg-white rounded-xl shadow-lg p-4 sm:p-6">
        <div className="h-8 bg-gray-300 rounded w-1/3 mx-auto mb-6"></div> {/* Section Title */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-gray-200 rounded-lg shadow-sm overflow-hidden h-64 flex flex-col">
                    <div className="h-3/5 bg-gray-300 w-full"></div> {/* Image */}
                    <div className="p-3 space-y-2 flex-grow">
                        <div className="h-4 bg-gray-300 rounded w-3/4"></div> {/* Name */}
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div> {/* Price */}
                        <div className="h-10 bg-gray-300 rounded w-full mt-2"></div> {/* Link/Button */}
                    </div>
                </div>
            ))}
        </div>
    </div>
);

// Helper function to parse 'Rp X.XXX' string to number
const parsePriceToNumber = (priceString) => {
    if (!priceString) return 0;
    return parseInt(priceString.replace('Rp ', '').replace(/\./g, ''), 10);
};

// Fungsi helper escapeJsonString tidak lagi diperlukan jika kita pakai JSON.stringify
// const escapeJsonString = (str) => {
//     if (typeof str !== 'string') return "";
//     return str.replace(/\\/g, '\\\\')
//               .replace(/"/g, '\\"')
//               .replace(/\n/g, '\\n')
//               .replace(/\r/g, '\\r')
//               .replace(/\t/g, '\\t');
// };


const DetailProduk = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsLoading(true);
        const fetchProduct = setTimeout(() => {
            const foundProduct = allProducts.find(p => p.id === productId);

            if (foundProduct) {
                setProduct(foundProduct);
                setQuantity(1);
                const filteredRelated = allProducts.filter(
                    p => p.id !== productId && p.category === foundProduct.category
                );
                setRelatedProducts(filteredRelated.slice(0, 4));
            } else {
                setProduct(null);
                setRelatedProducts([]);
            }
            setIsLoading(false);
        }, 800);

        return () => clearTimeout(fetchProduct);
    }, [productId]);

    const handleQuantityChange = (event) => {
        const value = Math.max(1, parseInt(event.target.value) || 1);
        if (product && value > product.stock) {
            setQuantity(product.stock);
        } else {
            setQuantity(value);
        }
    };

    const handleAddToCart = () => {
        if (product) {
            if (product.stock === 0) {
                alert("Produk ini sedang habis. Tidak bisa ditambahkan ke keranjang.");
                return;
            }
            if (quantity > product.stock) {
                alert(`Jumlah yang diminta (${quantity}) melebihi stok yang tersedia (${product.stock}).`);
                return;
            }
            alert(`Menambahkan ${quantity} unit ${product.nama} ke keranjang!`);
        }
    };

    if (isLoading) {
        return (
            <div className="pt-20 bg-gray-100 min-h-screen">
                <div className="p-4 sm:p-6 max-w-6xl mx-auto font-poppins text-gray-800">
                    <div className="h-4 bg-gray-200 rounded w-24 mb-6 animate-pulse"></div>
                    <DetailHeroSkeleton />
                    <RelatedProductsSkeleton />
                </div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="pt-20 bg-gray-100 min-h-screen flex items-center justify-center px-4">
                <Helmet>
                    <title>Produk Tidak Ditemukan - GreenGrow</title>
                    <meta name="description" content="Halaman produk tidak ditemukan." />
                    <link rel="canonical" href="https://www.yourdomain.com/produk" />
                </Helmet>
                <p className="text-xl text-gray-700 text-center">Produk tidak ditemukan.</p>
            </div>
        );
    }

    const numericPrice = parsePriceToNumber(product.harga);

    // --- JSON-LD Object Creation ---
    // Buat objek JavaScript yang merepresentasikan Schema.org Product
    const productSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": product.nama,
        "image": `https://www.yourdomain.com${product.img}`, // Pastikan URL absolut
        "description": product.description,
        "sku": product.id,
        "brand": {
            "@type": "Brand",
            "name": "GreenGrow" // Ganti dengan nama brand jika ada
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "IDR",
            "price": numericPrice,
            "itemCondition": "https://schema.org/NewCondition",
            "availability": product.stock > 0 ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
            "seller": {
                "@type": "Organization",
                "name": "GreenGrow"
            }
        },
        // Tambahkan jika ada rating, atau hapus jika tidak ada
        // "aggregateRating": {
        //     "@type": "AggregateRating",
        //     "ratingValue": "4.5",
        //     "reviewCount": "10"
        // }
    };

    return (
        <>
            <Helmet>
                <title>{product.nama} - GreenGrow</title>
                <meta name="description" content={product.description.substring(0, 160) + (product.description.length > 160 ? "..." : "")} />
                <link rel="canonical" href={`https://www.yourdomain.com/produk/detail/${product.id}`} />
                {/* Open Graph Tags for Social Media Sharing */}
                <meta property="og:title" content={`${product.nama} - GreenGrow`} />
                <meta property="og:description" content={product.description.substring(0, 160) + (product.description.length > 160 ? "..." : "")} />
                <meta property="og:image" content={`https://www.yourdomain.com${product.img}`} />
                <meta property="og:url" content={`https://www.yourdomain.com/produk/detail/${product.id}`} />
                <meta property="og:type" content="product" />
                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${product.nama} - GreenGrow`} />
                <meta name="twitter:description" content={product.description.substring(0, 160) + (product.description.length > 160 ? "..." : "")} />
                <meta name="twitter:image" content={`https://www.yourdomain.com${product.img}`} />

                {/* Schema.org JSON-LD for Product - Menggunakan JSON.stringify */}
                <script type="application/ld+json">
                    {JSON.stringify(productSchema)}
                </script>
            </Helmet>

            <div className="pt-16 bg-gray-100 min-h-screen">
                <div className="p-4 sm:p-6 max-w-6xl mx-auto font-poppins text-gray-800">
                    {/* Tombol Kembali */}
                    <Link
                        to="/produk"
                        className="text-green-600 hover:text-green-800 text-sm font-semibold mb-6 inline-block"
                    >
                        &larr; Kembali
                    </Link>

                    {/* Product Detail Section */}
                    <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-10">
                        <div className="flex flex-col md:flex-row gap-8 sm:gap-12">
                            <div className="w-full md:w-1/2 flex justify-center items-center p-4 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                                <img
                                    src={product.img}
                                    alt={product.nama}
                                    className="max-w-full h-auto max-h-80 sm:max-h-96 object-contain rounded-lg"
                                    loading="lazy"
                                />
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col">
                                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-green-800 mb-2">{product.nama}</h1>
                                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-600 mb-4">
                                    {new Intl.NumberFormat('id-ID', {
                                        style: 'currency',
                                        currency: 'IDR',
                                        minimumFractionDigits: 0,
                                        maximumFractionDigits: 0
                                    }).format(numericPrice)}
                                </p>
                                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify flex-grow">
                                    {product.description}
                                </p>

                                <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
                                    <label htmlFor="quantity" className="text-lg font-medium text-gray-700 mr-3 mb-2 sm:mb-0">Jumlah:</label>
                                    <input
                                        type="number"
                                        id="quantity"
                                        min="1"
                                        max={product.stock}
                                        value={quantity}
                                        onChange={handleQuantityChange}
                                        className="w-24 p-2 border border-gray-300 rounded-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                        disabled={product.stock === 0}
                                    />
                                    <span className="ml-0 sm:ml-3 mt-2 sm:mt-0 text-gray-600 text-base sm:text-lg">
                                        Stok: {product.stock > 0 ? (
                                            <span className="font-semibold text-green-700">{product.stock}</span>
                                        ) : (
                                            <span className="font-semibold text-red-600">Habis</span>
                                        )}
                                    </span>
                                </div>

                                <button
                                    onClick={handleAddToCart}
                                    className={`w-full font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out transform shadow-md
                    ${product.stock === 0
                                            ? 'bg-gray-400 cursor-not-allowed text-gray-600'
                                            : 'bg-green-700 text-white hover:bg-green-800 hover:scale-105'
                                        }
                    `}
                                    disabled={product.stock === 0}
                                >
                                    {product.stock === 0 ? 'Stok Habis' : 'Tambahkan ke Keranjang'}
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Related Products Section */}
                    {relatedProducts.length > 0 && (
                        <section className="mt-12 bg-white rounded-xl shadow-lg p-6 sm:p-8">
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-800 mb-6 text-center">Produk Terkait</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                                {relatedProducts.map(relProduct => (
                                    <div key={relProduct.id} className="bg-gray-50 rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow duration-300">
                                        <Link to={`/produk/detail/${relProduct.id}`} className="block">
                                            <img
                                                src={relProduct.img}
                                                alt={relProduct.nama}
                                                className="w-full h-40 sm:h-48 object-cover"
                                                loading="lazy"
                                            />
                                            <div className="p-3 sm:p-4">
                                                <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-1">{relProduct.nama}</h3>
                                                <p className="text-green-600 font-bold text-sm sm:text-base">
                                                    {new Intl.NumberFormat('id-ID', {
                                                        style: 'currency',
                                                        currency: 'IDR',
                                                        minimumFractionDigits: 0,
                                                        maximumFractionDigits: 0
                                                    }).format(parsePriceToNumber(relProduct.harga))}
                                                </p>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </>
    );
};

export default DetailProduk;