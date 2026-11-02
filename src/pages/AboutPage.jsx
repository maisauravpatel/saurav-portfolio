import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  MapPin, GraduationCap, Code2, Smartphone, Brain, Globe, Shield,
  Terminal, Cpu, Zap, Target, BookOpen, Rocket, ExternalLink,
  ChevronRight, Layers, Database, GitBranch, Eye, Star, TrendingUp
} from 'lucide-react'
import SEO from '../components/SEO'
import { gsap, ScrollTrigger } from '../animations/gsapConfig'

/* ─── DATA ──────────────────────────────────────────────────── */

const skillGroups = [
  {
    icon: '💻', label: 'Programming',
    skills: [
      { name: 'Python', level: 80 },
      { name: 'Java', level: 72 },
      { name: 'JavaScript', level: 75 },
      { name: 'C / C++', level: 55 },
    ],
  },
  {
    icon: '🎨', label: 'Frontend',
    skills: [
      { name: 'React.js', level: 75 },
      { name: 'Tailwind CSS', level: 78 },
      { name: 'HTML5 / CSS3', level: 85 },
      { name: 'GSAP', level: 65 },
      { name: 'Three.js', level: 40 },
    ],
  },
  {
    icon: '⚙️', label: 'Backend',
    skills: [
      { name: 'Node.js', level: 70 },
      { name: 'Express.js', level: 68 },
      { name: 'REST APIs', level: 72 },
      { name: 'JWT / bcrypt', level: 65 },
      { name: 'WebSockets', level: 60 },
    ],
  },
  {
    icon: '🗄️', label: 'Databases',
    skills: [
      { name: 'MongoDB', level: 68 },
      { name: 'Firebase', level: 65 },
      { name: 'SQLite', level: 60 },
    ],
  },
  {
    icon: '📱', label: 'Android',
    skills: [
      { name: 'Android Studio', level: 72 },
      { name: 'Java (Android)', level: 72 },
      { name: 'OkHttp / WS', level: 60 },
      { name: 'Storage & Services', level: 62 },
    ],
  },
  {
    icon: '🧠', label: 'AI / ML',
    skills: [
      { name: 'Python AI Dev', level: 65 },
      { name: 'TensorFlow', level: 50 },
      { name: 'OpenCV', level: 55 },
      { name: 'VOSK / Speech', level: 60 },
      { name: 'Local LLM / GGUF', level: 45 },
    ],
  },
]

