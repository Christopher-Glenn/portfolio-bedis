import Hero from '@/app/components/Hero';
import About from './components/About';
import Works from '@/app/components/Works';
import Cases from './components/OtherCases';
import Contacts from './components/Contacts';
import Skills from './components/Skills';
import ScrollEffects from './components/ScrollEffects';
import Image from 'next/image';

export default function Home() {
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

      <ScrollEffects>
        <Hero />
        <About id="about" />
        <Works id="works" />
        <Skills id="skills" />
        <Cases />
        <Contacts id="contact" />
      </ScrollEffects>
    </main>
  );
}
