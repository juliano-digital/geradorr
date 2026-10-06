import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface CounterNumberProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon: React.ReactNode;
}

export const CounterNumber: React.FC<CounterNumberProps> = ({
  end,
  suffix = '',
  prefix = '',
  label,
  icon,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * end);
      setCount(start);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center gap-4">
      <div className="text-volt text-3xl">{icon}</div>
      <motion.div
        className="hero-heading font-black text-[clamp(2.5rem,8vw,5rem)] leading-none"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        {prefix}{count.toLocaleString('pt-BR')}{suffix}
      </motion.div>
      <p className="text-ice/70 font-light uppercase tracking-wider text-sm">
        {label}
      </p>
    </div>
  );
};
