import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/Hidroponik.jpeg";
import manfaat1 from "../assets/efisien-air.jpg";
import manfaat2 from "../assets/tanpa-tanah.jpg";
import manfaat3 from "../assets/cepat-panen.jpg";
import manfaat4 from "../assets/ramah-lingkungan.jpg";

const manfaat = [
    {
        img: manfaat1,
        title: "Efisien Air",
        desc: "Menggunakan hingga 90% lebih sedikit air dibanding pertanian konvensional.",
    },
    {
        img: manfaat2,
        title: "Tanpa Tanah",
        desc: "Tidak memerlukan lahan luas karena tanaman tumbuh di air bernutrisi.",
    },
    {
        img: manfaat3,
        title: "Pertumbuhan Cepat",
        desc: "Tanaman tumbuh lebih cepat karena nutrisi langsung diserap akar.",
    },
    {
        img: manfaat4,
        title: "Ramah Lingkungan",
        desc: "Minim pestisida dan lebih bersih, cocok untuk lingkungan rumah.",
    },
];

const langkah = [
    "Persiapan",
    "Perakitan",
    "Penanaman",
    "Perawatan",
    "Panen",
];

export default function Home() {
    return (
        <div>
            {/* Hero Section */}
            <div className="relative h-[85vh]">
                <img
                    src={heroImage}
                    alt="Hidroponik"
                    className="w-full h-full object-cover brightness-75"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold mb-4"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Selamat Datang di Dunia Hidroponik
                    </motion.h1>
                    <motion.p
                        className="text-lg max-w-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        Temukan cara modern bertani tanpa tanah, lebih efisien, dan ramah lingkungan.
                    </motion.p>
                </div>
            </div>

            {/* Alur Membuat Hidroponik */}
            <div className="py-16 px-4 bg-green-50">
                <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
                    Alur Membuat Hidroponik
                </h2>
                <div className="flex justify-center items-center gap-4 overflow-x-auto px-4">
                    {langkah.map((step, index) => (
                        <React.Fragment key={index}>
                            <motion.div
                                className="min-w-[100px] h-[100px] rounded-full bg-green-600 text-white flex items-center justify-center text-center font-semibold shadow-lg"
                                whileHover={{ scale: 1.1 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                            >
                                {step}
                            </motion.div>

                            {/* Garis penghubung antar lingkaran */}
                            {index < langkah.length - 1 && (
                                <div className="w-8 h-1 bg-green-500 hidden sm:block"></div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Manfaat Hidroponik */}
            <motion.div
                className="max-w-6xl mx-auto py-16 px-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-bold text-green-700 text-center mb-12">
                    Manfaat Hidroponik
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {manfaat.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-24 h-24 mb-4 rounded-full object-cover border-2 border-green-500"
                            />
                            <h3 className="text-xl font-semibold text-green-700 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Prospek Bisnis Hidroponik */}
                <section className="py-12 bg-white px-6 md:px-20" id="prospek">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-bold mb-8 text-green-600 text-center"
                    >
                        Prospek Bisnis Hidroponik
                    </motion.h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-green-100 p-6 rounded-2xl shadow hover:scale-105 transition"
                        >
                            <h3 className="text-xl font-semibold text-green-700 mb-2">Pasar Konsumen yang Luas</h3>
                            <p className="text-gray-700">
                                Sayuran segar sangat dibutuhkan oleh restoran, hotel, supermarket, dan rumah tangga.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-green-100 p-6 rounded-2xl shadow hover:scale-105 transition"
                        >
                            <h3 className="text-xl font-semibold text-green-700 mb-2">Minim Risiko Cuaca</h3>
                            <p className="text-gray-700">
                                Tanaman hidroponik dapat tumbuh di dalam rumah kaca atau indoor tanpa tergantung musim.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="bg-green-100 p-6 rounded-2xl shadow hover:scale-105 transition"
                        >
                            <h3 className="text-xl font-semibold text-green-700 mb-2">Skalabilitas Usaha</h3>
                            <p className="text-gray-700">
                                Dapat dimulai dari skala kecil rumahan hingga menjadi usaha besar yang memasok ke berbagai daerah.
                            </p>
                        </motion.div>
                    </div>
                </section>
            </motion.div>
        </div>
    );
}