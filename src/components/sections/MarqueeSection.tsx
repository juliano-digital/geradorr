import React, { useRef, useEffect, useState, useCallback } from 'react';
import { marqueeImages } from '@/data/marquee';

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  const handleScroll = useCallback(() => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const sectionTop = rect.top + window.scrollY;
    const newOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.25;
    setOffset(newOffset);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const line1 = marqueeImages.slice(0, 7);
  const line2 = marqueeImages.slice(7, 14);

  const renderLine = (images: typeof marqueeImages) => {
    const tripled = [...images, ...images, ...images];

    return tripled.map((img, i) => (
      <div
        key={`${img.id}-${i}`}
        className="relative flex-shrink-0 w-[320px] sm:w-[380px] md:w-[420px] h-[220px] sm:h-[250px] md:h-[270px] rounded-2xl overflow-hidden group"
      >
        <img
          src={img.src}
          alt={img.alt}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          width={420}
          height={270}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
      </div>
    ));
  };

  return (
    <section ref={sectionRef} className="pt-20 sm:pt-28 md:pt-36 pb-8 overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

      {/* Line 1 - moves right */}
      <div
        className="flex gap-3 mb-3 w-max"
        style={{
          transform: `translateX(${offset - 200}px)`,
          willChange: 'transform',
        }}
      >
        {renderLine(line1)}
      </div>

      {/* Line 2 - moves left */}
      <div
        className="flex gap-3 w-max"
        style={{
          transform: `translateX(${-(offset - 200)}px)`,
          willChange: 'transform',
        }}
      >
        {renderLine(line2)}
      </div>
    </section>
  );
};
