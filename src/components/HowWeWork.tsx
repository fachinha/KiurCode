import React from 'react';
import { Sparkles, Check } from 'lucide-react';
import { PROCESS_STAGES } from '../data/content';

export const HowWeWork: React.FC = () => {
  return (
    <section id="proceso" className="py-24 px-4 sm:px-6 lg:px-8 bg-kiur-dark relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold text-kiur-cyan uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Metodología de Trabajo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Un proceso claro, transparente y sin vueltas.
          </h2>
          <p className="text-base text-kiur-textMuted leading-relaxed">
            De la primera charla hasta la puesta en marcha: sabés exactamente qué estamos construyendo, en qué etapa estamos y qué resultados esperar.
          </p>
        </div>

        {/* 4 Process Cards with Sequence Line */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STAGES.map((stage, idx) => (
            <div
              key={stage.step}
              className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-3xl font-black text-kiur-cyan/80 group-hover:text-kiur-cyan transition-colors">
                    {stage.step}
                  </span>
                  <span className="text-[11px] font-mono text-kiur-textMuted uppercase px-2 py-0.5 rounded bg-white/5">
                    Fase {idx + 1}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-white mb-3">
                  {stage.title}
                </h3>

                <p className="text-xs sm:text-sm text-kiur-textMuted leading-relaxed mb-6">
                  {stage.description}
                </p>
              </div>

              <div>
                <div className="pt-4 border-t border-white/5 space-y-2">
                  <span className="text-[11px] font-mono uppercase text-kiur-cyan block font-semibold">
                    Entregables clave:
                  </span>
                  {stage.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-kiur-textMuted">
                      <Check className="w-3.5 h-3.5 text-kiur-cyan shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Honest commitment banner */}
        <div className="mt-12 rounded-xl bg-kiur-surface border border-white/5 p-4 text-xs text-kiur-textMuted text-center max-w-2xl mx-auto">
          <p>
            <strong className="text-white font-medium">Compromiso profesional:</strong> Los plazos y alcances se fijan por escrito tras evaluar la complejidad técnica de cada requerimiento, garantizando total previsibilidad.
          </p>
        </div>
      </div>
    </section>
  );
};
