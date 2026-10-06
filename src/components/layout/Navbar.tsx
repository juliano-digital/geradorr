import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
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
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8">
      <a
        href="#"
        className="text-ice font-bold text-lg sm:text-xl tracking-tight hover:opacity-70 transition-opacity duration-200"
      >
        {siteConfig.name}
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8">
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-ice font-medium uppercase tracking-wider text-sm lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
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
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={cn(
              'fixed inset-0 top-0 bg-bg/95 backdrop-blur-md z-40',
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
                transition={{ delay: i * 0.1 }}
                className="text-ice font-medium uppercase tracking-wider text-2xl hover:opacity-70 transition-opacity duration-200"
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
