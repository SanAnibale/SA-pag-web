import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { MethodologySection } from './components/MethodologySection';
import { BannerCTA } from './components/BannerCTA';
import { ProjectsSection } from './components/ProjectsSection';
import { PainPointsSection } from './components/PainPointsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CalendlyModal } from './components/CalendlyModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const handleOpenCalendly = () => {
    setIsCalendlyOpen(true);
  };

  const handleCloseCalendly = () => {
    setIsCalendlyOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#fbf9f8] text-[#1b1c1c] selection:bg-[#1f4e78] selection:text-white flex flex-col font-['Inter',sans-serif]">
      {/* Top Fixed Header */}
      <Navbar onOpenCalendly={handleOpenCalendly} />

      {/* Main Landing Sections */}
      <main className="flex-1">
        <Hero onOpenCalendly={handleOpenCalendly} />
        <ServicesSection onOpenCalendly={handleOpenCalendly} />
        <MethodologySection />
        <BannerCTA onOpenCalendly={handleOpenCalendly} />
        <ProjectsSection onOpenCalendly={handleOpenCalendly} />
        <PainPointsSection onOpenCalendly={handleOpenCalendly} />
        <AboutSection />
        <ContactSection onOpenCalendly={handleOpenCalendly} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Calendly Booking Dialog Modal */}
      <CalendlyModal isOpen={isCalendlyOpen} onClose={handleCloseCalendly} />

      {/* Floating WhatsApp Action Pill */}
      <FloatingWhatsApp />
    </div>
  );
}
