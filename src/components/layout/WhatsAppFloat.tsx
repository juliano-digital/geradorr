import React from 'react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '@/lib/whatsapp';

export const WhatsAppFloat: React.FC = () => {
  const href = buildWhatsAppLink('Olá! Gostaria de mais informações sobre locação de geradores.');

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale com a gente no WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 group"
    >
      <div className="relative">
        {/* Pulse rings */}
        <div className="absolute inset-0 rounded-full bg-green-500/20 pulse-ring" />
        <div className="absolute inset-[-4px] rounded-full border border-green-500/10" />
        
        {/* Button */}
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/20 hover:bg-green-600 hover:scale-105 transition-all duration-200">
          <MessageCircle size={24} className="text-white" />
        </div>

        {/* Tooltip */}
        <span className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-bg border border-ice/10 text-ice text-xs font-medium rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none shadow-xl">
          Fale com a gente
          <span className="absolute top-full right-6 w-2 h-2 bg-bg border-r border-b border-ice/10 -translate-y-1/2 rotate-45" />
        </span>
      </div>
    </a>
  );
};
