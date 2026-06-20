'use client';

import React from 'react'
import dynamic from 'next/dynamic'
import AscendText from './animations/AscendText';

const ModelCanvas = dynamic(() => import('@/app/components/ModelCanvas'), { ssr: false });

export default function About({ id }: { id?: string }) {
  return (
    <div id={id} className='relative sm:px-10 px-4 sm:pt-[18.75rem] pt-36'>
      <section className="flex flex-col sm:pl-70 pl-10">
        <div className="flex flex-row overflow-visible h-[7.5rem] md:overflow-hidden md:h-[6.5rem]">
          <AscendText className='uppercase font-tusker text-cozywhite sm:text-[6.6rem] text-[4rem] 
          sm:leading-24 leading-47'>Hello I am Christopher</AscendText>
        </div>
        <h3 className='font-migra text-skintone sm:pt-1 sm:pl-78 pl-44 sm:text-2xl tracking-tighter 
        font-medium'>Christopher  Glenn</h3>
      </section>
      <div className='flex sm:flex-row flex-col'>
        <div className='h2--uppercase sm:pt-14 pt-12 sm:pl-70 pl-10 sm:w-[60rem] sm:leading-12'>
          <p className='text-right'>I am an enthusiastic lead </p>
          developer and full-stack developer who specializes in
          building websites and mobile applications. I manage every aspect of freelance projects
          on my own, from design and development to testing and upkeep.
          As the project manager of a startup with launched, profitable products, I also do well in
          team settings. I&rsquo;ve collaborated extensively with fintech startups to develop software that
          offers practical benefits.
        </div>
        <div className="sm:w-[45rem] sm:h-auto h-[22rem] w-full pt-5 sm:pt-0">
          <ModelCanvas />
        </div>
      </div>
      <div className="relative pt-8 sm:pt-12 flex flex-col sm:pl-0 pl-20 items-start sm:items-center">
        <h2 className="uppercase font-bold font-neue text-white text-[0.875rem] sm:pl-[35rem] sm:text-[2.3rem] leading-3 sm:leading-5 relative">
          I am not this <span className="relative inline-block z-10">
            one
            <span className="absolute inset-0 z-0 sm:translate-x-2 translate-x-1 scale-[1.6] sm:scale-[2]">
              <img
                src="/images/scribbleCircle.svg"
                alt="circle"
                className="w-full h-full object-contain"
              />
            </span>
            <span className="absolute z-0 top-full left-1/2 sm:translate-x-20 translate-x-8 sm:-translate-y-25 -translate-y-11 mt-2 sm:mt-4 scale-[3]">
              <img
                src="/images/scribbleArrow.svg"
                alt="arrow"
                className="w-auto sm:w-[10rem] object-contain"
              />
            </span>
          </span>
        </h2>

        <h3 className="mt-2 font-migra text-skintone text-[0.8rem] sm:pl-[27rem] sm:text-2xl tracking-tighter font-medium">
          Christopher Columbus
        </h3>
      </div>
    </div>
  )
}
