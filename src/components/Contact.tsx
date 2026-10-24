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
    <section id="contacto" className="py-24 px-4 sm:px-6 lg:px-8 bg-kiur-dark relative border-t border-white/5 bg-grid-pattern overflow-hidden">
      <div className="aurora-cyan bottom-0 left-1/2 -translate-x-1/2 opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kiur-cyan/10 border border-kiur-cyan/30 text-xs font-mono font-bold text-kiur-cyan uppercase tracking-wider mb-3">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Contacto Directo</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            ¿Listo para llevar tu negocio al siguiente nivel?
          </h2>
          <p className="text-base sm:text-lg text-kiur-textMuted">
            Escribinos directamente por WhatsApp. Te respondemos de manera personalizada, evaluamos tus necesidades y te presupuestamos sin compromiso.
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
              className="glass-panel glass-panel-hover rounded-xl p-5 flex flex-col justify-between group border border-white/10 hover:border-kiur-cyan/40"
            >
              <div>
                <div className="w-9 h-9 rounded-lg bg-kiur-surfaceLight border border-white/10 flex items-center justify-center text-kiur-cyan mb-3 group-hover:border-kiur-cyan/40">
                  {opt.icon}
                </div>
                <h3 className="font-display font-bold text-white text-sm mb-1 group-hover:text-kiur-cyan transition-colors">
                  {opt.label}
                </h3>
                <p className="text-[11px] text-kiur-textMuted leading-relaxed">
                  Consulta rápida con mensaje precargado.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-kiur-cyan">
                <span>Escribir ahora</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        {/* Quick Message Builder Box */}
        <div className="glass-panel rounded-2xl p-6 sm:p-10 border border-white/10 shadow-2xl">
          <form onSubmit={handleLaunchWhatsApp} className="space-y-6">
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-kiur-textMuted mb-3">
                1. Seleccioná el tema de tu consulta:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {serviceOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedService(opt.id as any)}
                    className={`py-3 px-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 border text-center ${
                      selectedService === opt.id
                        ? 'bg-kiur-cyan text-kiur-dark border-kiur-cyan shadow-glow-cyan'
                        : 'bg-white/5 text-kiur-textMuted border-white/10 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    {opt.icon}
                    <span className="truncate">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="custom-notes" className="block text-xs font-mono font-bold uppercase tracking-wider text-kiur-textMuted mb-2">
                2. Agregá algún detalle de tu negocio (opcional):
              </label>
              <textarea
                id="custom-notes"
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                placeholder="Ejemplo: Tengo una fiambrería en el centro de Bariloche y quiero sumar tarjetas NFC para reseñas..."
                rows={3}
                className="w-full rounded-xl bg-black/40 border border-white/10 p-4 text-sm text-white placeholder:text-kiur-textMuted/50 focus:outline-none focus:border-kiur-cyan focus:ring-1 focus:ring-kiur-cyan transition-all resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="text-xs text-kiur-textMuted text-center sm:text-left">
                <span className="text-white font-semibold">Destino directo:</span> {BRAND.phoneDisplay} · Sin intermediarios
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider bg-kiur-cyan text-kiur-dark hover:bg-white hover:shadow-glow-cyan transition-all duration-200 cursor-pointer"
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
