import React from 'react';
import { SEO } from '@/components/SEO';
import { FadeIn } from '@/components/ui/FadeIn';
import { ContactButton } from '@/components/ui/ContactButton';
import GlassCubeSection from '@/components/sections/GlassCubeSection';
import { Shield, Award, Users, Target, Zap, Clock, TrendingUp, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Sobre a VoltMax Geradores',
    description: 'Líder em locação de geradores de energia com mais de 15 anos transformando operações críticas em histórias de sucesso.',
    mainEntity: {
      '@type': 'Organization',
      name: 'VoltMax Geradores',
      foundingDate: '2009',
      description: 'Pioneiros em soluções de energia temporária, combinando tecnologia de ponta com atendimento humanizado.',
      slogan: 'Energia que transforma operações em resultados.',
    },
  };

  return (
    <>
      <SEO
        title="Sobre Nós | VoltMax Geradores - Líder em Soluções de Energia"
        description="15 anos transformando operações críticas em histórias de sucesso. Pioneiros em locação de geradores com tecnologia de ponta e atendimento 24h em todo o Brasil."
        keywords="sobre voltmax, líder geradores, pioneiro energia, locação geradores brasil, empresa geradores"
        ogImage="https://voltmaxgeradores.com.br/og-about.jpg"
        canonical="https://voltmaxgeradores.com.br/sobre"
        jsonLd={jsonLd}
      />

      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background - Absolute to cover section */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/130837c4-0244-4f37-9c61-8d801d93fd29.jpg"
          aria-hidden="true"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260912_104303_0c6d60b2-9353-408e-9449-585108a22fb5.mp4"
            type="video/mp4"
          />
        </video>

        {/* Veil Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-bg/60 to-bg/90" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 md:px-10 lg:px-16 text-center pt-32 pb-20">
          <FadeIn delay={0.2}>
            <h1 className="hero-heading font-black uppercase leading-[0.9] tracking-tight text-[clamp(3rem,12vw,140px)] mb-8">
              <span className="block">Energia que</span>
              <span className="block">Transforma</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-ice/80 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-10 font-light">
              Pioneiros em soluções de energia temporária, combinando tecnologia de ponta com atendimento humanizado para operações que não podem parar.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <ContactButton label="Conheça Nossa História" />
          </FadeIn>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-bg px-5 sm:px-8 md:px-10 lg:px-16 py-24 sm:py-32">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="hero-heading font-black uppercase text-center mb-16 text-[clamp(2.5rem,8vw,100px)] leading-none tracking-tight">
              Nossa Missão
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <FadeIn delay={0.2} x={-30}>
              <div className="space-y-6">
                <p className="text-ice/80 text-lg leading-relaxed">
                  Garantir que nenhuma operação pare por falta de energia. Combinamos expertise técnica com inovação constante para entregar soluções que superam expectativas.
                </p>
                <p className="text-ice/60 text-base leading-relaxed">
                  Cada projeto é único. Por isso, desenvolvemos abordagens personalizadas que consideram não apenas a potência necessária, mas o contexto completo da sua operação.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4} x={30}>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl border border-ice/10 bg-ice/[0.02] hover:border-volt/30 transition-all duration-300">
                  <Shield size={32} className="text-volt mb-3" />
                  <h3 className="text-ice font-semibold text-lg mb-2">Confiabilidade</h3>
                  <p className="text-ice/50 text-sm">Equipamentos revisados e prontos para operação contínua.</p>
                </div>
                <div className="p-6 rounded-2xl border border-ice/10 bg-ice/[0.02] hover:border-volt/30 transition-all duration-300">
                  <Award size={32} className="text-volt mb-3" />
                  <h3 className="text-ice font-semibold text-lg mb-2">Excelência</h3>
                  <p className="text-ice/50 text-sm">Frota moderna com tecnologia de última geração.</p>
                </div>
                <div className="p-6 rounded-2xl border border-ice/10 bg-ice/[0.02] hover:border-volt/30 transition-all duration-300">
                  <Users size={32} className="text-volt mb-3" />
                  <h3 className="text-ice font-semibold text-lg mb-2">Parceria</h3>
                  <p className="text-ice/50 text-sm">Relacionamentos de longo prazo baseados em confiança.</p>
                </div>
                <div className="p-6 rounded-2xl border border-ice/10 bg-ice/[0.02] hover:border-volt/30 transition-all duration-300">
                  <Target size={32} className="text-volt mb-3" />
                  <h3 className="text-ice font-semibold text-lg mb-2">Precisão</h3>
                  <p className="text-ice/50 text-sm">Dimensionamento exato para cada necessidade.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Interactive 3D Glass Cube Section */}
      <GlassCubeSection />

      {/* Journey Section */}
      <section className="bg-[#0a0a0a] px-5 sm:px-8 md:px-10 lg:px-16 py-24 sm:py-32">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="hero-heading font-black uppercase text-center mb-16 text-[clamp(2.5rem,8vw,100px)] leading-none tracking-tight">
              Nossa Trajetória
            </h2>
          </FadeIn>

          <div className="space-y-12">
            <FadeIn delay={0.1}>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-volt/10 flex items-center justify-center">
                  <Zap size={28} className="text-volt" />
                </div>
                <div>
                  <h3 className="text-ice font-bold text-xl mb-2">2009 - O Início</h3>
                  <p className="text-ice/60 leading-relaxed">
                    Nascemos com uma visão clara: democratizar o acesso a energia de qualidade. Começamos com 5 geradores e um compromisso inabalável com a excelência.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-volt/10 flex items-center justify-center">
                  <Clock size={28} className="text-volt" />
                </div>
                <div>
                  <h3 className="text-ice font-bold text-xl mb-2">2015 - Expansão Nacional</h3>
                  <p className="text-ice/60 leading-relaxed">
                    Ampliamos nossa atuação para todo o território brasileiro, estabelecendo centros estratégicos de distribuição para garantir entrega em até 4 horas.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-volt/10 flex items-center justify-center">
                  <TrendingUp size={28} className="text-volt" />
                </div>
                <div>
                  <h3 className="text-ice font-bold text-xl mb-2">2020 - Inovação Tecnológica</h3>
                  <p className="text-ice/60 leading-relaxed">
                    Investimos em monitoramento remoto e manutenção preditiva, reduzindo tempo de inatividade em 40% e elevando o padrão do setor.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-volt/10 flex items-center justify-center">
                  <Globe size={28} className="text-volt" />
                </div>
                <div>
                  <h3 className="text-ice font-bold text-xl mb-2">2024 - Líder de Mercado</h3>
                  <p className="text-ice/60 leading-relaxed">
                    Hoje, com mais de 500 geradores e 3.000 clientes atendidos, somos referência em soluções de energia temporária para os setores mais exigentes do país.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-bg px-5 sm:px-8 md:px-10 lg:px-16 py-24 sm:py-32">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="hero-heading font-black uppercase text-center mb-16 text-[clamp(2.5rem,8vw,100px)] leading-none tracking-tight">
              Nosso Impacto
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0}>
              <div className="text-center p-8 rounded-2xl border border-ice/10 bg-ice/[0.02]">
                <div className="hero-heading font-black text-5xl sm:text-6xl mb-3">99.8%</div>
                <p className="text-ice/60 text-sm uppercase tracking-wider">Disponibilidade</p>
                <p className="text-ice/40 text-xs mt-2">Tempo de operação sem interrupções</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="text-center p-8 rounded-2xl border border-ice/10 bg-ice/[0.02]">
                <div className="hero-heading font-black text-5xl sm:text-6xl mb-3">4h</div>
                <p className="text-ice/60 text-sm uppercase tracking-wider">Entrega</p>
                <p className="text-ice/40 text-xs mt-2">Tempo médio em regiões metropolitanas</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="text-center p-8 rounded-2xl border border-ice/10 bg-ice/[0.02]">
                <div className="hero-heading font-black text-5xl sm:text-6xl mb-3">24/7</div>
                <p className="text-ice/60 text-sm uppercase tracking-wider">Suporte</p>
                <p className="text-ice/40 text-xs mt-2">Equipe técnica sempre disponível</p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-16 text-center">
              <p className="text-ice/70 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
                Mais do que fornecer energia, construímos confiança. Cada projeto realizado fortalece nosso compromisso com a excelência e reforça nossa posição como parceiros estratégicos para operações que não podem falhar.
              </p>
              <ContactButton label="Faça Parte Dessa História" />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
