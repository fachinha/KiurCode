import React from 'react';
import { BarChart3, Database, Users, Cpu, MessageCircle, ArrowRight, CheckCircle2, TrendingUp, Layers } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/content';

export const ErpSection: React.FC = () => {
  const erpCapabilities = [
    {
      title: 'Gestión de Ventas y Caja Diaria',
      description: 'Registro ágil de operaciones, arqueo de caja, métodos de pago múltiples y cierre de turnos sin planillas desordenadas.',
      icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: 'Control de Stock e Inventario',
      description: 'Seguimiento de existencias en tiempo real, alertas automáticas de reposición y trazabilidad por producto o lote.',
      icon: <Layers className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: 'Administración de Clientes y Proveedores',
      description: 'Fichas centralizadas con historial de compras, cuentas corrientes, plazos de pago y datos de contacto directo.',
      icon: <Users className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: 'Métricas y Dashboards Visuales',
      description: 'Tableros gráficos interactivos con tus números clave: productos más vendidos, horarios pico y rentabilidad mensual.',
      icon: <BarChart3 className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: 'Roles de Usuario y Permisos',
      description: 'Acceso diferenciado para cajeros, encargados y dueños, garantizando la seguridad de la información crítica.',
      icon: <Database className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: 'Automatizaciones e Integraciones',
      description: 'Sincronización entre tu catálogo online, bases de datos internas y notificaciones operativas vía WhatsApp o email.',
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
    },
  ];

  return (
    <section id="software" className="py-24 px-4 sm:px-6 lg:px-8 bg-kiur-surface relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-4">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Solución 03 · Software Empresarial a Medida</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-6">
            Sistemas de Gestión ERP y Software a Medida.
          </h2>
          <p className="text-base sm:text-lg text-kiur-textMuted leading-relaxed">
            Cuando tu comercio crece, las planillas manuales y los mensajes dispersos se convierten en cuellos de botella. Desarrollamos software modular que acompaña tus procesos y simplifica el día a día operativo.
          </p>
        </div>

        {/* Strategic Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left Column: Interactive System Mockup (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl p-1 bg-gradient-to-br from-emerald-500/20 via-white/10 to-transparent shadow-2xl">
              <div className="rounded-2xl bg-kiur-surfaceLight border border-white/10 p-5 sm:p-7">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6 text-xs text-kiur-textMuted">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    <span className="font-mono text-white font-semibold">Panel de Control Operativo · Demo Conceptual</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[11px]">
                    ESTADO: ACTIVO
                  </span>
                </div>

                {/* KPI Metrics Simulator */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[11px] text-kiur-textMuted block">Ventas Hoy</span>
                    <span className="font-display font-bold text-lg text-white">$ 418.500</span>
                    <span className="text-[10px] text-emerald-400 block mt-0.5">+18% vs semana ant.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[11px] text-kiur-textMuted block">Pedidos Activos</span>
                    <span className="font-display font-bold text-lg text-kiur-cyan">24</span>
                    <span className="text-[10px] text-kiur-textMuted block mt-0.5">En preparación</span>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[11px] text-kiur-textMuted block">Stock en Alerta</span>
                    <span className="font-display font-bold text-lg text-amber-400">3 ítems</span>
                    <span className="text-[10px] text-amber-300 block mt-0.5">Reponer hoy</span>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[11px] text-kiur-textMuted block">Caja del Día</span>
                    <span className="font-display font-bold text-lg text-emerald-400">Cuadrada</span>
                    <span className="text-[10px] text-kiur-textMuted block mt-0.5">Sin diferencias</span>
                  </div>
                </div>

                {/* Operations workflow preview */}
                <div className="rounded-xl bg-black/40 border border-white/5 p-4 space-y-3">
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-white/5">
                    <span className="text-white font-semibold">Últimos movimientos de inventario</span>
                    <span className="text-kiur-cyan font-mono text-[11px]">En tiempo real</span>
                  </div>

                  <div className="flex items-center justify-between text-xs py-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                      <span className="text-kiur-text">Ingreso de mercadería · Proveedor local</span>
                    </div>
                    <span className="font-mono text-emerald-400 font-semibold">+ 45 un.</span>
                  </div>

                  <div className="flex items-center justify-between text-xs py-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-kiur-cyan"></div>
                      <span className="text-kiur-text">Venta en mostrador #1084 · WhatsApp</span>
                    </div>
                    <span className="font-mono text-kiur-textMuted">- 2 un.</span>
                  </div>

                  <div className="flex items-center justify-between text-xs py-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                      <span className="text-kiur-text">Aviso automático de stock mínimo</span>
                    </div>
                    <span className="font-mono text-amber-400 font-semibold">Notificado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Strategic Proposition & Transparency (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-display font-bold text-white">
              Software que se adapta a tu negocio, no al revés.
            </h3>
            <p className="text-sm text-kiur-textMuted leading-relaxed">
              Los sistemas genéricos suelen ser costosos, excesivamente complejos o no contemplan cómo operás en el mostrador. En Kiur Code analizamos tu circuito de trabajo y construimos módulos a medida que resuelven exactamente lo que necesitás.
            </p>

            {/* Transparency GitHub-style Alert Note */}
            <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/25 p-4 text-xs text-kiur-textMuted space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Desarrollo honesto y a medida</span>
              </div>
              <p className="leading-relaxed">
                No vendemos un software estándar empaquetado ni cobramos licencias por funciones que no vas a usar. Evaluamos el tamaño y las prioridades de tu empresa para diseñar una solución escalable y realista.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.erp)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider bg-emerald-400 text-kiur-dark hover:bg-white transition-all duration-200 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Consultar por un sistema de gestión</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 6 Capabilities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {erpCapabilities.map((cap) => (
            <div
              key={cap.title}
              className="glass-panel glass-panel-hover rounded-xl p-6 border border-white/5"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                {cap.icon}
              </div>
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
