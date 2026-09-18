import React from 'react';
import { MessageSquare, ArrowRight, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/contactUtils';

interface PainPointsSectionProps {
  onOpenCalendly: () => void;
}

export const PainPointsSection: React.FC<PainPointsSectionProps> = ({ onOpenCalendly }) => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-[#002744] text-white p-8 sm:p-14 lg:p-16 shadow-2xl overflow-hidden border border-slate-800">
          {/* Decorative ambient subtle glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6 leading-tight">
              ¿Reconoces tu situación en alguno de estos ejemplos?
            </h2>

            {/* Pain points paragraph directly from mockup */}
            <p className="text-base sm:text-lg text-slate-200/90 leading-relaxed mb-10 font-normal">
              ¿No sabes exactamente a dónde se va el dinero de las ventas? ¿Tienes la sensación de vender más pero no sabes si tu negocio crece? No hace falta tener todo ordenado para empezar. Hablemos 20 minutos: analizamos tu situación y definimos qué tiene más sentido implementar, en qué plazo y con qué impacto económico estimado.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button
                id="painpoints-calendly-btn"
                onClick={onOpenCalendly}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm sm:text-base rounded-md shadow-md transition-all active:scale-[0.99] cursor-pointer"
              >
                <span>Sesión de diagnóstico gratuita</span>
              </button>

              <a
                id="painpoints-whatsapp-btn"
                href={getWhatsAppUrl('Hola Santiago, me identifiqué con la situación descripta en tu web y me gustaría hablar 20 minutos sobre mi caso.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-transparent hover:bg-white/10 text-white font-medium text-sm sm:text-base rounded-md border border-white/30 transition-colors"
              >
                <span>Escribir por WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </a>
            </div>

            {/* Trust Footer Badges */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                Sin compromiso
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                Respuesta en &lt;24h
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                Confidencialidad garantizada
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
