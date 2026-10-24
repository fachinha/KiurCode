import React from 'react';
import { ShieldCheck, Zap, Layers, Users, Sparkles } from 'lucide-react';
import { TRUST_PILLARS } from '../data/content';

export const TrustValue: React.FC = () => {
  const icons = [
    <Users className="w-6 h-6 text-kiur-cyan" key="users" />,
    <Zap className="w-6 h-6 text-kiur-cyan" key="zap" />,
    <Layers className="w-6 h-6 text-kiur-cyan" key="layers" />,
    <ShieldCheck className="w-6 h-6 text-kiur-cyan" key="shield" />,
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-kiur-surface relative border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-kiur-cyan mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Propuesta de Valor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Más que tecnología aislada:{' '}
            <span className="text-kiur-cyan">herramientas que hacen crecer tu negocio.</span>
          </h2>
          <p className="text-base sm:text-lg text-kiur-textMuted leading-relaxed">
            No te vendemos una plantilla genérica que nadie mira. Desarrollamos soluciones pensadas para solucionar problemas cotidianos: conseguir más reseñas, recibir pedidos sin fricción y controlar tus números con claridad.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-kiur-surfaceLight border border-kiur-cyan/20 flex items-center justify-center mb-5">
                  {icons[idx]}
                </div>
                <div className="text-xs uppercase tracking-wider text-kiur-cyan font-mono font-medium mb-1">
                  {pillar.subtitle}
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-sm text-kiur-textMuted leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-white/5 flex items-baseline justify-between">
                <span className="font-display font-black text-2xl text-white">
                  {pillar.metric}
                </span>
                <span className="text-[11px] text-kiur-textMuted font-medium">
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
