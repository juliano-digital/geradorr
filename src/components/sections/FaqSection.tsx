import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Accordion } from '@/components/ui/Accordion';
import { faqItems } from '@/data/faq';

export const FaqSection: React.FC = () => {
  return (
    <section className="bg-bg px-5 sm:px-8 md:px-10 lg:px-16 py-20 sm:py-24 md:py-32">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="hero-heading font-black uppercase text-center mb-4 text-[clamp(2rem,8vw,100px)] leading-none tracking-tight">
            Dúvidas
          </h2>
          <p className="text-ice/40 text-center text-sm sm:text-base mb-12 sm:mb-16 md:mb-20 max-w-lg mx-auto">
            Respostas para as perguntas mais frequentes sobre nossos serviços de locação de geradores.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Accordion items={faqItems} />
        </FadeIn>
      </div>
    </section>
  );
};
