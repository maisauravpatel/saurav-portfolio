import React, { useState } from 'react'
import { Send, Mail, CheckCircle, AlertCircle, Loader } from 'lucide-react'
import { GithubIcon, LinkedinIcon, InstagramIcon, TwitterXIcon } from '../components/Icons'
import { socialLinks } from '../data/socialLinks'
import SEO from '../components/SEO'

const STATUS = { idle: 'idle', loading: 'loading', success: 'success', error: 'error' }

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Required'
  if (!form.email.trim()) errors.email = 'Required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Invalid email'
  if (!form.subject.trim()) errors.subject = 'Required'
  if (!form.message.trim()) errors.message = 'Required'
  else if (form.message.trim().length < 10) errors.message = 'Too short (min 10 chars)'
  return errors
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(STATUS.idle)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(err => { const n = { ...err }; delete n[name]; return n })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length) { setErrors(errs); return }
    setStatus(STATUS.loading)
    try {
      const res = await fetch('https://formspree.io/f/xqppybrl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus(STATUS.success)
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus(STATUS.error)
    }
  }

  const inputCls = (field) =>
    `w-full px-4 py-3 rounded-xl text-sm text-white/80 placeholder-white/20 outline-none transition-all duration-200 bg-transparent border ${
      errors[field] ? 'border-red-500/50' : 'border-white/10 focus:border-purple-500/50'
    }`

  return (
    <>
      <SEO title="Contact" path="/contact" description="Get in touch with Saurav Kumar — available for internships, collaborations, and project discussions." />
      <div className="page-container section-padding">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">

          <div className="mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#8B5CF6' }}>Contact</p>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Let's Build Something Together</h1>
            <p className="text-lg max-w-2xl" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Got a project idea, internship opportunity, or just want to say hi? I'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">

            {/* Info panel */}
            <div className="space-y-4">
              <div className="glass-card p-5">
                <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>Reach me at</p>
                <div className="space-y-3">
                  <a href={`mailto:${socialLinks.email}`}
                    className="flex items-center gap-3 text-xs transition-colors hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.4)' }}>
                    <Mail size={14} style={{ color: '#8B5CF6' }} /> {socialLinks.email}
                  </a>
                  <a href={socialLinks.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 text-xs transition-colors hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.4)' }}>
                    <GithubIcon size={14} className="text-white/60" /> GitHub
                  </a>
                  <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 text-xs transition-colors hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.4)' }}>
                    <LinkedinIcon size={14} branded /> LinkedIn
                  </a>
                  <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 text-xs transition-colors hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.4)' }}>
                    <InstagramIcon size={14} branded /> Instagram
                  </a>
                  <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 text-xs transition-colors hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.4)' }}>
                    <TwitterXIcon size={14} className="text-white/60" /> X / Twitter
                  </a>
                </div>
              </div>
              <div className="glass-card p-4">
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  Typically replies within <span className="text-white/60 font-medium">24–48 hours</span>.
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} noValidate className="glass-card p-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'rgba(255,255,255,0.3)' }}>Name</label>
                  <input name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} className={inputCls('name')} />
                  {errors.name && <p className="text-[10px] text-red-400 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'rgba(255,255,255,0.3)' }}>Email</label>
                  <input name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} className={inputCls('email')} />
                  {errors.email && <p className="text-[10px] text-red-400 mt-1">{errors.email}</p>}
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-[11px] font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'rgba(255,255,255,0.3)' }}>Subject</label>
                <input name="subject" type="text" placeholder="What's this about?" value={form.subject} onChange={handleChange} className={inputCls('subject')} />
                {errors.subject && <p className="text-[10px] text-red-400 mt-1">{errors.subject}</p>}
              </div>
              <div className="mb-5">
                <label className="block text-[11px] font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'rgba(255,255,255,0.3)' }}>Message</label>
                <textarea name="message" rows={5} placeholder="Tell me about your project or idea..."
                  value={form.message} onChange={handleChange} className={`${inputCls('message')} resize-none`} />
                {errors.message && <p className="text-[10px] text-red-400 mt-1">{errors.message}</p>}
              </div>

              {status === STATUS.success && (
                <div className="flex items-center gap-2 text-xs text-emerald-400 mb-4 p-3 rounded-xl"
                  style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)' }}>
                  <CheckCircle size={14} /> Message sent — I'll be in touch soon!
                </div>
              )}
              {status === STATUS.error && (
                <div className="flex items-center gap-2 text-xs text-red-400 mb-4 p-3 rounded-xl"
                  style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}>
                  <AlertCircle size={14} /> Something went wrong. Email me directly instead.
                </div>
              )}

              <button type="submit" disabled={status === STATUS.loading}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-[0.99] disabled:opacity-60"
                style={{ background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)', color: '#fff', boxShadow: '0 0 20px rgba(139,92,246,0.3)' }}>
                {status === STATUS.loading
                  ? <><Loader size={14} className="animate-spin" /> Sending...</>
                  : <><Send size={14} /> Send Message</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
