import React from 'react';

const ContactForm = () => (
  <section id="contact" className="py-20 bg-white">
    <div className="container mx-auto">
      <h3 className="text-3xl font-bold mb-6 text-center">Contact Us</h3>
      <form className="max-w-xl mx-auto bg-gray-100 p-6 shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Name</label>
          <input type="text" className="w-full border px-4 py-2" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input type="email" className="w-full border px-4 py-2" placeholder="Your Email" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Message</label>
          <textarea className="w-full border px-4 py-2" rows="4" placeholder="Your Message"></textarea>
        </div>
        <button className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-600">Send</button>
      </form>
    </div>
  </section>
);

export default ContactForm;