const projects = [
  {
    emoji: '🔐',
    name: 'PulseE2EE',
    category: 'Android · Cybersecurity',
    status: 'In Development',
    statusColor: 'rgba(251,191,36,0.8)',
    description: 'Android messaging app focused on secure end-to-end encrypted communication using AES-256-GCM with RSA key exchange planning.',
    tech: ['Java', 'Android Studio', 'Firebase', 'AES-256-GCM', 'RSA'],
    highlights: ['Real-time messaging', 'Secure encryption', 'Firebase integration', 'Android chat UI'],
  },
  {
    emoji: '📁',
    name: 'FileSafManager',
    category: 'Android · Remote File Management',
    status: 'Completed',
    statusColor: 'rgba(52,211,153,0.8)',
    description: 'Remote Android file manager communicating with a Node.js server via WebSockets. Supports chunk-based file transfer and thumbnail streaming.',
    tech: ['Java', 'Android Studio', 'Node.js', 'WebSockets', 'OkHttp'],
    highlights: ['Remote file listing', 'Chunk-based transfer', 'Thumbnail streaming', 'Foreground service'],
  },
  {
    emoji: '🛒',
    name: 'Full-Stack E-Commerce',
    category: 'Web Development · Full-Stack',
    status: 'Completed',
    statusColor: 'rgba(52,211,153,0.8)',
    description: 'Complete e-commerce platform with user authentication, product management, order flow, and REST API powered by MongoDB.',
    tech: ['React.js', 'Vite', 'Tailwind', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    highlights: ['JWT authentication', 'Product management', 'Order models', 'REST API'],
  },
  {
    emoji: '🤖',
    name: 'Python AI Voice Assistant',
    category: 'AI / ML · Desktop Automation',
    status: 'Completed',
    statusColor: 'rgba(52,211,153,0.8)',
    description: 'Offline voice assistant using VOSK for speech recognition with desktop automation, Chrome, Telegram, and YouTube search integration.',
    tech: ['Python', 'VOSK', 'pyttsx3', 'SpeechRecognition', 'sounddevice'],
    highlights: ['Offline voice processing', 'Text-to-speech', 'Desktop automation', 'Chrome & Telegram control'],
  },
  {
    emoji: '🎲',
    name: 'Telegram Casino Bot',
    category: 'Python · Telegram Automation',
    status: 'Completed',
    statusColor: 'rgba(52,211,153,0.8)',
    description: 'Feature-rich Telegram bot with virtual coin economy, dice games, duels, leaderboards, daily rewards, and admin management.',
    tech: ['Python', 'python-telegram-bot', 'SQLite'],
    highlights: ['Virtual coin economy', 'Dice & duel games', 'Daily rewards', 'Leaderboard & admin'],
  },
]

const experiments = [
  '🔬 Face detection with RetinaFace + TensorFlow',
  '🔑 XOR encryption script in Python',
  '⌨️ Custom QMK keyboard firmware & keymap',
  '🔌 Node.js WebSocket server from scratch',
  '📲 Android SMS synchronization system',
  '🧪 Local AI model experimentation (LM Studio)',
  '🌐 Three.js + GSAP animated landing pages',
]

const interests = [
  { icon: '🧠', label: 'Artificial Intelligence & ML' },
  { icon: '🌐', label: 'Full-Stack Web Development' },
  { icon: '📱', label: 'Android App Development' },
  { icon: '🔐', label: 'Cybersecurity & Encryption' },
  { icon: '🤖', label: 'Desktop Automation' },
  { icon: '⚙️', label: 'Backend Engineering' },
  { icon: '🎨', label: 'Modern UI/UX Design' },
  { icon: '📖', label: 'Open-Source Technologies' },
  { icon: '🚀', label: 'Entrepreneurship & Tech Innovation' },
]

const currentFocus = [
  { emoji: '📊', text: 'Practising Data Structures & Algorithms daily' },
  { emoji: '🔧', text: 'Building real-world software projects end-to-end' },
  { emoji: '🤖', text: 'Exploring AI/ML with Python and TensorFlow' },
  { emoji: '⚡', text: 'Sharpening full-stack development skills' },
  { emoji: '🌟', text: 'Growing a strong GitHub presence' },
  { emoji: '💼', text: 'Exploring freelancing & independent product development' },
  { emoji: '🏗️', text: 'Developing professional coding practices' },
]

const careerGoals = [
  { icon: <Cpu size={14} />, text: 'Build AI-powered applications that solve real problems' },
  { icon: <Globe size={14} />, text: 'Create scalable full-stack platforms used by real users' },
  { icon: <Shield size={14} />, text: 'Contribute to meaningful open-source projects' },
  { icon: <Rocket size={14} />, text: 'Explore entrepreneurship and independent product building' },
  { icon: <Layers size={14} />, text: 'Work with innovative, impact-driven technology teams' },
  { icon: <TrendingUp size={14} />, text: 'Grow into a software engineer with deep, reliable foundations' },
]

const tools = [
  'Git', 'GitHub', 'VS Code', 'Postman', 'Linux', 'Kali Linux', 'npm', 'Gradle', 'LM Studio', 'Vite'
]

/* ─── COMPONENT ─────────────────────────────────────────────── */

function RevealBlock({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    gsap.fromTo(el,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.75, ease: 'power3.out', delay,
        scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
      }
    )
  }, [delay])
  return <div ref={ref} className={className}>{children}</div>
}

