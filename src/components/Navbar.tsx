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
            ? 'bg-kiur-dark/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-lg shadow-black/40'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-kiur-cyan rounded-lg px-1"
            aria-label="Kiur Code Inicio"
          >
            <div className="w-9 h-9 rounded-xl bg-kiur-surfaceLight border border-kiur-cyan/30 flex items-center justify-center group-hover:border-kiur-cyan transition-colors shadow-sm shadow-kiur-cyan/20">
              <span className="font-mono text-kiur-cyan font-bold text-base">&lt;/&gt;</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1">
                Kiur<span className="text-kiur-cyan">Code</span>
                <span className="w-1.5 h-1.5 rounded-full bg-kiur-cyan animate-pulse"></span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-medium text-kiur-textMuted -mt-1 hidden sm:block">
                Digital Solutions
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Navegación principal">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-wider font-semibold text-kiur-textMuted hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-kiur-cyan after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-250 focus:outline-none focus:text-kiur-cyan"
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
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase bg-kiur-cyan text-kiur-dark hover:bg-white hover:shadow-glow-cyan transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-kiur-dark focus:ring-kiur-cyan"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Contactar</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-kiur-textMuted hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-kiur-cyan"
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
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-md lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 bottom-0 w-[82%] max-w-sm z-50 bg-kiur-surface border-l border-white/10 p-6 flex flex-col justify-between transform transition-transform duration-300 ease-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
            <span className="font-display font-bold text-lg text-white">
              Kiur<span className="text-kiur-cyan">Code</span>
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 text-kiur-textMuted hover:text-white rounded-md"
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
                className="text-base font-medium text-kiur-textMuted hover:text-kiur-cyan hover:translate-x-1 transition-all py-1.5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-50" />
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-white/10 space-y-3">
          <p className="text-xs text-kiur-textMuted">
            {BRAND.location}
          </p>
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold uppercase tracking-wider bg-kiur-cyan text-kiur-dark hover:bg-white transition-colors shadow-glow-cyan"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Hablar por WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
};
