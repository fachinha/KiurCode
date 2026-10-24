import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { BRAND, NAV_LINKS, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/content';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-zinc-200 py-3 shadow-sm'
            : 'bg-white/90 backdrop-blur-sm border-b border-zinc-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with official logo image */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-kiur-red rounded-lg"
            aria-label="Kiur Code Inicio"
          >
            <img
              src="/logo.png"
              alt="Kiur Code Logo"
              className="h-9 sm:h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegación principal">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-[0.16em] font-bold text-zinc-600 hover:text-kiur-red transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-kiur-red after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-250 focus:outline-none focus:text-kiur-red"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile trigger */}
          <div className="flex items-center gap-3">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase btn-red"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Contactar</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-zinc-700 hover:text-black hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-kiur-red"
              aria-expanded={mobileMenuOpen}
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 bottom-0 w-[84%] max-w-sm z-50 bg-white border-l border-zinc-200 p-6 flex flex-col justify-between transform transition-transform duration-300 ease-out lg:hidden shadow-2xl ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-zinc-200 mb-6">
            <img
              src="/logo.png"
              alt="Kiur Code"
              className="h-8 w-auto object-contain"
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 text-zinc-500 hover:text-black rounded-md"
              aria-label="Cerrar menú"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-wider font-bold text-zinc-700 hover:text-kiur-red hover:translate-x-1 transition-all py-1.5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-kiur-red opacity-80" />
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-zinc-200 space-y-3">
          <p className="text-xs text-zinc-500">
            {BRAND.location}
          </p>
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider btn-red"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Hablar por WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
};
