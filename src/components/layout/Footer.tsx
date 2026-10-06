import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { navigation } from '@/data/navigation';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] border-t border-ice/10 px-5 sm:px-8 md:px-10 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
        {/* Logo & Description */}
        <div className="space-y-4">
          <h3 className="text-ice font-bold text-xl">{siteConfig.name}</h3>
          <p className="text-ice/60 font-light text-sm leading-relaxed max-w-xs">
            Locação de geradores de energia com entrega rápida, suporte técnico 24h e potência sob medida para a sua operação.
          </p>
          <p className="text-ice/40 text-xs">CNPJ: {siteConfig.cnpj}</p>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <h4 className="text-ice font-medium uppercase tracking-wider text-sm">Navegação</h4>
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-ice/60 hover:text-ice transition-colors duration-200 text-sm"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="space-y-4">
          <h4 className="text-ice font-medium uppercase tracking-wider text-sm">Contato</h4>
          <div className="space-y-2 text-ice/60 text-sm">
            <p>{siteConfig.phone}</p>
            <p>{siteConfig.email}</p>
            <p>{siteConfig.address}</p>
            <p>{siteConfig.hours}</p>
          </div>
          <div className="flex gap-4 pt-2">
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-ice/60 hover:text-volt transition-colors duration-200"
            >
              <Instagram size={20} />
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-ice/60 hover:text-volt transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={siteConfig.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-ice/60 hover:text-volt transition-colors duration-200"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-ice/10 text-center">
        <p className="text-ice/40 text-xs">
          © {currentYear} {siteConfig.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
