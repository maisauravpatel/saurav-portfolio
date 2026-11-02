import React from 'react'
import { GraduationCap, BookOpen, Award } from 'lucide-react'
import SEO from '../components/SEO'

const education = [
  {
    degree: 'B.Tech — Computer Science & Engineering (AI & ML)',
    institution: 'ITS Engineering College',
    affiliation: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU)',
    period: '2022 – 2026',
    location: 'Greater Noida, Uttar Pradesh',
    status: 'Pursuing',
    highlights: [
      'Specialization in Artificial Intelligence & Machine Learning',
      'Core subjects: Data Structures, Algorithms, DBMS, OS, CN, ML, Deep Learning',
      'Hands-on lab work in Python, Java, and Android Development',
      'Active participant in technical workshops and coding events',
    ],
    icon: GraduationCap,
  },
  {
    degree: 'Intermediate (Class XII) — Science (PCM + CS)',
    institution: '[Your School Name]',
    affiliation: 'UP Board / CBSE',
    period: '2020 – 2022',
    location: 'Uttar Pradesh',
    status: 'Completed',
    highlights: [
      'Physics, Chemistry, Mathematics + Computer Science',
      'Strong foundation in mathematics and logical reasoning',
    ],
    icon: BookOpen,
  },
  {
    degree: 'High School (Class X)',
    institution: '[Your School Name]',
    affiliation: 'UP Board / CBSE',
    period: '2018 – 2020',
    location: 'Uttar Pradesh',
    status: 'Completed',
    highlights: ['Foundation in core sciences and mathematics'],
    icon: Award,
  },
]

export default function EducationPage() {
  return (
    <>
      <SEO title="Education" path="/education" description="Saurav Kumar's academic background — B.Tech CSE (AI & ML) at ITS Engineering College, AKTU." />
      <div className="page-container section-padding">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">

          <div className="mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>Education</p>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Academic Background</h1>
            <p className="text-lg max-w-2xl" style={{ color: 'rgba(255,255,255,0.5)' }}>
              My formal education journey — from school to engineering specialization in AI & ML.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px"
              style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.2), rgba(255,255,255,0.03))' }} />

            <div className="space-y-8 pl-16">
              {education.map((edu, i) => (
                <div key={i} className="glass-card p-7 relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[2.5rem] top-7 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '2px solid rgba(255,255,255,0.25)', boxShadow: '0 0 12px rgba(255,255,255,0.1)' }}>
                    <edu.icon size={10} className="text-white/70" />
                  </div>

                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h2 className="text-lg font-bold text-white mb-1">{edu.degree}</h2>
                      <p className="text-sm font-semibold text-white/70">{edu.institution}</p>
                      <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{edu.affiliation}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="text-xs px-3 py-1 rounded-full font-semibold"
                        style={{
                          background: edu.status === 'Pursuing' ? 'rgba(16,185,129,0.12)' : 'rgba(255,255,255,0.06)',
                          color: edu.status === 'Pursuing' ? '#10B981' : 'rgba(255,255,255,0.6)',
                          border: `1px solid ${edu.status === 'Pursuing' ? 'rgba(16,185,129,0.3)' : 'rgba(255,255,255,0.1)'}`,
                        }}>
                        {edu.status}
                      </span>
                      <p className="text-xs mt-2" style={{ color: 'rgba(255,255,255,0.35)' }}>{edu.period}</p>
                      <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>{edu.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {edu.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                        <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0 bg-white/40" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
