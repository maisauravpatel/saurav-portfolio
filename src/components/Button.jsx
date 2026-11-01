import React from 'react'

export default function Button({ children, variant = 'primary', href, onClick, className = '', ...props }) {
  const base = 'inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50'

  const variants = {
    primary: 'bg-white text-black hover:bg-white/90 hover:-translate-y-0.5',
    outline: 'border border-white/25 text-white/80 hover:border-white/60 hover:text-white hover:-translate-y-0.5',
    ghost: 'text-white/50 hover:text-white hover:bg-white/05',
  }

  const cls = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={cls} {...props}>
      {children}
    </button>
  )
}
