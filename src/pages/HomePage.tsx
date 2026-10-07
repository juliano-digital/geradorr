import React from 'react';
import { SEO } from '@/components/SEO';
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
import { siteConfig } from '@/data/site';

const HomePage: React.FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: 'https://voltmaxgeradores.com.br',
    logo: 'https://voltmaxgeradores.com.br/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phone,
      contactType: 'customer service',
      areaServed: 'BR',
      availableLanguage: 'Portuguese',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address,
      addressCountry: 'BR',
    },
    sameAs: [
      siteConfig.socials.instagram,
      siteConfig.socials.linkedin,
      siteConfig.socials.facebook,
    ],
  };

  return (
    <>
      <SEO
        title="VoltMax Geradores | Locação de Geradores de Energia 24h"
        description="Locação de geradores de energia de 20 a 2.000 kVA. Entrega rápida, suporte técnico 24h e potência sob medida para indústrias, obras, eventos e emergências."
        keywords="locação de geradores, geradores de energia, gerador diesel, energia emergencial, gerador industrial, gerador para eventos"
        ogImage="https://voltmaxgeradores.com.br/og-image.jpg"
        canonical="https://voltmaxgeradores.com.br"
        jsonLd={jsonLd}
      />
      
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
    </>
  );
};

export default HomePage;
