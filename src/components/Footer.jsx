import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, ArrowUp } from 'lucide-react'
import { GithubIcon, LinkedinIcon, InstagramIcon, TwitterXIcon } from './Icons'
import { socialLinks } from '../data/socialLinks'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="section-divider" style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(20px)' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-2 group">
              <div className="w-6 h-6 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.9)' }}>
                <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
                  <polygon points="10,2 18,17 2,17" fill="black" />
                </svg>
              </div>
              <span className="text-sm font-black tracking-[0.18em] uppercase text-white">
                SAURAV
              </span>
            </Link>
            <p className="text-xs max-w-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.25)' }}>
              CS student specializing in AI/ML. Building meaningful software.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map(l => (
              <Link key={l.path} to={l.path}
                className="text-xs transition-colors"
                style={{ color: 'rgba(255,255,255,0.25)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.25)'}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-100 transition-opacity" aria-label="GitHub">
              <GithubIcon size={15} className="text-white" />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="LinkedIn">
              <LinkedinIcon size={15} branded />
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Instagram">
              <InstagramIcon size={15} branded />
            </a>
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-100 transition-opacity" aria-label="X/Twitter">
              <TwitterXIcon size={15} className="text-white" />
            </a>
            <a href={`mailto:${socialLinks.email}`} className="opacity-40 hover:opacity-100 transition-opacity text-white" aria-label="Email">
              <Mail size={15} />
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.2)' }}>
            © {new Date().getFullYear()} Saurav Kumar. All rights reserved.
          </p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[11px] flex items-center gap-1.5 transition-colors"
            style={{ color: 'rgba(255,255,255,0.2)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.2)'}
            aria-label="Back to top">
            Back to top <ArrowUp size={11} />
          </button>
        </div>
      </div>
    </footer>
  )
}
