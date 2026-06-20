'use client';

import React from 'react'
import dynamic from 'next/dynamic'
import MarqueeButton from './buttons/MarqueeButton'

const Drawer = dynamic(() => import('./slider/CaseDrawer'), {
  ssr: false,
  loading: () => <div className="text-white">Loading drawer...</div>,
})

export default function OtherCases() {
  return (
    <div className='pt-10 mx-6 sm:mx-50'>
      <div className='flex sm:flex-row flex-col gap-3 sm:gap-6'>
        <p className='sm:block hidden items-center justify-center font-migra text-cozywhite text-xl leading-tight'>
          Yes, These are <br /> some buttons
        </p>

        <a
          href='https://mail.google.com/mail/u/0/?fs=1&to=christopher.bedis.tech@gmail.com&tf=cm'
          target="_blank"
          rel="noopener noreferrer"
        >
          <MarqueeButton title='Contact Me' classname='bg-none text-white' />
        </a>

        <Drawer />
      </div>
    </div>
  )
}