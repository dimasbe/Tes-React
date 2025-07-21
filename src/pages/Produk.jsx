import React from 'react';
import { FaSeedling } from 'react-icons/fa';

const produk = [
  { nama: 'Lettuce', harga: 'Rp 10.000', img: '/assets/produk/lettuce.jpg' },
  { nama: 'Bayam Hijau', harga: 'Rp 8.000', img: '/assets/produk/bayam.jpeg' },
  { nama: 'Pakcoy', harga: 'Rp 12.000', img: '/assets/produk/pakcoy.jpeg' },
  { nama: 'Kangkung', harga: 'Rp 7.500', img: '/assets/produk/kangkung.jpeg' },
  { nama: 'Sawi Hijau', harga: 'Rp 9.000', img: '/assets/produk/sawi.jpg' },
  { nama: 'Tomat Ceri', harga: 'Rp 15.000', img: '/assets/produk/tomat.jpeg' },
  { nama: 'Selada Merah', harga: 'Rp 11.000', img: '/assets/produk/seladamerah.jpg' },
  { nama: 'Seledri', harga: 'Rp 10.500', img: '/assets/produk/seledri.jpeg' },
  { nama: 'Basil', harga: 'Rp 13.000', img: '/assets/produk/basil.jpeg' },
  { nama: 'Timun Jepang', harga: 'Rp 14.000', img: '/assets/produk/timun.jpeg' },
  { nama: 'Cabe Rawit', harga: 'Rp 9.500', img: '/assets/produk/cabe.jpg' },
  { nama: 'Kale', harga: 'Rp 16.000', img: '/assets/produk/kale.jpg' },
];

const Produk = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto font-poppins">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-700">Produk Kami</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {produk.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition duration-300 ease-in-out p-4 text-center group"
          >
            <img
              src={item.img}
              alt={item.nama}
              className="h-40 w-full object-cover rounded-md mb-3 group-hover:opacity-90"
            />
            <h3 className="font-semibold text-lg group-hover:text-green-700">{item.nama}</h3>
            <p className="text-green-600">{item.harga}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center flex flex-col items-center">
        <FaSeedling className="text-green-500 text-4xl mb-2 animate-bounce" />
        <p className="text-xl font-medium text-green-800">
          Siap antar ke rumah kamu dalam keadaan fresh!!! 
        </p>
      </div>
    </div>
  );
};

export default Produk;
