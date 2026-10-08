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
    <section id="servicos" className="py-12 sm:py-16 bg-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Nossos Serviços
            </h2>
            <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
              Soluções completas em energia para sua operação nunca parar
            </p>
          </FadeIn>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <FadeIn key={service.id} delay={index * 0.1}>
                <article className="group p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-volt/30 hover:bg-white/10 transition-all duration-200">
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-volt/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-volt/20 transition-colors duration-200">
                    {IconComponent && (
                      <IconComponent size={24} className="text-volt sm:w-7 sm:h-7" />
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-base text-white/70 leading-relaxed">
                    {service.description}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
