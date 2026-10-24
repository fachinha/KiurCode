import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight, Smartphone, Globe, BarChart3 } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES, BRAND } from '../data/content';

export const WhatsAppFloating: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside aria-label="Contacto rápido por WhatsApp" className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick Menu Popover */}
      {isOpen && (
        <div className="mb-3 w-72 rounded-3xl bg-kiur-surface border border-white/15 shadow-2xl p-4 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-kiur-red animate-pulse"></span>
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                Hablar con Lucas
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-kiur-muted hover:text-white p-1 rounded-md"
              aria-label="Cerrar opciones de WhatsApp"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-kiur-muted mb-3 leading-relaxed">
            Elegí cómo querés iniciar la charla o escribinos directamente:
          </p>

          <div className="space-y-1.5 text-xs">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.cards)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-kiur-red/15 hover:text-kiur-red transition-colors text-white"
            >
              <div className="flex items-center gap-2">
                <Smartphone className="w-3.5 h-3.5 text-kiur-red" />
                <span>Tarjetas Inteligentes</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            </a>

            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.web)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 hover:text-white transition-colors text-white"
            >
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-white" />
                <span>Página Web Comercial</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            </a>

            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.erp)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-kiur-red/15 hover:text-kiur-red transition-colors text-white"
            >
              <div className="flex items-center gap-2">
                <BarChart3 className="w-3.5 h-3.5 text-kiur-red" />
                <span>Software de Gestión</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>

          <div className="mt-3 pt-2.5 border-t border-white/5 text-[10px] text-center text-kiur-muted font-mono">
            {BRAND.phoneDisplay} · Bariloche
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <div className="flex items-center gap-2">
        {!isOpen && (
          <span className="hidden sm:inline-block px-3.5 py-1.5 rounded-full bg-kiur-surface/90 border border-white/15 text-xs text-white font-bold uppercase tracking-wider shadow-lg backdrop-blur-md">
            ¿Tenés dudas? Escribinos
          </span>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full btn-red flex items-center justify-center shadow-glow-red hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-kiur-black focus:ring-kiur-red relative"
          aria-label="Abrir opciones de contacto por WhatsApp"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <>
              <MessageCircle className="w-7 h-7 text-white fill-current" />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-white border-2 border-kiur-black flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-kiur-red animate-ping"></span>
              </span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
};
