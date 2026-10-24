import React from 'react';
import { ArrowRight, MessageCircle, Smartphone, Globe, BarChart3, CheckCircle2, Star } from 'lucide-react';
import { BRAND, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/content';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-kiur-dark overflow-hidden bg-grid-pattern">
      {/* Background glow effects */}
      <div className="aurora-cyan top-10 -left-20 animate-drift"></div>
      <div className="aurora-blue bottom-10 -right-20 animate-drift" style={{ animationDelay: '3s' }}></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kiur-surface border border-kiur-cyan/25 mb-8 backdrop-blur-md shadow-sm shadow-kiur-cyan/10">
          <span className="w-2 h-2 rounded-full bg-kiur-cyan animate-pulse"></span>
          <span className="text-xs font-semibold tracking-wider uppercase text-kiur-cyan">
            {BRAND.heroTagline}
          </span>
          <span className="text-white/30">|</span>
          <span className="text-xs text-kiur-textMuted font-medium hidden sm:inline">
            Bariloche &amp; Patagonia
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white max-w-5xl leading-[1.1] mb-6">
          Tu negocio puede llegar más lejos.{' '}
          <span className="block mt-2 bg-gradient-to-r from-kiur-cyan via-sky-300 to-blue-500 bg-clip-text text-transparent">
            Construyamos la tecnología para hacerlo crecer.
          </span>
        </h1>

        {/* Commercial Description */}
        <p className="text-base sm:text-lg lg:text-xl text-kiur-textMuted max-w-3xl leading-relaxed mb-10">
          Ayudamos a comercios y empresas a{' '}
          <strong className="text-white font-medium">destacar su presencia digital</strong>, capturar más clientes con{' '}
          <strong className="text-white font-medium">tarjetas inteligentes de reseñas</strong> y profesionalizar sus operaciones con{' '}
          <strong className="text-white font-medium">webs comerciales y sistemas a medida</strong>.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider bg-kiur-cyan text-kiur-dark hover:bg-white hover:shadow-glow-cyan-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-kiur-dark focus:ring-kiur-cyan"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Hablemos de tu proyecto</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#soluciones"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase glass-button text-white hover:text-kiur-cyan hover:border-kiur-cyan/40 transition-all duration-200"
          >
            <span>Explorar soluciones</span>
          </a>
        </div>

        {/* Visual Composition / Tech Showcase */}
        <div className="w-full max-w-5xl mx-auto">
          <div className="relative rounded-2xl p-1 bg-gradient-to-b from-white/15 via-kiur-cyan/20 to-transparent shadow-2xl shadow-black/80">
            <div className="rounded-2xl bg-kiur-surface/95 border border-white/10 p-4 sm:p-8 backdrop-blur-2xl">
              {/* Top Bar with window controls & status */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6 text-xs text-kiur-textMuted font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                  <span className="ml-2 text-white/50 hidden sm:inline">kiurcode-ecosystem-suite.v1</span>
                </div>
                <div className="flex items-center gap-2 text-kiur-cyan font-semibold">
                  <span className="w-2 h-2 rounded-full bg-kiur-cyan animate-pulse"></span>
                  <span>ECOSISTEMA INTEGRADO</span>
                </div>
              </div>

              {/* 3 Pillars Bento Mockup */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                {/* Pillar 1: Smart Cards */}
                <div className="rounded-xl bg-kiur-surfaceLight/80 border border-white/5 p-5 relative overflow-hidden group hover:border-kiur-cyan/40 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-kiur-cyan/10 border border-kiur-cyan/30 flex items-center justify-center text-kiur-cyan">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-white/5 text-kiur-cyan border border-kiur-cyan/20">
                      NFC + QR
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-white text-base mb-1.5">
                    Tarjetas Inteligentes
                  </h3>
                  <p className="text-xs text-kiur-textMuted leading-relaxed mb-4">
                    Acercá el teléfono del cliente para abrir reseñas en Google, Instagram o WhatsApp sin buscar.
                  </p>
                  
                  {/* Micro interaction preview */}
                  <div className="rounded-lg bg-black/40 border border-white/10 p-2.5 flex items-center gap-3">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-white">5.0 en Google Maps</span>
                  </div>
                </div>

                {/* Pillar 2: Commercial Web */}
                <div className="rounded-xl bg-kiur-surfaceLight/80 border border-white/5 p-5 relative overflow-hidden group hover:border-kiur-cyan/40 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                      <Globe className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-white/5 text-sky-400 border border-sky-400/20">
                      Web Comercial
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-white text-base mb-1.5">
                    Catálogo &amp; Ventas
                  </h3>
                  <p className="text-xs text-kiur-textMuted leading-relaxed mb-4">
                    Tu tienda o catálogo digital directo a WhatsApp, sin comisiones por pedido ni alquileres abusivos.
                  </p>

                  <div className="rounded-lg bg-black/40 border border-white/10 p-2.5 flex items-center justify-between text-xs">
                    <span className="text-kiur-textMuted">Pedido directo:</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> 100% Ganancia
                    </span>
                  </div>
                </div>

                {/* Pillar 3: ERP & Software */}
                <div className="rounded-xl bg-kiur-surfaceLight/80 border border-white/5 p-5 relative overflow-hidden group hover:border-kiur-cyan/40 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-white/5 text-emerald-400 border border-emerald-400/20">
                      Software a Medida
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-white text-base mb-1.5">
                    Sistemas de Gestión
                  </h3>
                  <p className="text-xs text-kiur-textMuted leading-relaxed mb-4">
                    Control de stock, registro de caja, proveedores y reportes hechos a la medida de tu operación real.
                  </p>

                  <div className="rounded-lg bg-black/40 border border-white/10 p-2.5 flex items-center justify-between text-xs font-mono">
                    <span className="text-kiur-textMuted">Stock en vivo:</span>
                    <span className="text-kiur-cyan font-bold">128 items sincronizados</span>
                  </div>
                </div>
              </div>

              {/* Bottom Proof bar */}
              <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-around gap-4 text-xs text-kiur-textMuted">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-kiur-cyan" />
                  <span>Soporte presencial y directo en Bariloche</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-kiur-cyan" />
                  <span>Código 100% tuyo sin ataduras</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-kiur-cyan" />
                  <span>Adaptado a comercios locales y pymes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
