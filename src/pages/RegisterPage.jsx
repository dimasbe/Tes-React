import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaGoogle, FaFacebookF, FaTwitter } from 'react-icons/fa'; // Import social icons

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import loginIllustration from '../assets/Logo2.jpg'; // Bisa pakai ilustrasi yang sama

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(''); // State for custom message box

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Konfirmasi Kata Sandi tidak cocok!');
      return;
    }
    console.log('Register with:', { name, email, password });
    setMessage('Simulasi Pendaftaran berhasil! (Lihat konsol)');
  };

  const handleSocialLogin = (provider) => {
    console.log(`Register with ${provider} clicked`);
    setMessage(`Simulasi Pendaftaran dengan ${provider}! (Membutuhkan integrasi backend)`);
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
              <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Register</h2>

              {/* Custom Message Box */}
              {message && (
                <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative mb-4" role="alert">
                  <span className="block sm:inline">{message}</span>
                  <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => setMessage('')}>
                    <svg className="fill-current h-6 w-6 text-blue-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 2.65a1.2 1.2 0 1 1-1.697-1.697l2.758-2.758-2.758-2.759a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-2.651a1.2 1.2 0 1 1 1.697 1.697l-2.758 2.758 2.758 2.759a1.2 1.2 0 0 1 0 1.698z"/></svg>
                  </span>
                </div>
              )}

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
                  Register
                </button>
              </form>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-green-100 px-2 text-gray-500">Atau register dengan</span>
                </div>
              </div>

              {/* Social login buttons */}
              <div className="flex justify-center space-x-3 mb-4">
                <button onClick={() => handleSocialLogin('Google')} className="p-2 border border-gray-300 rounded-full hover:bg-gray-100">
                  <FaGoogle className="w-4 h-4 text-blue-500" />
                </button>
                <button onClick={() => handleSocialLogin('Facebook')} className="p-2 border border-gray-300 rounded-full hover:bg-gray-100">
                  <FaFacebookF className="w-4 h-4 text-blue-700" />
                </button>
                <button onClick={() => handleSocialLogin('Twitter')} className="p-2 border border-gray-300 rounded-full hover:bg-gray-100">
                  <FaTwitter className="w-4 h-4 text-gray-800" />
                </button>
              </div>

              <p className="text-center text-gray-600 text-xs mt-6">
                Sudah punya akun?{' '}
                <Link to="/login" className="text-green-600 hover:underline font-semibold">
                  Login Sekarang
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
