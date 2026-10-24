import React from 'react';
import { Globe, MessageCircle, ArrowRight, CheckCircle2, Laptop, Smartphone } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/content';

export const WebDevSection: React.FC = () => {
  const capabilities = [
    {
      title: 'Páginas Web Institucionales',
      description: 'Presencia digital sobria y moderna para empresas que necesitan posicionar su marca ante clientes e inversores.',
    },
    {
      title: 'Catálogos Digitales de Productos',
      description: 'Tus productos organizados por categorías con fotos nítidas, descripciones claras y precios actualizados.',
    },
    {
      title: 'Pedidos Directos por WhatsApp',
      description: 'El cliente selecciona sus artículos y envía el pedido listo a tu WhatsApp comercial, con cero comisiones por venta.',
    },
    {
      title: 'Integración con Apps de Delivery',
      description: 'Botones estratégicos a Uber Eats, Pedidos Ya o delivery propio para que el cliente elija cómo recibirlo.',
    },
    {
      title: 'Diseño 100% Adaptable a Celulares',
      description: 'Navegación fluida y veloz pensada prioritariamente para el usuario que compra o consulta desde el teléfono.',
    },
    {
      title: 'Paneles de Administración Autogestivos',
      description: 'Sistemas fáciles para que puedas modificar precios, pausar stock o cargar novedades con total independencia.',
    },
    {
      title: 'Optimización SEO para Google',
      description: 'Estructura técnica y metadatos pensados para aparecer en búsquedas locales de Bariloche y la región.',
    },
    {
      title: 'Automatizaciones e Integraciones',
      description: 'Conexión con formularios de contacto, hojas de cálculo o alertas automáticas para no perder ninguna consulta.',
    },
  ];

  return (
    <section id="web" className="py-24 bg-white relative border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-100 text-xs font-mono font-bold uppercase tracking-[0.2em] text-kiur-red mb-4 shadow-sm">
              <Globe className="w-3.5 h-3.5" />
              <span>Desarrollo Web Comercial</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-zinc-950 tracking-tight uppercase">
              Tu Web como Herramienta <br />
              <span className="text-kiur-red">de Venta Continua</span>.
            </h2>
          </div>
          <p className="text-base text-zinc-600 max-w-lg leading-relaxed">
            No diseñamos sitios decorativos que quedan abandonados. Desarrollamos páginas rápidas, claras y enfocadas en cerrar ventas por WhatsApp.
          </p>
        </div>

        {/* Mockup Showcase + Pitch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left: Interactive Commerce Mockup (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-1 bg-gradient-to-tr from-zinc-200 via-zinc-100 to-zinc-200 shadow-xl border border-zinc-200">
              <div className="rounded-2xl bg-white border border-zinc-200 p-5 sm:p-7">
                {/* Browser Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-zinc-100 mb-5 text-xs text-zinc-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300"></span>
                    <span className="ml-3 font-mono text-[11px] bg-zinc-100 px-3 py-1 rounded-md border border-zinc-200 text-zinc-800">
                      https://tu-comercio.com.ar
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Laptop className="w-4 h-4 text-zinc-400" />
                    <Smartphone className="w-4 h-4 text-kiur-red" />
                  </div>
                </div>

                {/* Inside store preview */}
                <div className="space-y-4">
                  <div className="h-44 sm:h-52 rounded-xl bg-gradient-to-r from-zinc-900 to-zinc-950 p-6 flex flex-col justify-end relative overflow-hidden text-white shadow-md">
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-kiur-red text-white text-[10px] font-bold uppercase tracking-wider">
                        Abierto · Envíos Bariloche
                      </span>
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-kiur-red font-bold mb-1">
                      Catálogo Interactivo en Vivo
                    </span>
                    <h4 className="text-xl sm:text-2xl font-display font-black text-white uppercase mb-2">
                      Elegí tus productos &amp; Pedí al instante
                    </h4>
                    <p className="text-xs text-zinc-400 max-w-md hidden sm:block">
                      Tus clientes ven fotos reales, eligen cantidades y te envían el detalle completo por WhatsApp sin registrarse ni pagar comisiones.
                    </p>
                  </div>

                  {/* Sample items */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-3.5 flex flex-col justify-between">
                      <span className="text-xs font-bold text-zinc-900 uppercase">Tabla Especial</span>
                      <span className="text-xs text-kiur-red font-mono mt-1 font-bold">$ 24.500</span>
                      <div className="mt-3 flex items-center justify-between text-[11px] text-zinc-500">
                        <span>En stock</span>
                        <span className="text-zinc-900 font-bold">+ Pedir</span>
                      </div>
                    </div>

                    <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-3.5 flex flex-col justify-between">
                      <span className="text-xs font-bold text-zinc-900 uppercase">Vino Reserva</span>
                      <span className="text-xs text-kiur-red font-mono mt-1 font-bold">$ 18.200</span>
                      <div className="mt-3 flex items-center justify-between text-[11px] text-zinc-500">
                        <span>Bodega local</span>
                        <span className="text-zinc-900 font-bold">+ Pedir</span>
                      </div>
                    </div>

                    <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-3.5 flex flex-col justify-between col-span-2 sm:col-span-1">
                      <span className="text-xs font-bold text-zinc-900 uppercase">Botón WhatsApp</span>
                      <div className="mt-2 flex items-center justify-center py-2 px-2 rounded-lg btn-red text-white font-bold text-xs gap-1.5 shadow-sm">
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Confirmar orden</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Pitch & CTA (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-display font-black text-zinc-950 uppercase">
              Cada web se adapta a tu modelo comercial.
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              No es lo mismo vender viandas diarias que comercializar servicios profesionales o excursiones turísticas. En Kiur Code analizamos tu flujo de clientes y diseñamos la web para que funcione como tu mejor vendedor las 24 horas del día.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-zinc-800 font-medium">
                <CheckCircle2 className="w-4 h-4 text-kiur-red shrink-0" />
                <span>Velocidad de carga inmediata en redes móviles 4G/5G</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-800 font-medium">
                <CheckCircle2 className="w-4 h-4 text-kiur-red shrink-0" />
                <span>Hosting mundial sin cobros por transacción</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-800 font-medium">
                <CheckCircle2 className="w-4 h-4 text-kiur-red shrink-0" />
                <span>Soporte técnico cercano y directo en Bariloche</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.web)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider btn-red"
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
              className="white-card rounded-2xl p-6"
            >
              <h4 className="font-display font-black text-zinc-950 text-base mb-2 uppercase">
                {cap.title}
              </h4>
              <p className="text-xs text-zinc-600 leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
