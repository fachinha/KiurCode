import React from 'react';
import { Linkedin, Instagram, MapPin, GraduationCap, Cpu, ArrowUpRight } from 'lucide-react';
import { BRAND } from '../data/content';

export const AboutFounder: React.FC = () => {
  return (
    <section id="conoceme" className="py-24 bg-kiur-bgAlt relative border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-zinc-200 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left: Founder Real Photo Card (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm rounded-3xl overflow-hidden bg-white border-2 border-zinc-200 shadow-xl group">
                {/* Real photo container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-zinc-100">
                  <img
                    src="/lucashartung.jpeg"
                    alt="Lucas Hartung - Fundador de Kiur Code"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={1000}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  {/* Name and Title overlay at the bottom of the photo */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-display font-black text-2xl uppercase tracking-tight text-white drop-shadow-sm">
                      Lucas Hartung
                    </h3>
                    <p className="text-xs text-kiur-red font-mono font-bold uppercase tracking-wider">
                      Fundador de Kiur Code
                    </p>
                  </div>
                </div>

                {/* Credentials & Details Strip */}
                <div className="p-5 bg-white space-y-2.5 text-xs text-zinc-700 font-medium border-t border-zinc-100">
                  <div className="flex items-center gap-2.5">
                    <GraduationCap className="w-4 h-4 text-kiur-red shrink-0" />
                    <span>Estudiante de Ingeniería en Computación</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Cpu className="w-4 h-4 text-kiur-red shrink-0" />
                    <span>Técnico Electrónico</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-zinc-500">
                    <MapPin className="w-4 h-4 text-kiur-red shrink-0" />
                    <span>San Carlos de Bariloche, Argentina</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Personal Editorial Story & Links (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-zinc-950 tracking-tight uppercase leading-tight">
                Detrás de Kiur Code <br />
                <span className="text-kiur-red">hay una persona real</span>.
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
                <p>
                  Soy <strong className="text-zinc-950 font-bold">Lucas Hartung</strong>, técnico electrónico, estudiante de Ingeniería en Computación y desarrollador de soluciones digitales en San Carlos de Bariloche.
                </p>
                <p>
                  Me interesa la tecnología aplicada a problemas cotidianos: desde crear experiencias web que ayuden a los comercios a conectar con sus clientes, hasta desarrollar sistemas que simplifiquen tareas y mejoren la gestión.
                </p>
                <p>
                  Con <strong className="text-zinc-950 font-bold">Kiur Code</strong> busco acercar herramientas tecnológicas útiles a negocios que quieren profesionalizarse, vender más y aprovechar mejor las oportunidades digitales.
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
