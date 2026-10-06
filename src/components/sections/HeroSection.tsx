import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { ContactButton } from '@/components/ui/ContactButton';
import { FadeIn } from '@/components/ui/FadeIn';
import { Zap } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="h-screen flex flex-col overflow-x-clip relative bg-bg">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#D7E2EA 1px, transparent 1px), linear-gradient(90deg, #D7E2EA 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <Navbar />
      </FadeIn>

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

            {/* Abstract visual element */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex flex-col items-end gap-1">
                <span className="text-ice/30 text-xs uppercase tracking-widest">de</span>
                <span className="text-ice font-bold text-lg">20 kVA</span>
              </div>
              <div className="w-24 h-[2px] bg-gradient-to-r from-volt/20 via-volt to-volt/20 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-volt glow-radial" />
              </div>
              <div className="flex flex-col items-start gap-1">
                <span className="text-ice/30 text-xs uppercase tracking-widest">até</span>
                <span className="text-ice font-bold text-lg">2.000 kVA</span>
              </div>
            </div>
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

      {/* Decorative corner elements */}
      <div className="absolute top-1/4 right-8 lg:right-16 w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-volt/[0.02] blur-3xl" />
      <div className="absolute bottom-1/4 left-8 lg:left-16 w-24 h-24 lg:w-36 lg:h-36 rounded-full bg-volt/[0.03] blur-2xl" />
    </section>
  );
};
