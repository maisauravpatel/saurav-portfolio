import React from 'react'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'
import SEO from '../components/SEO'

export default function NotFoundPage() {
  return (
    <>
      <SEO title="404 — Page Not Found" path="/404" description="This page doesn't exist." />
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          {/* Glowing 404 */}
          <div className="relative mb-8 select-none">
            <h1 className="font-black leading-none"
              style={{
                fontSize: 'clamp(120px, 20vw, 200px)',
                background: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(6,182,212,0.1))',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                filter: 'drop-shadow(0 0 40px rgba(139,92,246,0.2))',
              }}>
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-black text-2xl gradient-text">Oops!</span>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-3">Page Not Found</h2>
          <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.45)' }}>
            The page you're looking for doesn't exist or was moved. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)', color: '#fff', boxShadow: '0 0 20px rgba(139,92,246,0.3)' }}>
              <Home size={15} /> Go Home
            </Link>
            <button onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all hover:border-purple-400"
              style={{ border: '1px solid rgba(139,92,246,0.3)', color: '#A78BFA' }}>
              <ArrowLeft size={15} /> Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
