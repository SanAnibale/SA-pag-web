import React, { useState } from 'react';
import { MessageSquare, Calendar, Mail, Clock, Copy, Check, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { getWhatsAppUrl, getMailtoUrl } from '../utils/contactUtils';

interface ContactSectionProps {
  onOpenCalendly: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenCalendly }) => {
  const { consultant } = siteConfig;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(consultant.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f2fc] text-[#136299] text-xs font-semibold tracking-wider uppercase mb-3">
            Canales Directos
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00375e] tracking-tight mb-3">
            Contacto
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Hablemos de tu negocio y cómo podemos potenciarlo con analítica de datos.
          </p>
        </div>

        {/* Main Contact Container (Matching Mockup) */}
        <div className="bg-[#fbf9f8] rounded-2xl border border-slate-200/80 p-8 sm:p-12 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Direct Action Buttons */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
                Conversemos ahora
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Escríbeme para evaluar tu caso o agendemos una videollamada sin costo.
              </p>
            </div>

            <div className="flex flex-col gap-3.5 pt-2">
              {/* WhatsApp Button (Green & High Contrast) */}
              <a
                id="contact-whatsapp-btn"
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.99] text-white font-semibold text-base rounded-lg shadow-xs transition-all"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>Escribir por WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 ml-auto text-white/80" />
              </a>

              {/* Calendly Button */}
              <button
                id="contact-calendly-btn"
                onClick={onOpenCalendly}
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-white hover:bg-slate-50 active:scale-[0.99] text-[#00375e] border border-slate-300 font-semibold text-base rounded-lg shadow-xs transition-all cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-[#00375e]" />
                <span>Agendar llamada en Calendly</span>
                <ArrowUpRight className="w-4 h-4 ml-auto text-slate-400" />
              </button>
            </div>

            <p className="text-xs text-slate-400">
              * La llamada de diagnóstico dura 20 minutos y se realiza por Microsoft Teams.
            </p>
          </div>

          {/* Right Column: Direct Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Email Card with One-Click Copy */}
            <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-xs flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#136299] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Email directo
                  </span>
                  <a
                    href={getMailtoUrl()}
                    className="text-xs sm:text-sm font-semibold text-slate-800 hover:text-[#00375e] transition-colors whitespace-nowrap block"
                  >
                    {consultant.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 text-slate-400 hover:text-[#00375e] rounded-md hover:bg-slate-100 transition-colors shrink-0"
                title="Copiar email al portapapeles"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Response Time Card */}
            <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-xs flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Respuesta garantizada
                </span>
                <span className="text-sm font-semibold text-slate-800">
                  En menos de 24 horas hábiles
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
