import React from 'react';
import { Zap, Cog, LayoutDashboard, Gauge } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { ContactButton } from '@/components/ui/ContactButton';

export const AboutSection: React.FC = () => {
  const aboutText = "Há mais de 15 anos fornecemos energia confiável para indústrias, obras, eventos e hospitais em todo o país. Nossa frota é moderna, revisada e pronta para entrega, com equipe técnica 24 horas para que a sua operação nunca pare. Fale com a gente e receba um orçamento sob medida!";

  return (
    <section id="sobre" className="min-h-screen flex flex-col items-center justify-center relative px-5 sm:px-8 md:px-10 py-20 overflow-hidden">
      {/* Decorative icons */}
      <FadeIn delay={0.1} x={-80} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%]">
        <Zap className="text-volt/20 w-[100px] sm:w-[150px] md:w-[180px] h-auto" strokeWidth={1} />
      </FadeIn>
      <FadeIn delay={0.15} x={80} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%]">
        <Cog className="text-volt/20 w-[100px] sm:w-[140px] md:w-[200px] h-auto" strokeWidth={1} />
      </FadeIn>
      <FadeIn delay={0.25} x={-80} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[5%] md:left-[8%]">
        <LayoutDashboard className="text-volt/20 w-[100px] sm:w-[160px] md:w-[220px] h-auto" strokeWidth={1} />
      </FadeIn>
      <FadeIn delay={0.3} x={80} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[5%] md:right-[8%]">
        <Gauge className="text-volt/20 w-[100px] sm:w-[140px] md:w-[190px] h-auto" strokeWidth={1} />
      </FadeIn>

      {/* Content */}
      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 relative z-10">
        <FadeIn>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)]">
            Sobre nós
          </h2>
        </FadeIn>

        <AnimatedText
          text={aboutText}
          className="text-ice font-medium text-center leading-relaxed max-w-[560px]"
        />

        <FadeIn delay={0.4} y={20}>
          <ContactButton label="Fale Conosco" />
        </FadeIn>
      </div>
    </section>
  );
};
