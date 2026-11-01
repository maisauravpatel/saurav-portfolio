import React, { useRef, useEffect } from 'react'
import { gsap } from '../animations/gsapConfig'
import SectionHeading from '../components/SectionHeading'

const milestones = [
  {
    period: '2019 – 2022',
    title: 'First Steps in Tech',
    description: 'Discovered programming through school projects. Started learning Python and basic web technologies.',
    tags: ['Python', 'HTML/CSS', 'Self-Learning'],
  },
  {
    period: '2022',
    title: 'Started B.Tech — CSE (AI & ML)',
    description: 'Joined ITS Engineering College, Greater Noida under AKTU, specializing in AI & Machine Learning.',
    tags: ['ITS Engineering College', 'AKTU', 'AI & ML'],
  },
  {
    period: '2023',
    title: 'Exploring AI & Machine Learning',
    description: 'Deep-dived into ML fundamentals, neural networks, and Python-based AI development.',
    tags: ['Machine Learning', 'Python', 'Data Science'],
  },
  {
    period: '2023 – 2024',
    title: 'Building Android Applications',
    description: 'Built PulseE2EE (AES-256-GCM encrypted chat) and a Remote File Manager using WebSockets.',
    tags: ['Java', 'Android', 'Firebase', 'WebSockets'],
  },
  {
    period: '2024',
    title: 'Full-Stack Development',
    description: 'Built a complete e-commerce app with React, Node.js, Express, and MongoDB. Learned REST APIs and JWT.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'JWT'],
  },
  {
    period: '2025 – Present',
    title: 'Leveling Up',
    description: 'Focusing on DSA, system design, and deepening expertise in both AI/ML and full-stack engineering.',
    tags: ['DSA', 'System Design', 'AI Applications'],
  },
]

export default function Journey() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.milestone-item', { opacity: 0, y: 24 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: '.timeline-container', start: 'top 82%', toggleActions: 'play none none none' },
      })
      gsap.fromTo('.timeline-line', { scaleY: 0, transformOrigin: 'top' }, {
        scaleY: 1, duration: 1.2, ease: 'power2.out',
        scrollTrigger: { trigger: '.timeline-line', start: 'top 85%', toggleActions: 'play none none none' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="journey" ref={sectionRef} className="section-padding section-divider"
      style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Journey"
          title="How I Got Here"
          subtitle="A timeline of my learning path and growth as a developer."
        />

        <div className="timeline-container relative max-w-3xl">
          {/* Vertical line */}
          <div className="timeline-line absolute left-3 top-2 bottom-2 w-px"
            style={{ background: 'rgba(255,255,255,0.15)' }} />

          <div className="space-y-6">
            {milestones.map((m, i) => (
              <div key={i} className="milestone-item opacity-0 relative pl-10">
                {/* Dot */}
                <div className="absolute left-[9px] top-[18px] -translate-x-1/2">
                  <div className="w-2.5 h-2.5 rounded-full bg-white"
                    style={{ boxShadow: '0 0 0 3px rgba(255,255,255,0.1)' }} />
                </div>

                <div className="rounded-xl p-5 hover:border-white/20 transition-colors"
                  style={{ background: 'var(--bg-card)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <span className="text-xs font-mono text-white/40 mb-1.5 block">{m.period}</span>
                  <h3 className="text-sm font-bold text-white mb-2">{m.title}</h3>
                  <p className="text-sm text-white/35 leading-relaxed mb-3">{m.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {m.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md font-medium"
                        style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.45)', border: '1px solid rgba(255,255,255,0.1)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
