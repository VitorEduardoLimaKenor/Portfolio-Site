import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const navItems = [
  { href: '#about',      label: 'about' },
  { href: '#skills',     label: 'skills' },
  { href: '#projects',   label: 'projects' },
  { href: '#experience', label: 'experience' },
  { href: '#contact',    label: 'contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between border-b transition-[padding] duration-300
        ${scrolled ? 'py-[14px]' : 'py-[20px]'}`}
      style={{
        paddingLeft: 60, paddingRight: 60,
        background: 'rgba(8,11,20,0.7)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderColor: 'var(--border)',
      }}
    >
      <Link to="/" className="font-mono text-[15px] font-medium tracking-wider no-underline" style={{ color: 'var(--cyan)' }}>
        vitor<span style={{ color: 'var(--cyan)' }}>.dev</span>
      </Link>

      <ul className="hidden md:flex items-center gap-9 list-none">
        {navItems.map((it) => (
          <li key={it.href}>
            <a
              href={it.href}
              className="relative font-mono text-[12px] uppercase tracking-[0.1em] transition-colors group"
              style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cyan)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {it.label}
              <span
                className="absolute -bottom-1 left-0 right-0 h-px origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100"
                style={{ background: 'var(--cyan)' }}
              />
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="font-mono text-[12px] font-medium uppercase tracking-[0.08em] px-[18px] py-2 rounded transition-all"
        style={{ color: 'var(--bg)', background: 'var(--cyan)', textDecoration: 'none' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--indigo)'
          e.currentTarget.style.boxShadow = '0 0 20px rgba(129,140,248,0.4)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'var(--cyan)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        hire me
      </a>
    </nav>
  )
}
