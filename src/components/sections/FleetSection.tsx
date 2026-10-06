import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fuel, Volume2, MapPin } from 'lucide-react';
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
      className="bg-bg -mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] z-10 relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="hero-heading font-black uppercase text-center mb-12 sm:mb-16 md:mb-20 text-[clamp(3rem,12vw,160px)] leading-none tracking-tight">
            Nossa Frota
          </h2>
        </FadeIn>

        {/* Filters */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-10 sm:mb-14">
            {filters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveFilter(filter.value)}
                className={cn(
                  'px-5 py-2 rounded-full text-sm font-medium uppercase tracking-wider transition-all duration-200',
                  activeFilter === filter.value
                    ? 'bg-volt text-bg'
                    : 'bg-ice/10 text-ice/70 hover:bg-ice/20'
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredFleet.map((gen, i) => (
              <FadeIn key={gen.id} delay={i * 0.1}>
                <GlowCard>
                  <img
                    src={gen.image}
                    alt={gen.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-48 object-cover rounded-xl mb-4"
                    width={400}
                    height={192}
                  />
                  <h3 className="text-ice font-bold text-lg mb-2">{gen.name}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-ice/70 text-sm">
                      <Fuel size={16} className="text-volt" />
                      <span>{gen.fuel}</span>
                    </div>
                    <div className="flex items-center gap-2 text-ice/70 text-sm">
                      <Volume2 size={16} className="text-volt" />
                      <span>{gen.noise}</span>
                    </div>
                    <div className="flex items-center gap-2 text-ice/70 text-sm">
                      <MapPin size={16} className="text-volt" />
                      <span>{gen.power} kVA</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {gen.applications.map((app) => (
                      <span key={app} className="px-2 py-1 rounded-full bg-ice/10 text-ice/60 text-xs">
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
