import React from 'react';
import { Link } from 'react-router-dom';

const ClientsPage = () => (
  <div className="container mx-auto py-20">
    <h1 className="text-4xl font-bold mb-6">Our Valued Clients</h1>
    <p className="text-lg mb-4">
      Learn more about our esteemed clients and how we have helped them achieve success.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-4 border hover:shadow-lg">
        <h3 className="text-2xl font-semibold">Client A</h3>
        <p>Details about Client A's project and collaboration with us.</p>
        <Link to="/company-details" className="text-blue-500 hover:underline">Read more</Link>
      </div>
      <div className="p-4 border hover:shadow-lg">
        <h3 className="text-2xl font-semibold">Client B</h3>
        <p>Details about Client B's project and collaboration with us.</p>
        <Link to="/company-details" className="text-blue-500 hover:underline">Read more</Link>
      </div>
      <div className="p-4 border hover:shadow-lg">
        <h3 className="text-2xl font-semibold">Client C</h3>
        <p>Details about Client C's project and collaboration with us.</p>
        <Link to="/company-details" className="text-blue-500 hover:underline">Read more</Link>
      </div>
      <div className="p-4 border hover:shadow-lg">
        <h3 className="text-2xl font-semibold">Client D</h3>
        <p>Details about Client D's project and collaboration with us.</p>
        <Link to="/company-details" className="text-blue-500 hover:underline">Read more</Link>
      </div>
    </div>
  </div>
);

export default ClientsPage;