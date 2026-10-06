import React from 'react';
import { cn } from '@/lib/cn';

interface GhostButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const GhostButton: React.FC<GhostButtonProps> = ({
  label,
  href,
  onClick,
  className,
}) => {
  const Tag = href ? 'a' : 'button';
  const props = href
    ? { href, target: '_blank' as const, rel: 'noopener noreferrer' }
    : { type: 'button' as const, onClick };

  return (
    <Tag
      {...props}
      className={cn(
        'inline-flex items-center justify-center rounded-full',
        'border border-ice/20 text-ice/70',
        'font-medium uppercase tracking-widest',
        'px-6 py-2.5 sm:px-8 sm:py-3',
        'text-xs sm:text-sm',
        'transition-all duration-200 hover:bg-ice/5 hover:text-ice hover:border-ice/40',
        className
      )}
    >
      {label}
    </Tag>
  );
};
