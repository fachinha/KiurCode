import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/content';

const ROTATING_WORDS = ['Vender', 'Crecer', 'Escalar'];

export const Hero: React.FC = () => {
  const [activeWordIdx, setActiveWordIdx] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    const interval = setInterval(() => {
      setActiveWordIdx((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const tickerItems = [
    'Tarjetas Inteligentes NFC',
    'Reseñas de Google en 1 Toque',
    'Desarrollo Web Comercial',
    'Pedidos Directos a WhatsApp',
    'Sistemas ERP a Medida',
    'Control de Stock & Caja',
    'Cero Comisiones por Venta',
    'Soporte Local en Bariloche',
  ];

  return (
    <section className="relative bg-white overflow-hidden bg-grid-light">
      <div 
        style={{
          paddingTop: 'calc(var(--nav-height) + var(--hero-equal-gap))',
          paddingBottom: 'var(--hero-equal-gap)',
        }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center"
      >
        {/* Minimalist Bold Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-black tracking-tight text-zinc-950 max-w-5xl leading-[1.05] mb-8 sm:mb-10 uppercase">
          Tu Negocio Puede <br className="hidden sm:block" />
          <span className="text-kiur-red">
            <span className="hero-swap" aria-label="Vender, Crecer, Escalar">
              {ROTATING_WORDS.map((word, idx) => (
                <span
                  key={word}
                  className={`hero-word ${idx === activeWordIdx ? 'on' : ''}`}
                  aria-hidden={idx !== activeWordIdx}
                >
                  {word}
                </span>
              ))}
            </span>{' '}
            Más.
          </span>
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-8 sm:mb-10">
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.16em] btn-red"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Hablemos de tu proyecto</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#soluciones"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.16em] btn-outline-dark"
          >
            <span>Ver qué vendemos</span>
          </a>
        </div>

        {/* Proof / Results Bar (Hornerito / Algoritmia style on light surface) */}
        <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm text-center">
          <div className="p-3 flex flex-col justify-center">
            <span className="font-display font-black text-base sm:text-lg text-zinc-950 block tracking-tight uppercase">
              Tarjetas NFC
            </span>
            <span className="text-xs text-zinc-500 font-medium mt-1 block">
              Inteligentes
            </span>
          </div>

          <div className="p-3 border-l border-zinc-100 flex flex-col justify-center">
            <span className="font-display font-black text-base sm:text-lg text-kiur-red block tracking-tight uppercase">
              Páginas Web
            </span>
            <span className="text-xs text-zinc-500 font-medium mt-1 block">
              Comerciales
            </span>
          </div>

          <div className="p-3 border-l-0 md:border-l border-zinc-100 flex flex-col justify-center">
            <span className="font-display font-black text-base sm:text-lg text-zinc-950 block tracking-tight uppercase">
              Aplicaciones ERP
            </span>
            <span className="text-xs text-zinc-500 font-medium mt-1 block">
              A medida
            </span>
          </div>

          <div className="p-3 border-l border-zinc-100 flex flex-col justify-center">
            <span className="font-display font-black text-base sm:text-lg text-zinc-950 block tracking-tight uppercase">
              Bariloche
            </span>
            <span className="text-xs text-zinc-500 font-medium mt-1 block">
              Soporte local y presencial
            </span>
          </div>
        </div>
      </div>

      {/* Infinite Running Marquee Band (High-contrast brutalist strip) */}
      <div className="w-full py-4 bg-zinc-950 border-y border-zinc-900 marquee-container">
        <div className="flex w-max marquee-content animate-marquee">
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 px-6 text-xs uppercase tracking-[0.2em] font-bold text-white whitespace-nowrap">
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-kiur-red"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
