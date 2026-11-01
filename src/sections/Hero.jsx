import React, { useRef, useEffect } from 'react'
import { ArrowDown, Mail } from 'lucide-react'
import { gsap } from '../animations/gsapConfig'
import { socialLinks } from '../data/socialLinks'
import { GithubIcon, LinkedinIcon, InstagramIcon, TwitterXIcon } from '../components/Icons'

export default function Hero() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.25 })

      tl.fromTo('.h-label',
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
        .fromTo('.h-line1',
          { opacity: 0, y: 80, skewY: 4 },
          { opacity: 1, y: 0, skewY: 0, duration: 1, ease: 'power4.out' }, '-=0.1')
        .fromTo('.h-line2',
          { opacity: 0, y: 80, skewY: 4 },
          { opacity: 1, y: 0, skewY: 0, duration: 1, ease: 'power4.out' }, '-=0.65')
        .fromTo('.h-roles',
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
        .fromTo('.h-divider',
          { scaleX: 0 },
          { scaleX: 1, duration: 0.7, ease: 'power2.inOut', transformOrigin: 'left' }, '-=0.3')
        .fromTo('.h-right',
          { opacity: 0, x: 40 },
          { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out' }, '-=0.8')
        .fromTo('.h-socials',
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }, '-=0.2')
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: '#000000' }}
    >
      {/* ── Ambient purple glows ── */}
      <div className="absolute pointer-events-none"
        style={{
          top: '-20%', left: '-10%',
          width: '65vw', height: '65vw',
          background: 'radial-gradient(circle, rgba(109,40,217,0.18) 0%, rgba(109,40,217,0.06) 40%, transparent 70%)',
          filter: 'blur(1px)',
        }} />
      <div className="absolute pointer-events-none"
        style={{
          bottom: '-15%', right: '-5%',
          width: '50vw', height: '50vw',
          background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 65%)',
        }} />
      {/* Fine horizontal line across mid-screen */}
      <div className="absolute left-0 right-0 pointer-events-none"
        style={{ top: '50%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.15), transparent)' }} />

      {/* ── Main grid ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-14 pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-center">

          {/* ══ LEFT — Giant typography ══ */}
          <div>
            {/* Status badge */}
            <div className="h-label opacity-0 inline-flex items-center gap-2.5 mb-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/35">
                Available for opportunities
              </span>
            </div>

            {/* SAURAV — massive */}
            <div className="overflow-hidden">
              <h1
                className="h-line1 opacity-0 font-black leading-none tracking-tighter select-none"
                style={{
                  fontSize: 'clamp(68px, 13vw, 200px)',
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #E8E0FF 55%, #A78BFA 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 60px rgba(124,58,237,0.25))',
                }}
              >
                SAURAV
              </h1>
            </div>

            {/* KUMAR — ghost */}
            <div className="overflow-hidden mb-10">
              <h1
                className="h-line2 opacity-0 font-black leading-none tracking-tighter select-none"
                style={{
                  fontSize: 'clamp(68px, 13vw, 200px)',
                  color: 'rgba(255,255,255,0.07)',
                  letterSpacing: '-0.04em',
                }}
              >
                KUMAR
              </h1>
            </div>

            {/* Role tags */}
            <div className="h-roles opacity-0 flex flex-wrap items-center gap-2 mb-8">
              {[
                { label: 'CS Student', highlight: false },
                { label: 'AI & ML', highlight: true },
                { label: 'Full-Stack Dev', highlight: false },
                { label: 'Android', highlight: false },
              ].map((item, i, arr) => (
                <React.Fragment key={item.label}>
                  <span
                    className="text-sm font-medium tracking-wide"
                    style={{ color: item.highlight ? 'rgba(167,139,250,0.9)' : 'rgba(255,255,255,0.28)' }}
                  >
                    {item.label}
                  </span>
                  {i < arr.length - 1 && (
                    <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'inline-block' }} />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Divider */}
            <div className="h-divider"
              style={{ height: '1px', background: 'linear-gradient(90deg, rgba(124,58,237,0.4), rgba(255,255,255,0.06), transparent)', marginBottom: '2rem' }} />

            {/* Location + scroll cue */}
            <div className="flex items-center gap-6">
              <span className="text-xs text-white/20 font-mono tracking-widest">GREATER NOIDA, IN</span>
              <span className="text-xs text-white/15">·</span>
              <span className="text-xs text-white/20 font-mono tracking-widest">B.TECH CSE · AKTU</span>
            </div>
          </div>

          {/* ══ RIGHT — Photo + info card ══ */}
          <div className="h-right opacity-0 flex flex-col gap-5">

            {/* Profile photo */}
            <div className="relative">
              <div
                className="rounded-2xl overflow-hidden w-full"
                style={{
                  border: '1px solid rgba(255,255,255,0.09)',
                  boxShadow: '0 0 80px rgba(109,40,217,0.2), inset 0 1px 0 rgba(255,255,255,0.06)',
                }}
              >
                <img
                  src="/profile.webp"
                  alt="Saurav"
                  className="w-full object-cover block"
                  style={{ aspectRatio: '4/4.5', objectPosition: 'center top' }}
                />
                {/* Bottom gradient overlay on photo */}
                <div className="absolute bottom-0 left-0 right-0 h-20"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)' }} />
              </div>

              {/* Floating badge on photo */}
              <div
                className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3.5 py-2 rounded-xl"
                style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.09)' }}
              >
                <span className="text-xs font-semibold text-white/80 tracking-wide">Saurav Kumar</span>
                <span className="text-[10px] text-white/35 font-mono">@maisauravpatel</span>
              </div>

              {/* Purple glow below photo */}
              <div className="absolute -bottom-4 left-8 right-8 h-6 blur-2xl pointer-events-none"
                style={{ background: 'rgba(109,40,217,0.35)' }} />
            </div>

            {/* Bio */}
            <p className="text-sm text-white/40 leading-relaxed px-0.5">
              Specializing in <span className="text-white/75 font-medium">AI & Machine Learning</span> at ITS Engineering College.
              Passionate about building software that actually matters.
            </p>

            {/* CTA buttons */}
            <div className="grid grid-cols-2 gap-2.5">
              <button
                onClick={() => scrollTo('projects')}
                className="py-3 rounded-xl text-sm font-semibold text-black transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{ background: '#FFFFFF' }}
              >
                View Work
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="py-3 rounded-xl text-sm font-medium text-white/55 transition-all duration-200 hover:text-white"
                style={{ border: '1px solid rgba(255,255,255,0.12)' }}
              >
                Get in Touch
              </button>
            </div>

            {/* Social icons — original brand colors */}
            <div
              className="h-socials opacity-0 flex items-center gap-4 pt-3"
              style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
            >
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200" aria-label="GitHub">
                <GithubIcon size={18} className="text-white/60 hover:text-white transition-colors" />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200" aria-label="LinkedIn">
                <LinkedinIcon size={18} branded />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200" aria-label="Instagram">
                <InstagramIcon size={18} branded />
              </a>
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200" aria-label="X / Twitter">
                <TwitterXIcon size={18} className="text-white/60 hover:text-white transition-colors" />
              </a>
              <a href={`mailto:${socialLinks.email}`}
                className="hover:scale-110 transition-transform duration-200 text-white/60 hover:text-white transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
              <span className="ml-auto text-[10px] text-white/20 font-mono">ITS EC · AKTU</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll arrow */}
      <button
        onClick={() => scrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/15 hover:text-white/40 transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={18} />
      </button>
    </section>
  )
}
