import React from 'react';
import { ShieldCheck, Zap, Layers, Users, Sparkles } from 'lucide-react';
import { TRUST_PILLARS } from '../data/content';

export const TrustValue: React.FC = () => {
  const icons = [
    <Users className="w-6 h-6 text-kiur-red" key="users" />,
    <Zap className="w-6 h-6 text-kiur-red" key="zap" />,
    <Layers className="w-6 h-6 text-kiur-red" key="layers" />,
    <ShieldCheck className="w-6 h-6 text-kiur-red" key="shield" />,
  ];

  return (
    <section className="py-24 bg-kiur-black relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold uppercase tracking-[0.2em] text-kiur-red mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Por qué elegirnos</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase mb-4">
            Ventajas Claras, <br />
            <span className="text-kiur-red">Cero Letra Chica</span>.
          </h2>
          <p className="text-base sm:text-lg text-kiur-muted leading-relaxed">
            La mayoría de las plataformas cobran alquileres eternos o comisiones por cada venta que hacés. En Kiur Code construimos herramientas que te pertenecen al 100%.
          </p>
        </div>

        {/* 4 Pillars Grid (Minimalist style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-white/10 group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-kiur-surfaceLight border border-white/10 flex items-center justify-center mb-6 group-hover:border-kiur-red/40 transition-colors">
                  {icons[idx]}
                </div>
                <span className="text-[11px] uppercase tracking-[0.16em] text-kiur-red font-mono font-bold block mb-1">
                  {pillar.subtitle}
                </span>
                <h3 className="font-display font-black text-xl text-white mb-3 uppercase">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-kiur-muted leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10 flex items-baseline justify-between">
                <span className="font-display font-black text-3xl text-white">
                  {pillar.metric}
                </span>
                <span className="text-[11px] text-kiur-muted font-medium">
                  {pillar.metricLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
