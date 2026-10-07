import React from 'react';
import { SEO } from '@/components/SEO';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { FadeIn } from '@/components/ui/FadeIn';
import { ContactButton } from '@/components/ui/ContactButton';

const ServicesPage: React.FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Locação de Geradores de Energia',
    provider: {
      '@type': 'Organization',
      name: 'VoltMax Geradores',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Brasil',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços de Locação de Geradores',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Locação de Geradores',
            description: 'Geradores de 20 a 2.000 kVA para locação diária, mensal ou de longo prazo.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Manutenção Preventiva e Corretiva',
            description: 'Revisões programadas e atendimento técnico especializado.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Instalação e Quadros de Transferência',
            description: 'Projeto e instalação completa com QTA e cabeamento.',
          },
        },
      ],
    },
  };

  return (
    <>
      <SEO
        title="Serviços | Locação de Geradores, Manutenção e Instalação - VoltMax"
        description="Serviços completos de locação de geradores de 20 a 2.000 kVA, manutenção preventiva e corretiva, instalação com QTA, energia para eventos e atendimento de emergência 24h."
        keywords="serviços geradores, locação geradores, manutenção geradores, instalação geradores, energia para eventos, emergência 24h"
        ogImage="https://voltmaxgeradores.com.br/og-services.jpg"
        canonical="https://voltmaxgeradores.com.br/servicos"
        jsonLd={jsonLd}
      />

      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center relative px-5 sm:px-8 md:px-10 lg:px-16 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h1 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,10vw,120px)] mb-6">
              Serviços
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-ice/70 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
              Soluções completas em energia para sua operação nunca parar.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <ContactButton label="Solicitar Orçamento" />
          </FadeIn>
        </div>
      </section>

      <ServicesSection />

      {/* CTA Section */}
      <section className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 lg:px-16 py-20 sm:py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-[#0C0C0C] font-black uppercase mb-6 text-[clamp(2rem,6vw,80px)] leading-none tracking-tight">
              Precisa de Energia?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[#0C0C0C]/60 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Entre em contato conosco e receba um orçamento personalizado para sua necessidade.
            </p>
          </FadeIn>
        </div>
      </section>

      <ContactSection />
    </>
  );
};

export default ServicesPage;
