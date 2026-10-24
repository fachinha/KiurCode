import React, { useState } from 'react';
import { Smartphone, MessageCircle, ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { CARD_GALLERY_IMAGES, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/content';

export const SmartCardsSection: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  return (
    <section id="tarjetas" className="py-24 px-4 sm:px-6 lg:px-8 bg-kiur-surface relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kiur-cyan/10 border border-kiur-cyan/30 text-xs font-mono font-bold text-kiur-cyan uppercase tracking-wider mb-4">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Solución 01 · Producto Físico Tecnológico</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-6">
            Tarjetas Inteligentes de Reseñas y Contacto.
          </h2>
          <p className="text-base sm:text-lg text-kiur-textMuted leading-relaxed">
            Eliminá la fricción entre la atención en tu local y tus canales digitales. Con solo acercar un teléfono compatible, tu cliente accede directamente a calificar tu negocio en Google o abrir tu WhatsApp.
          </p>
        </div>

        {/* Product Showcase: Grid with real photos and features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Interactive Real Photos Gallery (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Main Active Photo View */}
            <div className="relative rounded-2xl overflow-hidden bg-black/60 border border-white/10 aspect-[4/3] sm:aspect-[16/10] shadow-2xl group">
              <img
                src={CARD_GALLERY_IMAGES[selectedPhotoIndex].src}
                alt={CARD_GALLERY_IMAGES[selectedPhotoIndex].caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20 pointer-events-none" />

              {/* Photo Caption Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white bg-kiur-surface/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10">
                <span className="font-medium truncate pr-2">
                  {CARD_GALLERY_IMAGES[selectedPhotoIndex].caption}
                </span>
                <span className="font-mono text-kiur-cyan shrink-0">
                  {selectedPhotoIndex + 1} / {CARD_GALLERY_IMAGES.length}
                </span>
              </div>
            </div>

            {/* Thumbnails Row */}
            <div className="grid grid-cols-7 gap-2">
              {CARD_GALLERY_IMAGES.map((img, idx) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => setSelectedPhotoIndex(idx)}
                  className={`rounded-lg overflow-hidden border-2 aspect-square relative focus:outline-none transition-all ${
                    selectedPhotoIndex === idx
                      ? 'border-kiur-cyan shadow-glow-cyan scale-105'
                      : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
                  }`}
                  aria-label={`Ver foto ${idx + 1} de la tarjeta`}
                >
                  <img src={img.src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            <p className="text-xs text-kiur-textMuted text-center font-mono">
              Fotografías reales del producto físico disponible para entrega en Bariloche y envíos.
            </p>
          </div>

          {/* Right Column: Features, Honest Benefits & CTA (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-kiur-cyan/15 border border-kiur-cyan/30 flex items-center justify-center text-kiur-cyan">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-lg">
                    ¿Cómo funciona?
                  </h3>
                  <p className="text-xs text-kiur-textMuted">
                    Tecnología NFC + QR dinámico en un solo soporte
                  </p>
                </div>
              </div>

              {/* Benefits list */}
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-kiur-cyan shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Acceso instantáneo a canales clave</strong>
                    <span className="text-kiur-textMuted text-xs">
                      Abrí tu ficha de Google Maps, tu perfil de Instagram, Facebook o tu chat directo de WhatsApp sin intermediarios.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-kiur-cyan shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Cero pasos innecesarios</strong>
                    <span className="text-kiur-textMuted text-xs">
                      El cliente no tiene que buscar el nombre exacto de tu local ni lidiar con nombres parecidos o sucursales erróneas.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-kiur-cyan shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Hábito cotidiano en la atención</strong>
                    <span className="text-kiur-textMuted text-xs">
                      Permite que tus empleados o mozos inviten a calificar en el momento exacto en que el cliente paga o recibe su pedido.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-kiur-cyan shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">QR de respaldo universal</strong>
                    <span className="text-kiur-textMuted text-xs">
                      Si el dispositivo no tiene NFC activo, cualquier cámara escanea el código QR impreso con la misma rapidez.
                    </span>
                  </div>
                </li>
              </ul>

              {/* Honest note */}
              <div className="rounded-xl bg-white/5 border border-white/10 p-3.5 text-xs text-kiur-textMuted flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-kiur-cyan shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white font-medium">Claridad técnica:</strong> La tarjeta simplifica la acción al máximo, pero la reseña siempre depende de la voluntad genuina de tu cliente.
                </span>
              </div>

              {/* Call to action */}
              <div className="pt-2">
                <a
                  href={getWhatsAppUrl(WHATSAPP_MESSAGES.cards)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-bold uppercase tracking-wider bg-kiur-cyan text-kiur-dark hover:bg-white hover:shadow-glow-cyan transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Quiero mis tarjetas inteligentes</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
