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
    { text: 'JavaScript', class: 'bg-[#f8e026] text-black' },
    { text: 'TypeScript', class: 'bg-[#2d78c7] text-white' },
    { text: 'React', class: 'bg-[#222222] text-[#00ddfb] px-3!' },
    { text: 'Next.js', class: 'bg-black text-[#f1f1f1] px-3!' },
    { text: 'Svelte', class: 'bg-[#fe4407] text-white px-3!' },
    { text: 'Astro', class: 'bg-[#fefefe] text-[#18191e]' },
    { text: 'TailwindCSS', class: 'bg-white text-[#3ebff8]' },
    { text: 'SCSS', class: 'bg-[#d573a6] text-white' }
]

const backendSkills = [
    { text: 'Node.js', class: 'bg-[#87ce30] text-white' },
    { text: 'Python', class: 'bg-[#3e74a3] text-white' },
    { text: 'Java', class: 'bg-white text-[#ed2631] px-4!' },
    { text: 'MongoDB', class: 'bg-[#011e2c] text-[#00f26b]' },
    { text: 'MySQL', class: 'bg-white text-[#097893] px-4!' },
    { text: 'PHP', class: 'bg-[#8d96c1] text-[#2e2d38] px-5!' }
]

const aiSkills = [
    { text: 'TensorFlow', class: 'bg-white text-[#ee6634]' },
    { text: 'PyTorch', class: 'bg-[#1d1f1c] text-[#ee6634]' },
    {
        text: 'LlamaIndex',
        class:
            'bg-[#080808] bg-gradient-to-r from-[#ffa6ea] via-[#45dff8] to-[#bb8deb] bg-clip-text text-transparent'
    }
]

const cmsSkills = [
    { text: 'WordPress', class: 'bg-white text-[#007496]' },
    { text: 'Strapi', class: 'bg-white text-[#363490] px-3!' },
    { text: 'Framer', class: 'bg-[#0055fe] text-white px-3!' },
    { text: 'n8n', class: 'bg-[#eb5175] text-white px-3!' }
]

const devTools = [
    { text: 'Git', class: 'bg-white text-[#f05539] px-4!' },
    { text: 'GitHub', class: 'bg-black text-white px-3!' },
    { text: 'VS Code', class: 'bg-white text-[#0a7cbb]' },
    { text: 'PyCharm', class: 'bg-white text-[#4c8446]' },
    { text: 'Slack', class: 'bg-[#4a154b] text-white px-3!' },
    { text: 'Discord', class: 'bg-white text-[#5769f9] px-3!' },
    { text: 'Teams', class: 'bg-[#5358be] text-white px-3!' },
    { text: 'Jira', class: 'bg-[#fefefe] text-[#213558] px-4!' },
    { text: 'Trello', class: 'bg-[#095fda] text-white px-3!' }
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
                    <h2 className="text-cozywhite font-semibold sm:text-xl text-base">
                        Frontend
                    </h2>
                    <div className="flex flex-row flex-wrap gap-4">
                        {frontendSkills.map(s => (
                            <span key={s.text} className={`tech-stack ${s.class}`}>
                                {s.text}
                            </span>
                        ))}
                    </div>

                    <h2 className="text-cozywhite font-semibold sm:text-xl text-base pt-2">
                        Backend
                    </h2>
                    <div className="flex flex-row flex-wrap gap-4">
                        {backendSkills.map(s => (
                            <span key={s.text} className={`tech-stack ${s.class}`}>
                                {s.text}
                            </span>
                        ))}
                    </div>

                    <h2 className="text-cozywhite font-semibold sm:text-xl text-base pt-2">
                        AI &amp; Machine Learning
                    </h2>
                    <div className="flex flex-row flex-wrap gap-4">
                        {aiSkills.map(s => (
                            <span key={s.text} className={`tech-stack ${s.class}`}>
                                {s.text}
                            </span>
                        ))}
                    </div>

                    <h2 className="text-cozywhite font-semibold sm:text-xl text-base pt-2">
                        CMS &amp; No Code
                    </h2>
                    <div className="flex flex-row flex-wrap gap-4">
                        {cmsSkills.map(s => (
                            <span key={s.text} className={`tech-stack ${s.class}`}>
                                {s.text}
                            </span>
                        ))}
                    </div>

                    <h2 className="text-cozywhite font-semibold sm:text-xl text-lg pt-2">
                        Developer Tools
                    </h2>
                    <div className="flex flex-row flex-wrap gap-4">
                        {devTools.map(s => (
                            <span key={s.text} className={`tech-stack ${s.class}`}>
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
                            {experiences.map(exp => (
                                <TimeLineItem
                                    key={exp.title}
                                    title={exp.title}
                                    subtitle={exp.subtitle}
                                    year={exp.year}
                                    className="bg-muted"
                                />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
