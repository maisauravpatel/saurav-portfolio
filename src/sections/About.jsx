import React, { useRef, useEffect } from 'react'
import { Brain, Code2, Layers, GraduationCap } from 'lucide-react'
import { gsap, ScrollTrigger } from '../animations/gsapConfig'
import SectionHeading from '../components/SectionHeading'

const highlights = [
  { icon: <Brain size={16} />, label: 'AI/ML Enthusiast', desc: 'Exploring machine learning algorithms and intelligent systems.' },
  { icon: <Code2 size={16} />, label: 'Software Developer', desc: 'Building real-world applications with modern tech.' },
  { icon: <Layers size={16} />, label: 'Full-Stack Learner', desc: 'React frontends to Node.js backend services.' },
  { icon: <GraduationCap size={16} />, label: 'CSE — AI & ML', desc: 'B.Tech, ITS Engineering College, Greater Noida.' },
]

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-text', { opacity: 0, x: -40 }, {
        opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-text', start: 'top 84%', toggleActions: 'play none none none' },
      })
      gsap.fromTo('.about-illustration', { opacity: 0, x: 40 }, {
        opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-illustration', start: 'top 84%', toggleActions: 'play none none none' },
      })
      gsap.fromTo('.about-card', { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: '.about-card', start: 'top 88%', toggleActions: 'play none none none' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="section-padding section-divider"
      style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Text */}
          <div className="about-text opacity-0">
            <SectionHeading
              label="About"
              title="Curious Mind. Builder's Mindset."
              subtitle="I believe the best way to learn is by building."
            />
            <div className="space-y-4 text-sm text-white/40 leading-relaxed">
              <p>
                I'm <span className="text-white/80 font-medium">Saurav</span>, a B.Tech Computer Science student
                specializing in <span className="text-white/80">Artificial Intelligence & Machine Learning</span> at
                ITS Engineering College, Greater Noida (AKTU).
              </p>
              <p>
                From writing my first Python scripts to building full-stack applications and Android projects —
                I've stayed on a continuous path of exploration. I love turning ideas into real, working software.
              </p>
              <p>
                I'm particularly drawn to <span className="text-white/70">AI/ML technologies</span> and how they
                can solve real-world problems. Whether it's a secure encrypted chat app or a voice-controlled
                desktop assistant, I enjoy the challenge of making things work.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {highlights.map((h) => (
                <div key={h.label} className="about-card opacity-0 p-4 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="text-white/50 mb-2">{h.icon}</div>
                  <div className="text-xs font-semibold text-white/80 mb-1">{h.label}</div>
                  <div className="text-xs text-white/30 leading-snug">{h.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Card */}
          <div className="about-illustration opacity-0">
            <div className="rounded-2xl overflow-hidden"
              style={{ background: 'var(--bg-card)', border: '1px solid rgba(255,255,255,0.07)' }}>
              {/* Top bar */}
              <div className="px-6 py-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-black"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
                    S
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Saurav</div>
                    <div className="text-xs text-white/40">CS Student · AI/ML</div>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="px-6 py-5 space-y-0">
                {[
                  ['College', 'ITS Engineering College'],
                  ['University', 'AKTU'],
                  ['Degree', 'B.Tech CSE (AI & ML)'],
                  ['Location', 'Greater Noida, UP'],
                  ['Focus', 'AI, ML & Full-Stack'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between items-center py-3"
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <span className="text-xs text-white/25">{k}</span>
                    <span className="text-xs font-medium text-white/70">{v}</span>
                  </div>
                ))}
              </div>

              {/* Currently learning */}
              <div className="px-6 py-4" style={{ background: 'rgba(255,255,255,0.03)', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                <p className="text-xs text-white/40 font-semibold mb-2">Currently focused on</p>
                <div className="flex flex-wrap gap-2">
                  {['ML Algorithms', 'DSA', 'System Design'].map((t) => (
                    <span key={t} className="text-[11px] px-2.5 py-1 rounded-md font-medium"
                      style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.1)' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
