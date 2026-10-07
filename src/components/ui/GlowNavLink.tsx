import React from 'react';
import { cn } from '@/lib/cn';

interface GlowNavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
}

export const GlowNavLink: React.FC<GlowNavLinkProps> = ({
  href,
  label,
  onClick,
  className,
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn('glow-nav-btn', className)}
    >
      {label}
    </a>
  );
};
