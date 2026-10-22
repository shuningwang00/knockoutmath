"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms — ignored when prefers-reduced-motion is set. */
  delay?: number;
};

export default function FadeIn({ children, className = "", delay = 0 }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [motionOk, setMotionOk] = useState(true);

  useEffect(() => {
    setMounted(true);

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setMotionOk(!reducedMotion);

    if (reducedMotion) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    // Already in the viewport — mark visible in the same render as mounted
    // so the element never flashes invisible.
    if (el.getBoundingClientRect().top < window.innerHeight) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -3% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties | undefined =
    visible && motionOk && delay > 0 ? { transitionDelay: `${delay}ms` } : undefined;

  // Before JS mounts: render without the animation class so server HTML is
  // visible — prevents white-space when hydration is slow (e.g. dev HMR).
  // Both server and client start with mounted=false so there's no hydration mismatch.
  if (!mounted) {
    return (
      <div ref={ref} className={className || undefined}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      style={style}
      className={`fade-in-on-scroll${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
    >
      {children}
    </div>
  );
}
