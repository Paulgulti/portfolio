'use client'
import { Mail, MapPin, Send } from 'lucide-react';
import { RevealSection } from './RevealSection';
import { useState } from 'react';
import { toast } from "sonner"
import { useToast } from './useToast';

export function ContactSection() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    // const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // toast({
        //     title: "Message sent!",
        //     description: "Thanks for reaching out. I'll get back to you soon.",
        // });
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-10 md:py-20">
            <div className="container mx-auto px-6">
                <RevealSection>
                    <div className="text-center mb-8 md:mb-16">
                        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 md:mb-6">
                            Let's work together
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Have a project in mind? I'd love to hear about it.
                            Drop me a message and let's create something amazing.
                        </p>
                    </div>
                </RevealSection>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <RevealSection delay={0.1}>
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-display font-semibold mb-1">Email</h3>
                                    <p className="text-muted-foreground">hello@developer.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-display font-semibold mb-1">Location</h3>
                                    <p className="text-muted-foreground">San Francisco, CA</p>
                                </div>
                            </div>

                            <div className="p-6 rounded-xl bg-card border border-border">
                                <p className="text-foreground/90 leading-relaxed">
                                    I'm currently available for freelance work and open to discussing
                                    full-time opportunities. Whether you need a complete web application
                                    or help with an existing project, I'm here to help.
                                </p>
                            </div>
                        </div>
                    </RevealSection>

                    <RevealSection delay={0.2}>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full px-8 py-2 md:py-4 rounded-lg bg-orange-400 hover:bg-orange-500/70 text-primary-foreground font-medium hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 group hover:cursor-pointer"
                            >
                                Send Message
                                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </RevealSection>
                </div>
            </div>
        </section>
    );
}
