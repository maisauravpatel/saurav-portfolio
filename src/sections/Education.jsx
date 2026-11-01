import React, { useRef, useEffect } from 'react'
import { GraduationCap, BookOpen, Award, MapPin } from 'lucide-react'
import { gsap } from '../animations/gsapConfig'
import SectionHeading from '../components/SectionHeading'

export default function Education() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.edu-card', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: '.edu-card', start: 'top 86%', toggleActions: 'play none none none' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="education" ref={sectionRef} className="section-padding section-divider"
      style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Education"
          title="Academic Background"
          subtitle="My formal education in Computer Science and Engineering."
        />

        <div className="max-w-2xl">
          <div className="edu-card opacity-0 rounded-2xl overflow-hidden"
            style={{ background: 'var(--bg-card)', border: '1px solid rgba(255,255,255,0.07)' }}>
            {/* Header */}
            <div className="px-6 py-5 flex items-center gap-4"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <GraduationCap size={18} className="text-white/60" />
              </div>
              <div>
                <span className="text-[10px] font-semibold text-white/40 uppercase tracking-wider">Current</span>
                <h3 className="text-base font-bold text-white">Bachelor of Technology — B.Tech</h3>
                <p className="text-xs text-white/40 mt-0.5">Computer Science & Engineering · AI & ML</p>
              </div>
            </div>

            {/* Details grid */}
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: <BookOpen size={13} />, label: 'Institution', value: 'ITS Engineering College' },
                { icon: <Award size={13} />, label: 'University', value: 'AKTU' },
                { icon: <MapPin size={13} />, label: 'Location', value: 'Greater Noida, Uttar Pradesh' },
                { icon: <GraduationCap size={13} />, label: 'Specialization', value: 'AI & Machine Learning' },
              ].map((item) => (
                <div key={item.label} className="p-3 rounded-lg"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="flex items-center gap-1.5 text-white/40 mb-1.5">
                    {item.icon}
                    <span className="text-[10px] font-semibold uppercase tracking-wide">{item.label}</span>
                  </div>
                  <div className="text-xs text-white/70 font-medium">{item.value}</div>
                </div>
              ))}
            </div>

            {/* Subjects */}
            <div className="px-6 pb-6">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-white/20 mb-3">Key subjects</p>
              <div className="flex flex-wrap gap-1.5">
                {['Machine Learning', 'Data Structures', 'Algorithms', 'Database Systems', 'OS',
                  'Networks', 'AI Fundamentals', 'Software Engineering', 'OOP', 'Web Tech'].map((s) => (
                  <span key={s} className="text-[11px] px-2.5 py-1 rounded-md"
                    style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.35)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
