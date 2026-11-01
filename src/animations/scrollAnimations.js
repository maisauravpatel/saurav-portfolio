import { gsap, ScrollTrigger } from './gsapConfig'

export function revealOnScroll(elements, options = {}) {
  const defaults = {
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
    stagger: 0.1,
    start: 'top 85%',
  }
  const config = { ...defaults, ...options }

  return gsap.fromTo(
    elements,
    config.from,
    {
      ...config.to,
      stagger: config.stagger,
      scrollTrigger: {
        trigger: elements[0] || elements,
        start: config.start,
        toggleActions: 'play none none none',
      },
    }
  )
}

export function revealFromLeft(element, delay = 0) {
  return gsap.fromTo(
    element,
    { opacity: 0, x: -60 },
    {
      opacity: 1,
      x: 0,
      duration: 0.9,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  )
}

export function revealFromRight(element, delay = 0) {
  return gsap.fromTo(
    element,
    { opacity: 0, x: 60 },
    {
      opacity: 1,
      x: 0,
      duration: 0.9,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  )
}

export function scaleIn(element, delay = 0) {
  return gsap.fromTo(
    element,
    { opacity: 0, scale: 0.85 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.7,
      delay,
      ease: 'back.out(1.4)',
      scrollTrigger: {
        trigger: element,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    }
  )
}

export function staggerReveal(elements, stagger = 0.12, delay = 0) {
  return gsap.fromTo(
    elements,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: elements[0] || elements,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  )
}
