import React, { useState, useEffect } from 'react';
import { Calendar, MessageSquare, Menu, X } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { getWhatsAppUrl, getCalendlyUrl } from '../utils/contactUtils';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onOpenCalendly: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCalendly }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: '¿Cómo trabajo?', href: '#metodologia' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Sobre mí', href: '#sobre-mi' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs py-3 border-b border-slate-200/80'
          : 'bg-[#fbf9f8]/90 backdrop-blur-sm py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            id="navbar-brand-link"
            href="#"
            className="flex items-center group focus:outline-none transition-opacity hover:opacity-90 py-1"
            aria-label="Santiago Anibale - Business Analytics & Consulting"
          >
            <BrandLogo size="md" id="navbar-logo-img" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-[#00375e] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#00375e] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              id="navbar-whatsapp-btn"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-md border border-emerald-200/60 transition-colors"
              title="Escribir por WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-emerald-600/20 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <button
              id="navbar-calendly-btn"
              onClick={onOpenCalendly}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#00375e] hover:bg-[#1f4e78] active:scale-[0.99] rounded-md transition-all shadow-xs cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Agendar llamada</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              id="navbar-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-md hover:bg-slate-100 focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="navbar-mobile-menu" className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-md text-base font-medium text-slate-700 hover:text-[#00375e] hover:bg-slate-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCalendly();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-[#00375e] rounded-md shadow-xs cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar llamada en Calendly</span>
            </button>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-md"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Iniciar chat de WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
