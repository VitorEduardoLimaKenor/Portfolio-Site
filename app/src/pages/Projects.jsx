import ProjectCard from '../components/sections/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <div className="relative" style={{ padding: '120px 60px 80px' }}>
      <div className="max-w-[1200px] mx-auto">
        <p
          className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] mb-4 flex items-center gap-3 justify-center"
          style={{ color: 'var(--cyan)' }}
        >
          <span className="block h-px w-6" style={{ background: 'var(--cyan)' }} />
          Portfólio
        </p>
        <h1
          className="font-display font-bold leading-[1.1] tracking-[-0.02em] text-center mb-5"
          style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}
        >
          Todos os <span style={{ color: 'var(--cyan)' }}>projetos</span>
        </h1>
        <p
          className="text-center font-light leading-[1.7] max-w-[640px] mx-auto"
          style={{ fontSize: 15, color: 'var(--text-muted)' }}
        >
          Coleção dos trabalhos em que venho atuando — da pesquisa ao deploy. Cada card abre uma
          página com detalhes técnicos, métricas e (quando aplicável) uma demo interativa.
        </p>

        <div className="mt-14">
          {projects.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="grid md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
              {projects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function EmptyState() {
  return (
    <div
      className="rounded-2xl text-center max-w-[640px] mx-auto"
      style={{
        padding: 40,
        background: 'var(--glass)',
        border: '1px solid var(--border)',
      }}
    >
      <p style={{ color: 'var(--text-muted)' }}>Nenhum projeto cadastrado ainda.</p>
    </div>
  )
}
