'use client';

import { useEffect, type RefObject } from 'react';
import { computeScrollOpacity } from './scrollFade';

type ScrollStyleRefs = {
  mobileOverlay: RefObject<HTMLDivElement | null>;
  desktopOverlay: RefObject<HTMLDivElement | null>;
  navbarSection: RefObject<HTMLElement | null>;
};

export function useScrollStyles(refs: ScrollStyleRefs) {
  useEffect(() => {
    const update = () => {
      const scrollY = window.scrollY;
      const opacity = computeScrollOpacity(scrollY, {
        inStart: 300,
        inEnd: 800,
        outStart: 5000,
        outEnd: 5500,
        defaultOpacity: 1,
      });
      const mobileOpacity = computeScrollOpacity(scrollY, {
        outStart: 3400,
        outEnd: 3800,
        defaultOpacity: 1,
      });

      if (refs.mobileOverlay.current) {
        refs.mobileOverlay.current.style.opacity = String(mobileOpacity);
      }

      if (refs.desktopOverlay.current) {
        refs.desktopOverlay.current.style.backgroundColor = `rgba(19, 19, 19, ${opacity})`;
      }

      if (refs.navbarSection.current) {
        const cappedOpacity = Math.min(opacity, 0.8);
        const blurStrength = Math.min(cappedOpacity * 6, 6);
        refs.navbarSection.current.style.backgroundColor = `rgba(19, 19, 19, ${cappedOpacity})`;
        refs.navbarSection.current.style.backdropFilter = `blur(${blurStrength}px)`;
        refs.navbarSection.current.style.setProperty(
          '-webkit-backdrop-filter',
          `blur(${blurStrength}px)`
        );
      }
    };

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          update();
          ticking = false;
        });
        ticking = true;
      }
    };

    update();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [refs.mobileOverlay, refs.desktopOverlay, refs.navbarSection]);
}
