import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook, Zap, ArrowUp } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { navigation } from '@/data/navigation';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080808] border-t border-ice/5 px-5 sm:px-8 md:px-10 lg:px-16 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-ice/5">
          {/* Logo & Description */}
          <div className="md:col-span-4 space-y-5">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-volt to-volt-dark flex items-center justify-center">
                <Zap size={18} className="text-bg" fill="currentColor" />
              </div>
              <span className="text-ice font-bold text-lg tracking-tight">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-ice/50 font-light text-sm leading-relaxed max-w-xs">
              Locação de geradores de energia com entrega rápida, suporte técnico 24h e potência sob medida para a sua operação.
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-ice/10 flex items-center justify-center text-ice/50 hover:text-volt hover:border-volt/30 transition-all duration-200"
              >
                <Instagram size={16} />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-ice/10 flex items-center justify-center text-ice/50 hover:text-volt hover:border-volt/30 transition-all duration-200"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-ice/10 flex items-center justify-center text-ice/50 hover:text-volt hover:border-volt/30 transition-all duration-200"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-ice font-medium uppercase tracking-wider text-xs">Navegação</h4>
            <ul className="space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-ice/50 hover:text-ice transition-colors duration-200 text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-ice font-medium uppercase tracking-wider text-xs">Serviços</h4>
            <ul className="space-y-2.5 text-sm text-ice/50">
              <li>Locação</li>
              <li>Manutenção</li>
              <li>Instalação</li>
              <li>Eventos</li>
              <li>Emergência 24h</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-ice font-medium uppercase tracking-wider text-xs">Contato</h4>
            <div className="space-y-2.5 text-sm text-ice/50">
              <p>{siteConfig.phone}</p>
              <p>{siteConfig.email}</p>
              <p className="leading-relaxed">{siteConfig.address}</p>
              <p className="text-volt/70 font-medium">{siteConfig.hours}</p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-ice/30 text-xs">
            © {currentYear} {siteConfig.name}. CNPJ: {siteConfig.cnpj}. Todos os direitos reservados.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
            className="w-9 h-9 rounded-full border border-ice/10 flex items-center justify-center text-ice/50 hover:text-volt hover:border-volt/30 transition-all duration-200"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
