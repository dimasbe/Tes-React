import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const Dashboard = () => {
  const stats = [
    { title: "Total Produk", value: "120" },
    { title: "Penjualan Bulan Ini", value: "Rp 4.500.000" },
    { title: "Stok Hampir Habis", value: "8 Item" },
    { title: "Laporan Bulanan", value: "Siap Dicetak" },
  ];

  return (
    <>
      <Helmet>
        <title>Dashboard Admin | Hidroponik</title>
        <meta
          name="description"
          content="Panel admin untuk mengelola produk, laporan, dan data penjualan hidroponik."
        />
      </Helmet>

      <section className="min-h-screen bg-green-50 px-4 py-10 sm:px-6 lg:px-8">
        <motion.h1
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-green-700 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Dashboard Admin
        </motion.h1>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:scale-[1.03] transition-transform"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-500 text-sm mb-1">{item.title}</p>
              <h2 className="text-xl font-bold text-green-700">{item.value}</h2>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 bg-white p-6 rounded-2xl shadow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-green-700 mb-4">
            Statistik Penjualan
          </h3>
          <p className="text-gray-600 text-sm">
            Grafik penjualan akan muncul di sini (gunakan Chart.js atau Recharts).
          </p>
        </motion.div>
      </section>
    </>
  );
};

export default Dashboard;
