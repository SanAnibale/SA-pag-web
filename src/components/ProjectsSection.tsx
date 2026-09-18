import React, { useState } from 'react';
import { ExternalLink, Layers, ArrowRight, X, CheckCircle } from 'lucide-react';
import { projectsList } from '../config/siteConfig';
import { Project } from '../types';

interface ProjectsSectionProps {
  onOpenCalendly: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenCalendly }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['Todos', 'Comercial & Retail', 'Finanzas & Distribución', 'Servicios Profesionales / B2B', 'Logística & Pyme Comercial'];

  const filteredProjects = activeCategory === 'Todos'
    ? projectsList
    : projectsList.filter((p) => p.sector.toLowerCase().includes(activeCategory.toLowerCase()) || activeCategory.toLowerCase().includes(p.sector.toLowerCase()));

  return (
    <section id="proyectos" className="py-20 bg-[#fbf9f8] border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#00375e] tracking-tight mb-3">
              Proyectos
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Escenarios representativos con datos de ejemplos y de clientes reales (anonimizados por confidencialidad)
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveCategory('Todos')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00375e] hover:text-[#136299] transition-colors cursor-pointer"
            >
              <span>Ver todos los casos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#00375e] text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects 2x2 Grid matching reference image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="bg-white rounded-xl p-7 shadow-[0px_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0px_8px_24px_rgba(0,0,0,0.08)] border border-slate-200/70 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Sector Tag & Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-blue-50 text-[#136299] border border-blue-100">
                    {project.sectorTag}
                  </span>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-slate-400 hover:text-[#00375e] transition-colors p-1"
                    title="Ver ficha técnica completa"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#00375e] transition-colors mb-3">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Project Visual Image (if present) */}
                {project.imageUrl && (
                  <div className="mb-6 rounded-lg overflow-hidden border border-slate-100 relative aspect-[16/9] max-h-44 bg-slate-100">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                      <span className="text-xs text-white font-medium flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5" /> Ficha analítica
                      </span>
                    </div>
                  </div>
                )}

                {/* Highlights / Metrics Boxes (Matching reference) */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {project.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="bg-[#f8fafc] rounded-lg p-3.5 border border-slate-100 flex flex-col"
                    >
                      <span className="text-xl sm:text-2xl font-bold text-[#00375e] tracking-tight">
                        {metric.value}
                      </span>
                      <span className="text-xs text-slate-600 mt-0.5 leading-snug">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-[#00375e] hover:text-[#136299] inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Ver detalle del caso</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[11px] text-slate-400 font-medium">
                  {project.tools?.[0] || 'Business Intelligence'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <div
          id="project-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase bg-blue-50 text-[#136299] mb-2">
                {selectedProject.sectorTag}
              </span>
              <h3 className="text-2xl font-bold text-[#00375e]">
                {selectedProject.title}
              </h3>
            </div>

            {/* Modal Image */}
            {selectedProject.imageUrl && (
              <div className="mb-6 rounded-xl overflow-hidden border border-slate-200 max-h-56">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {selectedProject.metrics.map((metric, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                  <div className="text-2xl font-bold text-[#00375e]">{metric.value}</div>
                  <div className="text-xs text-slate-600 mt-1">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Challenge & Solution */}
            <div className="space-y-4 mb-8">
              {selectedProject.challenge && (
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">
                    El Desafío
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </div>
              )}

              {selectedProject.solution && (
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">
                    La Solución Implementada
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              )}

              {selectedProject.impact && (
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1 flex items-center gap-1.5 text-emerald-800">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    Impacto Económico Obtenido
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {selectedProject.impact}
                  </p>
                </div>
              )}

              {selectedProject.tools && (
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Herramientas y Tecnologías
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-200">
              <span className="text-xs text-slate-500">¿Quieres un resultado similar en tu empresa?</span>
              <button
                onClick={() => {
                  setSelectedProject(null);
                  onOpenCalendly();
                }}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#00375e] hover:bg-[#1f4e78] text-white text-xs font-semibold rounded-md shadow-xs transition-colors cursor-pointer"
              >
                Agendar sesión de diagnóstico
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
