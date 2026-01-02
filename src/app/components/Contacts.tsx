import React from 'react'
import dynamic from 'next/dynamic';
import { makeMailto } from './util/mailto';

const BigHeading = dynamic<{ children: React.ReactNode }>(
  () => import('./atom/BigHeading')
);

const buttonGroups = [
  {
    className: '',
    buttons: [
      {
        title: 'Ux/ui design',
        href: makeMailto(
          'christopherglenn.bedis@wvsu.edu.ph',
          '💼 Could you help me with UX/UI design?',
          'Hi, I found your portfolio and wanted to ask about UX/UI design...'
        ),
      },
      {
        title: 'Frontend Development',
        href: makeMailto(
          'frontend@example.com',
          'Frontend dev inquiry',
          'Hey! I`m interested in your frontend development services...'
        ),
      },
    ],
  },
  {
    className: 'sm:pl-14',
    buttons: [
      {
        title: 'Project Management',
        href: makeMailto(
          'pm@example.com',
          'Project Manager inquiry',
          'Hi, I`d like to discuss project management support...'
        ),
      },
      {
        title: 'Backend Development',
        href: makeMailto(
          'backend@example.com',
          'Backend dev inquiry',
          'I`m interested in your backend development services...'
        ),
      },
    ],
  },
  {
    className: '',
    buttons: [
      {
        title: 'Application Development',
        href: makeMailto(
          'app@example.com',
          'App dev collaboration',
          'Let`s discuss an app project...'
        ),
      },
      {
        title: 'New Business',
        href: makeMailto(
          'biz@example.com',
          'Could you help me with my new business?',
          'I need guidance for my new startup...'
        ),
      },
    ],
  },
  {
    className: 'sm:pl-28 flex-row',
    buttons: [
      {
        title: 'Startups',
        href: makeMailto(
          'startups@example.com',
          'Startup collaboration',
          'I`d love to collaborate on startup ideas...'
        ),
      },
      {
        title: 'Pizza',
        href: makeMailto(
          'pizza@example.com',
          'Pizza collab',
          "Let`s talk about pizza 🍕..."
        ),
      },
    ],
  },
];

const Socials = [
  "Facebook", "Instagram", "LinkedIn", "Fiverr", "Github"
]



const MarqueeButton = dynamic(() => import('./buttons/MarqueeButton'));

const headings = ["Let's", "Connect"];


const Contacts = ({ id }: { id?: string }) => {
  return (
    <div id={id} className="flex flex-col sm:flex-row px-6 pt-40 sm:pt-72 pb-14 sm:pb-0">

      <div className="relative flex flex-col">
        <BigHeading>{headings[0]}</BigHeading>
        <BigHeading>{headings[1]}</BigHeading>
      </div>
      <section className="sm:pt-0 pt-8">
        <div className='sm:-translate-x-28 sm:-translate-y-10'>
          <p className='h2--uppercase uppercase pl-0 sm:pl-18'>I&rsquo;m always interested about</p>
          <div className='flex flex-col pt-4 gap-3'>

            {buttonGroups.map((group, i) => (
              <div key={i} className={`flex flex-col sm:flex-row gap-3 ${group.className}`}>
                {group.buttons.map((btn) => (
                  <a key={btn.title} href={btn.href}>
                    <MarqueeButton title={btn.title} classname="bg-none text-white" />
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className='sm:mt-40 mt-28 sm:pl-12'>
          <div className='flex flex-row sm:gap-8 py-4'>
            <h2 className='h2--uppercase uppercase'>Are you minding a project?</h2>
            <MarqueeButton title={
              <>
                <span className="sm:hidden">Contact</span>
                <span className="hidden sm:inline">Contact Me</span>
              </>
            }
              classname='bg-white text-muted font-medium' />
          </div>
          <div className='flex flex-row border-t-1 border-gray-200/50 py-4 gap-6'>
            <>
              <a href='https://www.facebook.com/chrisNoTopher'>
                <span className='h3--uppercase'>{Socials[0]}</span>
              </a>
              <a href='https://www.instagram.com/chris_glb04/'>
                <span className='h3--uppercase'>{Socials[1]}</span>
              </a>
              <a href='https://www.linkedin.com/in/christopher-glenn-bedis'>
                <span className='h3--uppercase'>{Socials[2]}</span>
              </a>
              <a href="https://www.fiverr.com/s/EgDewoe">
                <span className='h3--uppercase'>{Socials[3]}</span>
              </a>
              <a href="https://github.com/Christopher-Glenn">
                <span className='h3--uppercase'>{Socials[4]}</span>
              </a>
            </>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Contacts