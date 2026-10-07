import React from 'react';
import { SEO } from '@/components/SEO';
import { AboutSection } from '@/components/sections/AboutSection';
import { NumbersSection } from '@/components/sections/NumbersSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FadeIn } from '@/components/ui/FadeIn';
import { Shield, Award, Users, Target } from 'lucide-react';

const AboutPage: React.FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Sobre a VoltMax Geradores',
    description: 'Conheça a história da VoltMax Geradores, líder em locação de geradores de energia com mais de 15 anos de experiência no mercado.',
    mainEntity: {
      '@type': 'Organization',
      name: 'VoltMax Geradores',
      foundingDate: '2009',
      description: 'Empresa especializada em locação de geradores de energia para indústrias, obras, eventos e emergências.',
    },
  };

  const values = [
    {
      icon: Shield,
      title: 'Confiabilidade',
      description: 'Equipamentos revisados e prontos para operação contínua.',
    },
    {
      icon: Award,
      title: 'Qualidade',
      description: 'Frota moderna com tecnologia de ponta e manutenção preventiva.',
    },
    {
      icon: Users,
      title: 'Atendimento',
      description: 'Equipe técnica especializada disponível 24 horas por dia.',
    },
    {
      icon: Target,
      title: 'Compromisso',
      description: 'Entrega pontual e suporte técnico em todo o território nacional.',
    },
  ];

  return (
    <>
      <SEO
        title="Sobre Nós | VoltMax Geradores - 15+ Anos de Experiência"
        description="Conheça a VoltMax Geradores, empresa líder em locação de geradores de energia com mais de 15 anos de experiência, 500+ equipamentos na frota e atendimento 24h em todo o Brasil."
        keywords="sobre voltmax, história voltmax, empresa geradores, locação geradores brasil"
        ogImage="https://voltmaxgeradores.com.br/og-about.jpg"
        canonical="https://voltmaxgeradores.com.br/sobre"
        jsonLd={jsonLd}
      />

      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center relative px-5 sm:px-8 md:px-10 lg:px-16 py-24 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h1 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,10vw,120px)] mb-6">
              Sobre Nós
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-ice/70 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Há mais de 15 anos fornecendo energia confiável para empresas em todo o Brasil.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <AboutSection />

      {/* Values Section */}
      <section className="bg-bg px-5 sm:px-8 md:px-10 lg:px-16 py-20 sm:py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="hero-heading font-black uppercase text-center mb-16 text-[clamp(2rem,6vw,80px)] leading-none tracking-tight">
              Nossos Valores
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <FadeIn key={value.title} delay={i * 0.1}>
                  <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-ice/5 bg-ice/[0.02] hover:border-volt/20 hover:bg-volt/[0.02] transition-all duration-300">
                    <div className="w-14 h-14 rounded-full bg-volt/10 flex items-center justify-center mb-4">
                      <Icon size={24} className="text-volt" />
                    </div>
                    <h3 className="text-ice font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-ice/60 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <NumbersSection />
      <TestimonialsSection />
    </>
  );
};

export default AboutPage;
