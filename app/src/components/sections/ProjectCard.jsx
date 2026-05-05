import { ArrowUpRight, Github, Star } from 'lucide-react'

export default function ProjectCard({ project }) {
  const cardLink = project.externalUrl || project.repoUrl || '#'

  return (
    <article
      className="group relative rounded-2xl overflow-hidden transition-all"
      style={{
        background: 'var(--glass)',
        border: '1px solid var(--border)',
        backdropFilter: 'blur(10px)',
        padding: 24,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(6,182,212,0.35)'
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {project.featured && (
        <span
          className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full font-mono text-[10px] font-semibold z-10"
          style={{
            background: 'var(--cyan-dim)',
            color: 'var(--cyan)',
            border: '1px solid rgba(6,182,212,0.35)',
            padding: '2px 8px',
          }}
        >
          <Star size={12} /> Destaque
        </span>
      )}

      {project.cover && (
        <div
          className="aspect-[16/9] mb-5 rounded-xl overflow-hidden"
          style={{
            background: 'rgba(6,182,212,0.04)',
            border: '1px solid rgba(6,182,212,0.12)',
          }}
        >
          <img
            src={project.cover}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 font-mono text-[11px]" style={{ color: 'var(--text-muted)' }}>
          {project.year && <span>{project.year}</span>}
          {project.year && project.tags?.[0] && <span>•</span>}
          <span style={{ color: 'var(--cyan)' }}>{project.tags?.[0]}</span>
        </div>

        <h3 className="text-[20px] font-semibold tracking-[-0.01em]" style={{ color: 'var(--text)' }}>
          {project.title}
        </h3>
        <p className="text-[14px] font-light leading-[1.7] line-clamp-3" style={{ color: 'var(--text-muted)' }}>
          {project.tagline}
        </p>

        <div className="flex flex-wrap gap-[6px] pt-1">
          {(project.techStack || []).slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] rounded"
              style={{
                color: 'var(--indigo)',
                background: 'var(--indigo-dim)',
                border: '1px solid rgba(129,140,248,0.2)',
                padding: '3px 10px',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div
          className="flex items-center justify-between pt-3"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <a
            href={cardLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-[13px] font-medium transition-colors"
            style={{ color: 'var(--cyan)', textDecoration: 'none' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#22d3ee')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--cyan)')}
          >
            Ver projeto <ArrowUpRight size={14} />
          </a>

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Repositório no GitHub"
              className="p-[6px] rounded-md transition-colors"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-muted)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              <Github size={16} />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
