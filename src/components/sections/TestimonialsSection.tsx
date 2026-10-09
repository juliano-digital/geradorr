import { Star, Quote } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import { testimonials } from '@/data/testimonials';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
              Depoimentos reais de empresas que confiam na VoltMax
            </p>
          </FadeIn>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.id} delay={index * 0.1}>
              <article className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-volt/30 transition-all duration-200">
                {/* Quote Icon */}
                <Quote size={32} className="text-volt/30 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-volt fill-volt" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-base text-white/80 leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-volt to-volt-dark flex items-center justify-center flex-shrink-0">
                    <span className="text-bg font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>

                  {/* Info */}
                  <div>
                    <h4 className="text-white font-semibold text-sm sm:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-white/60 text-xs sm:text-sm">
                      {testimonial.role}
                    </p>
                    <p className="text-volt text-xs sm:text-sm font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
