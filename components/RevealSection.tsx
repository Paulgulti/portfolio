'use client'
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useReveal } from '@/hooks/useReveal';

interface RevealSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function RevealSection({ children, className, delay = 0 }: RevealSectionProps) {
  const { ref, isVisible } = useReveal(0.1);

  return (
    <div
      ref={ref}
      className={cn('reveal', isVisible && 'visible', className)}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
