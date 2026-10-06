import React from 'react';
import { FadeIn } from './FadeIn';
import { cn } from '@/lib/cn';

interface SectionHeadingProps {
  title: string;
  className?: string;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  className,
  light = false,
}) => {
  return (
    <FadeIn>
      <h2
        className={cn(
          'font-black uppercase leading-none tracking-tight text-center',
          light ? 'hero-heading' : 'text-[#0C0C0C]',
          className || 'text-[clamp(3rem,12vw,160px)]'
        )}
      >
        {title}
      </h2>
    </FadeIn>
  );
};
