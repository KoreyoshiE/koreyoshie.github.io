import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const media = gsap.matchMedia();
media.add('(prefers-reduced-motion: no-preference)', () => {
  const hero = document.querySelector('.hero');
  if (hero) {
    gsap.from('.hero h1 span', { yPercent: 28, opacity: 0.2, duration: 0.7, ease: 'power3.out' });
    gsap.from('.hero-statement', { opacity: 0.3, y: 12, duration: 0.7, delay: 0.08, ease: 'power3.out' });
    gsap.from('.hero-art', { clipPath: 'inset(0 0 100% 0)', duration: 0.9, ease: 'power3.out' });
  }
});
media.add('(min-width: 901px) and (pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
  if (document.querySelector('.hero-art img')) gsap.to('.hero-art img', { y: 24, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.6 } });
});
// Close the mobile disclosure on Escape, preserving native no-JavaScript behaviour.
const menu = document.querySelector<HTMLDetailsElement>('.mobile-nav');
menu?.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.open) { menu.open = false; menu.querySelector('summary')?.focus(); } });
