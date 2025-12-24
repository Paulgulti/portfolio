import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import { RevealSection } from './RevealSection';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Animated background elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div> */}

      <div className="top-8 container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <RevealSection delay={0.1}>
            {/* <h1 className="font-display text-[20px] md:text-6xl lg:text-7xl font-bold mb-2 md:mb-6 leading-tight">
              Building digital
              <br />
              <span className="gradient-text">experiences</span> that
              <br />
              matter
            </h1> */}
            <h1 className="font-display text-[20px] md:text-3xl font-bold mb-2 md:mb-6 leading-tight">Hello, I'm Paul Gulti</h1>
          </RevealSection>
          <RevealSection>
            <p className="font-display text-primary text-sm md:text-base mb-4  tracking-wider">
              FULL STACK DEVELOPER
            </p>
          </RevealSection>

          <RevealSection delay={0.2}>
            <p className="text-sm md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 md:mb-8">
              I craft performant, accessible, and visually stunning web applications
              that help businesses grow and users smile.
            </p>
          </RevealSection>

          <RevealSection delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4 md:mb-10">
              <a
                href="#projects"
                className="px-4 py-2 md:px-8 md:py-3 rounded-lg bg-orange-400 hover:bg-orange-500/80 text-primary-foreground font-medium hover:opacity-90 transition-all duration-300 hover:scale-105"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-4 py-2 md:px-8 md:py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </a>
            </div>
          </RevealSection>

          <RevealSection delay={0.4}>
            <div className="flex items-center justify-center gap-6">
              <Link
                href="https://github.com/paulgulti"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 text-orange-500/60 hover:text-orange-500"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href="https://linkedin.com/paulgulti"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 text-orange-500/60 hover:text-orange-500"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="https://twitter.com/paulma00s"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 text-orange-500/60 hover:text-orange-500"
              >
                <Twitter className="w-6 h-6" />
              </Link>
            </div>
          </RevealSection>
        </div>
      </div>

      <div className="absolute bottom-3 md:bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ArrowDown className="w-6 h-6  text-orange-500/30  animate-bounce" />
      </div>
    </section>
  );
}
