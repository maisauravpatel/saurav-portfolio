import React from 'react'
import { Download, FileText, ExternalLink } from 'lucide-react'
import SEO from '../components/SEO'

export default function ResumePage() {
  return (
    <>
      <SEO title="Resume" path="/resume" description="Download Saurav Kumar's resume — B.Tech CSE (AI & ML) developer with skills in Python, React, Node.js, Android, and Machine Learning." />
      <div className="page-container section-padding">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">

          <div className="mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#8B5CF6' }}>Resume</p>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">My Resume</h1>
            <p className="text-lg" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Download a copy or view my background inline.
            </p>
          </div>

          {/* Download CTA */}
          <div className="glass-card p-8 mb-8 text-center">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
              style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(6,182,212,0.1))', border: '1px solid rgba(139,92,246,0.3)' }}>
              <FileText size={28} style={{ color: '#A78BFA' }} />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Saurav Kumar — Resume</h2>
            <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.4)' }}>
              B.Tech CSE (AI & ML) · ITS Engineering College · AKTU
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/resume.pdf" download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-90 active:scale-95"
                style={{ background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)', color: '#fff', boxShadow: '0 0 20px rgba(139,92,246,0.3)' }}>
                <Download size={15} /> Download PDF
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all hover:border-purple-400"
                style={{ border: '1px solid rgba(139,92,246,0.3)', color: '#A78BFA' }}>
                <ExternalLink size={15} /> Open in Browser
              </a>
            </div>
          </div>

          {/* Skills overview on resume page */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { title: 'Languages', items: ['Python', 'Java', 'JavaScript', 'C/C++'] },
              { title: 'Frameworks', items: ['React.js', 'Node.js', 'Express', 'Tailwind CSS'] },
              { title: 'AI / ML', items: ['scikit-learn', 'TensorFlow', 'Pandas', 'NumPy'] },
              { title: 'Tools', items: ['Git', 'Android Studio', 'Firebase', 'MongoDB'] },
            ].map(group => (
              <div key={group.title} className="glass-card p-5">
                <h3 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#8B5CF6' }}>{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(item => (
                    <span key={item} className="text-xs px-2 py-1 rounded-lg"
                      style={{ background: 'rgba(139,92,246,0.08)', color: '#A78BFA', border: '1px solid rgba(139,92,246,0.15)' }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs mt-8" style={{ color: 'rgba(255,255,255,0.25)' }}>
            Add your resume PDF to the <code className="font-mono" style={{ color: '#A78BFA' }}>public/</code> folder as <code className="font-mono" style={{ color: '#A78BFA' }}>resume.pdf</code> to enable download.
          </p>
        </div>
      </div>
    </>
  )
}
