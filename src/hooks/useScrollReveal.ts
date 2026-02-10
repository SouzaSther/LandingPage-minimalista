import { useEffect, useRef } from 'react';

export function useScrollReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reveal the element itself
            if (entry.target.classList.contains('scroll-hidden')) {
              entry.target.classList.add('scroll-visible');
            }
            if (
              entry.target.classList.contains('scroll-hidden-left') ||
              entry.target.classList.contains('scroll-hidden-right')
            ) {
              entry.target.classList.add('scroll-visible-x');
            }

            // Reveal children with stagger
            const children = entry.target.querySelectorAll('.scroll-hidden, .scroll-hidden-left, .scroll-hidden-right');
            children.forEach((child) => {
              if (child.classList.contains('scroll-hidden')) {
                child.classList.add('scroll-visible');
              }
              if (
                child.classList.contains('scroll-hidden-left') ||
                child.classList.contains('scroll-hidden-right')
              ) {
                child.classList.add('scroll-visible-x');
              }
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return ref;
}
