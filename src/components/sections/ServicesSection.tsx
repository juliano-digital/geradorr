import React from 'react';
import { Zap, Wrench, Cable, PartyPopper, Siren } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import { services } from '@/data/services';

const iconMap: Record<string, React.ElementType> = {
  Zap,
  Wrench,
  Cable,
  PartyPopper,
  Siren,
};

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="servicos"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 lg:px-16 py-20 sm:py-24 md:py-32"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28 text-[clamp(3rem,12vw,160px)] leading-none tracking-tight">
            Serviços
          </h2>
        </FadeIn>

        <div className="space-y-0">
          {services.map((service, i) => {
            const IconComponent = iconMap[service.icon];
            return (
              <FadeIn key={service.id} delay={i * 0.08}>
                <div className="group flex items-start gap-4 sm:gap-6 md:gap-10 py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/10 relative overflow-hidden cursor-default">
                  {/* Animated bottom line */}
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-volt transition-all duration-500 group-hover:w-full" />

                  {/* Number */}
                  <span className="text-[#0C0C0C]/10 group-hover:text-volt/40 font-black text-[clamp(3rem,8vw,120px)] leading-none flex-shrink-0 transition-colors duration-300">
                    {service.number}
                  </span>

                  {/* Content */}
                  <div className="flex-1 pt-2 sm:pt-4 md:pt-6">
                    <div className="flex items-center gap-3 mb-2 sm:mb-3">
                      <h3 className="text-[#0C0C0C] font-semibold uppercase text-[clamp(1rem,2.2vw,2.1rem)]">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-[#0C0C0C]/50 font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)]">
                      {service.description}
                    </p>
                  </div>

                  {/* Icon */}
                  {IconComponent && (
                    <div className="hidden sm:flex flex-shrink-0 w-12 h-12 rounded-full bg-[#0C0C0C]/5 group-hover:bg-volt/10 items-center justify-center transition-all duration-300">
                      <IconComponent size={20} className="text-[#0C0C0C]/30 group-hover:text-volt transition-colors duration-300" />
                    </div>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
