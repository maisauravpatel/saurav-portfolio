import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Zap, Code2, Brain } from 'lucide-react'
import { gsap } from '../animations/gsapConfig'
import { socialLinks } from '../data/socialLinks'
import { projects } from '../data/projects'
import { GithubIcon, LinkedinIcon, InstagramIcon, TwitterXIcon } from '../components/Icons'
import SEO from '../components/SEO'

export default function HomePage() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 })
      tl.fromTo('.h-name', { opacity: 0, y: 80, skewY: 4 }, { opacity: 1, y: 0, skewY: 0, duration: 1, ease: 'power4.out' })
        .fromTo('.h-ghost', { opacity: 0, y: 80, skewY: 4 }, { opacity: 1, y: 0, skewY: 0, duration: 1, ease: 'power4.out' }, '-=0.65')
        .fromTo('.h-roles', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
        .fromTo('.h-divider', { scaleX: 0 }, { scaleX: 1, duration: 0.7, ease: 'power2.inOut', transformOrigin: 'left' }, '-=0.3')
        .fromTo('.h-right', { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out' }, '-=0.8')
        .fromTo('.h-socials', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, '-=0.2')
        .fromTo('.h-features', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1 }, '-=0.3')
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <>
      <SEO path="/" />
      <div ref={heroRef}>
        {/* ─── Hero ─── */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden"
          style={{ background: '#000000' }}>
          {/* Subtle grid */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

          <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-14 pt-32 pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-center">

              {/* LEFT */}
              <div>
<div className="overflow-hidden">
                  <h1 className="h-name opacity-0 font-black leading-none tracking-tighter select-none"
                    style={{
                      fontSize: 'clamp(64px, 12vw, 180px)',
                      color: '#FFFFFF',
                      filter: 'drop-shadow(0 0 60px rgba(255,255,255,0.15))',
                    }}>SAURAV</h1>
                </div>
                <div className="overflow-hidden mb-10">
                  <h1 className="h-ghost opacity-0 font-black leading-none tracking-tighter select-none"
                    style={{ fontSize: 'clamp(64px, 12vw, 180px)', color: 'rgba(255,255,255,0.06)', letterSpacing: '-0.04em' }}>
                    KUMAR
                  </h1>
                </div>

                <div className="h-roles opacity-0 flex flex-wrap items-center gap-2 mb-8">
                  {[
                    { label: 'CS Student', color: 'rgba(255,255,255,0.35)' },
                    { label: 'AI & ML', color: 'rgba(255,255,255,0.9)' },
                    { label: 'Full-Stack Dev', color: 'rgba(255,255,255,0.35)' },
                    { label: 'Android', color: 'rgba(255,255,255,0.6)' },
                  ].map((item, i, arr) => (
                    <React.Fragment key={item.label}>
                      <span className="text-sm font-medium" style={{ color: item.color }}>{item.label}</span>
                      {i < arr.length - 1 && <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'inline-block' }} />}
                    </React.Fragment>
                  ))}
                </div>

                <div className="h-divider mb-8"
                  style={{ height: '1px', background: 'linear-gradient(90deg, rgba(255,255,255,0.3), rgba(255,255,255,0.08), transparent)' }} />

                <div className="flex flex-wrap items-center gap-4">
                  <span className="text-xs font-mono tracking-widest" style={{ color: 'rgba(255,255,255,0.2)' }}>GREATER NOIDA, IN</span>
                  <span style={{ color: 'rgba(255,255,255,0.15)' }}>·</span>
                  <span className="text-xs font-mono tracking-widest" style={{ color: 'rgba(255,255,255,0.2)' }}>B.TECH CSE · AKTU</span>
                </div>
              </div>

              {/* RIGHT */}
              <div className="h-right opacity-0 flex flex-col gap-5">
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden w-full"
                    style={{ border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 0 60px rgba(255,255,255,0.06)' }}>
                    <img src="/profile.webp" alt="Saurav Kumar" className="w-full object-cover block"
                      style={{ aspectRatio: '4/4.5', objectPosition: 'center top' }} />
                    <div className="absolute bottom-0 left-0 right-0 h-20"
                      style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }} />
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3.5 py-2 rounded-xl"
                    style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <span className="text-xs font-semibold text-white/80">Saurav Kumar</span>
                    <span className="text-[10px] font-mono" style={{ color: 'rgba(255,255,255,0.5)' }}>@maisauravpatel</span>
                  </div>
                  <div className="absolute -bottom-4 left-8 right-8 h-6 blur-2xl pointer-events-none"
                    style={{ background: 'rgba(255,255,255,0.12)' }} />
                </div>

                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Specializing in <span className="font-medium text-white">AI & Machine Learning</span> at ITS Engineering College.
                  Passionate about building software that actually matters.
                </p>

                <div className="grid grid-cols-2 gap-2.5">
                  <Link to="/projects"
                    className="py-3 rounded-xl text-sm font-semibold text-center transition-all duration-200 hover:opacity-90 active:scale-95"
                    style={{ background: '#FFFFFF', color: '#000000', boxShadow: '0 0 20px rgba(255,255,255,0.15)' }}>
                    View Work
                  </Link>
                  <Link to="/contact"
                    className="py-3 rounded-xl text-sm font-medium text-center transition-all duration-200"
                    style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.6)' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'}>
                    Get in Touch
                  </Link>
                </div>

                <div className="h-socials opacity-0 flex items-center gap-4 pt-3"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" aria-label="GitHub">
                    <GithubIcon size={18} className="text-white/50 hover:text-white transition-colors" />
                  </a>
                  <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" aria-label="LinkedIn">
                    <LinkedinIcon size={18} branded />
                  </a>
                  <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" aria-label="Instagram">
                    <InstagramIcon size={18} branded />
                  </a>
                  <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" aria-label="X/Twitter">
                    <TwitterXIcon size={18} className="text-white/50 hover:text-white transition-colors" />
                  </a>
                  <a href={`mailto:${socialLinks.email}`} className="hover:scale-110 transition-transform text-white/50 hover:text-white" aria-label="Email">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Feature highlights ─── */}
        <section className="section-padding section-divider">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Brain, title: 'AI & Machine Learning', desc: 'Building intelligent systems with Python, TensorFlow, and data-driven approaches.' },
                { icon: Code2, title: 'Full-Stack Development', desc: 'End-to-end web apps with React, Node.js, MongoDB, and modern tooling.' },
                { icon: Zap, title: 'Android Development', desc: 'Native Android apps using Java with real-time features and secure architectures.' },
              ].map((item) => (
                <div key={item.title} className="h-features opacity-0 glass-card p-6 group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <item.icon size={20} className="text-white/70" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Featured projects preview ─── */}
        <section className="section-padding section-divider">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>Featured Work</p>
                <h2 className="text-3xl font-bold gradient-text">Recent Projects</h2>
              </div>
              <Link to="/projects" className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: 'rgba(255,255,255,0.5)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
                All projects <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {projects.slice(0, 2).map(p => (
                <div key={p.id} className="glass-card p-6 group">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{p.icon}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.1)' }}>{p.category}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.slice(0, 3).map(t => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-md" style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.08)' }}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
