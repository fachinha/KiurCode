import React, { useState } from 'react';
import { MessageCircle, ArrowRight, Smartphone, Globe, BarChart3, HelpCircle, Send } from 'lucide-react';
import { BRAND, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/content';

export const Contact: React.FC = () => {
  const [customMsg, setCustomMsg] = useState('');
  const [selectedService, setSelectedService] = useState<'general' | 'cards' | 'web' | 'erp'>('general');

  const serviceOptions = [
    {
      id: 'cards',
      label: 'Tarjetas Inteligentes NFC',
      icon: <Smartphone className="w-4 h-4" />,
      defaultText: WHATSAPP_MESSAGES.cards,
    },
    {
      id: 'web',
      label: 'Página Web Comercial',
      icon: <Globe className="w-4 h-4" />,
      defaultText: WHATSAPP_MESSAGES.web,
    },
    {
      id: 'erp',
      label: 'Software / ERP a Medida',
      icon: <BarChart3 className="w-4 h-4" />,
      defaultText: WHATSAPP_MESSAGES.erp,
    },
    {
      id: 'general',
      label: 'Consulta General',
      icon: <HelpCircle className="w-4 h-4" />,
      defaultText: WHATSAPP_MESSAGES.general,
    },
  ];

  const handleLaunchWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const activeOption = serviceOptions.find((opt) => opt.id === selectedService);
    const textToSend = customMsg.trim() ? `${activeOption?.defaultText} ${customMsg.trim()}` : (activeOption?.defaultText || WHATSAPP_MESSAGES.general);
    window.open(getWhatsAppUrl(textToSend), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contacto" className="py-24 bg-kiur-bgAlt relative border-b border-zinc-200 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-100 text-xs font-mono font-bold uppercase tracking-[0.2em] text-kiur-red mb-3 shadow-sm">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Contacto Directo</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-zinc-950 tracking-tight uppercase mb-4">
            Empecemos a Trabajar.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600">
            Escribinos directamente por WhatsApp. Te respondemos de inmediato desde Bariloche para evaluar tu proyecto.
          </p>
        </div>

        {/* 4 Direct WhatsApp Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {serviceOptions.map((opt) => (
            <a
              key={opt.id}
              href={getWhatsAppUrl(opt.defaultText)}
              target="_blank"
              rel="noopener noreferrer"
              className="white-card white-card-red rounded-2xl p-5 flex flex-col justify-between group"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-900 mb-3 group-hover:border-kiur-red group-hover:text-kiur-red transition-colors">
                  {opt.icon}
                </div>
                <h3 className="font-display font-black text-zinc-950 text-sm mb-1 uppercase tracking-tight group-hover:text-kiur-red transition-colors">
                  {opt.label}
                </h3>
                <p className="text-[11px] text-zinc-500 leading-relaxed">
                  Consulta rápida con mensaje precargado.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-kiur-red">
                <span>Escribir</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        {/* Quick Message Builder Box (Crisp White Card) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-zinc-200 shadow-md">
          <form onSubmit={handleLaunchWhatsApp} className="space-y-6">
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-700 mb-3">
                1. Seleccioná el tema de tu consulta:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {serviceOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedService(opt.id as any)}
                    className={`py-3 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 border text-center cursor-pointer ${
                      selectedService === opt.id
                        ? 'bg-kiur-red text-white border-kiur-red shadow-glow-red'
                        : 'bg-zinc-50 text-zinc-700 border-zinc-200 hover:border-zinc-300 hover:text-black'
                    }`}
                  >
                    {opt.icon}
                    <span className="truncate">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="custom-notes" className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-700 mb-2">
                2. Agregá algún detalle de tu negocio (opcional):
              </label>
              <textarea
                id="custom-notes"
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                placeholder="Ejemplo: Tengo un comercio en Bariloche y quiero sumar tarjetas NFC para reseñas..."
                rows={3}
                className="w-full rounded-2xl bg-zinc-50 border border-zinc-200 p-4 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-kiur-red focus:ring-1 focus:ring-kiur-red transition-all resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="text-xs text-zinc-500 text-center sm:text-left">
                <span className="text-zinc-900 font-bold">Línea directa:</span> {BRAND.phoneDisplay} · Bariloche
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider btn-red cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Abrir chat de WhatsApp</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
