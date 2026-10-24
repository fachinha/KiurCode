import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/content';

export const Hero: React.FC = () => {
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
    <section className="relative pt-32 pb-16 bg-kiur-black overflow-hidden bg-grid-minimal">
      {/* Background aurora glows */}
      <div className="aurora-red top-12 left-1/2 -translate-x-1/2 opacity-70"></div>
      <div className="aurora-dark bottom-10 right-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-kiur-red animate-pulse"></span>
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-kiur-white">
            Soluciones Digitales · Bariloche
          </span>
          <span className="text-white/20">|</span>
          <span className="text-xs text-kiur-muted font-medium hidden sm:inline">
            Tecnología para Comercios
          </span>
        </div>

        {/* Minimalist Bold Headline (Hornerito / Algoritmia style) */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-black tracking-tighter text-white max-w-5xl leading-[1.05] mb-6 uppercase">
          Tu Negocio Puede <br className="hidden sm:block" />
          <span className="text-kiur-red">Vender Más</span>.
        </h1>

        <p className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.2em] text-kiur-muted max-w-2xl mb-8">
          Tecnología útil para comercios locales. Tarjetas de reseñas inteligentes, webs con pedidos a WhatsApp y software a medida.
        </p>

        {/* Commercial Description */}
        <p className="text-base sm:text-lg text-kiur-muted max-w-2xl leading-relaxed mb-10 font-normal">
          Te ayudamos a eliminar la fricción con tus clientes: capturá reseñas de 5 estrellas en tu mostrador, vendé online sin pagar comisiones abusivas y digitalizá tu gestión.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
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
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.16em] btn-outline"
          >
            <span>Ver qué vendemos</span>
          </a>
        </div>

        {/* Proof / Results Bar (Algoritmia style) */}
        <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl glass-panel border border-white/10 mb-14 text-center">
          <div className="p-3">
            <span className="font-display font-black text-2xl sm:text-3xl text-white block tracking-tight">
              1 Toque
            </span>
            <span className="text-xs text-kiur-muted font-medium mt-1 block">
              Para calificar en Google
            </span>
          </div>

          <div className="p-3 border-l border-white/10">
            <span className="font-display font-black text-2xl sm:text-3xl text-kiur-red block tracking-tight">
              0%
            </span>
            <span className="text-xs text-kiur-muted font-medium mt-1 block">
              Comisiones por venta
            </span>
          </div>

          <div className="p-3 border-l-0 md:border-l border-white/10">
            <span className="font-display font-black text-2xl sm:text-3xl text-white block tracking-tight">
              100%
            </span>
            <span className="text-xs text-kiur-muted font-medium mt-1 block">
              Código propio a medida
            </span>
          </div>

          <div className="p-3 border-l border-white/10">
            <span className="font-display font-black text-2xl sm:text-3xl text-white block tracking-tight flex items-center justify-center gap-1">
              Bariloche
            </span>
            <span className="text-xs text-kiur-muted font-medium mt-1 block">
              Soporte local y presencial
            </span>
          </div>
        </div>
      </div>

      {/* Infinite Running Marquee Band (Algoritmia style) */}
      <div className="w-full py-3.5 bg-kiur-surface border-y border-white/10 marquee-container">
        <div className="flex w-max marquee-content animate-marquee">
          {/* Double array to make infinite loop continuous */}
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 px-6 text-xs uppercase tracking-[0.2em] font-bold text-kiur-white whitespace-nowrap">
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-kiur-red"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
