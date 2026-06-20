import React from 'react'

type DrawerProjects = {
    name: string
    link: string
    description: string
    year: number
}

export default function DrawerProjects({ name, link, description, year }: DrawerProjects) {
    return (
        <div className='font-neue text-white grid grid-cols-[1fr_1fr_auto] w-full items-center py-4 border-b-1 border-gray-500'>
            <div className='flex flex-col'>
                <span className='sm:text-lg text-base uppercase font-semibold pb-1'>{name}</span>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit inline-block sm:text-base text-sm bg-black px-2 py-1"
                >
                    {link.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                </a>
            </div>
            <span className='sm:text-base text-xs'>{description}</span>
            <span className=' font-migra text-xl pr-8 text-cozywhite'>{year}</span>
        </div>
    )
}