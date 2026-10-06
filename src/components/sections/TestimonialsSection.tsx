import React from 'react';
import { Star } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import { GlowCard } from '@/components/ui/GlowCard';
import { testimonials } from '@/data/testimonials';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-bg px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="hero-heading font-black uppercase text-center mb-12 sm:mb-16 md:mb-20 text-[clamp(2rem,8vw,100px)] leading-none tracking-tight">
            Depoimentos
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <FadeIn key={testimonial.id} delay={i * 0.15}>
              <GlowCard className="h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} size={18} className="text-volt fill-volt" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-ice/80 font-light leading-relaxed text-sm sm:text-base flex-1 mb-6">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t border-ice/10 pt-4">
                  <p className="text-ice font-medium text-sm">{testimonial.name}</p>
                  <p className="text-ice/60 text-xs">{testimonial.role}</p>
                  <p className="text-volt text-xs font-medium">{testimonial.company}</p>
                </div>
              </GlowCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
