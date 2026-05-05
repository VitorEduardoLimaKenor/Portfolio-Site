import { useEffect, useState } from 'react'

const lines = [
  { delay: 300,  type: 'cmd',    text: 'whoami' },
  { delay: 900,  type: 'output', text: 'Vitor Eduardo de Lima Kenor', cls: 'cyan' },
  { delay: 1200, type: 'output', text: 'AI Engineer & Backend Developer', cls: 'indigo' },
  { delay: 1600, type: 'cmd',    text: 'cat skills.json' },
  { delay: 2200, type: 'output', text: '{' },
  { delay: 2400, type: 'output', text: '  "ai": ["LLMs", "RAG", "LangChain", "CNN"],' },
  { delay: 2600, type: 'output', text: '  "backend": ["Python", "FastAPI", "Django"],' },
  { delay: 2800, type: 'output', text: '  "tools": ["Docker", "Git", "N8N"]' },
  { delay: 3000, type: 'output', text: '}', cls: 'dim' },
  { delay: 3400, type: 'cmd',    text: 'echo $STATUS' },
  { delay: 3900, type: 'output', text: '✔ Available for opportunities', cls: 'green' },
  { delay: 4300, type: 'cmd',    text: 'send_email vitoreduardokenor@gmail.com' },
  { delay: 4900, type: 'link',   text: '→ Abrir email agora', href: 'mailto:vitoreduardokenor@gmail.com' },
  { delay: 5200, type: 'cursor' },
]

const colorOf = (cls) => {
  if (cls === 'cyan')   return 'var(--cyan)'
  if (cls === 'indigo') return 'var(--indigo)'
  if (cls === 'green')  return '#4ade80'
  if (cls === 'dim')    return '#334155'
  return 'var(--text-muted)'
}

export default function HeroTerminal() {
  const [shown, setShown] = useState([])

  useEffect(() => {
    const timers = lines.map((line, i) =>
      setTimeout(() => setShown((prev) => [...prev, i]), line.delay)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: 'var(--glass)',
        border: '1px solid var(--border)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: '0 0 60px rgba(6,182,212,0.08), 0 32px 64px rgba(0,0,0,0.4)',
        animation: 'fadeInRight .8s .2s ease both',
      }}
    >
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{
          background: 'rgba(255,255,255,0.03)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <span className="block w-[10px] h-[10px] rounded-full" style={{ background: '#ff5f57' }} />
        <span className="block w-[10px] h-[10px] rounded-full" style={{ background: '#ffbd2e' }} />
        <span className="block w-[10px] h-[10px] rounded-full" style={{ background: '#28c840' }} />
        <span className="flex-1 text-center font-mono text-[11px] tracking-wider" style={{ color: 'var(--text-muted)' }}>
          vitor@utfpr:~
        </span>
      </div>

      <div className="p-5 font-mono text-[13px] leading-[1.8]" style={{ minHeight: 320 }}>
        {lines.map((line, i) => {
          if (!shown.includes(i)) return null
          if (line.type === 'cmd') {
            return (
              <div key={i} className="flex gap-2">
                <span style={{ color: 'var(--cyan)', userSelect: 'none' }}>vitor@utfpr:~$</span>
                <span style={{ color: '#e2e8f0' }}>{line.text}</span>
              </div>
            )
          }
          if (line.type === 'output') {
            return (
              <div key={i} style={{ color: colorOf(line.cls) }}>
                {line.text}
              </div>
            )
          }
          if (line.type === 'link') {
            return (
              <div key={i}>
                <a
                  href={line.href}
                  style={{
                    color: '#4ade80',
                    textDecoration: 'underline',
                    textUnderlineOffset: 3,
                    fontWeight: 600,
                  }}
                >
                  {line.text}
                </a>
              </div>
            )
          }
          if (line.type === 'cursor') {
            return (
              <div key={i} className="flex gap-2 items-center">
                <span style={{ color: 'var(--cyan)', userSelect: 'none' }}>vitor@utfpr:~$</span>
                <span className="t-input-cursor" />
              </div>
            )
          }
          return null
        })}
      </div>
    </div>
  )
}
