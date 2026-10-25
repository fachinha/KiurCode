import React from 'react';
import { Smartphone, Globe, BarChart3, ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/content';

export const Solutions: React.FC = () => {
  return (
    <section id="soluciones" className="py-24 bg-white relative border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-zinc-950 tracking-tight uppercase mb-4">
            Qué vendemos <br />
            <span className="text-kiur-red">para hacer crecer tu comercio</span>.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
            Sin rodeos ni términos confusos: soluciones concretas para conseguir más clientes en Bariloche, vender online y ordenar tu negocio.
          </p>
        </div>

        {/* Bento Grid (High contrast: Black focal card + White cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Hero Card: Combo Integral de Digitalización (8 cols, Bold Black Card) */}
          <div className="lg:col-span-8 bg-zinc-950 text-white rounded-3xl p-8 sm:p-10 border border-zinc-900 shadow-xl relative overflow-hidden flex flex-col justify-between group">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3.5 py-1 rounded-full bg-kiur-red text-white text-[11px] font-bold uppercase tracking-wider">
                  Combo Más Elegido
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  Llave en mano
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-4xl text-white uppercase tracking-tight mb-3">
                Tu negocio vendiendo online <br />
                <span className="text-kiur-red">y sumando reseñas en tu local.</span>
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl mb-8">
                Combinamos tu <strong>página web con catálogo y pedidos directos a WhatsApp</strong> junto con tus <strong>tarjetas inteligentes de reseñas Google</strong> para el mostrador. Todo conectado, con tu propia identidad y sin intermediarios.
              </p>

              {/* 4 Feature highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-kiur-red shrink-0 mt-0.5" />
                  <span><strong>Web con catálogo:</strong> clientes eligen productos y mandan el pedido listo a tu WhatsApp.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-kiur-red shrink-0 mt-0.5" />
                  <span><strong>Tarjetas NFC Google:</strong> clientes califican con 5 estrellas con solo acercar el celular.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-kiur-red shrink-0 mt-0.5" />
                  <span><strong>0% comisiones:</strong> todo el margen de tus ventas queda 100% en tu caja.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-kiur-red shrink-0 mt-0.5" />
                  <span><strong>Soporte local:</strong> asesoramiento presencial y humano en San Carlos de Bariloche.</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-5 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-zinc-400">
                Cotización a medida según catálogo y cantidad de tarjetas
              </span>
              <a
                href={getWhatsAppUrl("Hola, llegué desde la web de Kiur Code y quiero consultar por el Combo Web + Tarjetas NFC.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider btn-red shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Consultar por el combo</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Side Card: Tarjetas NFC Individuales (4 cols, Crisp White Card) */}
          <div className="lg:col-span-4 white-card white-card-red rounded-3xl p-8 flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-kiur-red mb-4">
                <Smartphone className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-kiur-red uppercase font-bold tracking-wider block mb-1">
                Producto Físico
              </span>
              <h3 className="font-display font-black text-xl text-zinc-950 uppercase mb-2">
                Tarjetas NFC de Reseñas
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed mb-6">
                Para locales gastronómicos, vinotecas, comercios y profesionales. Aumentá tus valoraciones en Google Maps y seguidores de Instagram con 1 solo toque en caja.
              </p>

              <div className="space-y-2 text-xs text-zinc-600 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-kiur-red shrink-0" />
                  <span>Chip NFC de proximidad</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-kiur-red shrink-0" />
                  <span>Código QR de respaldo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-kiur-red shrink-0" />
                  <span>Personalizada con tu marca</span>
                </div>
              </div>
            </div>

            <a
              href="#tarjetas"
              className="inline-flex items-center justify-between py-2.5 text-xs font-bold uppercase tracking-wider text-zinc-900 hover:text-kiur-red transition-colors border-t border-zinc-100"
            >
              <span>Ver fotos reales del producto</span>
              <ArrowRight className="w-3.5 h-3.5 text-kiur-red" />
            </a>
          </div>

          {/* Bottom Card 1: Páginas Web Comerciales (6 cols, Crisp White Card) */}
          <div className="lg:col-span-6 white-card white-card-red rounded-3xl p-8 flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-900 mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-zinc-500 uppercase font-bold tracking-wider block mb-1">
                Desarrollo Frontend
              </span>
              <h3 className="font-display font-black text-xl sm:text-2xl text-zinc-950 uppercase mb-2">
                Páginas Web con Catálogo
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6">
                Tu propia tienda online conectada a WhatsApp. El cliente revisa tus productos, arma su pedido y te lo envía en un mensaje claro. Sin pagar porcentajes a plataformas intermediarias.
              </p>

              <div className="space-y-2 text-xs text-zinc-600 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-kiur-red shrink-0" />
                  <span>Catálogo de productos con fotos y precios</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-kiur-red shrink-0" />
                  <span>Pedidos directos por WhatsApp al instante</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-kiur-red shrink-0" />
                  <span>Carga ultrarrápida en celulares 4G/5G</span>
                </div>
              </div>
            </div>

            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.web)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between py-3 px-5 rounded-xl bg-zinc-50 hover:bg-zinc-100 text-xs font-bold uppercase tracking-wider text-zinc-900 transition-colors border border-zinc-200"
            >
              <span>Pedir cotización de web comercial</span>
              <ArrowRight className="w-3.5 h-3.5 text-kiur-red" />
            </a>
          </div>

          {/* Bottom Card 2: Software de Gestión & ERP (6 cols, Crisp White Card) */}
          <div className="lg:col-span-6 white-card white-card-red rounded-3xl p-8 flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-kiur-red mb-4">
                <BarChart3 className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-kiur-red uppercase font-bold tracking-wider block mb-1">
                Software a Medida
              </span>
              <h3 className="font-display font-black text-xl sm:text-2xl text-zinc-950 uppercase mb-2">
                Sistemas ERP y Control Interno
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6">
                Digitalizamos los procesos de tu negocio: registro de ventas, control de inventario con alertas de reposición, arqueos de caja y tableros métricos hechos para tu forma de trabajar.
              </p>

              <div className="space-y-2 text-xs text-zinc-600 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-kiur-red shrink-0" />
                  <span>Control de stock en tiempo real</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-kiur-red shrink-0" />
                  <span>Caja diaria y administración de clientes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-kiur-red shrink-0" />
                  <span>Desarrollo modular adaptado a tu escala</span>
                </div>
              </div>
            </div>

            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.erp)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between py-3 px-5 rounded-xl bg-zinc-50 hover:bg-zinc-100 text-xs font-bold uppercase tracking-wider text-zinc-900 transition-colors border border-zinc-200"
            >
              <span>Consultar por software a medida</span>
              <ArrowRight className="w-3.5 h-3.5 text-kiur-red" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
