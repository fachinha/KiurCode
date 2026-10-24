import React from 'react';
import { BarChart3, Database, Users, Cpu, MessageCircle, ArrowRight, CheckCircle2, TrendingUp, Layers } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/content';

export const ErpSection: React.FC = () => {
  const erpCapabilities = [
    {
      title: 'Ventas y Caja Diaria',
      description: 'Registro ágil de operaciones, arqueo de caja, métodos de pago múltiples y cierre de turnos sin planillas desordenadas.',
      icon: <TrendingUp className="w-5 h-5 text-kiur-red" />,
    },
    {
      title: 'Control de Stock e Inventario',
      description: 'Seguimiento de existencias en tiempo real, alertas automáticas de reposición y trazabilidad por producto o lote.',
      icon: <Layers className="w-5 h-5 text-kiur-red" />,
    },
    {
      title: 'Clientes y Proveedores',
      description: 'Fichas centralizadas con historial de compras, cuentas corrientes, plazos de pago y datos de contacto directo.',
      icon: <Users className="w-5 h-5 text-kiur-red" />,
    },
    {
      title: 'Métricas y Tableros Visuales',
      description: 'Tableros gráficos interactivos con tus números clave: productos más vendidos, horarios pico y rentabilidad mensual.',
      icon: <BarChart3 className="w-5 h-5 text-kiur-red" />,
    },
    {
      title: 'Roles de Usuario y Permisos',
      description: 'Acceso diferenciado para cajeros, encargados y dueños, garantizando la seguridad de la información crítica.',
      icon: <Database className="w-5 h-5 text-kiur-red" />,
    },
    {
      title: 'Automatizaciones e Integraciones',
      description: 'Sincronización entre tu catálogo online, bases de datos internas y notificaciones operativas vía WhatsApp o email.',
      icon: <Cpu className="w-5 h-5 text-kiur-red" />,
    },
  ];

  return (
    <section id="software" className="py-24 bg-kiur-black relative border-t border-white/10 bg-grid-minimal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold text-kiur-red uppercase tracking-wider mb-4">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Software Empresarial a Medida</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase mb-6">
            Sistemas ERP y <br />
            <span className="text-kiur-red">Software de Gestión</span>.
          </h2>
          <p className="text-base sm:text-lg text-kiur-muted leading-relaxed">
            Cuando tu comercio crece, las planillas de cálculo y los mensajes dispersos se convierten en cuellos de botella. Desarrollamos software modular que acompaña tus procesos y simplifica el día a día operativo.
          </p>
        </div>

        {/* Strategic Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left Column: Interactive System Mockup (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-1 bg-gradient-to-br from-kiur-red/25 via-white/10 to-transparent shadow-2xl">
              <div className="rounded-2xl bg-kiur-surface border border-white/10 p-5 sm:p-7">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6 text-xs text-kiur-muted">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-kiur-red animate-pulse"></span>
                    <span className="font-mono text-white font-bold uppercase tracking-wider text-[11px]">
                      Panel de Gestión Interno · Bariloche
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-kiur-red border border-kiur-red/25 font-mono text-[10px] font-bold">
                    SISTEMA ACTIVO
                  </span>
                </div>

                {/* KPI Metrics Simulator */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  <div className="p-3.5 rounded-xl bg-black/60 border border-white/5">
                    <span className="text-[10px] font-mono text-kiur-muted uppercase block">Ventas Hoy</span>
                    <span className="font-display font-black text-xl text-white mt-1 block">$ 418.500</span>
                    <span className="text-[10px] text-kiur-red font-bold block mt-0.5">+18% esta semana</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-black/60 border border-white/5">
                    <span className="text-[10px] font-mono text-kiur-muted uppercase block">Pedidos</span>
                    <span className="font-display font-black text-xl text-white mt-1 block">24</span>
                    <span className="text-[10px] text-kiur-muted block mt-0.5">En mostrador</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-black/60 border border-white/5">
                    <span className="text-[10px] font-mono text-kiur-muted uppercase block">Stock Mínimo</span>
                    <span className="font-display font-black text-xl text-kiur-red mt-1 block">3 ítems</span>
                    <span className="text-[10px] text-kiur-muted block mt-0.5">Alerta reposición</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-black/60 border border-white/5">
                    <span className="text-[10px] font-mono text-kiur-muted uppercase block">Caja Diaria</span>
                    <span className="font-display font-black text-xl text-white mt-1 block">Cuadrada</span>
                    <span className="text-[10px] text-white/60 block mt-0.5">0 diferencias</span>
                  </div>
                </div>

                {/* Operations workflow preview */}
                <div className="rounded-xl bg-black/60 border border-white/5 p-4 space-y-3">
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-white/5">
                    <span className="text-white font-bold uppercase tracking-wider text-[11px]">Movimientos de inventario</span>
                    <span className="text-kiur-red font-mono text-[10px] font-bold">En tiempo real</span>
                  </div>

                  <div className="flex items-center justify-between text-xs py-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                      <span className="text-white">Ingreso mercadería · Proveedor local</span>
                    </div>
                    <span className="font-mono text-white font-bold">+ 45 un.</span>
                  </div>

                  <div className="flex items-center justify-between text-xs py-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-kiur-red"></div>
                      <span className="text-white">Venta mostrador #1084 · Pedido WhatsApp</span>
                    </div>
                    <span className="font-mono text-kiur-muted">- 2 un.</span>
                  </div>

                  <div className="flex items-center justify-between text-xs py-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-kiur-red animate-pulse"></div>
                      <span className="text-white">Alerta automática de stock mínimo</span>
                    </div>
                    <span className="font-mono text-kiur-red font-bold">Notificado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Strategic Proposition & Transparency (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-display font-black text-white uppercase">
              Software que se adapta a tu negocio, no al revés.
            </h3>
            <p className="text-sm text-kiur-muted leading-relaxed">
              Los sistemas genéricos suelen ser costosos, excesivamente complejos o no contemplan cómo operás en el mostrador. En Kiur Code analizamos tu circuito de trabajo y construimos módulos a medida que resuelven exactamente lo que necesitás.
            </p>

            {/* Transparency Note */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-5 text-xs text-kiur-muted space-y-2">
              <div className="flex items-center gap-2 text-white font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-kiur-red shrink-0" />
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
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider btn-red"
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
              className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                {cap.icon}
              </div>
              <h4 className="font-display font-black text-white text-base mb-2 uppercase">
                {cap.title}
              </h4>
              <p className="text-xs text-kiur-muted leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
