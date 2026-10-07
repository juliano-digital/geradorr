import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import { navigation } from '@/data/navigation';
import { siteConfig } from '@/data/site';
import { cn } from '@/lib/cn';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <nav className="relative z-50 flex items-center justify-between px-5 sm:px-8 md:px-10 lg:px-16 pt-6 md:pt-8">
      {/* Logo */}
      <a
        href="#"
        className="flex items-center gap-2 group"
      >
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-volt to-volt-dark flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
          <Zap size={18} className="text-bg" fill="currentColor" />
        </div>
        <span className="text-ice font-bold text-base sm:text-lg tracking-tight">
          {siteConfig.name}
        </span>
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-6 lg:gap-8">
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-ice/70 font-medium uppercase tracking-wider text-xs lg:text-sm hover:text-ice transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-volt after:transition-all after:duration-300 hover:after:w-full"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        type="button"
        onClick={toggleMenu}
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isOpen}
        className="md:hidden text-ice p-2 hover:opacity-70 transition-opacity duration-200"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={cn(
              'fixed inset-0 top-0 bg-bg/98 backdrop-blur-xl z-40',
              'flex flex-col items-center justify-center gap-8',
              'md:hidden'
            )}
          >
            {navigation.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="text-ice font-medium uppercase tracking-wider text-2xl hover:text-volt transition-colors duration-200"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-btn inline-flex items-center justify-center rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 text-sm"
              >
                Pedir Orçamento
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
