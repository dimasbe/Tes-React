import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Tentang from './pages/Tentang'
import Produk from './pages/Produk'
import Kontak from './pages/Kontak'

function App() {
  return (
    <Router>
      <div className="font-sans bg-white text-gray-800 min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tentang" element={<Tentang />} />
            <Route path="/produk" element={<Produk />} />
            <Route path="/kontak" element={<Kontak />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