function SkillBar({ name, level }) {
  const barRef = useRef(null)
  useEffect(() => {
    const el = barRef.current
    if (!el) return
    gsap.fromTo(el,
      { width: '0%' },
      {
        width: `${level}%`, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' }
      }
    )
  }, [level])
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-xs text-white/70">{name}</span>
        <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.35)' }}>{level}%</span>
      </div>
      <div className="h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.07)' }}>
        <div ref={barRef} className="h-1 rounded-full skill-bar-fill" style={{ width: 0 }} />
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About"
        path="/about"
        description="Saurav Kumar — B.Tech CSE (AI & ML) student at ITS Engineering College, AKTU. Aspiring software developer passionate about AI, full-stack development, Android, and building meaningful digital products."
      />
      <div className="page-container section-padding">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">

          {/* ── HERO HEADER ── */}
          <div className="mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>About Me</p>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-3">Curious Mind. Creative Builder.</h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-5" style={{ color: 'rgba(255,255,255,0.35)' }}>Future Software Engineer.</h2>
            <p className="text-base max-w-2xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
              I'm Saurav — a Computer Science Engineering student specialising in Artificial Intelligence & Machine Learning.
              I explore technologies, develop software, and turn ideas into practical digital experiences.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)' }}>
              🏗️ Building Ideas Into Technology
            </div>
          </div>

          {/* ── INTRO + QUICK FACTS ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 mb-16">
            <div className="space-y-6">
              <RevealBlock>
                <div className="glass-card p-7">
                  <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    👋 My Story
                  </h2>
                  <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    <p>
                      Hi, I'm <span className="text-white font-semibold">Saurav Kumar</span> — a B.Tech Computer Science student
                      specialising in AI & ML at ITS Engineering College (AKTU), Greater Noida, India.
                    </p>
                    <p>
                      My journey into programming started with pure curiosity about how things work at a deeper level.
                      That curiosity evolved into a genuine love for <em>building</em> — from Android apps with end-to-end
                      encryption to full-stack web platforms, voice-powered AI assistants, and Telegram bots.
                    </p>
                    <p>
                      My approach to learning is practical: I understand concepts best by experimenting, breaking things,
                      and rebuilding them. I enjoy reading about systems design, following developments in AI, and
                      constantly adding tools to my technical toolkit.
                    </p>
                    <p>
                      My long-term vision is to become a skilled software developer capable of building <strong className="text-white/80">
                      innovative, secure, intelligent, and scalable</strong> digital solutions — and eventually exploring entrepreneurship
                      to build products that matter.
                    </p>
                  </div>
                </div>
              </RevealBlock>

              <RevealBlock delay={0.1}>
                <div className="glass-card p-7">
                  <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    💬 Personal Philosophy
                  </h2>
                  <blockquote className="text-sm leading-relaxed italic border-l-2 pl-4"
                    style={{ color: 'rgba(255,255,255,0.55)', borderColor: 'rgba(255,255,255,0.15)' }}>
                    "Great software is built at the intersection of strong fundamentals, relentless curiosity, and the
                    courage to ship imperfect work and improve it. I'd rather build something real and learn from it
                    than wait for perfect conditions."
                  </blockquote>
                </div>
              </RevealBlock>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <RevealBlock>
                <div className="glass-card p-5">
                  <img src="/profile.webp" alt="Saurav Kumar"
                    className="w-full rounded-xl object-cover mb-4"
                    style={{ aspectRatio: '1/1', objectPosition: 'center top', border: '1px solid rgba(255,255,255,0.1)' }} />
                  <h3 className="text-base font-bold text-white">Saurav Kumar</h3>
                  <p className="text-xs mb-2" style={{ color: 'rgba(255,255,255,0.45)' }}>Aspiring Software Developer · AI & ML</p>
                  <div className="flex items-center gap-1.5 text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
                    <MapPin size={11} /> Greater Noida, India
                  </div>
                </div>
              </RevealBlock>

              <RevealBlock delay={0.1}>
                <div className="glass-card p-5 space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40">Quick Facts</h3>
                  {[
                    { label: 'Degree', value: 'B.Tech CSE (AI & ML)' },
                    { label: 'University', value: 'AKTU' },
                    { label: 'College', value: 'ITS Engineering College' },
                    { label: 'Location', value: 'Greater Noida, India' },
                    { label: 'Status', value: 'Open to opportunities' },
                  ].map(f => (
                    <div key={f.label} className="flex justify-between text-xs gap-2">
                      <span style={{ color: 'rgba(255,255,255,0.35)' }}>{f.label}</span>
                      <span className="text-white/80 font-medium text-right">{f.value}</span>
                    </div>
                  ))}
                </div>
              </RevealBlock>

              <RevealBlock delay={0.15}>
                <div className="glass-card p-5">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-3 flex items-center gap-2">
                    <GraduationCap size={12} /> Education
                  </h3>
                  <p className="text-sm font-semibold text-white">ITS Engineering College</p>
                  <p className="text-xs text-white/55 mt-0.5">B.Tech CSE — AI & ML</p>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>AKTU · 2022 – 2026</p>
                </div>
              </RevealBlock>
            </div>
          </div>

          {/* ── TECHNICAL SKILLS ── */}
          <RevealBlock>
            <div className="mb-4">
              <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Skills</p>
              <h2 className="text-2xl font-bold text-white">Technical Toolkit</h2>
              <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Honest proficiency levels — skills used in real projects, not just tutorials.
              </p>
            </div>
          </RevealBlock>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
            {skillGroups.map((group, gi) => (
              <RevealBlock key={group.label} delay={gi * 0.06}>
                <div className="glass-card p-5 h-full">
                  <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                    <span className="text-base">{group.icon}</span> {group.label}
                  </h3>
                  {group.skills.map(s => <SkillBar key={s.name} {...s} />)}
                </div>
              </RevealBlock>
            ))}
          </div>

          {/* Tools row */}
          <RevealBlock>
            <div className="glass-card p-5 mb-16">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-3">🛠 Developer Tools</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map(t => (
                  <span key={t} className="px-3 py-1 text-xs rounded-lg transition-all cursor-default"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)'; e.currentTarget.style.color = '#fff' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </RevealBlock>

          {/* ── FEATURED PROJECTS ── */}
          <RevealBlock>
            <div className="mb-6">
              <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Work</p>
              <h2 className="text-2xl font-bold text-white">Featured Projects</h2>
            </div>
          </RevealBlock>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {projects.map((p, i) => (
              <RevealBlock key={p.name} delay={i * 0.07}>
                <div className="glass-card p-6 h-full flex flex-col group transition-all duration-300"
                  style={{}}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = ''}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl">{p.emoji}</span>
                      <div>
                        <h3 className="text-sm font-bold text-white">{p.name}</h3>
                        <p className="text-[11px] mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>{p.category}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
                      style={{ background: 'rgba(255,255,255,0.05)', color: p.statusColor, border: `1px solid ${p.statusColor}33` }}>
                      {p.status}
                    </span>
                  </div>

                  <p className="text-xs leading-relaxed mb-4 flex-1" style={{ color: 'rgba(255,255,255,0.5)' }}>{p.description}</p>

                  <div className="mb-4">
                    {p.highlights.map(h => (
                      <div key={h} className="flex items-center gap-2 text-[11px] mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
                        <ChevronRight size={10} className="flex-shrink-0" /> {h}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map(t => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded"
                        style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealBlock>
            ))}
          </div>

          {/* Experiments */}
          <RevealBlock>
            <div className="glass-card p-6 mb-16">
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                🧪 Other Experiments & Technical Explorations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {experiments.map(e => (
                  <div key={e} className="text-xs py-2 px-3 rounded-lg" style={{ color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.03)' }}>
                    {e}
                  </div>
                ))}
              </div>
            </div>
          </RevealBlock>

          {/* ── INTERESTS ── */}
          <RevealBlock>
            <div className="mb-6">
              <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Passions</p>
              <h2 className="text-2xl font-bold text-white">Areas of Interest</h2>
            </div>
          </RevealBlock>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-16">
            {interests.map((item, i) => (
              <RevealBlock key={item.label} delay={i * 0.05}>
                <div className="glass-card p-4 flex items-center gap-3 group cursor-default transition-all duration-200"
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = ''}>
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <span className="text-xs font-medium text-white/70 group-hover:text-white transition-colors">{item.label}</span>
                </div>
              </RevealBlock>
            ))}
          </div>

          {/* ── CURRENT FOCUS ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <RevealBlock>
              <div className="glass-card p-7 h-full">
                <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                  ⚡ Current Focus
                </h2>
                <div className="space-y-3">
                  {currentFocus.map(item => (
                    <div key={item.text} className="flex items-start gap-3">
                      <span className="text-base flex-shrink-0 mt-0.5">{item.emoji}</span>
                      <span className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{item.text}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-xs italic" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  These are current learning goals — not completed achievements.
                </p>
              </div>
            </RevealBlock>

            <RevealBlock delay={0.1}>
              <div className="glass-card p-7 h-full">
                <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                  🚀 Career Vision
                </h2>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  My ambition is to grow into a capable software developer with deep foundations in programming,
                  AI, software engineering, and modern web technologies — someone who can architect systems,
                  not just write code.
                </p>
                <div className="space-y-3">
                  {careerGoals.map(g => (
                    <div key={g.text} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0 text-white/40">{g.icon}</span>
                      <span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>{g.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealBlock>
          </div>

          {/* ── CTA ── */}
          <RevealBlock>
            <div className="glass-card p-8 text-center mb-4">
              <div className="text-3xl mb-3">🤝</div>
              <h2 className="text-xl font-bold text-white mb-2">Let's Build Something Together</h2>
              <p className="text-sm max-w-md mx-auto mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Whether it's a project collaboration, internship opportunity, or just a conversation about technology —
                I'm always open to connecting.
              </p>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <Link to="/contact"
                  className="px-6 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
                  style={{ background: '#FFFFFF', color: '#000' }}>
                  Get In Touch
                </Link>
                <Link to="/projects"
                  className="px-6 py-2.5 rounded-xl text-sm font-medium transition-all"
                  style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.6)' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>
                  View Projects
                </Link>
              </div>
            </div>
          </RevealBlock>

        </div>
      </div>
    </>
  )
}
