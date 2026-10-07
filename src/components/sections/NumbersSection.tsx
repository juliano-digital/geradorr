import React from 'react';
import { Calendar, Truck, Users, Headphones } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import { CounterNumber } from '@/components/ui/CounterNumber';

export const NumbersSection: React.FC = () => {
  return (
    <section className="bg-bg px-5 sm:px-8 md:px-10 lg:px-16 py-20 sm:py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 text-[clamp(2rem,6vw,80px)] leading-none tracking-tight">
            Números que falam por nós
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          <FadeIn delay={0}>
            <CounterNumber
              end={15}
              suffix="+"
              label="Anos de mercado"
              icon={<Calendar size={28} />}
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <CounterNumber
              end={500}
              suffix="+"
              label="Geradores na frota"
              icon={<Truck size={28} />}
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <CounterNumber
              end={3000}
              suffix="+"
              label="Clientes atendidos"
              icon={<Users size={28} />}
            />
          </FadeIn>
          <FadeIn delay={0.3}>
            <CounterNumber
              end={24}
              label="Horas de suporte"
              icon={<Headphones size={28} />}
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
