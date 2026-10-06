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
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-full bg-volt/30 pulse-ring" />
        
        {/* Button */}
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors duration-200">
          <MessageCircle size={28} className="text-white" />
        </div>

        {/* Tooltip */}
        <span className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-bg text-ice text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          Fale com a gente
        </span>
      </div>
    </a>
  );
};
