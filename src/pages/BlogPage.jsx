import React from 'react'
import { Clock, ArrowRight, PenLine } from 'lucide-react'
import SEO from '../components/SEO'

const posts = [
  {
    title: 'Getting Started with Machine Learning in Python',
    excerpt: 'A beginner-friendly walkthrough of setting up your ML environment, understanding datasets, and training your first model with scikit-learn.',
    tag: 'AI / ML',
    readTime: '6 min read',
    date: 'Coming soon',
    color: '#8B5CF6',
    draft: true,
  },
  {
    title: 'Building End-to-End Encrypted Chat Apps on Android',
    excerpt: 'How I implemented AES-256-GCM encryption in PulseE2EE — challenges, design decisions, and lessons learned from building a secure messaging app.',
    tag: 'Android',
    readTime: '8 min read',
    date: 'Coming soon',
    color: '#06B6D4',
    draft: true,
  },
  {
    title: 'React + GSAP: Creating Premium Scroll Animations',
    excerpt: 'Deep dive into combining React, GSAP ScrollTrigger, and Lenis for buttery-smooth, performant scroll-based animations without killing performance.',
    tag: 'Web Dev',
    readTime: '5 min read',
    date: 'Coming soon',
    color: '#10B981',
    draft: true,
  },
  {
    title: 'MongoDB vs Firebase: Which to Choose for Your App?',
    excerpt: 'A practical comparison from building real projects — when to reach for MongoDB with Node.js and when Firebase Realtime Database is the better fit.',
    tag: 'Backend',
    readTime: '5 min read',
    date: 'Coming soon',
    color: '#F59E0B',
    draft: true,
  },
]

export default function BlogPage() {
  return (
    <>
      <SEO title="Blog" path="/blog" description="Technical articles and insights from Saurav Kumar on AI/ML, Android development, web development, and software engineering." />
      <div className="page-container section-padding">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">

          <div className="mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#8B5CF6' }}>Blog</p>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Articles & Insights</h1>
            <p className="text-lg max-w-2xl" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Writing about AI, Android, web dev, and lessons learned while building real projects.
            </p>
          </div>

          {/* Coming soon banner */}
          <div className="glass-card p-6 mb-10 flex items-center gap-4"
            style={{ borderColor: 'rgba(139,92,246,0.3)', background: 'rgba(139,92,246,0.06)' }}>
            <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center"
              style={{ background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)' }}>
              <PenLine size={18} style={{ color: '#A78BFA' }} />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Articles coming soon</p>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>I'm actively writing — check back soon for in-depth technical posts.</p>
            </div>
          </div>

          {/* Draft posts */}
          <div className="space-y-5">
            {posts.map((post, i) => (
              <div key={i} className="glass-card p-7 group cursor-default opacity-75 hover:opacity-100 transition-opacity">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="blog-card-tag" style={{ color: post.color, background: `${post.color}18`, border: `1px solid ${post.color}30` }}>
                        {post.tag}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.3)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        Draft
                      </span>
                    </div>
                    <h2 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{post.title}</h2>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>{post.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
                      <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                      <span>·</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <ArrowRight size={16} className="flex-shrink-0 mt-1 transition-transform group-hover:translate-x-1" style={{ color: 'rgba(139,92,246,0.4)' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
