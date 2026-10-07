import React from 'react';

interface GlowNavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

export const GlowNavLink: React.FC<GlowNavLinkProps> = ({
  href,
  label,
  onClick,
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="glow-nav-btn"
    >
      {label}
    </a>
  );
};
