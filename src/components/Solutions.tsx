import React from 'react';
import { Smartphone, Globe, ArrowRight, MessageCircle, Link2, LayoutDashboard, Check } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/content';

export const Solutions: React.FC = () => {
  return (
    <section 
      id="soluciones" 
      style={{ paddingTop: 'var(--hero-equal-gap)' }}
      className="pb-24 bg-white relative border-b border-zinc-200 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Algoritmia style) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="mb-4">
            <span className="lbl-servicios">Servicios</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-zinc-950 tracking-tight uppercase mb-3">
            Todo para vender más, <span className="text-kiur-red">en un solo lugar.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            Herramientas digitales completas y conectadas para hacer crecer tu comercio en Bariloche y ordenar tus ventas.
          </p>
        </div>

        {/* Bento Grid (Algoritmia style) */}
        <div className="flex flex-col gap-8">

          {/* CARD 1: COMBO (Algoritmia bx-combo with NFC cards instead of bot) */}
          <article className="bx-algoritmia p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Text */}
              <div className="lg:col-span-5 flex flex-col items-start gap-4">
                <span className="tagx">Combo</span>
                <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight uppercase leading-[1.1]">
                  Tarjeta NFC Inteligente, Web Profesional <span className="text-zinc-400">y Panel CRM.</span>
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Sumá reseñas de 5★ en Google Maps en tu mostrador, recibí pedidos directos a WhatsApp con tu catálogo web y organizá cada cliente y venta en tu panel CRM. Todo conectado bajo tu propia marca y sin comisiones.
                </p>
                <div className="pt-2">
                  <a 
                    href={getWhatsAppUrl("Hola! Vi su web y me interesa el combo: tarjetas NFC inteligentes, panel CRM y web profesional, todo conectado. ¿Me cuentan cómo funciona para mi negocio?")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ver-servicios cursor-pointer inline-flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Quiero el combo</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Column: 4 Connected Pieces */}
              <div className="lg:col-span-7">
                <div className="cb-pzs" aria-label="Qué incluye el combo">
                  {/* Piece 1: Tarjetas NFC */}
                  <div className="cb-pz">
                    <span className="cb-ic">
                      <Smartphone className="w-5 h-5 text-white" />
                    </span>
                    <b className="text-white">Tarjetas NFC inteligentes</b>
                    <small className="text-white">Reseñas 5★ en Google Maps</small>
                  </div>

                  <i className="cb-mas">+</i>

                  {/* Piece 2: Panel CRM */}
                  <div className="cb-pz">
                    <span className="cb-ic">
                      <LayoutDashboard className="w-5 h-5 text-white" />
                    </span>
                    <b className="text-white">Panel CRM</b>
                    <small className="text-white">Cada cliente y venta ordenados</small>
                  </div>

                  <i className="cb-mas">+</i>

                  {/* Piece 3: Web profesional */}
                  <div className="cb-pz">
                    <span className="cb-ic">
                      <Globe className="w-5 h-5 text-white" />
                    </span>
                    <b className="text-white">Web profesional</b>
                    <small className="text-white">Tu vidriera con pedidos online</small>
                  </div>

                  <i className="cb-mas cb-igual">=</i>

                  {/* Piece 4: Todo conectado */}
                  <div className="cb-pz cb-todo">
                    <span className="cb-ic">
                      <Link2 className="w-5 h-5 text-white" />
                    </span>
                    <b className="text-white">Todo conectado</b>
                    <small className="text-white">Con tu propia marca</small>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* CARD 2: WEB PROFESIONAL (Algoritmia bx-web with Pollería Belgrano slider) */}
          <article className="bx-algoritmia p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Text */}
              <div className="lg:col-span-5 flex flex-col items-start gap-4">
                <span className="tagx">Venta Online</span>
                <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight uppercase leading-[1.1]">
                  Web profesional <br />
                  <span className="text-kiur-red">con catálogo</span>
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Tu web con todo lo que vendés, lista para recibir clientes y mandarlos directo a tu WhatsApp con el pedido armado.
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-zinc-400 mb-2">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-kiur-red" /> Catálogo con precios al día
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-kiur-red" /> Carrito a WhatsApp
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-kiur-red" /> 0% comisiones
                  </span>
                </div>
                <div className="pt-2">
                  <a 
                    href={getWhatsAppUrl(WHATSAPP_MESSAGES.web)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ver-servicios cursor-pointer inline-flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Quiero mi web</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive Browser + Phone Mockup with continuous auto-slider */}
              <div className="lg:col-span-7">
                <div className="relative pt-2 pb-6 sm:pb-0 pr-0 sm:pr-8">
                  {/* Browser Window mockup (16:10) */}
                  <div className="cp-browser">
                    <div className="o-bar">
                      <i></i><i></i><i></i>
                      <span>polleriabelgrano.pages.dev</span>
                    </div>
                    <div className="cp-scroll h-[260px] sm:h-[340px] lg:h-[380px]">
                      <img 
                        src="/polleria.png" 
                        alt="Web de Pollería Belgrano" 
                        width="1280" 
                        height="2400"
                        loading="lazy" 
                        className="select-none pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Overlapping Phone Mockup (sliding phone view) */}
                  <div className="web-cel">
                    <div className="web-cel-scr h-[200px] sm:h-[260px]">
                      <img 
                        src="/polleria-cel.png" 
                        alt="Web de Pollería Belgrano en el celular" 
                        loading="lazy" 
                        draggable="false" 
                        className="select-none pointer-events-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* CARD 3: APP A MEDIDA & PANEL CRM (Algoritmia bx-app + bx-crm combined) */}
          <article className="bx-algoritmia p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Text */}
              <div className="lg:col-span-5 flex flex-col items-start gap-4">
                <span className="tagx tag-new">Nuevo</span>
                <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight uppercase leading-[1.1]">
                  App a medida <br />
                  <span className="text-emerald-400">& Panel CRM</span>
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Creamos desde cero el sistema que tu negocio necesita: control de stock en tiempo real, arqueos de caja diaria, agenda y métricas para ordenar tus ventas. Con tu marca y listo para usar desde la compu o el celular.
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-zinc-400 mb-2">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400" /> Stock con alertas
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400" /> Caja diaria & ventas
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400" /> 100% a medida
                  </span>
                </div>
                <div className="pt-2">
                  <a 
                    href={getWhatsAppUrl(WHATSAPP_MESSAGES.erp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ver-servicios cursor-pointer inline-flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Quiero mi app / CRM</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Column: CRM Dashboard & App Showcase Mockup */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl bg-zinc-950 border border-white/15 p-4 sm:p-6 shadow-2xl">
                  {/* Window Bar */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-800">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                      <span className="ml-2 text-xs font-mono text-zinc-400 font-bold">crm.kiurcode.com · Panel de Gestión</span>
                    </div>
                    <span className="text-[11px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                      ● Sistema Activo
                    </span>
                  </div>

                  {/* 3 Metric cards */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-left">
                      <small className="text-[10px] uppercase font-mono tracking-wider text-zinc-400 block mb-1">Ventas Hoy</small>
                      <b className="font-display font-black text-lg sm:text-xl text-white block">$184.500</b>
                      <span className="text-[10px] text-emerald-400 font-bold">+28% vs ayer</span>
                    </div>
                    <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-left">
                      <small className="text-[10px] uppercase font-mono tracking-wider text-zinc-400 block mb-1">Stock Crítico</small>
                      <b className="font-display font-black text-lg sm:text-xl text-kiur-red block">3 alertas</b>
                      <span className="text-[10px] text-zinc-400">Reponer pronto</span>
                    </div>
                    <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-left">
                      <small className="text-[10px] uppercase font-mono tracking-wider text-zinc-400 block mb-1">Clientes</small>
                      <b className="font-display font-black text-lg sm:text-xl text-white block">842</b>
                      <span className="text-[10px] text-zinc-400">Base ordenada</span>
                    </div>
                  </div>

                  {/* Sample CRM Table Feed */}
                  <div className="rounded-xl bg-zinc-900/80 border border-zinc-800/80 overflow-hidden text-xs">
                    <div className="flex items-center justify-between px-3 py-2 bg-zinc-900 text-zinc-400 font-mono text-[10px] uppercase border-b border-zinc-800">
                      <span>Últimos Movimientos</span>
                      <span>Estado</span>
                    </div>
                    <div className="divide-y divide-zinc-800/60 text-zinc-300">
                      <div className="px-3 py-2.5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span className="font-semibold text-white">Venta #1482 · Pollería</span>
                        </div>
                        <span className="font-mono text-emerald-400 font-bold">+$14.200 (Caja)</span>
                      </div>
                      <div className="px-3 py-2.5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-kiur-red" />
                          <span className="font-semibold text-white">Stock bajo: Pechuga fresca</span>
                        </div>
                        <span className="font-mono text-zinc-400">Quedan 4 kg</span>
                      </div>
                      <div className="px-3 py-2.5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span className="font-semibold text-white">Pedido WhatsApp #891</span>
                        </div>
                        <span className="font-mono text-zinc-300 font-bold">Confirmado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};
