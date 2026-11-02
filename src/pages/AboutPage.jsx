import React from 'react'
import { MapPin, GraduationCap, Heart, Target } from 'lucide-react'
import SEO from '../components/SEO'

const interests = ['Artificial Intelligence', 'Machine Learning', 'Python', 'Web Development', 'Full-Stack', 'Android Dev', 'Software Engineering', 'Open Source']

export default function AboutPage() {
  return (
    <>
      <SEO title="About" path="/about" description="Learn about Saurav Kumar — a B.Tech CSE (AI & ML) student at ITS Engineering College, passionate about AI, full-stack development, and building impactful software." />
      <div className="page-container section-padding">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">

          {/* Header */}
          <div className="mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>About Me</p>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Who I Am</h1>
            <p className="text-lg max-w-2xl" style={{ color: 'rgba(255,255,255,0.5)' }}>
              A passionate developer and AI enthusiast building meaningful software from Greater Noida, India.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10">

            {/* Main content */}
            <div className="space-y-8">
              <div className="glass-card p-7">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Target size={18} className="text-white/60" /> Introduction
                </h2>
                <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  <p>Hi, I'm <span className="text-white font-semibold">Saurav Kumar</span> — a Computer Science student specializing in AI & Machine Learning at ITS Engineering College, affiliated with AKTU. I'm deeply passionate about creating technology that solves real problems.</p>
                  <p>My journey into programming started with curiosity about how things work under the hood. That curiosity evolved into a love for building — from Android apps with end-to-end encryption to full-stack web platforms and AI-powered tools.</p>
                  <p>I believe great software is built at the intersection of strong fundamentals, creativity, and a relentless drive to improve. Every project I work on is an opportunity to push my limits and learn something new.</p>
                </div>
              </div>

              <div className="glass-card p-7">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Heart size={18} className="text-white/60" /> Interests & Passions
                </h2>
                <div className="flex flex-wrap gap-2">
                  {interests.map(item => (
                    <span key={item} className="px-3 py-1.5 text-sm rounded-lg transition-all duration-200 cursor-default"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = '#fff' }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass-card p-7">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Target size={18} className="text-white/60" /> Career Goals
                </h2>
                <div className="space-y-3 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  {[
                    'Build production-ready AI systems that make everyday tasks smarter and more efficient.',
                    'Contribute to meaningful open-source projects in the AI/ML ecosystem.',
                    'Grow as a full-stack engineer capable of owning entire product lifecycles.',
                    'Work with teams that prioritize craftsmanship, speed, and real-world impact.',
                  ].map((goal, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-white/40" />
                      <span>{goal}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Profile card */}
              <div className="glass-card p-6">
                <img src="/profile.webp" alt="Saurav Kumar"
                  className="w-full rounded-xl object-cover mb-4"
                  style={{ aspectRatio: '1/1', objectPosition: 'center top', border: '1px solid rgba(255,255,255,0.1)' }} />
                <h3 className="text-lg font-bold text-white">Saurav Kumar</h3>
                <p className="text-sm mb-3" style={{ color: 'rgba(255,255,255,0.55)' }}>AI & ML Developer</p>
                <div className="flex items-center gap-2 text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  <MapPin size={12} className="text-white/40" />
                  Greater Noida, India
                </div>
              </div>

              {/* Quick facts */}
              <div className="glass-card p-6 space-y-4">
                <h3 className="text-sm font-semibold text-white">Quick Facts</h3>
                {[
                  { label: 'Degree', value: 'B.Tech CSE (AI & ML)' },
                  { label: 'University', value: 'AKTU' },
                  { label: 'College', value: 'ITS Engineering College' },
                  { label: 'Focus', value: 'AI, Full-Stack, Android' },
                  { label: 'Status', value: 'Open to opportunities' },
                ].map(f => (
                  <div key={f.label} className="flex justify-between text-xs">
                    <span style={{ color: 'rgba(255,255,255,0.35)' }}>{f.label}</span>
                    <span className="text-white font-medium">{f.value}</span>
                  </div>
                ))}
              </div>

              {/* Education highlight */}
              <div className="glass-card p-6">
                <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <GraduationCap size={14} className="text-white/50" /> Education
                </h3>
                <p className="text-sm font-medium text-white">ITS Engineering College</p>
                <p className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.55)' }}>B.Tech CSE — AI & ML</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>AKTU · 2022 – 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
