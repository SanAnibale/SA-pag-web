import React from 'react';
import { Calendar, ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/contactUtils';

interface BannerCTAProps {
  onOpenCalendly: () => void;
}

export const BannerCTA: React.FC<BannerCTAProps> = ({ onOpenCalendly }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-[#00375e] overflow-hidden px-6 py-14 sm:px-12 sm:py-16 text-center text-white shadow-xl">
          {/* Subtle geometric background decoration */}
          <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-blue-500/10 pointer-events-none blur-2xl" />
          <div className="absolute -left-16 -top-16 w-80 h-80 rounded-full bg-blue-400/10 pointer-events-none blur-2xl" />

          <div className="relative max-w-3xl mx-auto z-10">
            {/* Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-semibold tracking-wider uppercase mb-5 border border-white/15">
              Impulsa tu negocio
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-5 leading-snug">
              Respalda tus decisiones con información
            </h2>

            {/* Paragraph */}
            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed mb-8 max-w-2xl mx-auto">
              Ponemos al alcance de empresas y Pymes las capacidades del Business Analytics y Business Intelligence para transformar sus datos en decisiones que impulsan tu negocio.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <button
                id="banner-calendly-btn"
                onClick={onOpenCalendly}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-white text-[#00375e] hover:bg-blue-50 font-semibold text-sm sm:text-base rounded-md shadow-sm transition-all active:scale-[0.99] cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#00375e]" />
                <span>Agendar consulta gratis</span>
                <ArrowRight className="w-4 h-4 text-[#00375e]" />
              </button>

              <a
                id="banner-whatsapp-link"
                href={getWhatsAppUrl('Hola Santiago, me interesa conocer más canales de contacto y opciones de consultoría.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#002742] hover:bg-[#002036] text-white border border-white/20 font-medium text-sm sm:text-base rounded-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Más canales de contacto</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
