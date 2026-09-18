import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Linkedin } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 py-12 text-slate-500 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Subtitle */}
          <div className="flex items-center gap-3">
            <BrandLogo size="sm" className="opacity-90 hover:opacity-100 transition-opacity" id="footer-logo-img" />
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="#contacto"
              className="hover:text-[#00375e] transition-colors"
            >
              Contacto
            </a>
            {siteConfig.consultant.linkedinUrl && (
              <>
                <a
                  href={siteConfig.consultant.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#00375e] transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <span className="text-slate-300">·</span>
              </>
            )}
            <button
              onClick={() => alert('Información de Privacidad: Los datos compartidos durante llamadas de diagnóstico o intercambio de información se manejan con estricta confidencialidad profesional.')}
              className="hover:text-[#00375e] transition-colors cursor-pointer"
            >
              Política de Privacidad
            </button>
            <button
              onClick={() => alert('Términos de Servicio: Todos los servicios de consultoría se pactan mediante propuesta comercial y alcance detallado de común acuerdo.')}
              className="hover:text-[#00375e] transition-colors cursor-pointer"
            >
              Términos de Servicio
            </button>
          </div>

          {/* Copyright */}
          <div className="text-slate-400 text-center md:text-right">
            © {currentYear} {siteConfig.consultant.brandName}. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};
