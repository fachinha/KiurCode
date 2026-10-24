import React from 'react';
import { Linkedin, Instagram, MapPin, GraduationCap, Code2, ArrowUpRight, UserCheck } from 'lucide-react';
import { BRAND } from '../data/content';

export const AboutFounder: React.FC = () => {
  return (
    <section id="conoceme" className="py-24 px-4 sm:px-6 lg:px-8 bg-kiur-dark relative border-t border-white/5 bg-grid-pattern">
      <div className="max-w-7xl mx-auto">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/10 relative overflow-hidden">
          {/* Subtle aurora glow */}
          <div className="aurora-cyan -top-20 -right-20 opacity-30 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left: Founder Photo Frame (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-b from-kiur-surfaceLight to-black border-2 border-kiur-cyan/30 shadow-2xl p-1 group">
                {/* Photo frame container: prepared for Lucas's official photo */}
                <div className="w-full h-full rounded-xl bg-kiur-surface flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
                  {/* Subtle code backdrop */}
                  <div className="absolute inset-0 opacity-10 flex flex-col justify-around text-[10px] font-mono text-kiur-cyan pointer-events-none p-4 select-none">
                    <span>const founder = "Lucas Hartung";</span>
                    <span>location = "Bariloche, Argentina";</span>
                    <span>education = "Ingeniería en Computación";</span>
                    <span>focus = ["Web", "NFC", "ERP", "UX"];</span>
                  </div>

                  {/* Avatar tech placeholder with initials */}
                  <div className="relative mb-5">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-kiur-cyan/20 to-blue-600/30 border-2 border-kiur-cyan flex items-center justify-center shadow-glow-cyan">
                      <span className="font-display font-black text-4xl text-white tracking-tight">
                        LH
                      </span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-kiur-surface border-2 border-kiur-cyan flex items-center justify-center text-kiur-cyan">
                      <Code2 className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display font-extrabold text-2xl text-white mb-1">
                    {BRAND.founder}
                  </h3>
                  <p className="text-xs text-kiur-cyan font-semibold uppercase tracking-wider mb-4">
                    Fundador de Kiur Code
                  </p>

                  <div className="space-y-2 text-xs text-kiur-textMuted w-full pt-4 border-t border-white/10">
                    <div className="flex items-center justify-center gap-2">
                      <GraduationCap className="w-4 h-4 text-kiur-cyan shrink-0" />
                      <span>Estudiante de Ingeniería en Computación</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="w-4 h-4 text-kiur-cyan shrink-0" />
                      <span>San Carlos de Bariloche, Argentina</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Personal Editorial Story & Links (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold text-kiur-cyan uppercase tracking-wider">
                <UserCheck className="w-3.5 h-3.5" />
                <span>Sobre el Fundador</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
                Detrás de Kiur Code hay una persona que convierte ideas en soluciones.
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-kiur-textMuted leading-relaxed">
                <p>
                  Soy <strong className="text-white font-medium">Lucas Hartung</strong>, estudiante de Ingeniería en Computación y desarrollador de soluciones digitales en San Carlos de Bariloche.
                </p>
                <p>
                  Me apasiona la tecnología aplicada a problemas reales: desde crear experiencias web que ayuden a los comercios locales a conectar con sus clientes, hasta desarrollar sistemas que simplifiquen tareas cotidianas y mejoren la gestión comercial.
                </p>
                <p>
                  Con <strong className="text-white font-medium">Kiur Code</strong> busco acercar herramientas tecnológicas útiles a negocios que quieren profesionalizarse, vender más y aprovechar mejor las oportunidades digitales.
                </p>
                <p className="text-sm italic text-white/90 border-l-2 border-kiur-cyan pl-4 py-1">
                  "Mi objetivo es construir soluciones que no solo se vean bien, sino que también funcionen, resuelvan problemas concretos y puedan evolucionar junto con cada negocio."
                </p>
              </div>

              {/* Social / Professional Links */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={BRAND.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-white hover:text-kiur-cyan hover:border-kiur-cyan/40 transition-all"
                >
                  <Linkedin className="w-4 h-4 text-[#0077b5]" />
                  <span>Conectar en LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>

                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-white hover:text-kiur-cyan hover:border-kiur-cyan/40 transition-all"
                >
                  <Instagram className="w-4 h-4 text-[#E1306C]" />
                  <span>Seguir en Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
