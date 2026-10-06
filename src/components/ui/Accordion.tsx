import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/cn';

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, className }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = useCallback((id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, id: string) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle(id);
      }
    },
    [toggle]
  );

  return (
    <div className={cn('w-full', className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="border-b border-ice/10 last:border-b-0"
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              onKeyDown={(e) => handleKeyDown(e, item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${item.id}`}
              className="w-full flex items-center justify-between py-5 sm:py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-volt/50 rounded-lg px-3 -mx-3 group"
            >
              <span className="font-medium text-ice/90 text-sm sm:text-base pr-4 group-hover:text-ice transition-colors duration-200">
                {item.question}
              </span>
              <span className={cn(
                'flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200',
                isOpen ? 'bg-volt/10 text-volt' : 'bg-ice/5 text-ice/40 group-hover:text-ice/60'
              )}>
                {isOpen ? <Minus size={14} /> : <Plus size={14} />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`accordion-panel-${item.id}`}
                  role="region"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 sm:pb-6 text-ice/50 font-light leading-relaxed text-sm sm:text-base px-3 -mx-3">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
