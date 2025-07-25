import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaGoogle, FaFacebookF, FaTwitter } from 'react-icons/fa';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import greenGrowLogo from '../assets/Logo.png';
import loginIllustration from '../assets/Logo2.jpg';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login with:', { email, password, rememberMe });
    alert('Simulasi Login berhasil! (Lihat konsol)');
  };

  const handleSocialLogin = (platform) => {
    console.log(`Login with ${platform} clicked`);
    alert(`Simulasi Login dengan ${platform}! (Membutuhkan integrasi backend)`);
  };

  return (
    <>
      <Helmet>
        <title>Login - GreenGrow</title>
      </Helmet>

      <Navbar />

      {/* Wrapper agar footer selalu di bawah */}
      <div className="flex flex-col min-h-screen bg-green-600 font-poppins">
        <main className="flex-grow flex items-center justify-center p-4 pt-24">
          <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-2xl md:rounded-xl shadow-xl overflow-hidden">
            {/* Form Login */}
            <div className="w-full md:w-1/2 flex flex-col justify-center bg-green-100 p-6 sm:p-8">
              {/* Logo */}
              <div className="flex justify-center mb-4">
                <div className="bg-green-500 p-2 rounded-full">
                  <img src={greenGrowLogo} alt="GreenGrow Logo" className="h-10 object-contain" />
                </div>
              </div>

              <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">GreenGrow</h1>
              <p className="text-center text-gray-600 mb-6 text-sm sm:text-base">
                Masuk ke akun kamu untuk melanjutkan
              </p>

              <form onSubmit={handleLogin} className="space-y-4 text-sm">
                <div className="relative">
                  <MdEmail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                  <input
                    type="email"
                    className="w-full pl-12 pr-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="relative">
                  <RiLockPasswordFill className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                  <input
                    type="password"
                    className="w-full pl-12 pr-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="flex justify-between items-center text-xs mt-2">
                  <label className="flex items-center text-gray-700">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-green-600 rounded mr-2"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    Ingat saya
                  </label>
                  <Link to="/forgot-password" className="text-green-600 hover:underline font-medium">
                    Lupa password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2.5 rounded-md font-semibold hover:bg-green-700 transition duration-300"
                >
                  Masuk
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-green-100 px-2 text-gray-500">Atau masuk dengan</span>
                </div>
              </div>

              {/* Sosial login */}
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

              <p className="text-center text-gray-600 text-xs">
                Belum punya akun?{' '}
                <Link to="/register" className="text-green-600 hover:underline font-semibold">
                  Daftar di sini
                </Link>
              </p>
            </div>

            {/* Ilustrasi */}
            <div className="hidden md:flex md:w-1/2 bg-green-600 items-center justify-center p-6">
              <div className="w-[65%] h-[65%] bg-green-500 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src={loginIllustration}
                  alt="Login Illustration"
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

export default LoginPage;
