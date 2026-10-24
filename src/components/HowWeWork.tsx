import React from 'react';
import { Sparkles, Check } from 'lucide-react';
import { PROCESS_STAGES } from '../data/content';

export const HowWeWork: React.FC = () => {
  return (
    <section id="proceso" className="py-24 bg-kiur-surface relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold uppercase tracking-[0.2em] text-kiur-red mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Metodología de Trabajo</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase mb-4">
            Cómo Trabajamos. <br />
            <span className="text-kiur-red">4 Pasos Claros</span>.
          </h2>
          <p className="text-base text-kiur-muted leading-relaxed">
            De la primera charla hasta la puesta en marcha: sabés exactamente qué estamos construyendo, en qué etapa estamos y qué resultados esperar.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STAGES.map((stage, idx) => (
            <div
              key={stage.step}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-white/10 group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-4xl font-black text-kiur-red">
                    {stage.step}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-kiur-muted uppercase px-2.5 py-1 rounded bg-white/5 border border-white/10">
                    Fase {idx + 1}
                  </span>
                </div>

                <h3 className="font-display font-black text-xl text-white uppercase mb-3">
                  {stage.title}
                </h3>

                <p className="text-xs sm:text-sm text-kiur-muted leading-relaxed mb-6">
                  {stage.description}
                </p>
              </div>

              <div>
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <span className="text-[10px] font-mono uppercase text-kiur-red block font-bold tracking-wider">
                    Entregables:
                  </span>
                  {stage.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-kiur-muted">
                      <Check className="w-3.5 h-3.5 text-kiur-red shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 rounded-2xl bg-kiur-black border border-white/10 p-5 text-xs text-kiur-muted text-center max-w-2xl mx-auto">
          <p>
            <strong className="text-white font-bold uppercase tracking-wider">Compromiso profesional:</strong> Los plazos y alcances se fijan por escrito tras evaluar la complejidad técnica de cada requerimiento.
          </p>
        </div>
      </div>
    </section>
  );
};
