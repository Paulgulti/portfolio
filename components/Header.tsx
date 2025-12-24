'use client'
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const navLinks = [
    {
      href: 'about',
      label: 'About'
    },
    {
      href: 'projects',
      label: 'Projects'
    },
    {
      href: 'testimonials',
      label: 'Testimonials'
    },
    {
      href: 'contact',
      label: 'Contact'
    },
  ]
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-display text-xl font-bold text-orange-500/50">
            {'<Dev />'}
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                className="text-sm text-muted-foreground hover:text-orange-400 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-orange-400 hover:bg-orange-500/70  text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header