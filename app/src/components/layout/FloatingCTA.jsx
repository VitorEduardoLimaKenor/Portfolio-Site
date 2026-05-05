import { useEffect, useState } from 'react'
import { Mail } from 'lucide-react'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="mailto:vitoreduardokenor@gmail.com"
      className={`fixed bottom-8 right-8 z-[150] inline-flex items-center gap-[10px] rounded-full font-mono text-[13px] font-bold tracking-[0.06em] transition-all
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none translate-y-4'}
        ${visible ? 'cta-pulse' : ''}`}
      style={{
        background: 'var(--cyan)',
        color: 'var(--bg)',
        textDecoration: 'none',
        padding: '14px 22px',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#22d3ee'
        e.currentTarget.style.transform = 'translateY(-3px) scale(1.04)'
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(6,182,212,0.5)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'var(--cyan)'
        e.currentTarget.style.transform = visible ? 'translateY(0)' : 'translateY(16px)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <Mail size={16} strokeWidth={2.5} />
      <span className="hidden sm:inline">Fale comigo</span>
    </a>
  )
}
