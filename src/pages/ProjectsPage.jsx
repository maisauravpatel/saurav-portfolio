import React, { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from '../components/Icons'
import { projects } from '../data/projects'
import SEO from '../components/SEO'

const categories = ['All', ...new Set(projects.map(p => p.category))]

export default function ProjectsPage() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <>
      <SEO title="Projects" path="/projects" description="Browse Saurav Kumar's projects — including PulseE2EE encrypted chat app, remote file manager, full-stack e-commerce, and AI voice assistant." />
      <div className="page-container section-padding">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <div className="mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>My Work</p>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Projects</h1>
            <p className="text-lg max-w-2xl" style={{ color: 'rgba(255,255,255,0.5)' }}>
              A collection of things I've built — from encrypted Android apps to AI tools and full-stack platforms.
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(cat => (
              <button key={cat}
                onClick={() => setActive(cat)}
                className="px-4 py-2 text-sm rounded-xl transition-all duration-200 font-medium"
                style={{
                  background: active === cat ? '#FFFFFF' : 'rgba(255,255,255,0.04)',
                  border: active === cat ? 'none' : '1px solid rgba(255,255,255,0.08)',
                  color: active === cat ? '#000000' : 'rgba(255,255,255,0.45)',
                  boxShadow: active === cat ? '0 0 20px rgba(255,255,255,0.15)' : 'none',
                }}>
                {cat}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map(project => (
              <div key={project.id} className="glass-card p-7 flex flex-col group">
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{project.icon}</span>
                    <div>
                      <h2 className="text-lg font-bold text-white group-hover:text-white/80 transition-colors">{project.title}</h2>
                      <span className="text-xs px-2 py-0.5 rounded-full"
                        style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.1)' }}>
                        {project.category}
                      </span>
                    </div>
                  </div>
                  {/* Glow dot */}
                  <div className="w-2 h-2 rounded-full mt-1 pulse-glow bg-white/50" />
                </div>

                <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-lg"
                      style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.08)' }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-4"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-medium transition-colors hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.45)' }}>
                    <GithubIcon size={14} /> View Code
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-medium transition-colors hover:text-white"
                      style={{ color: 'rgba(255,255,255,0.6)' }}>
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* More coming */}
          <div className="mt-12 text-center glass-card p-8">
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>
              More projects on{' '}
              <a href="https://github.com/maisauravpatel" target="_blank" rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2 text-white/70 hover:text-white transition-colors">
                GitHub →
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
