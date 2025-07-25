import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // <-- PENTING: Import HelmetProvider

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Tentang from './pages/Tentang';
import Produk from './pages/Produk';
import DetailProduk from './pages/DetailProduk'; // <-- PENTING: Import DetailProduk
import Kontak from './pages/Kontak';
import BlogPage from './pages/BlogPage';
import ArticleDetail from './pages/ArticleDetail';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

import AdminLayout from './admin_master/AdminLayout';
import Dashboard from './admin_master/Dashboard';
import ProdukCRUD from './admin_master/ProdukCRUD';
import StatistikPenjualan from './admin_master/StatistikPenjualan';
import CetakLaporan from './admin_master/CetakLaporan';

function App() {
  return (
    <HelmetProvider> {/* <-- PENTING: Bungkus seluruh aplikasi dengan HelmetProvider */}
      <Router>
        <div className="font-sans text-gray-800 min-h-screen flex flex-col">
          <Routes>
            {/* Rute dengan Navbar dan Footer */}
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <main className="flex-grow">
                    <Home />
                  </main>
                  <Footer />
                </>
              }
            />
            <Route
              path="/tentang"
              element={
                <>
                  <Navbar />
                  <main className="flex-grow">
                    <Tentang />
                  </main>
                  <Footer />
                </>
              }
            />
            <Route
              path="/produk"
              element={
                <>
                  <Navbar />
                  <main className="flex-grow">
                    <Produk />
                  </main>
                  <Footer />
                </>
              }
            />
            {/* Rute Baru untuk Halaman Detail Produk */}
            <Route
              path="/produk/detail/:productId" // Path dengan parameter ID produk, sesuai dengan struktur URL yang Anda gunakan
              element={
                <>
                  <Navbar />
                  <main className="flex-grow">
                    <DetailProduk />
                  </main>
                  <Footer />
                </>
              }
            />
            <Route
              path="/kontak"
              element={
                <>
                  <Navbar />
                  <main className="flex-grow">
                    <Kontak />
                  </main>
                  <Footer />
                </>
              }
            />
            <Route
              path="/blog"
              element={
                <>
                  <Navbar />
                  <main className="flex-grow">
                    <BlogPage />
                  </main>
                  <Footer />
                </>
              }
            />
            {/* Rute untuk Halaman Detail Artikel */}
            <Route
              path="/blog/:id"
              element={
                <>
                  <Navbar />
                  <main className="flex-grow">
                    <ArticleDetail />
                  </main>
                  <Footer />
                </>
              }
            />

            {/* Rute untuk Halaman Login dan Register (tanpa Navbar dan Footer) */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Halaman Admin */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="produk" element={<ProdukCRUD />} />
              <Route path="statistik" element={<StatistikPenjualan />} />
              <Route path="laporan" element={<CetakLaporan />} />
            </Route>

            {/* Optional: Halaman 404 Not Found */}
            <Route path="*" element={
              <>
                <Navbar />
                <main className="flex-grow flex items-center justify-center pt-20">
                  <h1 className="text-3xl font-bold text-gray-700">404 - Halaman Tidak Ditemukan</h1>
                </main>
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;