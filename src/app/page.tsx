'use client';

import Hero from '@/app/components/Hero';
import Navbar from '@/app/components/Navbar';
import About from './components/About';
import Works from '@/app/components/Works';
import Cases from './components/OtherCases';
import Contacts from './components/Contacts';
import CenterHoleOverlay from './components/animations/Centerhole';
import Image from 'next/image';
import { useScrollFade } from '../../lib/useScrollFade';
import Skills from './components/Skills';

export default function Home() {
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
    <main className="relative min-h-screen">
      <div className="fixed inset-0 -z-30 h-auto md:h-[1200px]">
        <Image
          src="/images/heropage-bg.webp"
          alt="background-image"
          width={1555}
          height={900}
          priority
          className="w-full h-full object-cover"
        />
      </div>

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

      <Hero />
      <About id="about" />
      <Works id="works" />
      <Skills id="skills" />
      <Cases />
      <Contacts id="contact" />
    </main>
  );
}
