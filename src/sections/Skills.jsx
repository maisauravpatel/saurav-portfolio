import React, { useRef, useEffect } from 'react'
import { gsap } from '../animations/gsapConfig'
import SectionHeading from '../components/SectionHeading'
import { skillCategories } from '../data/skills'

export default function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.category-card', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.55, stagger: 0.07, ease: 'power2.out',
        scrollTrigger: { trigger: '.skills-grid', start: 'top 84%', toggleActions: 'play none none none' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="section-padding section-divider"
      style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Skills"
          title="What I Work With"
          subtitle="Technologies and tools I've been learning and building with."
        />

        <div className="skills-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat) => (
            <div key={cat.id} className="category-card opacity-0 rounded-xl p-5 group"
              style={{ background: 'var(--bg-card)', border: '1px solid rgba(255,255,255,0.07)' }}>

              {/* Header */}
              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-base leading-none">{cat.icon}</span>
                <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">{cat.label}</span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <div key={skill.name}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-white/40 hover:text-white/75 transition-colors cursor-default"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <span className="leading-none">{skill.icon}</span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
