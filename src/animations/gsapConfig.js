import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const ease = {
  smooth: 'power2.out',
  bouncy: 'back.out(1.4)',
  expo: 'expo.out',
  elastic: 'elastic.out(1, 0.5)',
}

export const durations = {
  fast: 0.4,
  normal: 0.7,
  slow: 1.0,
  xslow: 1.4,
}

export { gsap, ScrollTrigger }
