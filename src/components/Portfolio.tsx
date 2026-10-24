import React from 'react';
import { ExternalLink, CheckCircle2, FolderGit2 } from 'lucide-react';
import { PROJECTS } from '../data/content';

export const Portfolio: React.FC = () => {
  return (
    <section id="proyectos" className="py-24 bg-white relative border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-100 text-xs font-mono font-bold uppercase tracking-[0.2em] text-kiur-red mb-3 shadow-sm">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Casos &amp; Trabajos Reales</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-zinc-950 tracking-tight uppercase">
              Proyectos en Bariloche.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-600 max-w-md leading-relaxed">
            Sin clientes ficticios ni métricas inventadas: soluciones tangibles para comercios locales de Bariloche y la Patagonia.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="white-card white-card-red rounded-3xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Media Image Container */}
                <div className="relative aspect-[16/9] overflow-hidden bg-zinc-100 border-b border-zinc-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-zinc-900 border border-zinc-200 font-bold shadow-sm">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-kiur-red text-white flex items-center gap-1.5 shadow-sm">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {project.verifiedBadge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="font-display font-black text-2xl text-zinc-950 uppercase mb-1 group-hover:text-kiur-red transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono font-bold text-kiur-red uppercase tracking-wider mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-md bg-zinc-100 border border-zinc-200 text-zinc-700"
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
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-kiur-red hover:text-black transition-colors"
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
