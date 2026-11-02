import React, { useState, useEffect } from 'react'
import { Plus, Edit2, Trash2, Eye, EyeOff, LogOut, Save, X, ArrowLeft, Lock } from 'lucide-react'
import SEO from '../components/SEO'
import {
  getToken, loginAdmin, getAllPostsAdmin,
  createPost, updatePost, deletePost,
  slugify, calcReadTime, clearToken,
} from '../lib/api'

const TAGS = ['AI / ML', 'Android', 'Web Dev', 'Backend', 'General']

const EMPTY_FORM = { title: '', slug: '', excerpt: '', content: '', tag: 'General', published: false }

export default function AdminPage() {
  const [view, setView] = useState('login')          // login | dashboard | editor
  const [posts, setPosts] = useState([])
  const [editPost, setEditPost] = useState(null)     // post being edited
  const [form, setForm] = useState(EMPTY_FORM)
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  // Check for existing token on mount
  useEffect(() => {
    if (getToken()) loadDashboard()
  }, [])

  async function loadDashboard() {
    setLoading(true)
    try {
      const data = await getAllPostsAdmin()
      setPosts(data)
      setView('dashboard')
      setError('')
    } catch (e) {
      if (e.message === 'Unauthorized') { clearToken(); setView('login') }
      else setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  async function handleLogin(e) {
    e.preventDefault()
    setLoading(true); setError('')
    try {
      await loginAdmin(password)
      setPassword('')
      await loadDashboard()
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  function openNewEditor() {
    setEditPost(null)
    setForm(EMPTY_FORM)
    setError('')
    setSuccess('')
    setView('editor')
  }

  function openEditEditor(post) {
    setEditPost(post)
    setForm({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content || '',
      tag: post.tag,
      published: post.published,
    })
    setError('')
    setSuccess('')
    setView('editor')
  }

  function handleFormChange(e) {
    const { name, value, type, checked } = e.target
    setForm(f => {
      const next = { ...f, [name]: type === 'checkbox' ? checked : value }
      if (name === 'title' && !editPost) next.slug = slugify(value)
      return next
    })
  }

  async function handleSave(e) {
    e.preventDefault()
    if (!form.title || !form.slug || !form.excerpt || !form.content) {
      return setError('Title, slug, excerpt, and content are required')
    }
    setLoading(true); setError('')
    try {
      const payload = { ...form, readTime: calcReadTime(form.content) }
      if (editPost) {
        await updatePost(editPost._id, payload)
        setSuccess('Post updated!')
      } else {
        await createPost(payload)
        setSuccess('Post created!')
      }
      await loadDashboard()
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  async function handleDelete(post) {
    if (!window.confirm(`Delete "${post.title}"? This cannot be undone.`)) return
    setLoading(true)
    try {
      await deletePost(post._id)
      await loadDashboard()
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  async function togglePublish(post) {
    setLoading(true)
    try {
      await updatePost(post._id, { published: !post.published })
      await loadDashboard()
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  function handleLogout() {
    clearToken()
    setPosts([])
    setView('login')
  }

  /* ─── LOGIN ─── */
  if (view === 'login') return (
    <>
      <SEO title="Admin Login" path="/admin" />
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <div className="text-center mb-10">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
              <Lock size={24} className="text-white/70" />
            </div>
            <h1 className="text-2xl font-bold text-white">Admin Login</h1>
            <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Portfolio management</p>
          </div>
          <form onSubmit={handleLogin} className="glass-card p-7 space-y-4">
            {error && (
              <div className="text-xs text-red-400 p-3 rounded-xl"
                style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}>
                {error}
              </div>
            )}
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider mb-1.5"
                style={{ color: 'rgba(255,255,255,0.3)' }}>Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter admin password"
                autoFocus
                className="w-full px-4 py-3 rounded-xl text-sm text-white/80 placeholder-white/20 outline-none bg-transparent border border-white/10 focus:border-white/30 transition-colors"
              />
            </div>
            <button type="submit" disabled={loading}
              className="w-full py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-90 disabled:opacity-50"
              style={{ background: '#FFFFFF', color: '#000' }}>
              {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </>
  )

  /* ─── POST EDITOR ─── */
  if (view === 'editor') return (
    <>
      <SEO title="Post Editor" path="/admin" />
      <div className="page-container section-padding">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <button onClick={() => setView('dashboard')}
              className="flex items-center gap-2 text-sm transition-colors"
              style={{ color: 'rgba(255,255,255,0.5)' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
              <ArrowLeft size={14} /> Dashboard
            </button>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>/</span>
            <span className="text-sm text-white/80">{editPost ? 'Edit Post' : 'New Post'}</span>
          </div>

          <form onSubmit={handleSave} className="glass-card p-8 space-y-5">
            {error && (
              <div className="text-xs text-red-400 p-3 rounded-xl"
                style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}>
                {error}
              </div>
            )}
            {success && (
              <div className="text-xs text-emerald-400 p-3 rounded-xl"
                style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)' }}>
                {success}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="form-label">Title</label>
                <input name="title" value={form.title} onChange={handleFormChange}
                  placeholder="Post title" className="form-input" />
              </div>
              <div>
                <label className="form-label">Slug</label>
                <input name="slug" value={form.slug} onChange={handleFormChange}
                  placeholder="post-url-slug" className="form-input" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="form-label">Tag</label>
                <select name="tag" value={form.tag} onChange={handleFormChange} className="form-input">
                  {TAGS.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div className="flex items-end pb-1">
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <div className="relative">
                    <input type="checkbox" name="published" checked={form.published}
                      onChange={handleFormChange} className="sr-only" />
                    <div className="w-10 h-5 rounded-full transition-colors"
                      style={{ background: form.published ? '#ffffff' : 'rgba(255,255,255,0.15)' }}>
                      <div className="w-4 h-4 rounded-full bg-black absolute top-0.5 transition-transform"
                        style={{ left: form.published ? '22px' : '2px' }} />
                    </div>
                  </div>
                  <span className="text-sm text-white/70">Published</span>
                </label>
              </div>
            </div>

            <div>
              <label className="form-label">Excerpt</label>
              <input name="excerpt" value={form.excerpt} onChange={handleFormChange}
                placeholder="Short description shown on the blog list" className="form-input" />
            </div>

            <div>
              <label className="form-label">Content (Markdown)</label>
              <textarea name="content" value={form.content} onChange={handleFormChange}
                rows={18} placeholder="Write your post in Markdown..."
                className="form-input resize-none font-mono text-xs leading-relaxed" />
            </div>

            <div className="flex gap-3 pt-2">
              <button type="submit" disabled={loading}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90 disabled:opacity-50"
                style={{ background: '#FFFFFF', color: '#000' }}>
                <Save size={14} /> {loading ? 'Saving…' : 'Save Post'}
              </button>
              <button type="button" onClick={() => setView('dashboard')}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium transition-all"
                style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.55)' }}>
                <X size={14} /> Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )

  /* ─── DASHBOARD ─── */
  return (
    <>
      <SEO title="Admin Dashboard" path="/admin" />
      <div className="page-container section-padding">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-1"
                style={{ color: 'rgba(255,255,255,0.4)' }}>Admin</p>
              <h1 className="text-3xl font-bold text-white">Blog Dashboard</h1>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={openNewEditor}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
                style={{ background: '#FFFFFF', color: '#000' }}>
                <Plus size={14} /> New Post
              </button>
              <button onClick={handleLogout}
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm transition-all"
                style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}
                title="Log out">
                <LogOut size={14} />
              </button>
            </div>
          </div>

          {error && (
            <div className="text-xs text-red-400 p-3 rounded-xl mb-6"
              style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}>
              {error}
            </div>
          )}

          {loading ? (
            <div className="text-center py-20 text-white/30 text-sm">Loading…</div>
          ) : posts.length === 0 ? (
            <div className="glass-card p-12 text-center">
              <p className="text-white/50 text-sm mb-4">No posts yet.</p>
              <button onClick={openNewEditor}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold"
                style={{ background: '#FFFFFF', color: '#000' }}>
                <Plus size={14} /> Write your first post
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {posts.map(post => (
                <div key={post._id} className="glass-card p-5 flex items-center gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs px-2 py-0.5 rounded-full"
                        style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.1)' }}>
                        {post.tag}
                      </span>
                      <span className={`text-[10px] font-semibold uppercase tracking-wider ${post.published ? 'text-emerald-400' : 'text-white/30'}`}>
                        {post.published ? 'Published' : 'Draft'}
                      </span>
                    </div>
                    <h2 className="text-sm font-semibold text-white truncate">{post.title}</h2>
                    <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>
                      /blog/{post.slug} · {new Date(post.createdAt).toLocaleDateString()}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button onClick={() => togglePublish(post)} title={post.published ? 'Unpublish' : 'Publish'}
                      className="p-2 rounded-lg transition-all hover:bg-white/5">
                      {post.published
                        ? <Eye size={14} className="text-emerald-400" />
                        : <EyeOff size={14} className="text-white/30 hover:text-white/60" />}
                    </button>
                    <button onClick={() => openEditEditor(post)} title="Edit"
                      className="p-2 rounded-lg transition-all hover:bg-white/5">
                      <Edit2 size={14} className="text-white/50 hover:text-white" />
                    </button>
                    <button onClick={() => handleDelete(post)} title="Delete"
                      className="p-2 rounded-lg transition-all hover:bg-red-500/10">
                      <Trash2 size={14} className="text-white/30 hover:text-red-400" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Global form input styles injected as a style tag */}
      <style>{`
        .form-label {
          display: block;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 6px;
          color: rgba(255,255,255,0.3);
        }
        .form-input {
          width: 100%;
          padding: 10px 14px;
          border-radius: 12px;
          font-size: 13px;
          color: rgba(255,255,255,0.8);
          background: transparent;
          border: 1px solid rgba(255,255,255,0.1);
          outline: none;
          transition: border-color 0.2s;
        }
        .form-input:focus { border-color: rgba(255,255,255,0.3); }
        .form-input::placeholder { color: rgba(255,255,255,0.2); }
        .form-input option { background: #111; color: #fff; }
      `}</style>
    </>
  )
}
