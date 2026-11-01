import React, { useRef, useEffect } from 'react'
import { ExternalLink, ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './Icons'
import { gsap } from '../animations/gsapConfig'

export default function ProjectCard({ project }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return
    const enter = () => gsap.to(card, { y: -4, duration: 0.25, ease: 'power2.out' })
    const leave = () => gsap.to(card, { y: 0, duration: 0.25, ease: 'power2.out' })
    card.addEventListener('mouseenter', enter)
    card.addEventListener('mouseleave', leave)
    return () => { card.removeEventListener('mouseenter', enter); card.removeEventListener('mouseleave', leave) }
  }, [])

  return (
    <div
      ref={cardRef}
      className="group rounded-xl overflow-hidden"
      style={{ background: 'var(--bg-card)', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      {/* Top colour strip — very thin */}
      <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${project.color}60, ${project.accent}40)` }} />

      {/* Preview area — minimal */}
      <div className="relative h-36 flex items-center justify-center overflow-hidden"
        style={{ background: `${project.color}08` }}>
        <span className="text-5xl select-none opacity-80">{project.icon}</span>
        <span
          className="absolute top-3 right-3 text-[10px] font-semibold px-2.5 py-1 rounded-md"
          style={{ background: `${project.color}18`, color: project.accent, border: `1px solid ${project.color}25` }}
        >
          {project.category}
        </span>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-base font-bold text-white group-hover:text-white/80 transition-colors">{project.title}</h3>
          <ArrowUpRight size={14} className="text-white/20 group-hover:text-white/60 transition-colors mt-0.5 flex-shrink-0" />
        </div>
        <p className="text-sm text-white/35 leading-relaxed mb-4">{project.description}</p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="text-[11px] px-2 py-0.5 rounded-md font-mono"
              style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.1)' }}>
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-white/30 hover:text-white/70 transition-colors font-medium">
            <GithubIcon size={13} /> GitHub
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-white/30 hover:text-white/70 transition-colors font-medium">
              <ExternalLink size={13} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
