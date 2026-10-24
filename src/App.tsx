import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Solutions } from './components/Solutions';
import { SmartCardsSection } from './components/SmartCardsSection';
import { SoftwareDevSection } from './components/SoftwareDevSection';
import { Portfolio } from './components/Portfolio';
import { AboutFounder } from './components/AboutFounder';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-kiur-black flex flex-col selection:bg-kiur-red selection:text-white">
      {/* Top Fixed Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <Solutions />
        <SmartCardsSection />
        <SoftwareDevSection />
        <Portfolio />
        <AboutFounder />
        <Contact />
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Global WhatsApp Button */}
      <WhatsAppFloating />
    </div>
  );
};

export default App;
