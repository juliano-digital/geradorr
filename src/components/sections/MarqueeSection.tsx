import React, { useRef, useEffect, useState, useCallback } from 'react';
import { marqueeImages } from '@/data/marquee';

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  const handleScroll = useCallback(() => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const sectionTop = rect.top + window.scrollY;
    const newOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
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
      <img
        key={`${img.id}-${i}`}
        src={img.src}
        alt={img.alt}
        loading="lazy"
        decoding="async"
        className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0"
        width={420}
        height={270}
      />
    ));
  };

  return (
    <section ref={sectionRef} className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden">
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
