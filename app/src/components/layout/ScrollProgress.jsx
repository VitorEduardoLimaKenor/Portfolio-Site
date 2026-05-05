import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight
      setPct(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 h-[2px] z-[200]"
      style={{
        width: pct + '%',
        background: 'linear-gradient(90deg, var(--cyan), var(--indigo))',
        boxShadow: '0 0 8px var(--cyan)',
        transition: 'width .1s linear',
      }}
    />
  )
}
