import { useState } from 'react';
import { Gauge, Fuel, Volume2 } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import { fleet } from '@/data/fleet';
import { buildWhatsAppLink } from '@/lib/whatsapp';

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
    <section id="frota" className="py-12 sm:py-16 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Nossa Frota
            </h2>
            <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
              Geradores de 20 a 2.000 kVA prontos para entrega imediata
            </p>
          </FadeIn>
        </div>

        {/* Filters */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
            {filters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveFilter(filter.value)}
                className={`
                  px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium
                  transition-all duration-200 min-h-[44px]
                  ${activeFilter === filter.value
                    ? 'bg-volt text-bg shadow-lg shadow-volt/20'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                  }
                `}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFleet.map((gen, index) => (
            <FadeIn key={gen.id} delay={index * 0.1}>
              <article className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-volt/30 transition-all duration-200">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={gen.image}
                    alt={`Gerador de ${gen.power} kVA ${gen.noise.toLowerCase()} para ${gen.applications[0].toLowerCase()}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-bg/80 backdrop-blur-sm border border-volt/20">
                    <span className="text-volt text-sm font-bold">{gen.power} kVA</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                    {gen.name}
                  </h3>

                  {/* Specs */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-white/70">
                      <Fuel size={18} className="text-volt flex-shrink-0" />
                      <span className="text-sm sm:text-base">{gen.fuel}</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/70">
                      <Volume2 size={18} className="text-volt flex-shrink-0" />
                      <span className="text-sm sm:text-base">{gen.noise}</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/70">
                      <Gauge size={18} className="text-volt flex-shrink-0" />
                      <span className="text-sm sm:text-base">{gen.power} kVA</span>
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {gen.applications.slice(0, 3).map((app) => (
                      <span
                        key={app}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs sm:text-sm"
                      >
                        {app}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={buildWhatsAppLink(`Olá! Gostaria de uma cotação para o ${gen.name} (${gen.power} kVA).`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-full px-6 py-3 rounded-full
                      border-2 border-white/20
                      text-white font-semibold text-sm sm:text-base
                      flex items-center justify-center
                      transition-all duration-200 hover:bg-white/10 hover:border-white/40
                      min-h-[44px]
                    "
                  >
                    Solicitar Cotação
                  </a>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
