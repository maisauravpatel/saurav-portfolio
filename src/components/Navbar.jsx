import React, { useState, useEffect, useRef } from 'react'
import { Menu, X, Download } from 'lucide-react'
// Note: Github/Linkedin icons removed from lucide-react v1 — using custom SVG via Icons.jsx
import { gsap } from '../animations/gsapConfig'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const navRef = useRef(null)
  const mobileMenuRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    )
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)

      const sections = navLinks.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!mobileMenuRef.current) return
    if (mobileOpen) {
      gsap.fromTo(mobileMenuRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
      )
    }
  }, [mobileOpen])

  const handleLinkClick = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleLinkClick('#home')}
          className="flex items-center gap-2.5 group select-none"
          aria-label="Saurav – home"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300 group-hover:scale-110">
            <polygon points="10,1 19,18 1,18"
              fill="white"
              stroke="none"
            />
          </svg>
          <span className="text-sm font-bold tracking-[0.18em] text-white/90 group-hover:text-white transition-colors uppercase">
            Saurav
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.href) }}
                className={`text-sm transition-colors duration-200 ${
                  activeSection === link.href.slice(1)
                    ? 'text-white font-medium'
                    : 'text-white/40 hover:text-white/80 font-normal'
                }`}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <span className="block h-px mt-0.5 bg-white rounded-full" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume button — flat, minimal */}
        <a
          href="/resume.pdf"
          download
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide text-white/50 rounded-lg border border-white/20 hover:border-white/50 hover:text-white transition-all duration-200"
        >
          <Download size={13} />
          Resume
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/50 hover:text-white transition-colors p-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden bg-black/98 border-b border-white/[0.06]"
        >
          <ul className="max-w-6xl mx-auto px-6 py-5 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(link.href) }}
                  className={`block px-3 py-2.5 text-sm transition-colors ${
                    activeSection === link.href.slice(1)
                      ? 'text-white font-medium'
                      : 'text-white/40 hover:text-white/80'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3 mt-1 border-t border-white/[0.06]">
              <a href="/resume.pdf" download className="flex items-center gap-2 px-3 py-2 text-sm text-white/50">
                <Download size={13} /> Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
