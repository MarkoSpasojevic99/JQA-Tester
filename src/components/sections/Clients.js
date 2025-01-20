import React from 'react';
import { Link } from 'react-router-dom';

const Clients = () => (
  <section id="clients" className="py-20 bg-gray-100">
    <div className="container mx-auto text-center">
      <h3 className="text-3xl font-bold mb-6">Our Clients</h3>
      <p className="text-lg mb-4">Trusted by businesses worldwide to ensure software excellence.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Link to="/company-details" className="p-4 border hover:bg-gray-200">Client A</Link>
        <Link to="/company-details" className="p-4 border hover:bg-gray-200">Client B</Link>
        <Link to="/company-details" className="p-4 border hover:bg-gray-200">Client C</Link>
        <Link to="/company-details" className="p-4 border hover:bg-gray-200">Client D</Link>
      </div>
    </div>
  </section>
);

export default Clients;