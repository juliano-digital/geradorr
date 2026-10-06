import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Accordion } from '@/components/ui/Accordion';
import { faqItems } from '@/data/faq';

export const FaqSection: React.FC = () => {
  return (
    <section className="bg-bg px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="hero-heading font-black uppercase text-center mb-12 sm:mb-16 md:mb-20 text-[clamp(2rem,8vw,100px)] leading-none tracking-tight">
            Perguntas Frequentes
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Accordion items={faqItems} />
        </FadeIn>
      </div>
    </section>
  );
};
