import React from 'react';
import { SEO } from '@/components/SEO';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FadeIn } from '@/components/ui/FadeIn';
import { ContactButton } from '@/components/ui/ContactButton';

const ProjectsPage: React.FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Projetos e Cases de Sucesso - VoltMax Geradores',
    description: 'Conheça os principais projetos da VoltMax Geradores em hospitais, eventos, indústrias e construções civis em todo o Brasil.',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'CreativeWork',
          name: 'Hospital Regional',
          description: 'Fornecimento de 500 kVA para hospital regional com operação contínua.',
        },
        {
          '@type': 'CreativeWork',
          name: 'Festival Sunset',
          description: '3 geradores de 250 kVA para festival de música com milhares de pessoas.',
        },
        {
          '@type': 'CreativeWork',
          name: 'Fábrica Metalúrgica Alfa',
          description: '1.000 kVA para operação industrial contínua em fábrica metalúrgica.',
        },
      ],
    },
  };

  return (
    <>
      <SEO
        title="Projetos e Cases | Hospitais, Eventos e Indústrias - VoltMax"
        description="Conheça os principais projetos da VoltMax Geradores: hospitais, festivais de música, indústrias metalúrgicas e construções civis. Cases de sucesso em todo o Brasil."
        keywords="projetos geradores, cases sucesso, geradores hospitais, geradores eventos, geradores indústrias"
        ogImage="https://voltmaxgeradores.com.br/og-projects.jpg"
        canonical="https://voltmaxgeradores.com.br/projetos"
        jsonLd={jsonLd}
      />

      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center relative px-5 sm:px-8 md:px-10 lg:px-16 py-24 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h1 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,10vw,120px)] mb-6">
              Projetos
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-ice/70 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
              Cases de sucesso em hospitais, eventos, indústrias e construções civis.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <ContactButton label="Seja Nosso Cliente" />
          </FadeIn>
        </div>
      </section>

      <ProjectsSection />

      {/* Stats Section */}
      <section className="bg-bg px-5 sm:px-8 md:px-10 lg:px-16 py-20 sm:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <FadeIn delay={0}>
              <div className="text-center p-6 rounded-2xl border border-ice/5 bg-ice/[0.02]">
                <div className="hero-heading font-black text-4xl sm:text-5xl mb-2">3.000+</div>
                <p className="text-ice/50 text-sm uppercase tracking-wider">Projetos Realizados</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="text-center p-6 rounded-2xl border border-ice/5 bg-ice/[0.02]">
                <div className="hero-heading font-black text-4xl sm:text-5xl mb-2">15+</div>
                <p className="text-ice/50 text-sm uppercase tracking-wider">Anos de Experiência</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="text-center p-6 rounded-2xl border border-ice/5 bg-ice/[0.02]">
                <div className="hero-heading font-black text-4xl sm:text-5xl mb-2">100%</div>
                <p className="text-ice/50 text-sm uppercase tracking-wider">Satisfação</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="text-center p-6 rounded-2xl border border-ice/5 bg-ice/[0.02]">
                <div className="hero-heading font-black text-4xl sm:text-5xl mb-2">24/7</div>
                <p className="text-ice/50 text-sm uppercase tracking-wider">Suporte Técnico</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <TestimonialsSection />
    </>
  );
};

export default ProjectsPage;
