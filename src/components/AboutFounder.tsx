import React from 'react';
import { Linkedin, Instagram, MapPin, GraduationCap, Code2, ArrowUpRight, UserCheck } from 'lucide-react';
import { BRAND } from '../data/content';

export const AboutFounder: React.FC = () => {
  return (
    <section id="conoceme" className="py-24 bg-kiur-bgAlt relative border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-zinc-200 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left: Founder Photo Frame (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-50 border-2 border-zinc-200 shadow-lg p-1 group">
                <div className="w-full h-full rounded-2xl bg-white flex flex-col items-center justify-center p-6 text-center relative overflow-hidden border border-zinc-100">
                  {/* Subtle code backdrop */}
                  <div className="absolute inset-0 opacity-5 flex flex-col justify-around text-[10px] font-mono text-black pointer-events-none p-4 select-none">
                    <span>const founder = "Lucas Hartung";</span>
                    <span>location = "Bariloche, Argentina";</span>
                    <span>education = "Ingeniería en Computación";</span>
                    <span>focus = ["Web", "NFC", "ERP", "UX"];</span>
                  </div>

                  {/* Avatar badge */}
                  <div className="relative mb-5">
                    <div className="w-28 h-28 rounded-full bg-zinc-950 border-4 border-kiur-red flex items-center justify-center shadow-lg">
                      <span className="font-display font-black text-4xl text-white tracking-tight">
                        LH
                      </span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-white border-2 border-zinc-950 flex items-center justify-center text-kiur-red shadow-sm">
                      <Code2 className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display font-black text-2xl text-zinc-950 mb-1 uppercase tracking-tight">
                    {BRAND.founder}
                  </h3>
                  <p className="text-xs text-kiur-red font-mono font-bold uppercase tracking-wider mb-4">
                    Fundador de Kiur Code
                  </p>

                  <div className="space-y-2 text-xs text-zinc-600 w-full pt-4 border-t border-zinc-100 font-medium">
                    <div className="flex items-center justify-center gap-2">
                      <GraduationCap className="w-4 h-4 text-kiur-red shrink-0" />
                      <span>Estudiante de Ingeniería en Computación</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="w-4 h-4 text-kiur-red shrink-0" />
                      <span>San Carlos de Bariloche, Argentina</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Personal Editorial Story & Links (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-100 text-xs font-mono font-bold text-kiur-red uppercase tracking-wider shadow-sm">
                <UserCheck className="w-3.5 h-3.5" />
                <span>Sobre el Fundador</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-zinc-950 tracking-tight uppercase leading-tight">
                Detrás de Kiur Code <br />
                <span className="text-kiur-red">hay una persona real</span>.
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
                <p>
                  Soy <strong className="text-zinc-950 font-bold">Lucas Hartung</strong>, estudiante de Ingeniería en Computación y desarrollador de soluciones digitales en San Carlos de Bariloche.
                </p>
                <p>
                  Me interesa la tecnología aplicada a problemas cotidianos: desde crear experiencias web que ayuden a los comercios a conectar con sus clientes, hasta desarrollar sistemas que simplifiquen tareas y mejoren la gestión.
                </p>
                <p>
                  Con <strong className="text-zinc-950 font-bold">Kiur Code</strong> busco acercar herramientas tecnológicas útiles a negocios que quieren profesionalizarse, vender más y aprovechar mejor las oportunidades digitales.
                </p>
                <p className="text-sm italic text-zinc-800 border-l-2 border-kiur-red pl-4 py-1">
                  "Mi objetivo es construir soluciones que no solo se vean bien, sino que también funcionen, resuelvan problemas concretos y puedan evolucionar junto con cada negocio."
                </p>
              </div>

              {/* Social / Professional Links */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={BRAND.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-bold uppercase tracking-wider text-zinc-900 hover:text-kiur-red hover:border-kiur-red transition-all shadow-sm"
                >
                  <Linkedin className="w-4 h-4 text-zinc-900" />
                  <span>Conectar en LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>

                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-bold uppercase tracking-wider text-zinc-900 hover:text-kiur-red hover:border-kiur-red transition-all shadow-sm"
                >
                  <Instagram className="w-4 h-4 text-kiur-red" />
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
