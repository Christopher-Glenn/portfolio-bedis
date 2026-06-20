'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/app/components/Navbar';
import { useScrollStyles } from '../../../lib/useScrollStyles';

const CenterHoleOverlay = dynamic(
  () => import('@/app/components/animations/Centerhole'),
  { ssr: false }
);

export default function ScrollEffects({
  children,
}: {
  children: React.ReactNode;
}) {
  const mobileOverlayRef = useRef<HTMLDivElement>(null);
  const desktopOverlayRef = useRef<HTMLDivElement>(null);
  const navbarSectionRef = useRef<HTMLElement>(null);
  const [showCenterHole, setShowCenterHole] = useState(false);

  useScrollStyles({
    mobileOverlay: mobileOverlayRef,
    desktopOverlay: desktopOverlayRef,
    navbarSection: navbarSectionRef,
  });

  useEffect(() => {
    const show = () => setShowCenterHole(true);
    const id = window.requestIdleCallback(show, { timeout: 2500 });
    return () => window.cancelIdleCallback(id);
  }, []);

  return (
    <>
      <div
        ref={mobileOverlayRef}
        className="fixed inset-0 -z-20 sm:hidden bg-[#131313] transition-opacity duration-300"
        style={{ opacity: 1 }}
      />

      <div
        ref={desktopOverlayRef}
        className="fixed inset-0 -z-10 hidden sm:block transition-opacity duration-300"
        style={{ backgroundColor: 'rgba(19, 19, 19, 0)' }}
      />

      {showCenterHole ? <CenterHoleOverlay /> : null}
      <Navbar sectionRef={navbarSectionRef} />
      {children}
    </>
  );
}
