import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenCalendly: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCalendly }) => {
  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-50/50 via-transparent to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="md:col-span-7 flex flex-col items-start">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f2fc] border border-[#bcdbfc] text-[#136299] text-xs font-semibold tracking-wider uppercase mb-6 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#136299] animate-pulse" />
              Business Intelligence & Analytics
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#00375e] leading-[1.18] tracking-tight mb-6 max-w-2xl">
              Transformamos datos en información para tomar mejores decisiones de negocio.
            </h1>

            {/* Subtitle / Value Proposition */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Desarrollamos soluciones de <span className="text-slate-900 font-medium">Business Analytics</span> orientadas a resolver problemas reales de negocio y mejorar la toma de decisiones. A través de herramientas de Business Intelligence, analizamos, visualizamos y transformamos datos complejos en insights claros y accionables.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <button
                id="hero-cta-calendly"
                onClick={onOpenCalendly}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#00375e] hover:bg-[#1f4e78] text-white text-sm sm:text-base font-semibold rounded-md shadow-sm hover:shadow-md transition-all active:scale-[0.99] cursor-pointer"
              >
                <span>Agenda tu llamada gratis</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                id="hero-cta-services"
                href="#servicios"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-700 hover:text-[#00375e] text-sm sm:text-base font-medium rounded-md border border-slate-300 shadow-xs transition-colors"
              >
                Nuestros Servicios
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Graphic (Side-by-side with initial text) */}
          <div className="md:col-span-5 relative w-full">
            <div className="relative mx-auto w-full">
              {/* Outer Card with subtle shadow and border */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0px_10px_35px_rgba(0,0,0,0.09)] border border-slate-200/80 bg-white group">
                <img
                  src="/hero-dashboard-pc.jpg"
                  alt="Estación de trabajo con dashboard de Power BI y Business Analytics"
                  className="w-full h-auto object-cover aspect-[16/10] md:aspect-[4/3.2] lg:aspect-[16/11] group-hover:scale-[1.01] transition-transform duration-500"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
