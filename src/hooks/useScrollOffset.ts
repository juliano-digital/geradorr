import { useState, useEffect, useCallback } from 'react';

export function useScrollOffset() {
  const [offset, setOffset] = useState(0);
  const [sectionTop, setSectionTop] = useState(0);

  const handleScroll = useCallback(() => {
    const newOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
    setOffset(newOffset);
  }, [sectionTop]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return { offset, setSectionTop };
}
