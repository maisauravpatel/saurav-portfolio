import React, { useRef, useEffect, useState } from 'react'
import { Send, Mail, CheckCircle, AlertCircle, Loader } from 'lucide-react'
import { GithubIcon, LinkedinIcon, InstagramIcon, TwitterXIcon } from '../components/Icons'
import { gsap } from '../animations/gsapConfig'
import SectionHeading from '../components/SectionHeading'
import { socialLinks } from '../data/socialLinks'

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

export default function Contact() {
  const sectionRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(STATUS.idle)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-wrap', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: '.contact-wrap', start: 'top 84%', toggleActions: 'play none none none' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((err) => { const n = { ...err }; delete n[name]; return n })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length) { setErrors(errs); return }
    setStatus(STATUS.loading)
    try {
      const res = await fetch('https://formspree.io/f/myeenjvl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, subject: form.subject, message: form.message }),
      })
      if (!res.ok) throw new Error()
      setStatus(STATUS.success)
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus(STATUS.error)
    }
  }

  const inputCls = (field) =>
    `w-full px-4 py-3 rounded-lg text-sm text-white/80 placeholder-white/20 outline-none transition-all duration-200 bg-transparent ${
      errors[field]
        ? 'border-red-500/50'
        : 'border-white/10 focus:border-white/40'
    } border`

  return (
    <section id="contact" ref={sectionRef} className="section-padding section-divider"
      style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Let's Build Something Together."
          subtitle="Got a project in mind or just want to say hi? I'd love to hear from you."
        />

        <div className="contact-wrap opacity-0 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 max-w-3xl">

          {/* Info panel */}
          <div className="space-y-3">
            <div className="rounded-xl p-5" style={{ background: 'var(--bg-card)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <p className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-4">Reach me at</p>
              <div className="space-y-3">
                <a href={`mailto:${socialLinks.email}`}
                  className="flex items-center gap-3 text-xs text-white/40 hover:text-white/70 transition-colors group">
                  <Mail size={14} className="text-white/50 group-hover:text-white transition-colors" />
                  {socialLinks.email}
                </a>
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-xs text-white/40 hover:text-white/70 transition-colors group">
                  <GithubIcon size={14} className="text-white/60 group-hover:text-white transition-colors" />
                  GitHub
                </a>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-xs text-white/40 hover:text-white/70 transition-colors group">
                  <LinkedinIcon size={14} branded />
                  LinkedIn
                </a>
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-xs text-white/40 hover:text-white/70 transition-colors group">
                  <InstagramIcon size={14} branded />
                  Instagram
                </a>
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-xs text-white/40 hover:text-white/70 transition-colors group">
                  <TwitterXIcon size={14} className="text-white/60 group-hover:text-white transition-colors" />
                  X / Twitter
                </a>
              </div>
            </div>

            <div className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <p className="text-xs text-white/30 leading-relaxed">Typically reply within <span className="text-white/60">24–48 hours</span>.</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate className="rounded-xl p-6"
            style={{ background: 'var(--bg-card)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-[11px] font-semibold text-white/30 mb-1.5 uppercase tracking-wider">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name"
                  value={form.name} onChange={handleChange} className={inputCls('name')} />
                {errors.name && <p className="text-[10px] text-red-400 mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-[11px] font-semibold text-white/30 mb-1.5 uppercase tracking-wider">Email</label>
                <input id="email" name="email" type="email" placeholder="your@email.com"
                  value={form.email} onChange={handleChange} className={inputCls('email')} />
                {errors.email && <p className="text-[10px] text-red-400 mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block text-[11px] font-semibold text-white/30 mb-1.5 uppercase tracking-wider">Subject</label>
              <input id="subject" name="subject" type="text" placeholder="What's this about?"
                value={form.subject} onChange={handleChange} className={inputCls('subject')} />
              {errors.subject && <p className="text-[10px] text-red-400 mt-1">{errors.subject}</p>}
            </div>

            <div className="mb-5">
              <label htmlFor="message" className="block text-[11px] font-semibold text-white/30 mb-1.5 uppercase tracking-wider">Message</label>
              <textarea id="message" name="message" rows={4} placeholder="Tell me about your project or idea..."
                value={form.message} onChange={handleChange} className={`${inputCls('message')} resize-none`} />
              {errors.message && <p className="text-[10px] text-red-400 mt-1">{errors.message}</p>}
            </div>

            {status === STATUS.success && (
              <div className="flex items-center gap-2 text-xs text-emerald-400 mb-4 p-3 rounded-lg"
                style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)' }}>
                <CheckCircle size={14} /> Message sent — I'll be in touch soon.
              </div>
            )}
            {status === STATUS.error && (
              <div className="flex items-center gap-2 text-xs text-red-400 mb-4 p-3 rounded-lg"
                style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}>
                <AlertCircle size={14} /> Something went wrong. Email me directly instead.
              </div>
            )}

            <button type="submit" disabled={status === STATUS.loading}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-semibold text-white transition-opacity disabled:opacity-60 hover:opacity-90 active:scale-[0.99]"
              style={{ background: '#FFFFFF', color: '#000000' }}>
              {status === STATUS.loading
                ? <><Loader size={14} className="animate-spin" /> Sending...</>
                : <><Send size={14} /> Send Message</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
