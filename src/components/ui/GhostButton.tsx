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
        'border-2 border-[#D7E2EA] text-[#D7E2EA]',
        'font-medium uppercase tracking-widest',
        'px-8 py-3 sm:px-10 sm:py-3.5',
        'text-sm sm:text-base',
        'transition-colors duration-200 hover:bg-[#D7E2EA]/10',
        className
      )}
    >
      {label}
    </Tag>
  );
};
