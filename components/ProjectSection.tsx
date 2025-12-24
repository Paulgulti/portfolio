import { ExternalLink, Github } from 'lucide-react';
import { RevealSection } from './RevealSection';
import bsFriendImg from '../public/BS-friend.jpg';
import expenseTrackerImg from '../public/Expense-Tracker-1.png';
import merkeMarketImg from '../public/merke-market.png';
import betAleImg from '../public/bet-ale.png';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
    {
        title: 'Property management platform',
        description: 'A property management and renting platform with advanced sorting and searching algorithms.',
        tags: ['React', 'Express.js', 'TypeScript', 'Better-auth', 'PostgreSQL', 'Prisma'],
        image: betAleImg,
        github: 'https://github.com/Paulgulti/Home-for-rent',
        live: 'https://bet-ale.vercel.app',
    },
    {
        title: 'AI-powered Bible Study App',
        description: 'Bible study with ease. AI chatbot to assist with any questions and intuitive note taking feature.',
        tags: ['Next.js', 'Redis', 'TypeScript', 'Tailwind', 'PostgreSQL', 'Prisma', 'Clerk'],
        image: bsFriendImg,
        github: 'https://github.com/Paulgulti/BS-Friend',
        live: 'https://bs-friend.vercel.app',
    },
    {
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
        tags: ['Next.js', 'Sanity', 'PostgreSQL', 'Stripe', 'Clerk', 'Tailwind', 'Prisma'],
        image: merkeMarketImg,
        github: 'https://github.com/Paulgulti/et-market',
        live: 'https://merke-market.vercel.app',
    },
    {
        title: 'Expense Tracker',
        description: 'Advanced expense tracker with easy visual display.',
        tags: ['React', 'HTML', 'CSS', 'Javascript'],
        image: expenseTrackerImg,
        github: 'https://github.com/Paulgulti/ET',
        live: 'https://paulgulti.github.io/ET',
    },
];

export function ProjectsSection() {
    return (
        <section id="projects" className=" py-10 md:py-20">
            <div className="container mx-auto px-6">
                <RevealSection>
                    <div className="text-center mb-8 md:mb-16">
                        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 md:mb-6">
                            Featured Projects
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            A selection of projects that showcase my skills and passion for building
                            exceptional digital experiences.
                        </p>
                    </div>
                </RevealSection>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <RevealSection key={project.title} delay={index * 0.15}>
                            <div className="project-card group">
                                <div className="relative overflow-hidden aspect-video">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                                    {/* Hover overlay with links */}
                                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                                        <Link
                                            href={project.github}
                                            target='_blank'
                                            className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center text-foreground hover:text-primary transition-colors"
                                        >
                                            <Github className="w-5 h-5" />
                                        </Link>
                                        <Link
                                            href={project.live}
                                            target='_blank'
                                            className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center text-foreground hover:text-primary transition-colors"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-br from-orange-500/20 via-orange-500/10 to-transparent text-primary "
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </RevealSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
