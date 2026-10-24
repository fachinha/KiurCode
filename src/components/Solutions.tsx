import React from 'react';
import { Smartphone, Globe, BarChart3, ArrowDown } from 'lucide-react';

export const Solutions: React.FC = () => {
  return (
    <section id="soluciones" className="py-20 px-4 sm:px-6 lg:px-8 bg-kiur-dark relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-kiur-cyan font-mono font-bold block mb-2">
              Líneas de Solución
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              Una sola propuesta:{' '}
              <span className="text-kiur-cyan">digitalizar y hacer crecer tu negocio.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-kiur-textMuted max-w-md">
            Desde la captura de clientes en tu mostrador hasta la venta online y el control de inventario interno. Conocé nuestras tres áreas clave.
          </p>
        </div>

        {/* 3 Overview Quick Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <a
            href="#tarjetas"
            className="glass-panel glass-panel-hover rounded-2xl p-6 group block"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-kiur-cyan px-2.5 py-1 rounded-md bg-kiur-cyan/10">
                01 · EN MOSTRADOR
              </span>
              <Smartphone className="w-5 h-5 text-kiur-cyan group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-kiur-cyan transition-colors">
              Tarjetas Inteligentes NFC
            </h3>
            <p className="text-xs text-kiur-textMuted leading-relaxed mb-4">
              Multiplicá tus reseñas de Google y conectá tus canales con solo acercar el teléfono del cliente.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-kiur-cyan font-semibold">
              <span>Ver detalles y fotos reales</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
            </div>
          </a>

          {/* Card 2 */}
          <a
            href="#web"
            className="glass-panel glass-panel-hover rounded-2xl p-6 group block"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-sky-400 px-2.5 py-1 rounded-md bg-sky-500/10">
                02 · EN INTERNET
              </span>
              <Globe className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
              Diseño &amp; Desarrollo Web
            </h3>
            <p className="text-xs text-kiur-textMuted leading-relaxed mb-4">
              Páginas y catálogos comerciales optimizados para vender por WhatsApp sin comisiones abusivas.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-sky-400 font-semibold">
              <span>Ver cómo diseñamos tu web</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
            </div>
          </a>

          {/* Card 3 */}
          <a
            href="#software"
            className="glass-panel glass-panel-hover rounded-2xl p-6 group block"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-emerald-400 px-2.5 py-1 rounded-md bg-emerald-500/10">
                03 · EN TU OPERACIÓN
              </span>
              <BarChart3 className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
              Sistemas de Gestión ERP
            </h3>
            <p className="text-xs text-kiur-textMuted leading-relaxed mb-4">
              Software a medida para control de stock, caja, proveedores y reportes adaptados a tu negocio.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
              <span>Ver capacidades a medida</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
