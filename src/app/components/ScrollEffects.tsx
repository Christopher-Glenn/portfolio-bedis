'use client';

import Navbar from '@/app/components/Navbar';
import CenterHoleOverlay from '@/app/components/animations/Centerhole';
import { useScrollFade } from '../../../lib/useScrollFade';

export default function ScrollEffects({
  children,
}: {
  children: React.ReactNode;
}) {
  const opacity = useScrollFade({
    inStart: 300,
    inEnd: 800,
    outStart: 5000,
    outEnd: 5500,
    defaultOpacity: 1,
  });

  const mobileOpacity = useScrollFade({
    outStart: 3400,
    outEnd: 3800,
    defaultOpacity: 1,
  });

  return (
    <>
      <div
        className="fixed inset-0 -z-20 sm:hidden bg-[#131313] transition-opacity duration-300"
        style={{ opacity: mobileOpacity }}
      />

      <div
        className="fixed inset-0 -z-10 hidden sm:block transition-opacity duration-300"
        style={{ backgroundColor: `rgba(19, 19, 19, ${opacity})` }}
      />

      <CenterHoleOverlay />
      <Navbar opacity={opacity} />
      {children}
    </>
  );
}
