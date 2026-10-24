import React, { useState } from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Zap, QrCode, Star, Eye, Check, Sparkles, Layers } from 'lucide-react';
import { CARD_GALLERY_IMAGES, SMART_CARD_OPTIONS, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/content';

export const SmartCardsSection: React.FC = () => {
  const [activeModalImage, setActiveModalImage] = useState<string | null>(null);

  // Duplicating the 7 images to create a seamless infinite loop
  const infiniteCards = [...CARD_GALLERY_IMAGES, ...CARD_GALLERY_IMAGES];

  const individualCards = SMART_CARD_OPTIONS.filter((c) => c.type === 'individual');
  const comboCards = SMART_CARD_OPTIONS.filter((c) => c.type === 'combo');

  return (
    <section id="tarjetas" className="py-24 bg-kiur-bgAlt relative overflow-hidden border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
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

          <div className="shrink-0">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.cards)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider btn-red shadow-sm hover:shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Pedir por WhatsApp</span>
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
              className="w-72 sm:w-80 shrink-0 rounded-2xl overflow-hidden bg-white border border-zinc-200 hover:border-kiur-red/60 transition-all duration-300 group cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1.5"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 backdrop-blur-md p-1.5 rounded-full border border-white/20 text-white">
                  <Eye className="w-4 h-4" />
                </div>

                <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-zinc-200 text-[10px] font-mono text-zinc-900 font-bold shadow-sm">
                  <Star className="w-3 h-3 text-amber-500 fill-current" />
                  <span>NFC + QR</span>
                </div>
              </div>

              <div className="p-4 bg-white">
                <p className="text-xs font-medium text-zinc-800 line-clamp-2">
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

      {/* CATALOG & PRICING SECTION: GOOGLE, INSTAGRAM, FACEBOOK, WHATSAPP, COMBO X2, COMBO X3, COMBO X4 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-mono font-bold uppercase tracking-wider text-zinc-900 mb-3 shadow-sm">
            <span>Catálogo y Precios Oficiales</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-display font-black text-zinc-950 uppercase tracking-tight mb-2">
            Elegí tus Tarjetas
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600">
            Personalizadas con el logo de tu marca. Listas para usar desde el primer minuto en Bariloche y toda la Argentina.
          </p>
        </div>

        {/* 1. TARJETAS INDIVIDUALES (Google, Instagram, Facebook, WhatsApp: 20 mil c/u) */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-zinc-200">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-zinc-500">
              Tarjetas Individuales · $20.000 c/u
            </span>
            <span className="text-xs text-zinc-500 font-medium hidden sm:inline">
              1 unidad por plataforma
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {individualCards.map((card) => {
              // Custom badge / icon styling per network
              const getIcon = () => {
                switch (card.id) {
                  case 'google':
                    return (
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center font-black text-blue-600 text-lg">
                        G
                      </div>
                    );
                  case 'instagram':
                    return (
                      <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center font-black text-pink-600 text-lg">
                        IG
                      </div>
                    );
                  case 'facebook':
                    return (
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center font-black text-indigo-600 text-lg">
                        f
                      </div>
                    );
                  case 'whatsapp':
                    return (
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center font-black text-emerald-600 text-lg">
                        WA
                      </div>
                    );
                  default:
                    return null;
                }
              };

              return (
                <div
                  key={card.id}
                  className="white-card white-card-red rounded-2xl p-6 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      {getIcon()}
                      <span className="text-[11px] font-mono uppercase font-bold text-zinc-500 tracking-wider">
                        Unidad
                      </span>
                    </div>

                    <h4 className="font-display font-black text-xl text-zinc-950 uppercase mb-1">
                      {card.name}
                    </h4>
                    <p className="text-xs text-kiur-red font-semibold mb-3">
                      {card.platform}
                    </p>

                    <div className="mb-4 pb-4 border-b border-zinc-100">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-3xl font-display font-black text-zinc-950 tracking-tight">
                          {card.formattedPrice}
                        </span>
                        <span className="text-xs font-mono text-zinc-400">/ unidad</span>
                      </div>
                    </div>

                    <p className="text-xs text-zinc-600 mb-5 leading-relaxed">
                      {card.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {card.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-xs text-zinc-600">
                          <Check className="w-3.5 h-3.5 text-kiur-red shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={getWhatsAppUrl(card.waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-zinc-950 text-white hover:bg-kiur-red transition-colors shadow-sm group-hover:shadow-md"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Pedir Tarjeta</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. COMBOS CON DESCUENTO: COMBO X2, COMBO X3, COMBO X4 CON AHORRO EN VERDE Y GRANDE */}
        <div className="pt-6">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-zinc-200">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-emerald-700">
                Packs Promocionales con Descuento
              </span>
            </div>
            <span className="text-xs text-emerald-700 font-bold hidden sm:inline font-mono">
              Combiná las tarjetas que quieras
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {comboCards.map((combo) => (
              <div
                key={combo.id}
                className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 relative bg-white ${
                  combo.badge === 'Recomendado'
                    ? 'border-2 border-kiur-red shadow-xl ring-2 ring-kiur-red/20'
                    : 'border border-zinc-200 shadow-md hover:border-zinc-300 hover:shadow-xl'
                }`}
              >
                {/* Badge top right */}
                {combo.badge && (
                  <div className="absolute -top-3.5 right-6">
                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm ${
                        combo.badge === 'Recomendado'
                          ? 'bg-kiur-red text-white'
                          : 'bg-zinc-950 text-white'
                      }`}
                    >
                      {combo.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-950 font-black">
                      <Layers className="w-5 h-5 text-kiur-red" />
                    </div>
                    <div>
                      <h4 className="font-display font-black text-2xl text-zinc-950 uppercase tracking-tight">
                        {combo.name}
                      </h4>
                      <p className="text-xs text-zinc-500 font-mono">
                        {combo.platform}
                      </p>
                    </div>
                  </div>

                  {/* Pricing row with crossed out original */}
                  <div className="mt-4 mb-3 pb-3 border-b border-zinc-100 flex items-baseline gap-3">
                    <span className="text-4xl font-display font-black text-zinc-950 tracking-tight">
                      {combo.formattedPrice}
                    </span>
                    {combo.formattedOriginalPrice && (
                      <span className="text-base text-zinc-400 line-through font-mono">
                        {combo.formattedOriginalPrice}
                      </span>
                    )}
                  </div>

                  {/* BOLD GREEN SAVINGS CALLOUT AS REQUESTED */}
                  <div className="py-2.5 px-4 rounded-xl bg-emerald-500/10 border-2 border-emerald-500 text-center my-4">
                    <span className="text-xl sm:text-2xl font-black text-emerald-600 uppercase tracking-tight block">
                      ¡{combo.savingsText}!
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono text-emerald-700 font-bold uppercase tracking-wider">
                      Descuento directo en el pack
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 mb-5 leading-relaxed">
                    {combo.description}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {combo.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-zinc-700 font-medium">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={getWhatsAppUrl(combo.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
                    combo.badge === 'Recomendado'
                      ? 'btn-red shadow-glow-red hover:shadow-lg'
                      : 'bg-zinc-950 text-white hover:bg-kiur-red hover:text-white'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Pedir {combo.name} por WhatsApp</span>
                </a>
              </div>
            ))}
          </div>
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
              Si un teléfono antiguo no cuenta con NFC o lo tiene desactivado, el código QR impreso en alta definición permite escanearlo con la cámara en un segundo.
            </p>
          </div>

          <div className="white-card rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-kiur-red mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-display font-black text-lg text-zinc-950 uppercase mb-2">
              Claridad y Honestidad Comercial
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Elimina toda la fricción para que tu personal pueda pedir la reseña de manera cotidiana. No prometemos reseñas mágicas: brindamos la herramienta más cómoda del mercado.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span className="font-display font-black text-zinc-950 text-base uppercase block">
              ¿Tenés dudas sobre cuál tarjeta o combo elegir para tu negocio?
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
              className="absolute top-5 right-5 bg-black text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-md hover:bg-kiur-red transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
