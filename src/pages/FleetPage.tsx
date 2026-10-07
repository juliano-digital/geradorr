import React from 'react';
import { SEO } from '@/components/SEO';
import { FleetSection } from '@/components/sections/FleetSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { FadeIn } from '@/components/ui/FadeIn';
import { ContactButton } from '@/components/ui/ContactButton';

const FleetPage: React.FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Frota de Geradores VoltMax',
    description: 'Frota completa de geradores de 20 a 2.000 kVA para locação.',
    itemListElement: [
      {
        '@type': 'Product',
        name: 'Gerador 20 kVA',
        description: 'Gerador diesel cabinado de 20 kVA para pequenos comércios e emergências.',
      },
      {
        '@type': 'Product',
        name: 'Gerador 75 kVA',
        description: 'Gerador diesel cabinado de 75 kVA para obras e eventos.',
      },
      {
        '@type': 'Product',
        name: 'Gerador 150 kVA',
        description: 'Gerador diesel de 150 kVA para indústrias e construção civil.',
      },
      {
        '@type': 'Product',
        name: 'Gerador 300 kVA',
        description: 'Gerador diesel cabinado de 300 kVA para hospitais e shoppings.',
      },
      {
        '@type': 'Product',
        name: 'Gerador 500 kVA',
        description: 'Gerador diesel de 500 kVA para data centers e indústrias pesadas.',
      },
      {
        '@type': 'Product',
        name: 'Gerador 1.000 kVA',
        description: 'Gerador diesel de 1.000 kVA para grandes indústrias e usinas.',
      },
      {
        '@type': 'Product',
        name: 'Gerador 2.000 kVA',
        description: 'Gerador diesel de 2.000 kVA para megaprojetos e infraestrutura crítica.',
      },
    ],
  };

  return (
    <>
      <SEO
        title="Frota de Geradores | 20 a 2.000 kVA - VoltMax Geradores"
        description="Conheça nossa frota completa de geradores de 20 a 2.000 kVA. Equipamentos modernos, revisados e prontos para entrega imediata. Diesel, cabinados e abertos."
        keywords="frota geradores, geradores 20 kVA, geradores 500 kVA, geradores 1000 kVA, geradores 2000 kVA, gerador diesel"
        ogImage="https://voltmaxgeradores.com.br/og-fleet.jpg"
        canonical="https://voltmaxgeradores.com.br/frota"
        jsonLd={jsonLd}
      />

      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center relative px-5 sm:px-8 md:px-10 lg:px-16 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h1 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,10vw,120px)] mb-6">
              Nossa Frota
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-ice/70 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
              500+ geradores de 20 a 2.000 kVA prontos para entrega imediata.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <ContactButton label="Solicitar Cotação" />
          </FadeIn>
        </div>
      </section>

      <FleetSection />

      {/* Additional Info Section */}
      <section className="bg-bg px-5 sm:px-8 md:px-10 lg:px-16 py-20 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="hero-heading font-black uppercase text-center mb-12 text-[clamp(2rem,6vw,60px)] leading-none tracking-tight">
              Por que escolher nossa frota?
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeIn delay={0}>
              <div className="p-6 rounded-2xl border border-ice/5 bg-ice/[0.02]">
                <h3 className="text-volt font-bold text-lg mb-2">Equipamentos Modernos</h3>
                <p className="text-ice/60 text-sm leading-relaxed">
                  Geradores de última geração com tecnologia avançada e baixo consumo de combustível.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="p-6 rounded-2xl border border-ice/5 bg-ice/[0.02]">
                <h3 className="text-volt font-bold text-lg mb-2">Manutenção em Dia</h3>
                <p className="text-ice/60 text-sm leading-relaxed">
                  Revisões preventivas rigorosas garantindo máxima disponibilidade e performance.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="p-6 rounded-2xl border border-ice/5 bg-ice/[0.02]">
                <h3 className="text-volt font-bold text-lg mb-2">Entrega Rápida</h3>
                <p className="text-ice/60 text-sm leading-relaxed">
                  Logística otimizada para entrega em até 4 horas na região metropolitana.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <FaqSection />
    </>
  );
};

export default FleetPage;
