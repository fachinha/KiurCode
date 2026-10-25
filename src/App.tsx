import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Solutions } from './components/Solutions';
import { SmartCardsSection } from './components/SmartCardsSection';
import { Portfolio } from './components/Portfolio';
import { AboutFounder } from './components/AboutFounder';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';

export const App: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (scrollY / totalHeight) * 100)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-kiur-black flex flex-col selection:bg-kiur-red selection:text-white">
      {/* Top Scroll Progress Bar in Kiur Red (Algoritmia style) */}
      <div
        id="prog"
        aria-hidden="true"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Top Fixed Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <Solutions />
        <SmartCardsSection />
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
