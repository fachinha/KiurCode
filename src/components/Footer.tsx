import React from 'react';
import { Instagram, Linkedin, MessageCircle, MapPin, ArrowUpRight } from 'lucide-react';
import { BRAND, NAV_LINKS, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/content';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-kiur-textMuted">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-kiur-surfaceLight border border-kiur-cyan/30 flex items-center justify-center">
                <span className="font-mono text-kiur-cyan font-bold text-sm">&lt;/&gt;</span>
              </div>
              <span className="font-display font-extrabold text-xl text-white tracking-tight">
                Kiur<span className="text-kiur-cyan">Code</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-kiur-textMuted leading-relaxed max-w-sm">
              Soluciones digitales para comercios y empresas. Tarjetas inteligentes NFC para reseñas de Google, desarrollo web comercial y sistemas de gestión a medida.
            </p>

            <div className="flex items-center gap-2 text-xs text-kiur-textMuted pt-1">
              <MapPin className="w-4 h-4 text-kiur-cyan shrink-0" />
              <span>{BRAND.location}</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-kiur-cyan hover:border-kiur-cyan/40 transition-colors"
                aria-label="Instagram de Kiur Code"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={BRAND.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-kiur-cyan hover:border-kiur-cyan/40 transition-colors"
                aria-label="LinkedIn del fundador"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-emerald-400 hover:border-emerald-400/40 transition-colors"
                aria-label="WhatsApp comercial"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs">
              {NAV_LINKS.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-kiur-cyan transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Soluciones
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#tarjetas" className="hover:text-kiur-cyan transition-colors">
                  Tarjetas NFC Google
                </a>
              </li>
              <li>
                <a href="#web" className="hover:text-kiur-cyan transition-colors">
                  Páginas con Catálogo
                </a>
              </li>
              <li>
                <a href="#web" className="hover:text-kiur-cyan transition-colors">
                  Pedidos por WhatsApp
                </a>
              </li>
              <li>
                <a href="#software" className="hover:text-kiur-cyan transition-colors">
                  Control de Stock &amp; ERP
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Contacto
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-kiur-cyan transition-colors flex items-center gap-1"
                >
                  <span>{BRAND.phoneDisplay}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <span className="text-kiur-textMuted/70">Lunes a Sábado</span>
              </li>
              <li>
                <span className="text-kiur-textMuted/70">Atención personalizada</span>
              </li>
              <li className="pt-2">
                <span className="inline-block text-[11px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono">
                  ● Respuesta en el día
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Brand Tagline & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="font-mono text-white/80">
            "{BRAND.tagline}"
          </p>

          <p className="text-kiur-textMuted/70">
            © {currentYear} Kiur Code · Creado por Lucas Hartung en Bariloche, Argentina.
          </p>
        </div>
      </div>
    </footer>
  );
};
