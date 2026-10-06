import React from 'react';
import { cn } from '@/lib/cn';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlowCard: React.FC<GlowCardProps> = ({ children, className }) => {
  return (
    <div className={cn('glow-card p-6', className)}>
      <div className="relative z-10">{children}</div>
    </div>
  );
};
