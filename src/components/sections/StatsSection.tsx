import { FadeIn } from '@/components/ui/FadeIn';

const stats = [
  {
    number: '15+',
    label: 'Anos de Experiência',
    description: 'No mercado de locação de geradores',
  },
  {
    number: '500+',
    label: 'Geradores na Frota',
    description: 'Equipamentos modernos e revisados',
  },
  {
    number: '2.000+',
    label: 'Clientes Atendidos',
    description: 'Em todo o território nacional',
  },
  {
    number: '24h',
    label: 'Suporte Técnico',
    description: 'Dedicado e disponível 24 horas',
  },
];

export const StatsSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.1}>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500">
                  {stat.description}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
