// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-gray-800 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold">QA Testing Experts</h1>
      <nav className="flex gap-6">
        <div className="relative group">
          <Link to="/about-us" className="hover:text-yellow-400">About Us</Link>
          <div className="absolute left-0 hidden group-hover:block bg-gray-700 p-2">
            <Link to="/team" className="block hover:bg-gray-600 px-4 py-2">Our Team</Link>
            <Link to="/history" className="block hover:bg-gray-600 px-4 py-2">Company History</Link>
          </div>
        </div>
        <div className="relative group">
          <Link to="/services" className="hover:text-yellow-400">Services</Link>
          <div className="absolute left-0 hidden group-hover:block bg-gray-700 p-2">
            <Link to="/manual-testing" className="block hover:bg-gray-600 px-4 py-2">Manual Testing</Link>
            <Link to="/automation" className="block hover:bg-gray-600 px-4 py-2">Automation</Link>
          </div>
        </div>
        <Link to="/clients" className="hover:text-yellow-400">Clients</Link>
        <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
      </nav>
    </div>
  </header>
);

export default Header;
