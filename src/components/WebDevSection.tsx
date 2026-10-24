import React from 'react';
import { Globe, MessageCircle, ArrowRight, CheckCircle2, Laptop, Smartphone } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/content';

export const WebDevSection: React.FC = () => {
  const capabilities = [
    {
      title: 'Páginas Web Institucionales',
      description: 'Presencia digital seria y moderna para empresas que necesitan generar confianza inmediata ante clientes e inversores.',
    },
    {
      title: 'Catálogos Digitales de Productos',
      description: 'Tus productos organizados por categorías, con fotos en alta definición, descripción y precios actualizados.',
    },
    {
      title: 'Pedidos Directos por WhatsApp',
      description: 'El cliente selecciona sus artículos y envía un mensaje listo para procesar a tu WhatsApp, sin comisiones por transacción.',
    },
    {
      title: 'Integración con Apps de Delivery',
      description: 'Vínculos estratégicos a tus perfiles de Uber Eats, Pedidos Ya o mensajerías locales para que el cliente elija cómo recibirlo.',
    },
    {
      title: 'Diseño 100% Responsive',
      description: 'Navegación perfecta y veloz en celulares, tablets y computadoras, pensada para la experiencia del usuario que compra desde el móvil.',
    },
    {
      title: 'Paneles de Administración',
      description: 'Sistemas autogestionables para que puedas modificar precios, pausar stock o subir nuevos productos con total autonomía.',
    },
    {
      title: 'Optimización SEO y Velocidad',
      description: 'Estructura semántica, metadatos y carga rápida en menos de 2 segundos para aparecer mejor en Google Maps y búsquedas locales.',
    },
    {
      title: 'Automatizaciones e Integraciones',
      description: 'Conexión con formularios de contacto, hojas de cálculo o alertas automáticas para que no pierdas ningún interesado.',
    },
  ];

  return (
    <section id="web" className="py-24 px-4 sm:px-6 lg:px-8 bg-kiur-dark relative border-t border-white/5 bg-grid-pattern">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-xs font-mono font-bold text-sky-400 uppercase tracking-wider mb-4">
              <Globe className="w-3.5 h-3.5" />
              <span>Solución 02 · Presencia y Ventas Online</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Diseño y Desarrollo Web Comercial.
            </h2>
          </div>
          <p className="text-base text-kiur-textMuted max-w-lg">
            No creamos sitios estáticos de adorno. Diseñamos herramientas comerciales hechas para convertir visitas en consultas y ventas reales.
          </p>
        </div>

        {/* Feature Grid & Interactive Web Mockup Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left: Device Mockup Showcase (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl p-1 bg-gradient-to-tr from-sky-500/20 via-white/10 to-transparent shadow-2xl">
              <div className="rounded-2xl bg-kiur-surface border border-white/10 p-5 sm:p-7">
                {/* Browser Top */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5 text-xs text-kiur-textMuted">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/80"></span>
                    <span className="ml-3 font-mono text-[11px] bg-black/40 px-3 py-1 rounded-md border border-white/5 text-kiur-cyan">
                      https://tu-comercio.com.ar
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Laptop className="w-4 h-4 text-white/50" />
                    <Smartphone className="w-4 h-4 text-kiur-cyan" />
                  </div>
                </div>

                {/* Mockup Inside: Food / Retail Store Concept */}
                <div className="space-y-4">
                  <div className="h-40 sm:h-52 rounded-xl bg-gradient-to-r from-kiur-surfaceLight via-slate-900 to-kiur-surface p-6 flex flex-col justify-end relative overflow-hidden border border-white/5">
                    <div className="absolute top-4 right-4 flex gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[11px] font-semibold flex items-center gap-1 border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Abierto ahora
                      </span>
                    </div>
                    <span className="text-xs uppercase tracking-wider text-sky-400 font-semibold mb-1">
                      Catálogo Digital Interactivo
                    </span>
                    <h4 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
                      Productos frescos &amp; Pedido en 1 toque
                    </h4>
                    <p className="text-xs text-kiur-textMuted max-w-md hidden sm:block">
                      El cliente explora fotos reales, elige cantidades y finaliza su orden directo en tu WhatsApp con el detalle armado.
                    </p>
                  </div>

                  {/* Sample Product Cards Row */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div className="rounded-xl bg-black/30 border border-white/5 p-3 flex flex-col justify-between">
                      <span className="text-xs font-semibold text-white">Tabla Gourmet</span>
                      <span className="text-xs text-kiur-cyan font-mono mt-1 font-bold">$ 24.500</span>
                      <div className="mt-3 flex items-center justify-between text-[11px] text-kiur-textMuted">
                        <span>En stock</span>
                        <span className="text-emerald-400 font-medium">+ Agregar</span>
                      </div>
                    </div>

                    <div className="rounded-xl bg-black/30 border border-white/5 p-3 flex flex-col justify-between">
                      <span className="text-xs font-semibold text-white">Vino Reserva Patagónico</span>
                      <span className="text-xs text-kiur-cyan font-mono mt-1 font-bold">$ 18.200</span>
                      <div className="mt-3 flex items-center justify-between text-[11px] text-kiur-textMuted">
                        <span>Bodega local</span>
                        <span className="text-emerald-400 font-medium">+ Agregar</span>
                      </div>
                    </div>

                    <div className="rounded-xl bg-black/30 border border-white/5 p-3 flex flex-col justify-between col-span-2 sm:col-span-1">
                      <span className="text-xs font-semibold text-white">Botón de Compra</span>
                      <div className="mt-2 flex items-center justify-center py-2 px-2 rounded-lg bg-emerald-600 text-white font-bold text-xs gap-1.5 shadow-sm">
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Pedir por WhatsApp</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Key Value Points & CTA (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-display font-bold text-white">
              Cada proyecto se diseña en base a tu objetivo comercial.
            </h3>
            <p className="text-sm text-kiur-textMuted leading-relaxed">
              No es lo mismo vender viandas diarias que comercializar servicios profesionales o excursiones turísticas. En Kiur Code analizamos tu flujo de clientes y diseñamos la web para que funcione como tu mejor vendedor las 24 horas del día.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-white">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Velocidad de carga inmediata en redes móviles 4G/5G</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Hosting de nivel mundial sin comisiones sorpresa</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Soporte técnico cercano y continuo en Bariloche</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.web)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider bg-sky-400 text-kiur-dark hover:bg-white hover:shadow-glow-blue transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Quiero una página web para mi negocio</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 8 Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="glass-panel glass-panel-hover rounded-xl p-5 border border-white/5"
            >
              <h4 className="font-display font-bold text-white text-base mb-2">
                {cap.title}
              </h4>
              <p className="text-xs text-kiur-textMuted leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
