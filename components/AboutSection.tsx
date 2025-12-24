import { Code2, Palette, Rocket, Sparkles } from 'lucide-react';
import { RevealSection } from './RevealSection';

const skills = [
    { icon: Code2, title: 'Clean Code', description: 'Writing maintainable, scalable, and well-documented code.' },
    { icon: Palette, title: 'UI/UX Design', description: 'Creating intuitive interfaces with attention to detail.' },
    { icon: Rocket, title: 'Performance', description: 'Optimizing for speed and excellent user experience.' },
    { icon: Sparkles, title: 'Modern Stack', description: 'React, TypeScript, Node.js, and cutting-edge tools.' },
];

export function AboutSection() {
    return (
        <section id="about" className="py-10 md:py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
                <RevealSection>
                    <div className="text-center mb-8 md:mb-16">
                        <p className="font-display text-primary text-sm tracking-wider mb-3">ABOUT ME</p>
                        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 md:mb-6">
                            Passionate about creating
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            With morethan a year of experience in web development, I specialize in building
                            modern applications that solve real-world problems.
                        </p>
                    </div>
                </RevealSection>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <RevealSection key={skill.title} delay={index * 0.1}>
                            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-500 group">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 via-orange-500/10 to-transparent flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors duration-300">
                                    <skill.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-display text-lg font-semibold mb-2">{skill.title}</h3>
                                <p className="text-sm text-muted-foreground">{skill.description}</p>
                            </div>
                        </RevealSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
