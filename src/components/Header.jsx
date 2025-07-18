import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-blue-800 text-white py-4 shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold">Portal CPNS 2025</h1>
        <nav>
          <a href="#info" className="mx-2 hover:underline text-sm md:text-base">Informasi</a>
          <a href="#contact" className="mx-2 hover:underline text-sm md:text-base">Kontak</a>
        </nav>
      </div>
    </header>
  );
}
