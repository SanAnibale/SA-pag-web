import React from 'react';
import { X, Calendar, Clock, Video, CheckCircle, ExternalLink } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendlyModal: React.FC<CalendlyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { calendlyUrl, name } = siteConfig.consultant;

  const handleOpenExternal = () => {
    window.open(calendlyUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      id="calendly-booking-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-100 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#00375e] text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 text-blue-100 text-xs font-semibold mb-2">
            Sesión 1 a 1 sin costo
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
            Agenda tu llamada de diagnóstico
          </h3>
          <p className="text-xs sm:text-sm text-blue-100/90 mt-1">
            Con {name}
          </p>
        </div>

        {/* Modal Body Info */}
        <div className="p-6 sm:p-7 space-y-6">
          <div className="grid grid-cols-2 gap-3 text-xs text-slate-700">
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#136299]" />
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Duración</span>
                <span className="font-semibold text-slate-900">20 Minutos</span>
              </div>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex items-center gap-2.5">
              <Video className="w-4 h-4 text-[#136299]" />
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Modalidad</span>
                <span className="font-semibold text-slate-900">Google Meet</span>
              </div>
            </div>
          </div>

          <div className="space-y-2.5 text-xs text-slate-600">
            <p className="font-semibold text-slate-800 text-sm">¿Qué revisaremos en la llamada?</p>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Escuchamos tu consulta de negocio y los principales puntos de dolor de tu empresa.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Realizamos un diagnóstico inicial sobre tu situación actual.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Evaluamos cómo podemos ayudarte y qué solución tiene más sentido implementar.</span>
            </div>
          </div>

          {/* Action to launch Calendly */}
          <div className="pt-2">
            <button
              onClick={handleOpenExternal}
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#00375e] hover:bg-[#1f4e78] text-white font-semibold text-sm sm:text-base rounded-lg shadow-sm transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Abrir Calendly y elegir horario</span>
              <ExternalLink className="w-4 h-4 ml-1" />
            </button>

            <p className="text-center text-[11px] text-slate-400 mt-2.5">
              Se abrirá tu agenda en una pestaña segura de Calendly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
