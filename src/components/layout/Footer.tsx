import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook, Zap } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { navigation } from '@/data/navigation';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg border-t border-white/10 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-volt to-volt-dark flex items-center justify-center">
                <Zap size={20} className="text-bg" fill="currentColor" />
              </div>
              <span className="text-white font-bold text-lg">{siteConfig.name}</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Locação de geradores de energia com entrega rápida e suporte técnico 24h.
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-volt hover:border-volt/30 transition-all duration-200"
              >
                <Instagram size={18} />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-volt hover:border-volt/30 transition-all duration-200"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-volt hover:border-volt/30 transition-all duration-200"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>Locação de Geradores</li>
              <li>Manutenção Preventiva</li>
              <li>Instalação e QTA</li>
              <li>Energia para Eventos</li>
              <li>Emergência 24h</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-sm text-white/60">
              <p>{siteConfig.phone}</p>
              <p>{siteConfig.email}</p>
              <p className="leading-relaxed">{siteConfig.address}</p>
              <p className="text-volt font-medium mt-3">{siteConfig.hours}</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-xs sm:text-sm">
            © {currentYear} {siteConfig.name}. CNPJ: {siteConfig.cnpj}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
