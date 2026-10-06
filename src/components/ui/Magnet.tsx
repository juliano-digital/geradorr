import React, { useRef, useState, useCallback, useEffect } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('translate3d(0,0,0)');
  const [isActive, setIsActive] = useState(false);
  const isTouch = useMediaQuery('(pointer: coarse)');

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isTouch || !ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;

      const dist = Math.sqrt(distX * distX + distY * distY);

      if (dist < padding) {
        setIsActive(true);
        setTransform(
          `translate3d(${distX / strength}px, ${distY / strength}px, 0)`
        );
      } else {
        setIsActive(false);
        setTransform('translate3d(0,0,0)');
      }
    },
    [padding, strength, isTouch]
  );

  const handleMouseLeave = useCallback(() => {
    setIsActive(false);
    setTransform('translate3d(0,0,0)');
  }, []);

  useEffect(() => {
    if (isTouch) {
      setTransform('translate3d(0,0,0)');
    }
  }, [isTouch]);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform,
        transition: isActive ? activeTransition : inactiveTransition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};
