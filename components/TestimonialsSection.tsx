import { Quote } from 'lucide-react';
import { RevealSection } from './RevealSection';

const testimonials = [
    {
        name: 'Sarah Chen',
        role: 'CEO, TechStartup',
        content: 'Working with this developer was an absolute pleasure. They delivered our platform ahead of schedule with exceptional attention to detail. Our users love the intuitive interface.',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
    },
    {
        name: 'Marcus Johnson',
        role: 'Product Manager, FinTech Corp',
        content: 'The technical expertise combined with a deep understanding of user experience made all the difference. Our conversion rates improved by 40% after the redesign.',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
    },
    {
        name: 'Emily Rodriguez',
        role: 'Founder, CreativeAgency',
        content: 'I\'ve worked with many developers, but few match this level of professionalism and creativity. The code is clean, documentation is thorough, and communication was excellent.',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
    },
];

export function TestimonialsSection() {
    return (
        <section id="testimonials" className="py-24 bg-secondary/30 overflow-hidden">
            <div className="container mx-auto px-6">
                <RevealSection>
                    <div className="text-center mb-16">
                        <p className="font-display text-primary text-sm tracking-wider mb-3">TESTIMONIALS</p>
                        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                            What clients say
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Don't just take my word for it. Here's what some of my clients
                            have to say about working together.
                        </p>
                    </div>
                </RevealSection>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <RevealSection key={testimonial.name} delay={index * 0.15}>
                            <div className="testimonial-card h-full flex flex-col gradient-border">
                                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                                <p className="text-foreground/90 mb-6 flex-grow leading-relaxed">
                                    "{testimonial.content}"
                                </p>
                                <div className="flex items-center gap-4 pt-4 border-t border-border">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                                    />
                                    <div>
                                        <p className="font-display font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
