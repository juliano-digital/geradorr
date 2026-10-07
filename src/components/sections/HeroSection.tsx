import React from 'react';
import { ContactButton } from '@/components/ui/ContactButton';
import { FadeIn } from '@/components/ui/FadeIn';
import { Zap } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="h-screen flex flex-col overflow-x-clip relative bg-bg pt-20 md:pt-24">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#D7E2EA 1px, transparent 1px), linear-gradient(90deg, #D7E2EA 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center relative px-5 sm:px-8 md:px-10 lg:px-16">
        {/* Top row: badge + contact info */}
        <FadeIn delay={0.1} y={20}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-volt/5 border border-volt/20 text-volt text-xs sm:text-sm font-medium uppercase tracking-wider">
              <Zap size={14} className="fill-volt" />
              Energia sem interrupção • Atendimento 24h
            </span>
            <div className="hidden lg:flex items-center gap-6 text-ice/50 text-sm">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Online agora
              </span>
              <span>|</span>
              <span>Entrega em até 4h</span>
            </div>
          </div>
        </FadeIn>

        {/* Heading */}
        <div className="overflow-hidden">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-[0.85] whitespace-nowrap w-full text-[13vw] sm:text-[14vw] md:text-[15vw] lg:text-[16.5vw]">
              GERADORES
            </h1>
          </FadeIn>
        </div>

        {/* Subtitle row */}
        <FadeIn delay={0.25} y={20}>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 sm:gap-8 mt-4 sm:mt-6">
            <p className="text-ice/70 font-light uppercase tracking-wide leading-snug max-w-[280px] sm:max-w-[360px] md:max-w-[440px] text-[clamp(0.8rem,1.4vw,1.25rem)]">
              Locação de geradores com entrega rápida, suporte 24h e potência sob medida para a sua operação.
            </p>
          </div>
        </FadeIn>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 pb-8 sm:pb-10 mt-auto pt-8">
          {/* Stats mini */}
          <FadeIn delay={0.35} y={20}>
            <div className="flex items-center gap-6 sm:gap-10">
              <div className="flex flex-col">
                <span className="text-ice font-black text-2xl sm:text-3xl">15+</span>
                <span className="text-ice/40 text-xs uppercase tracking-wider">Anos</span>
              </div>
              <div className="w-px h-10 bg-ice/15" />
              <div className="flex flex-col">
                <span className="text-ice font-black text-2xl sm:text-3xl">500+</span>
                <span className="text-ice/40 text-xs uppercase tracking-wider">Máquinas</span>
              </div>
              <div className="w-px h-10 bg-ice/15 hidden sm:block" />
              <div className="hidden sm:flex flex-col">
                <span className="text-ice font-black text-2xl sm:text-3xl">3.000+</span>
                <span className="text-ice/40 text-xs uppercase tracking-wider">Clientes</span>
              </div>
            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.5} y={20}>
            <ContactButton label="Pedir Orçamento" />
          </FadeIn>
        </div>
      </div>

    </section>
  );
};
