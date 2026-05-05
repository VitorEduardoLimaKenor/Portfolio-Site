import { useEffect, useState } from 'react'

const ROLES = ['AI Engineer', 'Backend Developer']

export default function TypedRole() {
  const [text, setText] = useState('')
  const [ri, setRi] = useState(0)
  const [ci, setCi] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = ROLES[ri]
    let timeout

    if (!deleting) {
      if (ci < word.length) {
        timeout = setTimeout(() => {
          setText(word.slice(0, ci + 1))
          setCi(ci + 1)
        }, 90)
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800)
      }
    } else {
      if (ci > 0) {
        timeout = setTimeout(() => {
          setText(word.slice(0, ci - 1))
          setCi(ci - 1)
        }, 60)
      } else {
        setDeleting(false)
        setRi((ri + 1) % ROLES.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [ci, ri, deleting])

  return (
    <p
      className="font-mono text-[14px] tracking-wide"
      style={{ color: 'var(--text-dim)', animation: 'fadeInUp .6s .2s ease both' }}
    >
      $ <span style={{ color: 'var(--cyan)' }}>{text}</span>
      <span className="cursor-blink" />
    </p>
  )
}
