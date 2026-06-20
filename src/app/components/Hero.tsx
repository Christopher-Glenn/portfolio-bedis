'use client';

import AscendText from './animations/AscendText';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const monthNames = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

export default function Hero() {
  const today = new Date();
  const targetDay = today.getDate();
  const targetMonthIndex = today.getMonth();

  const [day, setDay] = useState(0);
  const [month, setMonth] = useState('');

  useEffect(() => {
    const runAnimation = () => {
      let count = 0;
      const dayInterval = setInterval(() => {
        count++;
        setDay(count);
        if (count >= targetDay) clearInterval(dayInterval);
      }, 40);

      let index = 0;
      const monthInterval = setInterval(() => {
        setMonth(monthNames[index]);
        index++;
        if (index > targetMonthIndex) clearInterval(monthInterval);
      }, 130);

      return () => {
        clearInterval(dayInterval);
        clearInterval(monthInterval);
      };
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDay(targetDay);
      setMonth(monthNames[targetMonthIndex]);
      return;
    }

    let cleanup: (() => void) | undefined;
    const id = window.requestIdleCallback(() => {
      cleanup = runAnimation();
    }, { timeout: 2000 });

    return () => {
      window.cancelIdleCallback(id);
      cleanup?.();
    };
  }, [targetDay, targetMonthIndex]);

  return (
    <div className="relative">

      <div className="flex sm:pt-12 sm:pl-96 justify-center">
        <div
          className="flex flex-row sm:h-50 sm:w-90 h-25 w-50 relative z-10"
        >
          <Image
            src="/images/decagramStar.webp"
            alt='decagram-star'
            className='h-auto sm:w-14 w-6 object-contain pb-32'
            width={56}
            height={56}
          />

          <h1 className="font-maelstrom text-8xl sm:text-[12rem] text-cozywhite">
            {day.toString().padStart(2, '0')}
          </h1>
          <div className="flex flex-col pl-0 sm:pl-2 text-cozywhite mt-auto pb-4 sm:pb-10">
            <span className="font-migra lowercase font-medium text-base sm:text-3xl">{month}</span>
            <span className="font-neue font-semibold text-sm sm:text-xl leading-none">
              available <br /> for work
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between sm:flex-row sm:px-10 px-4 sm:-translate-y-16">
        <section className="flex flex-col sm:w-[45rem] w-60 space-y-0">
          <p className="text-skintone font-migra sm:text-3xl text-[1.2rem] font-medium sm:leading-none">
            creative
          </p>
          <div className="flex flex-row overflow-visible h-[7.5rem] md:overflow-hidden md:h-[15.5rem] sm:leading-none">
            <h1 className="heading-style">Software</h1>
          </div>
          <div className="overflow-visible h-auto md:overflow-hidden md:h-[15.5rem] sm:leading-none sm:pt-0 pt-3">
            <h1 className="heading-style">Engineer</h1>
          </div>
        </section>
        <div className="flex flex-col items-end sm:pt-40">
          <div className="sm:text-3xl text-sm font-neue font-bold text-cozywhite sm:w-[36rem] pt-0">
            <AscendText className="text-right uppercase">
              I am a fullstack developer
            </AscendText>
            <AscendText>
              AND TECHNICAL PROJECT MANAGER BASED IN THE PHILIPPINES. I HAVE MANY YEARS
              OF EXPERIENCE MAKING WEBSITES AND APPS. I LOVE MINIMAL AND CLEAN DESIGN. I
              LOVE PIZZA, CATS AND ART.
            </AscendText>
          </div>
          
        </div>
      </div>
    </div>
  );
}
