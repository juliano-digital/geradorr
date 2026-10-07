import React from 'react';
import { Link } from 'react-router-dom';
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
  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');

  if (isExternal) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={cn('glow-nav-btn', className)}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {label}
      </a>
    );
  }

  return (
    <Link
      to={href}
      onClick={onClick}
      className={cn('glow-nav-btn', className)}
    >
      {label}
    </Link>
  );
};
