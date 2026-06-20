'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import DrawerProjects from './DrawerProjects'

export default function Example() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        className="relative bg-cozywhite overflow-hidden sm:border-2 border-1 sm:text-[2rem] text-[1.4rem] cursor-pointer border-white rounded-full sm:w-full px-5 uppercase font-medium transition-colors"
        onClick={() => setOpen(true)}
      >
        <span className="inline-block text-center">See Other Works</span>
        <div className="absolute inset-0 flex whitespace-nowrap marquee-inner">
          <span className="mx-4">See Other Works</span>
          <span className="mx-4">See Other Works</span>
        </div>
      </button>
      <Dialog open={open} onClose={setOpen} className="relative z-99">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray/900 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
        />

        <div className="fixed inset-0 overflow-hidden ">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
              <DialogPanel
                transition
                className="pointer-events-auto w-screen max-w-full sm:max-w-5xl transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
              >
                <TransitionChild>
                  <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4">
                  </div>
                </TransitionChild>
                <div className="relative flex h-full flex-col overflow-y-auto bg-muted py-6 shadow-xl after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-white/10">
                  <div className="flex flex-row px-4 sm:px-10 justify-between">
                    <DialogTitle className="sm:text-3xl text-base font-semibold text-cozywhite font-neue uppercase ">Projects List (2025-2023)</DialogTitle>
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="relative rounded-md text-gray-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      <span className="absolute -inset-2.5" />
                      <span className="sr-only">Close panel</span>
                      <XMarkIcon aria-hidden="true" className="size-6" />
                    </button>
                  </div>
                  <section className="relative mt-6 flex-1 px-4 sm:px-10">
                    {/* <DrawerProjects
                      name="3D Segmentation Research"
                      link=""
                      description="AI medical image segmentation"
                      year={2026}
                    /> */}
                    <DrawerProjects
                      name="True-Breed Hub"
                      link="https://github.com/Christopher-Glenn/truebreed-hub"
                      description="Pet breeding match platform"
                      year={2025}
                    />
                    <DrawerProjects
                      name="Spark-Hub"
                      link="https://spark-hub-website.vercel.app/"
                      description="Student Organization Official Website"
                      year={2025}
                    />
                    <DrawerProjects
                      name="Paul-Kaldi"
                      link="paul-kaldi-coffee.vercel.app"
                      description="End-to-end coffee shop management system"
                      year={2025}
                    />
                    <DrawerProjects
                      name="RediPost"
                      link="https://cict.wvsu-fundays.com/"
                      description="Information sharing platform development"
                      year={2024}
                    />
                    <DrawerProjects
                      name="Tiringbanay Infosite"
                      link="https://tiringbanay-2024.vercel.app"
                      description="Event information website development"
                      year={2024}
                    />
                    <DrawerProjects
                      name="Binhi Website"
                      link="https://binhi.wvsu.edu.ph/"
                      description="Startup incubator website development"
                      year={2023}
                    />
                    <DrawerProjects
                      name="USC Infosite"
                      link="https://wvsu-usc.org/"
                      description="Student organization website development"
                      year={2023}
                    />
                  </section>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
