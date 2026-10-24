import React, { useState } from 'react';
import { Globe, BarChart3, MessageCircle, ArrowRight, CheckCircle2, Laptop, Smartphone, TrendingUp, Layers, Users } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/content';

export const SoftwareDevSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'web' | 'erp'>('web');

  const webCapabilities = [
    {
      title: 'Catálogos Digitales de Productos',
      description: 'Tus productos organizados por categorías con fotos nítidas, descripciones y precios actualizados.',
    },
    {
      title: 'Pedidos Directos por WhatsApp',
      description: 'El cliente selecciona sus artículos y envía el pedido listo a tu WhatsApp comercial, con 0% comisiones.',
    },
    {
      title: 'Diseño 100% Adaptado a Celulares',
      description: 'Navegación ultra rápida pensada prioritariamente para el cliente que compra o consulta desde su smartphone.',
    },
    {
      title: 'Paneles Autogestivos Simples',
      description: 'Sistemas fáciles para modificar precios, pausar stock o cargar promociones con total independencia.',
    },
  ];

  const erpCapabilities = [
    {
      title: 'Ventas y Caja Diaria',
      description: 'Registro ágil de operaciones, arqueo de caja, múltiples métodos de pago y cierre de turnos sin planillas desordenadas.',
      icon: <TrendingUp className="w-5 h-5 text-kiur-red" />,
    },
    {
      title: 'Control de Stock e Inventario',
      description: 'Seguimiento de existencias en tiempo real, alertas automáticas de reposición y trazabilidad por producto o lote.',
      icon: <Layers className="w-5 h-5 text-kiur-red" />,
    },
    {
      title: 'Clientes y Cuentas Corrientes',
      description: 'Fichas centralizadas con historial de compras, plazos de pago y datos de contacto directo.',
      icon: <Users className="w-5 h-5 text-kiur-red" />,
    },
    {
      title: 'Métricas y Tableros Visuales',
      description: 'Tableros gráficos con tus números clave: artículos más vendidos, horarios pico y rentabilidad mensual.',
      icon: <BarChart3 className="w-5 h-5 text-kiur-red" />,
    },
  ];

  return (
    <section id="software" className="py-24 bg-white relative border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-100 text-xs font-mono font-bold uppercase tracking-[0.2em] text-kiur-red mb-4 shadow-sm">
              <span>Desarrollo de Software</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-zinc-950 tracking-tight uppercase">
              Desarrollo de Software <br />
              <span className="text-kiur-red">Webs Comerciales &amp; Sistemas a Medida</span>.
            </h2>
          </div>
          <p className="text-base text-zinc-600 max-w-lg leading-relaxed">
            Tecnología propia y escalable sin comisiones abusivas ni alquileres eternos. Creamos herramientas digitales pensadas para la operativa real de tu negocio en Bariloche.
          </p>
        </div>

        {/* Interactive Tab Switcher */}
        <div className="flex items-center justify-center mb-12">
          <div className="p-1.5 rounded-2xl bg-zinc-100 border border-zinc-200 inline-flex gap-2 shadow-inner max-w-full overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab('web')}
              className={`flex items-center gap-2.5 px-5 sm:px-8 py-3 rounded-xl text-xs sm:text-sm font-display font-black uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'web'
                  ? 'bg-zinc-950 text-white shadow-md'
                  : 'text-zinc-600 hover:text-black hover:bg-white/60'
              }`}
            >
              <Globe className="w-4 h-4 text-kiur-red" />
              <span>1. Páginas Web con Catálogo</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('erp')}
              className={`flex items-center gap-2.5 px-5 sm:px-8 py-3 rounded-xl text-xs sm:text-sm font-display font-black uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'erp'
                  ? 'bg-zinc-950 text-white shadow-md'
                  : 'text-zinc-600 hover:text-black hover:bg-white/60'
              }`}
            >
              <BarChart3 className="w-4 h-4 text-kiur-red" />
              <span>2. Sistemas ERP &amp; Gestión</span>
            </button>
          </div>
        </div>

        {/* TAB 1: PÁGINAS WEB COMERCIALES & CATÁLOGO WHATSAPP */}
        {activeTab === 'web' && (
          <div className="transition-opacity duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
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
                      <div className="h-40 sm:h-48 rounded-xl bg-gradient-to-r from-zinc-900 to-zinc-950 p-6 flex flex-col justify-end relative overflow-hidden text-white shadow-md">
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
                          Tus clientes ven fotos reales, eligen cantidades y te envían el pedido listo a tu WhatsApp comercial sin comisiones.
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
              <div className="lg:col-span-5 space-y-5">
                <h3 className="text-2xl sm:text-3xl font-display font-black text-zinc-950 uppercase">
                  Tu web como herramienta de venta directa.
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  No hacemos sitios estáticos que nadie visita. Desarrollamos plataformas con catálogo rápido, fotos de alta calidad y derivación directa a tu WhatsApp para que el cliente arme su pedido y lo confirme en segundos.
                </p>

                <div className="space-y-2.5 pt-1">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-kiur-red shrink-0" />
                    <span>0% de comisiones sobre tus ventas</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-kiur-red shrink-0" />
                    <span>Carga veloz pensada para celulares con 4G/5G</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-kiur-red shrink-0" />
                    <span>Soporte cercano y directo en Bariloche</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={getWhatsAppUrl(WHATSAPP_MESSAGES.web)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider btn-red shadow-sm hover:shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Cotizar página web comercial</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Web Capabilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {webCapabilities.map((cap) => (
                <div key={cap.title} className="white-card rounded-2xl p-5">
                  <h4 className="font-display font-black text-sm text-zinc-950 uppercase mb-1.5">
                    {cap.title}
                  </h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: SISTEMAS ERP & GESTIÓN A MEDIDA */}
        {activeTab === 'erp' && (
          <div className="transition-opacity duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
              {/* Left Column: Interactive System Mockup (7 Cols) */}
              <div className="lg:col-span-7">
                <div className="rounded-3xl p-1 bg-gradient-to-br from-zinc-200 via-zinc-100 to-zinc-200 shadow-xl border border-zinc-200">
                  <div className="rounded-2xl bg-white border border-zinc-200 p-5 sm:p-7">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-zinc-100 mb-6 text-xs text-zinc-500">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-kiur-red animate-pulse"></span>
                        <span className="font-mono text-zinc-900 font-bold uppercase tracking-wider text-[11px]">
                          Panel ERP Interno · Bariloche
                        </span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-red-50 text-kiur-red border border-red-100 font-mono text-[10px] font-bold">
                        SISTEMA ACTIVO
                      </span>
                    </div>

                    {/* KPI Metrics Simulator */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                      <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase block">Ventas Hoy</span>
                        <span className="font-display font-black text-xl text-zinc-950 mt-1 block">$ 418.500</span>
                        <span className="text-[10px] text-kiur-red font-bold block mt-0.5">+18% esta semana</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase block">Pedidos</span>
                        <span className="font-display font-black text-xl text-zinc-950 mt-1 block">24</span>
                        <span className="text-[10px] text-zinc-500 block mt-0.5">En mostrador</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase block">Stock Mínimo</span>
                        <span className="font-display font-black text-xl text-kiur-red mt-1 block">3 ítems</span>
                        <span className="text-[10px] text-zinc-500 block mt-0.5">Alerta reposición</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase block">Caja Diaria</span>
                        <span className="font-display font-black text-xl text-zinc-950 mt-1 block">Cuadrada</span>
                        <span className="text-[10px] text-zinc-500 block mt-0.5">0 diferencias</span>
                      </div>
                    </div>

                    {/* Operations workflow preview */}
                    <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-4 space-y-2.5">
                      <div className="flex items-center justify-between text-xs pb-2 border-b border-zinc-200">
                        <span className="text-zinc-900 font-bold uppercase tracking-wider text-[11px]">Control de Inventario</span>
                        <span className="text-kiur-red font-mono text-[10px] font-bold">En tiempo real</span>
                      </div>

                      <div className="flex items-center justify-between text-xs py-1">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-zinc-900"></div>
                          <span className="text-zinc-800 font-medium">Ingreso mercadería · Proveedor</span>
                        </div>
                        <span className="font-mono text-zinc-900 font-bold">+ 45 un.</span>
                      </div>

                      <div className="flex items-center justify-between text-xs py-1">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-kiur-red"></div>
                          <span className="text-zinc-800 font-medium">Venta mostrador #1084 · WhatsApp</span>
                        </div>
                        <span className="font-mono text-zinc-500">- 2 un.</span>
                      </div>

                      <div className="flex items-center justify-between text-xs py-1">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-kiur-red animate-pulse"></div>
                          <span className="text-zinc-800 font-medium">Alerta automática de reposición</span>
                        </div>
                        <span className="font-mono text-kiur-red font-bold">Notificado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Strategic Proposition (5 Cols) */}
              <div className="lg:col-span-5 space-y-5">
                <h3 className="text-2xl sm:text-3xl font-display font-black text-zinc-950 uppercase">
                  Software que se adapta a tus procesos reales.
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Cuando tu comercio crece, las planillas y los mensajes dispersos generan errores costosos. Construimos sistemas a medida para que tengas el control exacto de stock, caja diaria y clientes.
                </p>

                <div className="rounded-2xl bg-zinc-50 border border-zinc-200 p-4 text-xs text-zinc-600 space-y-2">
                  <div className="flex items-center gap-2 text-zinc-900 font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-kiur-red shrink-0" />
                    <span>Desarrollo modular y transparente</span>
                  </div>
                  <p className="leading-relaxed">
                    Sin software empaquetado ni licencias infladas. Evaluamos las necesidades prioritarias de tu empresa y construimos módulos que realmente usás.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={getWhatsAppUrl(WHATSAPP_MESSAGES.erp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider btn-red shadow-sm hover:shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Consultar por software a medida</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* ERP Capabilities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {erpCapabilities.map((cap) => (
                <div key={cap.title} className="white-card rounded-2xl p-5">
                  <div className="w-9 h-9 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center mb-3">
                    {cap.icon}
                  </div>
                  <h4 className="font-display font-black text-zinc-950 text-sm mb-1.5 uppercase">
                    {cap.title}
                  </h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
