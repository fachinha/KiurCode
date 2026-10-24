import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustValue } from './components/TrustValue';
import { Solutions } from './components/Solutions';
import { SmartCardsSection } from './components/SmartCardsSection';
import { WebDevSection } from './components/WebDevSection';
import { ErpSection } from './components/ErpSection';
import { HowWeWork } from './components/HowWeWork';
import { Portfolio } from './components/Portfolio';
import { AboutFounder } from './components/AboutFounder';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-kiur-dark text-kiur-text flex flex-col selection:bg-kiur-cyan selection:text-kiur-dark">
      {/* Top Fixed Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <TrustValue />
        <Solutions />
        <SmartCardsSection />
        <WebDevSection />
        <ErpSection />
        <HowWeWork />
        <Portfolio />
        <AboutFounder />
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Global WhatsApp Button */}
      <WhatsAppFloating />
    </div>
  );
};

export default App;
