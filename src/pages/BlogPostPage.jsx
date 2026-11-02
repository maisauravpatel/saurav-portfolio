import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import SEO from '../components/SEO'
import { getPost } from '../lib/api'

export default function BlogPostPage() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    getPost(slug)
      .then(setPost)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [slug])

  if (loading) return (
    <div className="page-container section-padding flex items-center justify-center">
      <div className="text-white/30 text-sm">Loading…</div>
    </div>
  )

  if (error || !post) return (
    <div className="page-container section-padding">
      <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center py-20">
        <p className="text-white/40 text-sm mb-6">{error || 'Post not found'}</p>
        <Link to="/blog"
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
          <ArrowLeft size={14} /> Back to Blog
        </Link>
      </div>
    </div>
  )

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
      />
      <div className="page-container section-padding">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">

          {/* Back link */}
          <Link to="/blog"
            className="inline-flex items-center gap-2 text-sm mb-10 transition-colors"
            style={{ color: 'rgba(255,255,255,0.4)' }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>
            <ArrowLeft size={14} /> Blog
          </Link>

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs px-2.5 py-1 rounded-full"
                style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.1)' }}>
                {post.tag}
              </span>
              <span className="text-xs flex items-center gap-1.5" style={{ color: 'rgba(255,255,255,0.3)' }}>
                <Clock size={11} /> {post.readTime}
              </span>
              <span className="text-xs flex items-center gap-1.5" style={{ color: 'rgba(255,255,255,0.3)' }}>
                <Calendar size={11} />
                {new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">{post.title}</h1>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{post.excerpt}</p>
          </div>

          {/* Divider */}
          <div className="mb-10" style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

          {/* Markdown content */}
          <div className="prose-bw">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <Link to="/blog"
              className="inline-flex items-center gap-2 text-sm transition-colors"
              style={{ color: 'rgba(255,255,255,0.4)' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>
              <ArrowLeft size={14} /> Back to all posts
            </Link>
          </div>

        </div>
      </div>

      {/* Markdown prose styles */}
      <style>{`
        .prose-bw { color: rgba(255,255,255,0.72); line-height: 1.8; font-size: 15px; }
        .prose-bw h1,.prose-bw h2,.prose-bw h3,.prose-bw h4 { color: #fff; font-weight: 700; line-height: 1.3; margin: 2em 0 0.6em; }
        .prose-bw h1 { font-size: 1.75rem; }
        .prose-bw h2 { font-size: 1.35rem; }
        .prose-bw h3 { font-size: 1.1rem; }
        .prose-bw p { margin: 0 0 1.2em; }
        .prose-bw a { color: #fff; text-decoration: underline; text-underline-offset: 3px; opacity: 0.8; }
        .prose-bw a:hover { opacity: 1; }
        .prose-bw ul,.prose-bw ol { margin: 0 0 1.2em 1.4em; }
        .prose-bw li { margin-bottom: 0.3em; }
        .prose-bw blockquote { margin: 1.5em 0; padding: 1em 1.4em; border-left: 2px solid rgba(255,255,255,0.2); color: rgba(255,255,255,0.5); font-style: italic; }
        .prose-bw code { font-family: 'Fira Code', 'Cascadia Code', monospace; font-size: 0.85em; padding: 0.15em 0.45em; border-radius: 5px; background: rgba(255,255,255,0.07); color: rgba(255,255,255,0.85); }
        .prose-bw pre { margin: 1.5em 0; padding: 1.25em 1.5em; border-radius: 12px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); overflow-x: auto; }
        .prose-bw pre code { background: none; padding: 0; font-size: 0.82em; color: rgba(255,255,255,0.8); }
        .prose-bw img { max-width: 100%; border-radius: 10px; margin: 1.5em 0; border: 1px solid rgba(255,255,255,0.08); }
        .prose-bw table { width: 100%; border-collapse: collapse; margin: 1.5em 0; font-size: 0.9em; }
        .prose-bw th { text-align: left; padding: 8px 12px; border-bottom: 1px solid rgba(255,255,255,0.12); color: rgba(255,255,255,0.5); font-size: 0.78em; text-transform: uppercase; letter-spacing: 0.05em; }
        .prose-bw td { padding: 8px 12px; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .prose-bw hr { border: none; height: 1px; background: rgba(255,255,255,0.07); margin: 2.5em 0; }
        .prose-bw strong { color: rgba(255,255,255,0.9); font-weight: 600; }
      `}</style>
    </>
  )
}
