import React, { useState } from 'react';
import { Smartphone, MessageCircle, ArrowRight, ShieldCheck, Zap, QrCode, Star, Eye } from 'lucide-react';
import { CARD_GALLERY_IMAGES, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/content';

export const SmartCardsSection: React.FC = () => {
  const [activeModalImage, setActiveModalImage] = useState<string | null>(null);

  // Duplicating the 7 images to create a seamless infinite loop
  const infiniteCards = [...CARD_GALLERY_IMAGES, ...CARD_GALLERY_IMAGES];

  return (
    <section id="tarjetas" className="py-24 bg-kiur-surface relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kiur-red/10 border border-kiur-red/30 text-xs font-mono font-bold text-kiur-red uppercase tracking-wider mb-4">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Producto Físico · Entrega en Bariloche y Envíos</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase mb-4">
              Tarjetas Inteligentes <br />
              <span className="text-kiur-red">de Reseñas y Contacto</span>.
            </h2>
            <p className="text-base sm:text-lg text-kiur-muted leading-relaxed">
              El cliente acerca su teléfono compatible a la tarjeta y en 1 segundo se le abre la pantalla para calificar tu negocio con 5 estrellas en Google Maps. Sin buscar en el mapa, sin escribir nombres y sin fricción.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.cards)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider btn-red"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Pedir tarjetas inteligentes</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* INFINITE CAROUSEL OF REAL CARD PHOTOS */}
      <div className="w-full mb-16 marquee-container py-4">
        <div className="flex w-max marquee-content animate-marquee-slow gap-6 px-4">
          {infiniteCards.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveModalImage(item.src)}
              className="w-72 sm:w-80 shrink-0 rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-kiur-red/50 transition-all duration-300 group cursor-pointer shadow-lg hover:-translate-y-1.5"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-black/60">
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 backdrop-blur-md p-1.5 rounded-full border border-white/20 text-white">
                  <Eye className="w-4 h-4" />
                </div>

                <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white">
                  <Star className="w-3 h-3 text-amber-400 fill-current" />
                  <span>NFC + QR</span>
                </div>
              </div>

              <div className="p-4 bg-kiur-surfaceLight/60">
                <p className="text-xs font-medium text-white line-clamp-2">
                  {item.caption}
                </p>
                <span className="text-[10px] font-mono uppercase text-kiur-red font-bold mt-2 block">
                  Foto Real del Producto
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Breakdown & Honest Specs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel rounded-2xl p-6 border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-kiur-red/10 border border-kiur-red/30 flex items-center justify-center text-kiur-red mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-2">
              Chip NFC de Alta Sensibilidad
            </h3>
            <p className="text-xs sm:text-sm text-kiur-muted leading-relaxed">
              Funciona por proximidad. El cliente simplemente apoya o acerca la parte trasera de su smartphone para abrir el enlace directo sin instalar ninguna aplicación.
            </p>
          </div>

          <div className="glass-panel rounded-2xl p-6 border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/20 flex items-center justify-center text-white mb-4">
              <QrCode className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-2">
              Código QR de Respaldo Universal
            </h3>
            <p className="text-xs sm:text-sm text-kiur-muted leading-relaxed">
              Si un teléfono antiguo no cuenta con NFC o lo tiene desactivado, el código QR impreso en alta definición permite escanearlo con la cámara en un segundo.
            </p>
          </div>

          <div className="glass-panel rounded-2xl p-6 border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-kiur-red/10 border border-kiur-red/30 flex items-center justify-center text-kiur-red mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-2">
              Claridad y Honestidad Comercial
            </h3>
            <p className="text-xs sm:text-sm text-kiur-muted leading-relaxed">
              Elimina toda la fricción para que tu personal pueda pedir la reseña de manera cotidiana. No prometemos reseñas mágicas: brindamos la herramienta más cómoda del mercado.
            </p>
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-kiur-surfaceLight via-kiur-dark to-kiur-surfaceLight border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span className="font-display font-bold text-white text-base block">
              ¿Querés equipar el mostrador de tu local en Bariloche?
            </span>
            <span className="text-xs text-kiur-muted">
              Personalizamos las tarjetas con el logo y los colores de tu marca.
            </span>
          </div>

          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.cards)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider btn-red shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar stock y precios</span>
          </a>
        </div>
      </div>

      {/* Image Modal Lightbox */}
      {activeModalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveModalImage(null)}
        >
          <div className="max-w-3xl w-full max-h-[85vh] rounded-2xl overflow-hidden border border-white/20 bg-black relative">
            <img
              src={activeModalImage}
              alt="Foto ampliada de la tarjeta inteligente"
              className="w-full h-full object-contain max-h-[80vh]"
            />
            <button
              onClick={() => setActiveModalImage(null)}
              className="absolute top-4 right-4 bg-black/70 text-white p-2 rounded-full border border-white/20 text-xs font-bold"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
