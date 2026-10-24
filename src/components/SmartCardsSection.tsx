import React, { useState, useRef } from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Zap, QrCode, Star, Eye, Check, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { SMART_CARD_OPTIONS, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/content';

export const SmartCardsSection: React.FC = () => {
  const [activeModalImage, setActiveModalImage] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Duplicating the 7 card options to create a seamless infinite marquee loop
  const infiniteCards = [...SMART_CARD_OPTIONS, ...SMART_CARD_OPTIONS];

  const handleManualScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="tarjetas" className="py-24 bg-kiur-bgAlt relative overflow-hidden border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-5xl font-display font-black text-zinc-950 tracking-tight uppercase mb-4">
              Tarjetas Inteligentes <br />
              <span className="text-kiur-red">de Reseñas y Contacto</span>.
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
              El cliente acerca su teléfono a la tarjeta y en 1 segundo se le abre tu perfil o la pantalla para calificar tu negocio con 5 estrellas en Google Maps. Sin buscar en el mapa, sin escribir nombres y sin fricción.
            </p>
          </div>

          {/* Controls & CTA */}
          <div className="shrink-0 flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 mr-2">
              <button
                type="button"
                onClick={() => handleManualScroll('left')}
                className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 hover:text-black hover:border-zinc-400 shadow-sm transition-all cursor-pointer"
                aria-label="Desplazar hacia la izquierda"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => handleManualScroll('right')}
                className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 hover:text-black hover:border-zinc-400 shadow-sm transition-all cursor-pointer"
                aria-label="Desplazar hacia la derecha"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.cards)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider btn-red shadow-sm hover:shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Pedir por WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* CONTINUOUS HORIZONTAL CAROUSEL WITH FULL PRICING, SAVINGS & WHATSAPP BUTTONS */}
      <div className="w-full mb-16 marquee-container py-4">
        <div
          ref={scrollContainerRef}
          className="flex w-max marquee-content animate-marquee-slow hover:[animation-play-state:paused] gap-6 px-4"
        >
          {infiniteCards.map((card, idx) => {
            const isCombo = card.type === 'combo';

            return (
              <div
                key={`${card.id}-${idx}`}
                className={`w-[320px] sm:w-[350px] shrink-0 rounded-3xl overflow-hidden bg-white flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-2 border ${
                  card.badge === 'Recomendado'
                    ? 'border-2 border-kiur-red ring-2 ring-kiur-red/20'
                    : 'border-zinc-200 hover:border-zinc-300'
                }`}
              >
                {/* 1. Real Card Photo with Click-to-Expand Lightbox */}
                <div
                  onClick={() => setActiveModalImage(card.image)}
                  className="relative aspect-[4/3] overflow-hidden bg-zinc-100 group cursor-pointer"
                  title="Click para ampliar foto"
                >
                  <img
                    src={card.image}
                    alt={`Tarjeta ${card.name}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* Expand icon on hover */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 backdrop-blur-md p-1.5 rounded-full border border-white/20 text-white shadow-md">
                    <Eye className="w-4 h-4" />
                  </div>

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-zinc-200 text-[10px] font-mono text-zinc-900 font-bold shadow-sm">
                    {isCombo ? <Layers className="w-3 h-3 text-kiur-red" /> : <Star className="w-3 h-3 text-amber-500 fill-current" />}
                    <span>{isCombo ? 'Pack Promocional' : 'NFC + QR'}</span>
                  </div>

                  {/* Badge for Combos */}
                  {card.badge && (
                    <div className="absolute bottom-3 right-3">
                      <span
                        className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md ${
                          card.badge === 'Recomendado'
                            ? 'bg-kiur-red text-white'
                            : 'bg-zinc-950 text-white'
                        }`}
                      >
                        {card.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* 2. Card Content & Pricing */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-display font-black text-2xl text-zinc-950 uppercase tracking-tight">
                        {card.name}
                      </h3>
                      <span className="text-[10px] font-mono uppercase font-bold text-zinc-400">
                        {isCombo ? 'Pack' : 'Individual'}
                      </span>
                    </div>

                    <p className="text-xs text-kiur-red font-semibold mb-3">
                      {card.platform}
                    </p>

                    {/* Price Block */}
                    <div className="mb-3 pb-3 border-b border-zinc-100">
                      {isCombo ? (
                        <div>
                          <div className="flex items-baseline gap-2.5">
                            <span className="text-3xl sm:text-4xl font-display font-black text-zinc-950 tracking-tight">
                              {card.formattedPrice}
                            </span>
                            {card.formattedOriginalPrice && (
                              <span className="text-sm text-zinc-400 line-through font-mono">
                                {card.formattedOriginalPrice}
                              </span>
                            )}
                          </div>

                          {/* BOLD GREEN SAVINGS CALLOUT */}
                          <div className="py-2 px-3 rounded-xl bg-emerald-500/10 border-2 border-emerald-500 text-center my-3">
                            <span className="text-lg sm:text-xl font-black text-emerald-600 uppercase tracking-tight block">
                              ¡{card.savingsText}!
                            </span>
                            <span className="text-[10px] font-mono text-emerald-700 font-bold uppercase tracking-wider">
                              Descuento directo en el pack
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-baseline gap-1.5 py-1">
                          <span className="text-3xl font-display font-black text-zinc-950 tracking-tight">
                            {card.formattedPrice}
                          </span>
                          <span className="text-xs font-mono text-zinc-400">/ unidad</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-zinc-600 mb-4 leading-relaxed line-clamp-2">
                      {card.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-1.5 mb-5">
                      {card.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-[11px] text-zinc-700 font-medium">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Direct WhatsApp Action Button */}
                  <a
                    href={getWhatsAppUrl(card.waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
                      card.badge === 'Recomendado'
                        ? 'btn-red shadow-glow-red hover:shadow-lg'
                        : 'bg-zinc-950 text-white hover:bg-kiur-red'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Pedir {card.name}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Feature Breakdown & Honest Specs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="white-card rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-kiur-red mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-display font-black text-lg text-zinc-950 uppercase mb-2">
              Chip NFC de Alta Sensibilidad
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Funciona por proximidad. El cliente simplemente apoya o acerca la parte trasera de su smartphone para abrir el enlace directo sin instalar ninguna aplicación.
            </p>
          </div>

          <div className="white-card rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-900 mb-4">
              <QrCode className="w-5 h-5" />
            </div>
            <h3 className="font-display font-black text-lg text-zinc-950 uppercase mb-2">
              Código QR de Respaldo Universal
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Si un teléfono no cuenta con NFC activo, el código QR impreso en alta definición permite escanearlo con la cámara en un segundo.
            </p>
          </div>

          <div className="white-card rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-kiur-red mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-display font-black text-lg text-zinc-950 uppercase mb-2">
              Personalizada con tu Marca
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Impresas con el logo, colores y estética de tu negocio. Listas para colocar en caja, mostrador, mesas o barras de atención.
            </p>
          </div>
        </div>

        {/* Bottom Consultative Bar */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span className="font-display font-black text-zinc-950 text-base uppercase block">
              ¿Tenés dudas sobre cuál combinación de tarjetas elegir para tu local?
            </span>
            <span className="text-xs text-zinc-500">
              Escribinos por WhatsApp y te asesoramos al instante desde Bariloche.
            </span>
          </div>

          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.cards)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider btn-red shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar con Lucas</span>
          </a>
        </div>
      </div>

      {/* Image Modal Lightbox */}
      {activeModalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveModalImage(null)}
        >
          <div className="max-w-3xl w-full max-h-[85vh] rounded-3xl overflow-hidden border border-white/20 bg-white relative p-2 shadow-2xl">
            <img
              src={activeModalImage}
              alt="Foto ampliada de la tarjeta inteligente"
              className="w-full h-full object-contain max-h-[80vh] rounded-2xl"
            />
            <button
              onClick={() => setActiveModalImage(null)}
              className="absolute top-5 right-5 bg-black text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-md hover:bg-kiur-red transition-colors cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
