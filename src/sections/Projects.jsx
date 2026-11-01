import React, { useRef, useEffect } from 'react'
import { gsap } from '../animations/gsapConfig'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.project-item', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: '.projects-grid', start: 'top 84%', toggleActions: 'play none none none' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="section-padding section-divider"
      style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Projects"
          title="Things I've Built"
          subtitle="A selection of projects — from Android apps to full-stack web applications."
        />

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div key={project.id} className="project-item opacity-0">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a href="https://github.com/YOUR_GITHUB_USERNAME" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-white/25 hover:text-white/50 transition-colors font-medium">
            More on GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}
