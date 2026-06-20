'use client';

import Image from 'next/image'
import dynamic from 'next/dynamic'
import { PiBagFill } from 'react-icons/pi'

const TimeLineItem = dynamic(
    () => import('./timeline').then(m => m.TimeLineItem),
    {
        ssr: false,
        loading: () => (
            <div className="animate-pulse mb-4">
                <div className="h-4 bg-gray-700 rounded w-3/4 mb-2" />
                <div className="h-3 bg-gray-600 rounded w-1/2" />
            </div>
        )
    }
)

const frontendSkills = [
    { text: 'JavaScript'},
    { text: 'TypeScript'},
    { text: 'React'},
    { text: 'Next.js'},
    { text: 'Svelte'},
    { text: 'Astro'},
    { text: 'TailwindCSS'},
    { text: 'SCSS'}
]

const backendSkills = [
    { text: 'Node.js'},
    { text: 'Python'},
    { text: 'Java'},
    { text: 'MongoDB'},
    { text: 'MySQL'},
    { text: 'PHP'}
]

const aiSkills = [
    { text: 'TensorFlow'},
    { text: 'PyTorch'},
    { text: 'LlamaIndex'}
]

const cmsSkills = [
    { text: 'WordPress' },
    { text: 'Strapi' },
    { text: 'Framer' },
    { text: 'n8n', }
]

const devTools = [
    { text: 'Git', },
    { text: 'VS Code', },
    { text: 'PyCharm', },
    { text: 'Slack' },
    { text: 'Discord' },
    { text: 'Teams' },
    { text: 'Jira' },
    { text: 'Trello' }
]

const experiences = [
    {
        title: 'Project Manager',
        subtitle: 'ePaulTech Solutions, BINHI TBI',
        year: '2025'
    },
    {
        title: 'Research & Development Engineer',
        subtitle: 'WVSU - SPARK Hub',
        year: '2025'
    },
    {
        title: 'BS Computer Science',
        subtitle: 'West Visayas State University',
        year: '2023'
    },
    {
        title: 'Hello World!',
        subtitle: 'Wrote my first line of code',
        year: '2021'
    }
]

export default function Skills({ id }: { id?: string }) {
    return (
        <div id={id} className="relative sm:pl-56 px-6 sm:pt-[3rem] pt-24">
            <div className="flex flex-row">
                <div className="flex flex-row sm:pb-8">
                    <Image
                        src="/images/decagramStar.webp"
                        className="h-auto sm:w-14 w-6"
                        width={56}
                        height={56}
                        alt="decagram-star"
                        loading="lazy"
                    />
                    <div className="flex flex-row font-bold sm:pl-6 pl-2 font-neue text-white sm:text-[2.3rem] text-[0.9rem] uppercase">
                        Skills
                    </div>

                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 sm:pt-0 pt-5">
                <section className="bento-card flex flex-col gap-2 p-6 font-medium">
                    <div className='flex items-center text-cozywhite justify-between'>
                        <div>
                            <h1 className='text-lg sm:text-2xl'>Tech Stack</h1>
                        </div>
                    </div>
                    <h2 className="text-cozywhite font-semibold sm:text-xl text-base">
                        Frontend
                    </h2>
                    <div className="flex flex-row flex-wrap gap-4">
                        {frontendSkills.map(s => (
                            <span key={s.text} className={`tech-stack text-white pl-3`}>
                                {s.text}
                            </span>
                        ))}
                    </div>

                    <h2 className="text-cozywhite font-semibold sm:text-xl text-base pt-2">
                        Backend
                    </h2>
                    <div className="flex flex-row flex-wrap gap-4">
                        {backendSkills.map(s => (
                            <span key={s.text} className={`tech-stack text-white pl-3`}>
                                {s.text}
                            </span>
                        ))}
                    </div>

                    <h2 className="text-cozywhite font-semibold sm:text-xl text-base pt-2">
                        AI &amp; Machine Learning
                    </h2>
                    <div className="flex flex-row flex-wrap gap-4">
                        {aiSkills.map(s => (
                            <span key={s.text} className={`tech-stack text-white pl-3`}>
                                {s.text}
                            </span>
                        ))}
                    </div>

                    <h2 className="text-cozywhite font-semibold sm:text-xl text-base pt-2">
                        CMS &amp; No Code
                    </h2>
                    <div className="flex flex-row flex-wrap gap-4">
                        {cmsSkills.map(s => (
                            <span key={s.text} className={`tech-stack text-white pl-3`}>
                                {s.text}
                            </span>
                        ))}
                    </div>

                    <h2 className="text-cozywhite font-semibold sm:text-xl text-lg pt-2">
                        Developer Tools
                    </h2>
                    <div className="flex flex-row flex-wrap gap-4">
                        {devTools.map(s => (
                            <span key={s.text} className={`tech-stack text-white pl-3`}>
                                {s.text}
                            </span>
                        ))}
                    </div>
                </section>

                <div className="bento-card sm:p-4 pt-5 w-full sm:w-[26rem] mr-52 text-white order-1 sm:order-3">
                    <div className="flex items-center gap-2 pl-4">
                        <PiBagFill className="w-5 h-5 sm:w-6 sm:h-6 fill-gray-400" />
                        <h2 className="text-xl sm:text-2xl font-medium">Experience</h2>
                    </div>

                    <section className="relative flex flex-row pt-8 pl-4">
                        <div className="absolute left-6 inset-y-12 border-l-2 border-gray-400 z-0" />
                        <div className="flex flex-col">
                            {experiences.map((exp, index) => (
                                <TimeLineItem
                                    key={exp.title}
                                    title={exp.title}
                                    subtitle={exp.subtitle}
                                    year={exp.year}
                                    className={index === 0 ? "bg-white" : "bg-muted"}
                                />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
