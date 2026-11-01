import React, { useRef, useEffect } from 'react'
import { Mail, ArrowUp } from 'lucide-react'
import { GithubIcon, LinkedinIcon, InstagramIcon, TwitterXIcon } from './Icons'
import { socialLinks } from '../data/socialLinks'
import { gsap } from '../animations/gsapConfig'

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Journey', 'Contact']

export default function Footer() {
  const footerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.footer-content', { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: footerRef.current, start: 'top 92%', toggleActions: 'play none none none' },
      })
    }, footerRef)
    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} className="section-divider" style={{ background: 'var(--bg-secondary)' }}>
      <div className="footer-content max-w-6xl mx-auto px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-sm font-black tracking-[0.2em] text-white/80 mb-2">SAURAV</div>
            <p className="text-xs text-white/25 max-w-xs leading-relaxed">
              CS student specializing in AI/ML. Building meaningful software.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`}
                className="text-xs text-white/25 hover:text-white/60 transition-colors">
                {l}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer"
              className="opacity-50 hover:opacity-100 transition-opacity" aria-label="GitHub">
              <GithubIcon size={15} className="text-white" />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity" aria-label="LinkedIn">
              <LinkedinIcon size={15} branded />
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Instagram">
              <InstagramIcon size={15} branded />
            </a>
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer"
              className="opacity-50 hover:opacity-100 transition-opacity" aria-label="X / Twitter">
              <TwitterXIcon size={15} className="text-white" />
            </a>
            <a href={`mailto:${socialLinks.email}`}
              className="opacity-50 hover:opacity-100 transition-opacity text-white" aria-label="Email">
              <Mail size={15} />
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="text-[11px] text-white/20">© {new Date().getFullYear()} Saurav. All rights reserved.</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[11px] text-white/20 hover:text-white/50 transition-colors flex items-center gap-1.5"
            aria-label="Back to top">
            Back to top <ArrowUp size={11} />
          </button>
        </div>
      </div>
    </footer>
  )
}
