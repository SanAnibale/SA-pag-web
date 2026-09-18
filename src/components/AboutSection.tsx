import React from 'react';
import { Briefcase, GraduationCap, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const AboutSection: React.FC = () => {
  const { consultant } = siteConfig;

  return (
    <section id="sobre-mi" className="py-20 bg-[#fbf9f8] border-t border-slate-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f2fc] text-[#136299] text-xs font-semibold tracking-wider uppercase mb-3">
            Trayectoria & Enfoque
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00375e] tracking-tight">
            Sobre mí
          </h2>
        </div>

        {/* 3 Metric Highlight Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Box 1 */}
          <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-[0px_2px_12px_rgba(0,0,0,0.03)] text-center flex flex-col items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-[#00375e] flex items-center justify-center mb-3">
              <Briefcase className="w-5 h-5 text-[#136299]" />
            </div>
            <span className="text-2xl sm:text-3xl font-bold text-[#00375e] mb-1">
              {consultant.experienceYears}
            </span>
            <span className="text-xs text-slate-600 font-medium">
              De experiencia en finanzas y análisis
            </span>
          </div>

          {/* Box 2 */}
          <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-[0px_2px_12px_rgba(0,0,0,0.03)] text-center flex flex-col items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-[#00375e] flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5 text-[#136299]" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-[#00375e] mb-1">
              {consultant.corporateBackground}
            </span>
            <span className="text-xs text-slate-600 font-medium">
              Trayectoria en multinacionales
            </span>
          </div>

          {/* Box 3 */}
          <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-[0px_2px_12px_rgba(0,0,0,0.03)] text-center flex flex-col items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-[#00375e] flex items-center justify-center mb-3">
              <GraduationCap className="w-5 h-5 text-[#136299]" />
            </div>
            <span className="text-2xl sm:text-3xl font-bold text-[#00375e] mb-1">
              Certificado BI
            </span>
            <span className="text-xs text-slate-600 font-medium">
              Data Analytics & Business Intelligence
            </span>
          </div>
        </div>

        {/* Narrative Box */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200/80 shadow-[0px_2px_16px_rgba(0,0,0,0.04)] text-slate-700 leading-relaxed text-base sm:text-lg space-y-6">
          <p>
            Mi nombre es <strong className="text-slate-900 font-semibold">Santiago Anibale</strong>, soy <strong className="text-slate-900 font-semibold">Contador Público</strong>, con más de 10 años de experiencia en finanzas, contabilidad, auditoría y análisis de datos en compañías multinacionales — <span className="text-[#00375e] font-semibold">PwC, Arcor y Mabe</span>. Completé certificaciones en análisis de datos y en el uso de herramientas de business intelligence.
          </p>
          <p>
            Ese recorrido me formó un perfil analítico y metódico, con foco en objetivos y la capacidad y criterio para entender no solo los números, sino el negocio, el mercado y los procesos que hay detrás de cada dato.
          </p>
          <p>
            Hoy, combinando mi conocimiento y experiencia, ayudo a Pymes y empresas a descubrir información en los datos que generan a través de soluciones de <strong className="text-slate-900 font-semibold">Business Analytics</strong>. Aplico la disciplina y metodología adquirida para resolver problemas reales de negocio y mejorar la toma de decisiones.
          </p>
        </div>
      </div>
    </section>
  );
};
