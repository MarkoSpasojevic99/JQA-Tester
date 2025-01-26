import React from 'react';
import HeroSection from '../sections/HeroSection';
import AboutUs from '../sections/AboutUs';
import Services from '../sections/Services';
import Clients from '../sections/Clients';
import ContactForm from '../sections/ContactForm';

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection />

      {/* About Us Section */}
      <section id="about-us" className="py-20 bg-gray-100">
        <div className="container mx-auto">
          <AboutUs />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto">
          <Services />
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 bg-gray-100">
        <div className="container mx-auto">
          <Clients />
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto">
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default Home;


