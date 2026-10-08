import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { navigation } from '@/data/navigation';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/95 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            onClick={closeMenu}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-volt to-volt-dark flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <Zap size={16} className="text-bg sm:w-5 sm:h-5" fill="currentColor" />
            </div>
            <span className="text-white font-bold text-base sm:text-lg">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Navegação principal">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`
                    text-sm lg:text-base font-medium transition-colors duration-200
                    ${isActive ? 'text-volt' : 'text-white/70 hover:text-white'}
                  `}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                gradient-btn px-6 py-2.5 rounded-full
                text-white font-semibold text-sm
                transition-all duration-200 hover:scale-105
                inline-flex items-center gap-2
              "
            >
              <span>Orçamento</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden p-2 text-white hover:text-volt transition-colors duration-200"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav
            className="md:hidden py-4 border-t border-white/10"
            aria-label="Menu mobile"
          >
            <ul className="space-y-2">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      onClick={closeMenu}
                      className={`
                        block px-4 py-3 rounded-lg text-base font-medium
                        transition-colors duration-200
                        ${isActive
                          ? 'bg-volt/10 text-volt'
                          : 'text-white/70 hover:bg-white/5 hover:text-white'
                        }
                      `}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-4">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="
                    gradient-btn block text-center
                    px-6 py-3 rounded-full
                    text-white font-semibold
                    transition-all duration-200
                  "
                >
                  Solicitar Orçamento
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};
