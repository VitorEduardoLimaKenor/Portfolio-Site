import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen relative flex items-center justify-center px-6">
      <div className="relative text-center max-w-md">
        <p
          className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] mb-3"
          style={{ color: 'var(--cyan)' }}
        >
          404
        </p>
        <h1 className="font-display text-4xl font-bold mb-3" style={{ color: 'var(--text)' }}>
          Página não encontrada
        </h1>
        <p className="mb-8" style={{ color: 'var(--text-muted)' }}>
          O endereço que você tentou abrir não existe ou foi movido.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-[13px] font-semibold rounded-md"
          style={{
            background: 'var(--cyan)',
            color: 'var(--bg)',
            padding: '12px 24px',
            textDecoration: 'none',
          }}
        >
          <ArrowLeft size={14} /> Voltar para a Home
        </Link>
      </div>
    </div>
  )
}
