import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <Header />
      <HeroSection />
      <InfoSection />
      <Footer />
    </div>
  );
}

export default App;
