// components/sections/HeroSection.js
import React from 'react';

const HeroSection = () => (
  <section className="bg-gradient-to-r from-[#1E90FF] to-[#00BFFF] text-white py-20">
    <div className="container mx-auto text-center">
      <h1 className="text-5xl font-bold mb-6">Ensuring Software Excellence</h1>
      <p className="text-lg mb-8">
        Partner with us for reliable manual and automated testing services. Together, we build flawless software experiences that exceed expectations.
      </p>
      <div className="flex justify-center gap-4">
        <a href="#about-us" className="bg-yellow-400 text-black px-6 py-3 rounded hover:bg-yellow-300">
          About Us
        </a>
        <a href="#services" className="bg-white text-blue-700 px-6 py-3 rounded hover:bg-gray-100">
          Our Services
        </a>
        <a href="#clients" className="bg-transparent border-2 border-white px-6 py-3 rounded hover:bg-white hover:text-blue-700">
          Our Clients
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
