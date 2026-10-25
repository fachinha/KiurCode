import React, { useState } from 'react';
import { Monitor, Smartphone, ExternalLink, Lock, RefreshCw } from 'lucide-react';
import { PROJECTS } from '../data/content';

export const Portfolio: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');
  const [iframeKey, setIframeKey] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const activeProject = PROJECTS[selectedIdx] || PROJECTS[0];

  const handleSelectProject = (index: number) => {
    setSelectedIdx(index);
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  const handleDeviceChange = (mode: 'desktop' | 'mobile') => {
    setDeviceMode(mode);
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  return (
    <section id="proyectos" className="py-24 bg-white relative border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 rounded-md bg-kiur-red text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-4 shadow-sm">
              Proyectos
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-zinc-950 tracking-tight uppercase">
              Sistemas reales, <br />
              <span className="text-kiur-red">funcionando hoy</span>.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-600 max-w-md leading-relaxed font-normal">
            Páginas webs reales creadas para comercios locales. Seleccioná cualquiera para probarla en vivo y alterná entre vista de computadora y celular.
          </p>
        </div>

        {/* Project Selector Tabs (Algoritmia style) */}
        <div
          className="flex gap-3 overflow-x-auto pb-4 mb-8 scrollbar-none"
          role="tablist"
          aria-label="Páginas web desarrolladas"
        >
          {PROJECTS.map((proj, idx) => {
            const isSelected = idx === selectedIdx;
            return (
              <button
                key={proj.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => handleSelectProject(idx)}
                className={`flex-none flex flex-col items-start gap-1 px-5 py-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-zinc-950 text-white border-zinc-950 shadow-lg scale-[1.02]'
                    : 'bg-zinc-50 hover:bg-zinc-100 border-zinc-200 text-zinc-700 hover:border-zinc-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-kiur-red animate-pulse' : 'bg-zinc-400'}`} />
                  <b className="font-display font-bold text-sm sm:text-base tracking-tight">
                    {proj.name}
                  </b>
                </div>
                <small className={`text-xs ${isSelected ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  {proj.short}
                </small>
              </button>
            );
          })}
        </div>

        {/* Device Mode Toolbar & Live Link */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          {/* Viewport mode toggle */}
          <div className="inline-flex p-1 rounded-full bg-zinc-100 border border-zinc-200 shadow-inner">
            <button
              type="button"
              onClick={() => handleDeviceChange('desktop')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                deviceMode === 'desktop'
                  ? 'bg-white text-zinc-950 shadow-sm'
                  : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span>Computadora</span>
            </button>
            <button
              type="button"
              onClick={() => handleDeviceChange('mobile')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                deviceMode === 'mobile'
                  ? 'bg-white text-zinc-950 shadow-sm'
                  : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Celular</span>
            </button>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleRefresh}
              title="Recargar vista previa"
              className="p-2.5 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-700 hover:text-black transition-all cursor-pointer"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            </button>

            <a
              href={activeProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-950 text-white hover:bg-kiur-red text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow-md transition-all"
            >
              <span>Ver web en vivo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Interactive Browser Frame (Algoritmia style) */}
        <div className="relative rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden">
          {/* Chrome Bar (macOS dots & URL) */}
          <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3.5 bg-zinc-900/90 border-b border-zinc-800 backdrop-blur-md">
            {/* 3 Window traffic light dots */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block" />
            </div>

            {/* URL Address Bar */}
            <div className="flex-1 max-w-md mx-auto flex items-center justify-center gap-2 px-4 py-1.5 rounded-lg bg-zinc-800/80 border border-zinc-700/60 text-xs font-mono text-zinc-300">
              <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate select-all">{activeProject.domain}</span>
            </div>

            {/* Direct Open Link icon */}
            <a
              href={activeProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Abrir en pestaña nueva"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Viewport Area */}
          <div
            className={`w-full relative transition-all duration-300 ${
              deviceMode === 'desktop'
                ? 'h-[540px] sm:h-[620px] bg-white'
                : 'h-[640px] sm:h-[700px] bg-gradient-to-b from-zinc-900 via-zinc-950 to-black flex items-center justify-center p-4 sm:p-6'
            }`}
          >
            {deviceMode === 'desktop' ? (
              /* Desktop Browser Viewport */
              <div className="w-full h-full relative">
                <iframe
                  key={`desktop-${iframeKey}-${activeProject.id}`}
                  src={activeProject.liveUrl}
                  title={`Vista previa computadora de ${activeProject.name}`}
                  className="w-full h-full border-0 bg-white"
                  onLoad={() => setIsLoading(false)}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                  loading="eager"
                />
              </div>
            ) : (
              /* Mobile Smartphone Viewport (Algoritmia phonebox) */
              <div className="relative w-[320px] sm:w-[350px] h-[580px] sm:h-[640px] rounded-[44px] p-3 bg-zinc-900 border-4 border-zinc-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.1)] flex flex-col items-center">
                {/* Smartphone Dynamic Island / Notch */}
                <div className="absolute top-4 z-20 flex items-center justify-center w-28 h-4 rounded-full bg-black">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-900 mr-2" />
                  <div className="w-2 h-2 rounded-full bg-blue-950/60" />
                </div>

                {/* Inner Screen */}
                <div className="w-full h-full rounded-[34px] overflow-hidden bg-white relative">
                  <iframe
                    key={`mobile-${iframeKey}-${activeProject.id}`}
                    src={activeProject.liveUrl}
                    title={`Vista previa celular de ${activeProject.name}`}
                    className="w-full h-full border-0 bg-white"
                    onLoad={() => setIsLoading(false)}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                    loading="eager"
                  />
                </div>

                {/* Home Indicator Bar */}
                <div className="w-28 h-1 rounded-full bg-zinc-700/60 mt-1.5" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
