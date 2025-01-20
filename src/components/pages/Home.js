import React from 'react';
import HeroSection from '../sections/HeroSection';
import AboutUs from '../sections/AboutUs';
import Services from '../sections/Services';
import Clients from '../sections/Clients';
import ContactForm from '../sections/ContactForm';
import CompanyDetails from '../sections/CompanyDetails';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <AboutUs />
      <Services />
      <Clients />
      <CompanyDetails />
      <ContactForm />
    </main>
  );
};

export default Home;

