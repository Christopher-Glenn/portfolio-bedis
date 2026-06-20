
import { useEffect, useState } from 'react';

type ScrollFadeParams = {
  inStart?: number;
  inEnd?: number;
  outStart: number;
  outEnd: number;
  defaultOpacity?: number;
};

export function useScrollFade({
  inStart = 0,
  inEnd = 0,
  outStart,
  outEnd,
  defaultOpacity = 1,
}: ScrollFadeParams) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // fade in
  if (inEnd && scrollY < inStart) return 0;
  if (inEnd && scrollY < inEnd) {
    return (scrollY - inStart) / (inEnd - inStart);
  }

  // fully opaque region
  if (scrollY < outStart) return defaultOpacity;

  // fade out
  if (scrollY < outEnd) {
    return defaultOpacity - (scrollY - outStart) / (outEnd - outStart);
  }

  return 0;
}
