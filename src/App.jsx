import React, { useEffect } from 'react'
import Lenis from 'lenis'
import { ScrollTrigger } from './animations/gsapConfig'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Journey from './sections/Journey'
import Education from './sections/Education'
import Contact from './sections/Contact'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenis.on('scroll', ScrollTrigger.update)

    let raf
    const animate = (time) => {
      lenis.raf(time)
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    return () => {
      lenis.destroy()
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
