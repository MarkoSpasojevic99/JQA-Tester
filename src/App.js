import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/pages/Home';
import AboutUsPage from './components/pages/AboutUsPage';
import ServicesPage from './components/pages/ServicesPage';
import ContactPage from './components/pages/ContactPage';
import CompanyDetails from './components/sections/CompanyDetails';
import TeamPage from './components/pages/TeamPage';
import HistoryPage from './components/pages/HistoryPage';
import AutomationPage from './components/pages/AutomationPage';
import ManualTestingPage from './components/pages/ManualTestingPage';
import ClientsPage from './components/pages/ClientsPage';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/company-details" element={<CompanyDetails />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/automation" element={<AutomationPage />} />
            <Route path="/manual-testing" element={<ManualTestingPage />} />
            <Route path="/clients" element={<ClientsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
  
};

export default App;