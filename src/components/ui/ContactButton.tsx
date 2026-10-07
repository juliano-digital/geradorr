import React from 'react';
import { cn } from '@/lib/cn';
import { buildWhatsAppLink } from '@/lib/whatsapp';

interface ContactButtonProps {
  label?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  label = 'Pedir Orçamento',
  href,
  onClick,
  className,
}) => {
  const whatsappHref = href || buildWhatsAppLink(`Olá! Gostaria de solicitar um orçamento de locação de gerador.`);

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={cn(
        'gradient-btn inline-flex items-center justify-center rounded-full',
        'text-white font-medium uppercase tracking-widest',
        'px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4',
        'text-xs sm:text-sm md:text-base',
        'transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-volt/20',
        className
      )}
    >
      {label}
    </a>
  );
};
