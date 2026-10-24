import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/content';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white relative border-b border-zinc-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-100 text-xs font-mono font-bold uppercase tracking-[0.2em] text-kiur-red mb-3 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Preguntas Frecuentes</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-zinc-950 tracking-tight uppercase mb-4">
            Preguntas Frecuentes.
          </h2>
          <p className="text-base text-zinc-600">
            Respuestas directas y transparentes sobre nuestras tarjetas inteligentes, páginas web y software a medida.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white ${
                  isOpen ? 'border-kiur-red/50 shadow-md ring-1 ring-kiur-red/20' : 'border-zinc-200 hover:border-zinc-300 shadow-sm'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-1 focus:ring-kiur-red cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-black text-base sm:text-lg text-zinc-950">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-kiur-red text-white' : 'bg-zinc-100 text-zinc-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out px-6 sm:px-8 overflow-hidden ${
                    isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'
                  }`}
                >
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed border-t border-zinc-100 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
