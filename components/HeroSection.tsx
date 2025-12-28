import { ArrowDown, Download, Github, Linkedin, Twitter } from 'lucide-react';
import { RevealSection } from './RevealSection';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      <div className="top-8 container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <RevealSection delay={0.1}>
            <h1 className="font-display text-[20px]  md:text-3xl font-bold mb-2 md:mb-6 leading-tight">Hello, I'm Paul Gulti</h1>
          </RevealSection>
          <RevealSection>
            <p className="font-display text-[#d86513d7]  text-sm md:text-base mb-4  tracking-wider">
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
            <div className="group flex flex-col sm:flex-row items-center justify-center gap-4 mb-4 md:mb-10">
              <Link
                href="#projects"
                className="px-4 py-2 md:px-8 md:py-3 rounded-lg bg-[#d86513d7] hover:bg-orange-500/70 text-primary-foreground font-medium hover:opacity-90 transition-all duration-300 hover:scale-105"
              >
                View My Work
              </Link>
              <Link
                href="paul_cv.pdf"
                download
                className="flex gap-2 px-4 py-2 md:px-8 md:py-3 rounded-lg border border-border text-white font-medium hover:bg-secondary transition-all duration-300 hover:scale-105"
              >
                Download CV
                <Download className='group-hover:text-[#d86513d7]'/>
              </Link>
            </div>
          </RevealSection>

          <RevealSection delay={0.4}>
            <div className="flex items-center justify-center gap-6">
              <Link
                href="https://github.com/paulgulti"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 text-muted-foreground hover:text-[#d86513d7]"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href="https://linkedin.com/paulgulti"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 text-muted-foreground hover:text-[#d86513d7]"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="https://twitter.com/paulma00s"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 text-muted-foreground hover:text-[#d86513d7]"
              >
                <Twitter className="w-6 h-6" />
              </Link>
            </div>
          </RevealSection>
        </div>
      </div>

      <div className="absolute bottom-3 md:bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ArrowDown className="w-6 h-6  text-[#d86513d7]  animate-bounce" />
      </div>
    </section>
  );
}
