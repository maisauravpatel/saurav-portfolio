import React from 'react'
import { Briefcase, Award, Plus } from 'lucide-react'
import SEO from '../components/SEO'

const certifications = [
  { name: 'Python for Data Science', issuer: 'NPTEL / Coursera', year: '2024' },
  { name: 'Machine Learning Fundamentals', issuer: 'Google / Coursera', year: '2024' },
  { name: 'Android App Development', issuer: 'Udemy', year: '2023' },
  { name: 'Web Development Bootcamp', issuer: 'Udemy', year: '2023' },
]

export default function ExperiencePage() {
  return (
    <>
      <SEO title="Experience" path="/experience" description="Saurav Kumar's experience — certifications, practical projects, and contributions as an AI/ML and full-stack developer." />
      <div className="page-container section-padding">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">

          <div className="mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>Experience</p>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">My Journey</h1>
            <p className="text-lg max-w-2xl" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Practical experience, certifications, and contributions built along the way.
            </p>
          </div>

          {/* Internships / Work */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Briefcase size={18} className="text-white/55" /> Professional Experience
            </h2>
            <div className="glass-card p-8 text-center">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <Plus size={24} className="text-white/60" />
              </div>
              <p className="text-white font-semibold mb-2">Actively Seeking Opportunities</p>
              <p className="text-sm max-w-sm mx-auto" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Currently looking for internships in AI/ML, full-stack development, or software engineering.
                Check out my <a href="https://github.com/maisauravpatel" target="_blank" rel="noopener noreferrer"
                className="underline underline-offset-2 text-white/70 hover:text-white transition-colors">GitHub</a> for project work.
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Award size={18} className="text-white/55" /> Certifications & Courses
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, i) => (
                <div key={i} className="glass-card p-5 group transition-all">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg flex-shrink-0 flex items-center justify-center mt-0.5"
                      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <Award size={16} className="text-white/60" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-1">{cert.name}</h3>
                      <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{cert.issuer}</p>
                      <span className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>{cert.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What I bring */}
          <div className="glass-card p-7">
            <h2 className="text-xl font-bold text-white mb-5">What I Bring to a Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Quick Learner', desc: 'Adapt to new technologies and codebases rapidly.' },
                { title: 'Problem Solver', desc: 'Enjoy dissecting complex problems and finding clean solutions.' },
                { title: 'Team Player', desc: 'Communicate clearly and collaborate across different roles.' },
                { title: 'Builder Mindset', desc: 'Focus on shipping working products, not just writing code.' },
              ].map(item => (
                <div key={item.title} className="flex items-start gap-3 p-4 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-white/40" />
                  <div>
                    <p className="text-sm font-semibold text-white mb-0.5">{item.title}</p>
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
