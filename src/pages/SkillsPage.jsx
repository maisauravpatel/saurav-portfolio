import React, { useRef, useEffect } from 'react'
import { gsap } from '../animations/gsapConfig'
import SEO from '../components/SEO'

const skillGroups = [
  {
    category: 'Languages',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'JavaScript', level: 75 },
      { name: 'C / C++', level: 65 },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', level: 80 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'HTML5 / CSS3', level: 90 },
      { name: 'GSAP', level: 65 },
    ],
  },
  {
    category: 'Backend & DB',
    skills: [
      { name: 'Node.js / Express', level: 75 },
      { name: 'MongoDB', level: 72 },
      { name: 'Firebase', level: 70 },
      { name: 'REST APIs', level: 78 },
    ],
  },
  {
    category: 'AI / ML',
    skills: [
      { name: 'Machine Learning', level: 70 },
      { name: 'TensorFlow / Keras', level: 60 },
      { name: 'Scikit-learn', level: 65 },
      { name: 'Data Analysis', level: 68 },
    ],
  },
  {
    category: 'Mobile',
    skills: [
      { name: 'Android (Java)', level: 78 },
      { name: 'Android Studio', level: 75 },
      { name: 'Firebase Realtime DB', level: 70 },
      { name: 'WebSockets', level: 65 },
    ],
  },
  {
    category: 'Tools & DevOps',
    skills: [
      { name: 'Git / GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Vite', level: 78 },
      { name: 'Vercel / Deployment', level: 72 },
    ],
  },
]

const tools = ['Python', 'React', 'Node.js', 'MongoDB', 'Java', 'Android Studio', 'Firebase', 'Git', 'Vite', 'Tailwind', 'TensorFlow', 'scikit-learn', 'Express', 'GSAP', 'Lenis', 'VS Code', 'Vercel', 'WebSockets']

export default function SkillsPage() {
  const pageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.skill-group', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: '.skill-group', start: 'top 85%' },
      })
      gsap.fromTo('.skill-bar-fill', { scaleX: 0 }, {
        scaleX: 1, duration: 0.8, stagger: 0.05, ease: 'power2.out',
        scrollTrigger: { trigger: '.skill-group', start: 'top 80%' },
      })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  return (
    <>
      <SEO title="Skills" path="/skills" description="Explore Saurav Kumar's technical skills across AI/ML, full-stack web development, Android, and modern dev tools." />
      <div ref={pageRef} className="page-container section-padding">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <div className="mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>Technical Skills</p>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">What I Work With</h1>
            <p className="text-lg max-w-2xl" style={{ color: 'rgba(255,255,255,0.5)' }}>
              A snapshot of my technical abilities across languages, frameworks, tools, and domains.
            </p>
          </div>

          {/* Skill groups */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-14">
            {skillGroups.map(group => (
              <div key={group.category} className="skill-group opacity-0 glass-card p-6">
                <h2 className="text-sm font-bold uppercase tracking-wider mb-5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white/60" />
                  <span className="text-white/80">{group.category}</span>
                </h2>
                <div className="space-y-4">
                  {group.skills.map(skill => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-white/80 font-medium">{skill.name}</span>
                        <span style={{ color: 'rgba(255,255,255,0.5)' }}>{skill.level}%</span>
                      </div>
                      <div className="h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
                        <div className="skill-bar-fill h-1 rounded-full"
                          style={{ width: `${skill.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tools cloud */}
          <div className="glass-card p-8">
            <h2 className="text-xl font-bold text-white mb-6">Tools & Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {tools.map(tool => (
                <span key={tool}
                  className="px-4 py-2 text-sm rounded-xl transition-all duration-200 cursor-default hover:scale-105"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.65)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = '#fff' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.65)' }}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
