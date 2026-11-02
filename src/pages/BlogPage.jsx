import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Clock, ArrowRight, PenLine } from 'lucide-react'
import SEO from '../components/SEO'
import { getPublishedPosts } from '../lib/api'

export default function BlogPage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    getPublishedPosts()
      .then(setPosts)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <SEO title="Blog" path="/blog" description="Technical articles and insights from Saurav Kumar on AI/ML, Android development, web development, and software engineering." />
      <div className="page-container section-padding">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">

          <div className="mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>Blog</p>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Articles & Insights</h1>
            <p className="text-lg max-w-2xl" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Writing about AI, Android, web dev, and lessons learned while building real projects.
            </p>
          </div>

          {loading && (
            <div className="text-center py-16 text-white/30 text-sm">Loading…</div>
          )}

          {error && (
            <div className="text-xs text-red-400 p-4 rounded-xl mb-8"
              style={{ background: 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.15)' }}>
              {error}
            </div>
          )}

          {!loading && posts.length === 0 && (
            <div className="glass-card p-6 mb-10 flex items-center gap-4"
              style={{ borderColor: 'rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.04)' }}>
              <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)' }}>
                <PenLine size={18} className="text-white/70" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Articles coming soon</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>I'm actively writing — check back soon for in-depth technical posts.</p>
              </div>
            </div>
          )}

          {!loading && posts.length > 0 && (
            <div className="space-y-5">
              {posts.map(post => (
                <Link key={post._id} to={`/blog/${post.slug}`}
                  className="glass-card p-7 group block transition-all"
                  style={{ textDecoration: 'none' }}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="blog-card-tag">{post.tag}</span>
                      </div>
                      <h2 className="text-lg font-bold text-white mb-2 group-hover:text-white/80 transition-colors">{post.title}</h2>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.45)' }}>{post.excerpt}</p>
                      <div className="flex items-center gap-3 text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
                        <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                        <span>·</span>
                        <span>{new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                      </div>
                    </div>
                    <ArrowRight size={16} className="flex-shrink-0 mt-1 transition-transform group-hover:translate-x-1" style={{ color: 'rgba(255,255,255,0.25)' }} />
                  </div>
                </Link>
              ))}
            </div>
          )}

        </div>
      </div>
    </>
  )
}
