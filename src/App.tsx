import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { MarqueeSection } from '@/components/sections/MarqueeSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { FleetSection } from '@/components/sections/FleetSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { NumbersSection } from '@/components/sections/NumbersSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';

const App: React.FC = () => {
  return (
    <div className="overflow-x-clip">
      <main>
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <FleetSection />
        <ProjectsSection />
        <NumbersSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default App;
