import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Download } from 'lucide-react'
import { gsap } from '../animations/gsapConfig'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Education', path: '/education' },
  { label: 'Experience', path: '/experience' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    )
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen && mobileMenuRef.current) {
      gsap.fromTo(mobileMenuRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
      )
    }
  }, [mobileOpen])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  const isActive = (path) => path === '/' ? pathname === '/' : pathname.startsWith(path)

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'backdrop-blur-xl border-b' : 'bg-transparent'
      }`}
      style={scrolled ? {
        background: 'rgba(5,0,16,0.85)',
        borderColor: 'rgba(139,92,246,0.15)',
      } : {}}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group select-none" aria-label="Saurav – home">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{ background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)', boxShadow: '0 0 20px rgba(139,92,246,0.4)' }}>
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
              <polygon points="10,2 18,17 2,17" fill="white" />
            </svg>
          </div>
          <span className="text-sm font-bold tracking-[0.15em] uppercase"
            style={{ background: 'linear-gradient(135deg, #fff, #A78BFA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Saurav
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`relative px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-white font-medium'
                    : 'text-white/40 hover:text-white/80 font-normal hover:bg-white/5'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-px rounded-full"
                    style={{ background: 'linear-gradient(90deg, #8B5CF6, #06B6D4)' }} />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Resume button */}
        <Link
          to="/resume"
          className="hidden lg:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200"
          style={{
            background: 'rgba(139,92,246,0.12)',
            border: '1px solid rgba(139,92,246,0.3)',
            color: '#A78BFA',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(139,92,246,0.22)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(139,92,246,0.12)'}
        >
          <Download size={12} />
          Resume
        </Link>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white/50 hover:text-white transition-colors p-2"
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div ref={mobileMenuRef} className="lg:hidden backdrop-blur-xl border-b"
          style={{ background: 'rgba(5,0,16,0.95)', borderColor: 'rgba(139,92,246,0.15)' }}>
          <ul className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block px-3 py-2.5 text-sm rounded-lg transition-colors ${
                    isActive(link.path)
                      ? 'text-white font-medium bg-white/5'
                      : 'text-white/40 hover:text-white/80'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-3 mt-1 border-t" style={{ borderColor: 'rgba(139,92,246,0.15)' }}>
              <Link to="/resume" className="flex items-center gap-2 px-3 py-2 text-sm" style={{ color: '#A78BFA' }}>
                <Download size={13} /> Resume
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
