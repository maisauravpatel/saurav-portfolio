import React from 'react'

export default function SectionHeading({ label, title, subtitle, className = '' }) {
  return (
    <div className={`mb-14 ${className}`}>
      {label && (
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/40 mb-4">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm md:text-base text-white/35 max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
