import React from 'react';
import { BarChart3, LayoutGrid, Calculator, FileCheck2, ArrowUpRight } from 'lucide-react';
import { servicesList } from '../config/siteConfig';

interface ServicesSectionProps {
  onOpenCalendly: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenCalendly }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'chart':
        return <BarChart3 className="w-6 h-6 text-white" />;
      case 'grid':
        return <LayoutGrid className="w-6 h-6 text-white" />;
      case 'calculator':
        return <Calculator className="w-6 h-6 text-white" />;
      case 'file-check':
        return <FileCheck2 className="w-6 h-6 text-white" />;
      default:
        return <BarChart3 className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="servicios" className="py-20 bg-[#fbf9f8] border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00375e] tracking-tight mb-4">
            Servicios
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Entendemos el negocio, analizamos los datos e impulsamos decisiones estratégicas.
          </p>
        </div>

        {/* Services Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {servicesList.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-white rounded-xl p-8 shadow-[0px_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0px_8px_24px_rgba(0,0,0,0.07)] transition-all duration-200 border border-slate-100 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Icon + Service Title */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#00375e] flex items-center justify-center shadow-xs group-hover:bg-[#136299] transition-colors shrink-0">
                    {getIcon(service.iconName)}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#00375e] transition-colors leading-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Service Description */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Feature bullets */}
                {service.features && (
                  <ul className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center text-xs sm:text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#136299] mr-2.5 shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Bottom Card Action */}
              <button
                onClick={onOpenCalendly}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00375e] hover:text-[#136299] group/btn pt-2 cursor-pointer w-fit"
              >
                <span>Consultar por este servicio</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
