'use client';

import React from 'react';
import Link from 'next/link';

interface NavbarProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

const Navbar: React.FC<NavbarProps> = ({ sectionRef }) => {
  return (
    <nav className="sticky top-0 z-50">
      <section
        ref={sectionRef}
        className="px-5 pt-6 sm:px-10 sm:pt-9 transition-all duration-300"
        style={{
          backgroundColor: 'rgba(19, 19, 19, 0)',
          backdropFilter: 'blur(0px)',
          WebkitBackdropFilter: 'blur(0px)',
        }}
      >
        <div className="flex flex-row justify-between border-b border-b-cozywhite/65 sm:pb-6 pb-3 ">
          <div className="flex flex-row gap-9">
            <Link className="text-sm sm:text-base font-migra text-white" href="/">Christopher Glenn</Link>
            <div className="hidden sm:block uppercase font-neue text-cozywhite text-base font-semibold">Project Manager • Full - Stack Developer</div>
          </div>
          <ul className="sm:text-base flex space-x-1 text-white font-neue font-medium text-sm">
            <li>
              <Link href="#works" className="hover-underline-animation">works,</Link>
            </li>
            <li>
              <Link href="#about" className="hover-underline-animation">about,</Link>
            </li>
            <li>
              <Link href="#contact" className="hover-underline-animation">contact,</Link>
            </li>
            <li>
              <Link href="#skills" className="hover-underline-animation">skills</Link>
            </li>
          </ul>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
