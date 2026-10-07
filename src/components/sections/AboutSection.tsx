import React from 'react';
import { Shield, Clock, Truck, Headphones } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { ContactButton } from '@/components/ui/ContactButton';

const highlights = [
  { icon: Clock, label: 'Entrega em até 4h', desc: 'Região metropolitana' },
  { icon: Truck, label: '500+ geradores', desc: 'Frota moderna e revisada' },
  { icon: Shield, label: '15+ anos', desc: 'De experiência no mercado' },
  { icon: Headphones, label: 'Suporte 24h', desc: 'Equipe técnica dedicada' },
];

export const AboutSection: React.FC = () => {
  const aboutText = "Há mais de 15 anos fornecemos energia confiável para indústrias, obras, eventos e hospitais em todo o país. Nossa frota é moderna, revisada e pronta para entrega, com equipe técnica 24 horas para que a sua operação nunca pare. Fale com a gente e receba um orçamento sob medida!";

  return (
    <section id="sobre" className="min-h-screen flex flex-col items-center justify-center relative px-5 sm:px-8 md:px-10 lg:px-16 py-24 sm:py-32">
      {/* Content */}
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center gap-12 sm:gap-16 md:gap-20">
        <FadeIn>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)]">
            Sobre nós
          </h2>
        </FadeIn>

        <div className="max-w-2xl mx-auto">
          <AnimatedText
            text={aboutText}
            className="text-ice/80 font-light text-center leading-relaxed text-[clamp(1rem,2vw,1.35rem)]"
          />
        </div>

        {/* Highlights grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-3xl">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.label} delay={0.1 * i}>
                <div className="flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl border border-ice/5 bg-ice/[0.02] hover:border-volt/20 hover:bg-volt/[0.02] transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-volt/10 flex items-center justify-center mb-3">
                    <Icon size={18} className="text-volt" />
                  </div>
                  <span className="text-ice font-medium text-sm">{item.label}</span>
                  <span className="text-ice/40 text-xs mt-0.5">{item.desc}</span>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.4} y={20}>
          <ContactButton label="Fale Conosco" />
        </FadeIn>
      </div>
    </section>
  );
};
