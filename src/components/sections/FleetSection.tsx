import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fuel, Volume2, Gauge } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import { GlowCard } from '@/components/ui/GlowCard';
import { GhostButton } from '@/components/ui/GhostButton';
import { fleet } from '@/data/fleet';
import { buildWhatsAppLink } from '@/lib/whatsapp';
import { cn } from '@/lib/cn';

type FilterCategory = 'all' | 'low' | 'mid' | 'high';

const filters: { label: string; value: FilterCategory }[] = [
  { label: 'Todos', value: 'all' },
  { label: 'Até 100 kVA', value: 'low' },
  { label: '100–500 kVA', value: 'mid' },
  { label: 'Acima de 500 kVA', value: 'high' },
];

export const FleetSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const filteredFleet = activeFilter === 'all'
    ? fleet
    : fleet.filter((g) => g.category === activeFilter);

  return (
    <section
      id="frota"
      className="bg-bg -mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] z-10 relative px-5 sm:px-8 md:px-10 lg:px-16 py-20 sm:py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="hero-heading font-black uppercase text-center mb-12 sm:mb-16 md:mb-20 text-[clamp(3rem,12vw,160px)] leading-none tracking-tight">
            Nossa Frota
          </h2>
        </FadeIn>

        {/* Filters */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
            {filters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveFilter(filter.value)}
                className={cn(
                  'px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wider transition-all duration-200',
                  activeFilter === filter.value
                    ? 'bg-volt text-bg shadow-lg shadow-volt/20'
                    : 'bg-ice/5 text-ice/50 hover:bg-ice/10 hover:text-ice/80 border border-ice/10'
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            {filteredFleet.map((gen, i) => (
              <FadeIn key={gen.id} delay={i * 0.08}>
                <GlowCard className="h-full flex flex-col">
                  <div className="relative overflow-hidden rounded-xl mb-4 -mx-2 -mt-2">
                    <img
                      src={gen.image}
                      alt={gen.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-48 object-cover"
                      width={400}
                      height={192}
                    />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-bg/80 backdrop-blur-sm border border-volt/20">
                      <span className="text-volt text-xs font-bold">{gen.power} kVA</span>
                    </div>
                  </div>
                  
                  <h3 className="text-ice font-semibold text-lg mb-3">{gen.name}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2.5 text-ice/60 text-sm">
                      <Fuel size={14} className="text-volt/70" />
                      <span>{gen.fuel}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-ice/60 text-sm">
                      <Volume2 size={14} className="text-volt/70" />
                      <span>{gen.noise}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-ice/60 text-sm">
                      <Gauge size={14} className="text-volt/70" />
                      <span>{gen.power} kVA</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                    {gen.applications.map((app) => (
                      <span key={app} className="px-2.5 py-1 rounded-full bg-ice/5 border border-ice/10 text-ice/50 text-xs">
                        {app}
                      </span>
                    ))}
                  </div>
                  
                  <GhostButton
                    label="Solicitar Cotação"
                    href={buildWhatsAppLink(`Olá! Gostaria de uma cotação para o ${gen.name} (${gen.power} kVA).`)}
                  />
                </GlowCard>
              </FadeIn>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
