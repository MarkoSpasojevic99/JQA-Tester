import React from 'react';
import ContactForm from '../sections/ContactForm';

const ContactPage = () => (
  <div className="container mx-auto py-20">
    <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
    <p className="text-lg mb-4">
      Have questions? Want to learn more about our services? Reach out to us using the form below.
    </p>
    <ContactForm />
  </div>
);

export default ContactPage;