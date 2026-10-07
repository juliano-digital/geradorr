import React from 'react';

interface GlitchNavLinkProps {
  href: string;
  label: string;
  number: number;
  onClick?: () => void;
}

export const GlitchNavLink: React.FC<GlitchNavLinkProps> = ({
  href,
  label,
  number,
  onClick,
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="glitch-btn"
    >
      <span className="number">{String(number).padStart(2, '0')}</span>
      <span className="glitch-btn__glitch">{label}</span>
      {label}
    </a>
  );
};
