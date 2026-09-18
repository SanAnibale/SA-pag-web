import React from 'react';
import { Search, SlidersHorizontal, LayoutTemplate, GraduationCap } from 'lucide-react';
import { processSteps } from '../config/siteConfig';

export const MethodologySection: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'search':
        return <Search className="w-5 h-5 text-white" />;
      case 'sliders':
        return <SlidersHorizontal className="w-5 h-5 text-white" />;
      case 'layout':
        return <LayoutTemplate className="w-5 h-5 text-white" />;
      case 'award':
        return <GraduationCap className="w-5 h-5 text-white" />;
      default:
        return <Search className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="metodologia" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f2fc] text-[#136299] text-xs font-semibold tracking-wider uppercase mb-3">
            Metodología
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00375e] tracking-tight mb-4">
            ¿Cómo trabajo?
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Un proceso claro y estructurado de 4 etapas para transformar los datos de tu empresa en decisiones inteligentes.
          </p>
        </div>

        {/* 4 Process Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((item, index) => (
            <div
              key={item.step}
              id={`methodology-step-${index + 1}`}
              className="bg-[#fbf9f8] hover:bg-white rounded-xl p-6 border border-slate-200/80 shadow-[0px_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0px_6px_20px_rgba(31,78,120,0.06)] transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Top Row: Icon and Step Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-lg bg-[#00375e] group-hover:bg-[#136299] flex items-center justify-center shadow-xs transition-colors">
                    {getStepIcon(item.iconName)}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#136299] border border-blue-100">
                    {item.step}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-[#00375e] transition-colors">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Progress visual bar indicator */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                <span>Fase {index + 1} de 4</span>
                <span className="w-12 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <span
                    className="block h-full bg-[#136299]"
                    style={{ width: `${(index + 1) * 25}%` }}
                  />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
