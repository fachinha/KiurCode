import React from 'react';
import { ExternalLink, CheckCircle2, FolderGit2 } from 'lucide-react';
import { PROJECTS } from '../data/content';

export const Portfolio: React.FC = () => {
  return (
    <section id="proyectos" className="py-24 px-4 sm:px-6 lg:px-8 bg-kiur-surface relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold text-kiur-cyan uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Trabajos &amp; Desarrollos Reales</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              Proyectos construidos con foco en resultados.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-kiur-textMuted max-w-md">
            Mostramos soluciones tangibles implementadas para comercios locales. Sin clientes ficticios ni métricas inventadas: tecnología aplicada a problemas reales.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between group"
            >
              <div>
                {/* Media Image Container */}
                <div className="relative aspect-[16/9] overflow-hidden bg-black/60 border-b border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded-full bg-kiur-surface/90 backdrop-blur-md text-kiur-cyan border border-kiur-cyan/30 font-semibold">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white/90 border border-white/10 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      {project.verifiedBadge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="font-display font-bold text-2xl text-white mb-2 group-hover:text-kiur-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-kiur-cyan uppercase tracking-wider mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-kiur-textMuted leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-kiur-textMuted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action link */}
              {project.liveUrl && (
                <div className="p-6 pt-0 sm:p-8 sm:pt-0">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-kiur-cyan hover:text-white transition-colors"
                  >
                    <span>Ver ficha comercial / referencia</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
