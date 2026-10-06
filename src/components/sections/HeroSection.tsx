import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { ContactButton } from '@/components/ui/ContactButton';
import { FadeIn } from '@/components/ui/FadeIn';
import { Magnet } from '@/components/ui/Magnet';
import { siteConfig } from '@/data/site';

export const HeroSection: React.FC = () => {
  return (
    <section className="h-screen flex flex-col overflow-x-clip relative">
      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <Navbar />
      </FadeIn>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center relative px-5 sm:px-8 md:px-10">
        {/* Badge */}
        <FadeIn delay={0.1} y={20}>
          <div className="text-center mb-2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-volt/10 border border-volt/30 text-volt text-xs sm:text-sm font-medium uppercase tracking-wider">
              Energia sem interrupção • Atendimento 24h
            </span>
          </div>
        </FadeIn>

        {/* Heading */}
        <div className="overflow-hidden">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[13vw] sm:text-[14vw] md:text-[15vw] lg:text-[16.5vw] mt-6 sm:mt-4 md:-mt-5">
              GERADORES
            </h1>
          </FadeIn>
        </div>

        {/* Hero image */}
        <div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
          {/* Glow behind image */}
          <div className="absolute inset-0 -m-20 glow-radial rounded-full" />
          
          <Magnet padding={150} strength={3}>
            <img
              src={siteConfig.heroImage}
              alt="Gerador industrial VoltMax"
              className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] object-contain relative z-10 drop-shadow-2xl"
              width={520}
              height={400}
            />
          </Magnet>
        </div>

        {/* Bottom bar */}
        <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 relative z-20 mt-auto">
          <FadeIn delay={0.35} y={20}>
            <p className="text-ice font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]" style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}>
              locação de geradores com entrega rápida, suporte 24h e potência sob medida para a sua operação
            </p>
          </FadeIn>

          <FadeIn delay={0.5} y={20}>
            <ContactButton label="Pedir Orçamento" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
