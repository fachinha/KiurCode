import React from 'react';
import { Smartphone, Globe, BarChart3, ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/content';

export const Solutions: React.FC = () => {
  return (
    <section 
      id="soluciones" 
      style={{ paddingTop: 'var(--hero-equal-gap)' }}
      className="pb-24 bg-white relative border-b border-zinc-200 scroll-mt-24"
    >
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
          <div className="lg:col-span-8 bg-zinc-950 text-white rounded-3xl p-6 sm:p-8 border border-zinc-900 shadow-xl relative overflow-hidden flex flex-col justify-between group">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3.5 py-1 rounded-full bg-kiur-red text-white text-[11px] font-bold uppercase tracking-wider">
                  Combo Más Elegido
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  Llave en mano
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight mb-2">
                Web Comercial + Tarjetas NFC <br />
                <span className="text-kiur-red">La solución digital completa.</span>
              </h3>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-2xl mb-6">
                Tu comercio vendiendo online por WhatsApp y captando reseñas de 5 estrellas en mostrador al mismo tiempo.
              </p>

              {/* 4 Feature highlights (2x2 grid) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-kiur-red shrink-0" />
                  <span>Catálogo web con pedidos directos a WhatsApp</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-kiur-red shrink-0" />
                  <span>Tarjetas NFC para captar reseñas en Google Maps</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-kiur-red shrink-0" />
                  <span>0% comisiones: todas las ventas van a tu cuenta</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-kiur-red shrink-0" />
                  <span>Configuración completa y soporte local en Bariloche</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-zinc-400 font-medium">
                Listo para usar · Sin costos fijos de intermediarios
              </span>
              <a
                href={getWhatsAppUrl("Hola, llegué desde la web de Kiur Code y quiero consultar por el Combo Web + Tarjetas NFC.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider btn-red shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Consultar Combo Integral</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Side Card: Tarjetas NFC Individuales (4 cols, Crisp White Card) */}
          <div className="lg:col-span-4 white-card white-card-red rounded-3xl p-6 sm:p-8 flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-kiur-red mb-3">
                <Smartphone className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-kiur-red uppercase font-bold tracking-wider block mb-1">
                // Producto Físico
              </span>
              <h3 className="font-display font-black text-xl sm:text-2xl text-zinc-950 uppercase tracking-tight mb-2">
                Tarjetas NFC de Reseñas
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-5">
                Multiplicá las opiniones de 5 estrellas en tu Google Maps con un simple toque en caja.
              </p>

              <div className="space-y-2.5 text-xs text-zinc-700 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-kiur-red shrink-0" />
                  <span>Chip NFC contactless + QR de respaldo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-kiur-red shrink-0" />
                  <span>Abre directo tu perfil de Google o Instagram</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-kiur-red shrink-0" />
                  <span>Diseño personalizado con el logo de tu marca</span>
                </div>
              </div>
            </div>

            <a
              href="#tarjetas"
              className="inline-flex items-center justify-between py-3 px-4 rounded-xl bg-zinc-50 hover:bg-zinc-100 text-xs font-bold uppercase tracking-wider text-zinc-900 transition-colors border border-zinc-200 group-hover:border-zinc-300"
            >
              <span>Ver fotos reales y modelos</span>
              <ArrowRight className="w-3.5 h-3.5 text-kiur-red" />
            </a>
          </div>

          {/* Bottom Card 1: Páginas Web Comerciales (6 cols, Crisp White Card) */}
          <div className="lg:col-span-6 white-card white-card-red rounded-3xl p-6 sm:p-8 flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-900 mb-3">
                <Globe className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-zinc-500 uppercase font-bold tracking-wider block mb-1">
                // Venta Online
              </span>
              <h3 className="font-display font-black text-xl sm:text-2xl text-zinc-950 uppercase tracking-tight mb-2">
                Webs con Pedidos a WhatsApp
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-5">
                Catálogo online ágil con carrito para que tus clientes te envíen el pedido armado por chat.
              </p>

              <div className="space-y-2.5 text-xs text-zinc-700 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-kiur-red shrink-0" />
                  <span>Catálogo interactivo con fotos, precios y categorías</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-kiur-red shrink-0" />
                  <span>El cliente envía el pedido listo y ordenado al WhatsApp</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-kiur-red shrink-0" />
                  <span>0% comisiones por venta y carga ultrarrápida en móviles</span>
                </div>
              </div>
            </div>

            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.web)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between py-3 px-4 rounded-xl bg-zinc-50 hover:bg-zinc-100 text-xs font-bold uppercase tracking-wider text-zinc-900 transition-colors border border-zinc-200 group-hover:border-zinc-300"
            >
              <span>Pedir cotización de web comercial</span>
              <ArrowRight className="w-3.5 h-3.5 text-kiur-red" />
            </a>
          </div>

          {/* Bottom Card 2: Software de Gestión & ERP (6 cols, Crisp White Card) */}
          <div className="lg:col-span-6 white-card white-card-red rounded-3xl p-6 sm:p-8 flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-kiur-red mb-3">
                <BarChart3 className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-kiur-red uppercase font-bold tracking-wider block mb-1">
                // Software a Medida
              </span>
              <h3 className="font-display font-black text-xl sm:text-2xl text-zinc-950 uppercase tracking-tight mb-2">
                Sistemas ERP & Gestión
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-5">
                Controlá inventario, caja diaria y métricas en un sistema hecho para tu forma de trabajar.
              </p>

              <div className="space-y-2.5 text-xs text-zinc-700 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-kiur-red shrink-0" />
                  <span>Control de stock en tiempo real con alertas de reposición</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-kiur-red shrink-0" />
                  <span>Arqueos de caja diaria, ventas y cuentas corrientes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-kiur-red shrink-0" />
                  <span>Desarrollo modular adaptado a tu escala y sin planillas sueltas</span>
                </div>
              </div>
            </div>

            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.erp)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between py-3 px-4 rounded-xl bg-zinc-50 hover:bg-zinc-100 text-xs font-bold uppercase tracking-wider text-zinc-900 transition-colors border border-zinc-200 group-hover:border-zinc-300"
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
