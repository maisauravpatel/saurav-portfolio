import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Lenis from 'lenis'
import { ScrollTrigger } from './animations/gsapConfig'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import EducationPage from './pages/EducationPage'
import ExperiencePage from './pages/ExperiencePage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import ResumePage from './pages/ResumePage'
import NotFoundPage from './pages/NotFoundPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Layout() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    lenis.on('scroll', ScrollTrigger.update)
    let raf
    const animate = (time) => { lenis.raf(time); raf = requestAnimationFrame(animate) }
    raf = requestAnimationFrame(animate)
    return () => { lenis.destroy(); cancelAnimationFrame(raf) }
  }, [])

  return (
    <div className="relative">
      {/* Fixed ambient orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <Navbar />
      <main className="relative z-10">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </HelmetProvider>
  )
}
