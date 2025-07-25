// src/pages/RegisterPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FcGoogle } from 'react-icons/fc';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import loginIllustration from '../assets/Logo2.jpg'; // Bisa pakai ilustrasi yang sama

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Konfirmasi Kata Sandi tidak cocok!');
      return;
    }
    console.log('Register with:', { name, email, password });
    alert('Simulasi Pendaftaran berhasil! (Lihat konsol)');
  };

  const handleGoogleRegister = () => {
    console.log('Register with Google clicked');
    alert('Simulasi Pendaftaran dengan Google! (Membutuhkan integrasi backend)');
  };

  return (
    <>
      <Helmet>
        <title>Daftar - GreenGrow</title>
      </Helmet>

      <Navbar />

      <div className="flex flex-col min-h-screen bg-green-600 font-poppins">
        <main className="flex-grow flex items-center justify-center p-4 pt-24">
          <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-2xl md:rounded-xl shadow-xl overflow-hidden">
            {/* Form */}
            <div className="w-full md:w-1/2 bg-green-100 p-6 sm:p-8">
              <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Daftar</h2>

              <form onSubmit={handleRegister} className="space-y-5 text-sm">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Nama Lengkap</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                    placeholder="Nama Anda"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                    placeholder="nama@contoh.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Kata Sandi</label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                    placeholder="Minimal 6 karakter"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength="6"
                  />
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-1">Konfirmasi Kata Sandi</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                    placeholder="Ulangi Kata Sandi"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2.5 rounded-md font-semibold hover:bg-green-700 transition duration-300"
                >
                  Daftar
                </button>
              </form>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-green-100 px-2 text-gray-500">Atau daftar dengan</span>
                </div>
              </div>

              <button
                onClick={handleGoogleRegister}
                className="w-full flex items-center justify-center bg-white border border-gray-300 py-2.5 rounded-md hover:bg-gray-100 transition"
              >
                <FcGoogle className="text-2xl mr-2" />
                Daftar dengan Google
              </button>

              <p className="text-center text-gray-600 text-xs mt-6">
                Sudah punya akun?{' '}
                <Link to="/login" className="text-green-600 hover:underline font-semibold">
                  Masuk Sekarang
                </Link>
              </p>
            </div>

            {/* Ilustrasi */}
            <div className="hidden md:flex md:w-1/2 bg-green-600 items-center justify-center p-6">
              <div className="w-[65%] h-[65%] bg-green-500 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src={loginIllustration}
                  alt="Register Illustration"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default RegisterPage;
