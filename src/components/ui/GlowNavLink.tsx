import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const isActive = location.pathname === href;

  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');

  if (isExternal) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={cn('glow-nav-btn', isActive && 'glow-nav-btn--active', className)}
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
      className={cn('glow-nav-btn', isActive && 'glow-nav-btn--active', className)}
    >
      {label}
    </Link>
  );
};
