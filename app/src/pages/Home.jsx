import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Mail, Github, Linkedin, FileText, ChevronDown, MapPin, Monitor,
  Brain, Zap, Server, Users, MessageSquare, PenLine, ArrowRight,
} from 'lucide-react'

import HeroTerminal from '../components/sections/HeroTerminal'
import TypedRole from '../components/sections/TypedRole'
import { projects } from '../data/projects'

const EMAIL = 'vitoreduardokenor@gmail.com'
const GITHUB = 'https://github.com/VitorEduardoLimaKenor'
const LINKEDIN = 'https://www.linkedin.com/in/vitor-eduardo-de-lima-kenor-803464273/'

/* ============================================================ */
/* HERO                                                         */
/* ============================================================ */

function Hero() {
  return (
    <section
      id="hero"
      className="relative grid md:grid-cols-2 items-center gap-[60px] min-h-screen"
      style={{ padding: '120px 60px 80px' }}
    >
      <div className="flex flex-col gap-6">
        <div
          className="inline-flex items-center gap-2 px-[14px] py-[6px] rounded-full font-mono text-[11px] font-medium uppercase tracking-[0.1em] w-fit"
          style={{
            background: 'var(--cyan-dim)',
            border: '1px solid rgba(6,182,212,0.3)',
            color: 'var(--cyan)',
            animation: 'fadeInUp .6s ease both',
          }}
        >
          <span
            className="w-[6px] h-[6px] rounded-full pulse-ring"
            style={{ background: 'var(--cyan)' }}
          />
          Disponível agora · resposta em &lt;24h
        </div>

        <h1
          className="font-display font-bold leading-[1.05] tracking-[-0.02em]"
          style={{
            fontSize: 'clamp(42px, 5vw, 72px)',
            animation: 'fadeInUp .6s .1s ease both',
          }}
        >
          Vitor<br />
          <span style={{ color: 'var(--cyan)' }}>Eduardo</span><br />
          <span style={{ color: 'var(--indigo)' }}>de Lima</span>
        </h1>

        <TypedRole />

        <p
          className="font-light leading-[1.7]"
          style={{
            fontSize: 15,
            color: 'var(--text-muted)',
            maxWidth: 440,
            animation: 'fadeInUp .6s .3s ease both',
          }}
        >
          Estudante de Ciência da Computação na UTFPR. Trabalho com LLMs, RAG e Python Backend,
          com uma obsessão saudável por entender como as coisas funcionam por dentro.
        </p>

        <div className="flex gap-[14px] items-center" style={{ animation: 'fadeInUp .6s .4s ease both' }}>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 font-mono text-[13px] font-semibold tracking-wide rounded-md transition-all"
            style={{
              background: 'var(--cyan)',
              color: 'var(--bg)',
              padding: '12px 24px',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#22d3ee'
              e.currentTarget.style.boxShadow = '0 0 30px rgba(6,182,212,0.5)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--cyan)'
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <Mail size={14} />
            Enviar mensagem
          </a>

          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[13px] tracking-wide rounded-md transition-all"
            style={{
              background: 'transparent',
              color: 'var(--text-dim)',
              padding: '12px 24px',
              border: '1px solid var(--border)',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--indigo)'
              e.currentTarget.style.color = 'var(--indigo)'
              e.currentTarget.style.boxShadow = '0 0 20px rgba(129,140,248,0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.color = 'var(--text-dim)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <FileText size={14} />
            Baixar CV
          </a>
        </div>

        <a
          href="#projects"
          className="font-mono text-[12px] flex items-center gap-[6px] w-fit transition-colors"
          style={{ color: 'var(--text-muted)', textDecoration: 'none', animation: 'fadeInUp .6s .45s ease both' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cyan)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
        >
          <ChevronDown size={12} />
          ver projetos
        </a>

        <div className="flex gap-4" style={{ animation: 'fadeInUp .6s .5s ease both' }}>
          <SocialLink href={GITHUB} label="GitHub"><Github size={16} /></SocialLink>
          <SocialLink href={LINKEDIN} label="LinkedIn"><Linkedin size={16} /></SocialLink>
          <SocialLink href={`mailto:${EMAIL}`} label="Email"><Mail size={16} /></SocialLink>
        </div>
      </div>

      <HeroTerminal />
    </section>
  )
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      title={label}
      className="flex items-center justify-center w-9 h-9 rounded-lg transition-all"
      style={{
        border: '1px solid var(--border)',
        color: 'var(--text-muted)',
        textDecoration: 'none',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--cyan)'
        e.currentTarget.style.color = 'var(--cyan)'
        e.currentTarget.style.background = 'var(--cyan-dim)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.color = 'var(--text-muted)'
        e.currentTarget.style.background = 'transparent'
      }}
    >
      {children}
    </a>
  )
}

/* ============================================================ */
/* SECTION HEADER (label + title)                               */
/* ============================================================ */

function SectionLabel({ children, center }) {
  return (
    <p
      className={`font-mono text-[11px] font-medium uppercase tracking-[0.2em] mb-4 flex items-center gap-3 ${center ? 'justify-center' : ''}`}
      style={{ color: 'var(--cyan)' }}
    >
      <span className="block h-px w-6" style={{ background: 'var(--cyan)' }} />
      {children}
    </p>
  )
}

function SectionTitle({ children }) {
  return (
    <h2
      className="font-display font-bold leading-[1.1] tracking-[-0.02em] mb-6"
      style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}
    >
      {children}
    </h2>
  )
}

/* ============================================================ */
/* ABOUT                                                        */
/* ============================================================ */

function About() {
  const stats = [
    { num: '3+', label: 'Anos estudando IA & Python' },
    { num: '92%', label: 'Acurácia no projeto CNN' },
    { num: '5+', label: 'Tecnologias de IA dominadas' },
    { num: 'UTFPR', label: 'Santa Helena/PR · Ciência da Computação' },
  ]

  return (
    <section
      id="about"
      className="reveal grid md:grid-cols-2 gap-20 items-center"
      style={{ padding: '120px 60px' }}
    >
      <div>
        <SectionLabel>About me</SectionLabel>
        <SectionTitle>
          Olá, eu sou o <span style={{ color: 'var(--cyan)' }}>Vitor</span> 👋
        </SectionTitle>

        <p className="font-light leading-[1.8] mb-4" style={{ fontSize: 15, color: 'var(--text-muted)' }}>
          Estudante de Ciência da Computação na Universidade Tecnológica Federal do Paraná (UTFPR),
          em Santa Helena/PR. Atualmente trabalho com{' '}
          <strong style={{ color: 'var(--cyan)' }}>LLMs e RAG</strong> e estudo Back-End Python paralelamente.
        </p>
        <p className="font-light leading-[1.8]" style={{ fontSize: 15, color: 'var(--text-muted)' }}>
          Estou constantemente atualizando meus conhecimentos e buscando novos desafios na área de
          tecnologia. Tenho paixão por aprender e aplicar conhecimentos para criar soluções inovadoras.
        </p>

        <div className="grid grid-cols-2 gap-4 mt-9">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-[10px] p-5 transition-all"
              style={{
                background: 'var(--glass)',
                border: '1px solid var(--border)',
                backdropFilter: 'blur(10px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(6,182,212,0.3)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div className="font-mono text-[32px] font-bold leading-none" style={{ color: 'var(--cyan)' }}>
                {s.num}
              </div>
              <div className="text-xs mt-[6px]" style={{ color: 'var(--text-muted)' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <AvatarBlock />
    </section>
  )
}

function AvatarBlock() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center gap-6">
        <div
          className="relative flex items-center justify-center overflow-hidden"
          style={{
            width: 220, height: 240,
            borderRadius: 20,
            border: '1px solid rgba(6,182,212,0.3)',
            background: 'var(--glass)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 0 40px rgba(6,182,212,0.1), 0 20px 60px rgba(0,0,0,0.4)',
          }}
        >
          <img
            src="/images/vitor.jpg"
            alt="Vitor Eduardo de Lima Kenor"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center top',
              borderRadius: 20, display: 'block',
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              borderRadius: 20,
              background: 'radial-gradient(ellipse at 50% 100%, rgba(6,182,212,0.15), transparent 70%)',
            }}
          />
        </div>

        <div className="flex flex-col gap-[10px] w-[200px]">
          <div className="flex items-center gap-2 font-mono text-[12px]" style={{ color: 'var(--text-muted)' }}>
            <MapPin size={13} style={{ color: 'var(--cyan)', flexShrink: 0 }} />
            Santa Helena, PR · Brasil
          </div>
          <div className="flex items-center gap-2 font-mono text-[12px]" style={{ color: 'var(--text-muted)' }}>
            <Monitor size={13} style={{ color: 'var(--cyan)', flexShrink: 0 }} />
            Disponível para remote
          </div>
          <div className="flex items-center gap-2 font-mono text-[12px]" style={{ color: '#4ade80' }}>
            <span
              className="pulse-ring"
              style={{
                width: 7, height: 7, borderRadius: 999,
                background: '#4ade80', boxShadow: '0 0 10px #4ade80', flexShrink: 0,
              }}
            />
            Open to work · 2025
          </div>
        </div>
      </div>
    </div>
  )
}

/* ============================================================ */
/* SKILLS                                                       */
/* ============================================================ */

function Skills() {
  const cats = [
    {
      label: 'IA & Machine Learning',
      icon: Brain,
      tags: ['LLMs', 'LangChain', 'RAG', 'CNN', 'Deep Learning', 'N8N'],
    },
    {
      label: 'Backend & APIs',
      icon: Zap,
      tags: ['Python', 'FastAPI', 'Django', 'REST APIs', 'PostgreSQL'],
    },
    {
      label: 'DevOps & Ferramentas',
      icon: Server,
      tags: ['Docker', 'Git', 'GitHub', 'Linux'],
    },
  ]

  const soft = [
    {
      icon: Users,
      name: 'Trabalho em Equipe',
      evidence: 'Projetos colaborativos na UTFPR e participação em bootcamp com entrega em grupo sob prazo.',
    },
    {
      icon: MessageSquare,
      name: 'Comunicação Técnica',
      evidence: 'Capaz de explicar conceitos de LLMs e RAG para públicos não técnicos — habilidade desenvolvida em apresentações na universidade.',
    },
    {
      icon: PenLine,
      name: 'Aprendizado Contínuo',
      evidence: 'Estuda paralelamente IA aplicada, backend Python e DevOps — mantém repositório público atualizado com experimentos.',
    },
  ]

  return (
    <section id="skills" className="reveal" style={{ padding: '120px 60px' }}>
      <SectionLabel>Stack &amp; Skills</SectionLabel>
      <SectionTitle>
        Ferramentas que <span style={{ color: 'var(--cyan)' }}>domino</span>
      </SectionTitle>

      <div className="grid md:grid-cols-3 gap-5 mt-14">
        {cats.map((c) => (
          <SkillCategoryCard key={c.label} {...c} />
        ))}

        <div
          className="md:col-span-3 rounded-xl p-7"
          style={{
            background: 'var(--glass)',
            border: '1px solid var(--border)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <div className="font-mono text-[10px] font-medium uppercase tracking-[0.15em] mb-5 flex items-center gap-2" style={{ color: 'var(--cyan)' }}>
            <Users size={14} />
            Soft Skills
          </div>
          <div className="flex flex-col gap-3">
            {soft.map((s) => (
              <div
                key={s.name}
                className="flex items-start gap-3 p-3 rounded-lg transition-colors"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid var(--border)',
                  padding: '12px 16px',
                }}
              >
                <s.icon size={15} style={{ color: 'var(--cyan)', flexShrink: 0, marginTop: 1 }} />
                <div className="flex flex-col gap-[3px]">
                  <div className="text-[13px] font-medium" style={{ color: 'var(--text)' }}>{s.name}</div>
                  <div className="text-[12px] font-light leading-[1.5]" style={{ color: 'var(--text-muted)' }}>
                    {s.evidence}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillCategoryCard({ icon: Icon, label, tags }) {
  return (
    <div
      className="rounded-xl p-7 transition-all relative overflow-hidden group"
      style={{
        background: 'var(--glass)',
        border: '1px solid var(--border)',
        backdropFilter: 'blur(10px)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(6,182,212,0.3)'
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(6,182,212,0.08)'
        e.currentTarget.style.transform = 'translateY(-4px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <div className="font-mono text-[10px] font-medium uppercase tracking-[0.15em] mb-5 flex items-center gap-2" style={{ color: 'var(--cyan)' }}>
        <Icon size={14} />
        {label}
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="font-mono text-[12px] rounded transition-all cursor-default"
            style={{
              color: 'var(--text-dim)',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid var(--border)',
              padding: '5px 12px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--cyan)'
              e.currentTarget.style.color = 'var(--cyan)'
              e.currentTarget.style.background = 'var(--cyan-dim)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.color = 'var(--text-dim)'
              e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ============================================================ */
/* PROJECTS                                                     */
/* ============================================================ */

function ProjectsSection() {
  const featured = projects.filter((p) => p.featured)

  return (
    <section id="projects" className="reveal" style={{ padding: '120px 60px' }}>
      <SectionLabel>Featured Projects</SectionLabel>
      <SectionTitle>
        O que eu <span style={{ color: 'var(--cyan)' }}>construí</span>
      </SectionTitle>

      <div className="grid md:grid-cols-2 gap-6 mt-14">
        {featured.map((p, i) => (
          <FeaturedProjectCard key={p.slug} project={p} index={i + 1} featured={i === 0} />
        ))}

        <ComingSoonCard
          num="02"
          title="RAG Pipeline"
          desc="Pipeline de Retrieval-Augmented Generation para consulta inteligente de documentos. Estudo prático de embeddings, vector stores e integração com LLMs via LangChain."
          stack={['LangChain', 'FastAPI', 'Python', 'LLMs']}
        />
        <ComingSoonCard
          num="03"
          title="AI Automation Flows"
          desc="Exploração de automações inteligentes com N8N integradas a modelos de linguagem. Estudo de fluxos de processamento e roteamento de dados com LLMs."
          stack={['N8N', 'LLMs', 'Python', 'Webhooks']}
        />
      </div>

      <div className="text-center mt-10">
        <Link
          to="/projetos"
          className="inline-flex items-center gap-2 font-mono text-[13px] font-medium transition-colors"
          style={{ color: 'var(--cyan)', textDecoration: 'none' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#22d3ee')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--cyan)')}
        >
          Ver todos os projetos <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  )
}

function ProjectCardShell({ children, featured }) {
  const ref = useRef(null)
  return (
    <div
      ref={ref}
      className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all ${featured ? 'md:col-span-2 md:grid md:grid-cols-2 md:gap-10 md:items-center' : ''}`}
      style={{
        background: 'var(--glass)',
        border: '1px solid var(--border)',
        backdropFilter: 'blur(10px)',
        padding: 32,
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const mx = ((e.clientX - rect.left) / rect.width) * 100
        const my = ((e.clientY - rect.top) / rect.height) * 100
        e.currentTarget.style.setProperty('--mx', mx + '%')
        e.currentTarget.style.setProperty('--my', my + '%')
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(6,182,212,0.35)'
        e.currentTarget.style.transform = 'translateY(-5px)'
        e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {children}
    </div>
  )
}

function FeaturedProjectCard({ project, index, featured }) {
  const num = String(index).padStart(2, '0')
  return (
    <ProjectCardShell featured={featured}>
      <div>
        <div className="font-mono text-[11px] tracking-wider mb-4" style={{ color: 'var(--text-muted)' }}>
          // project_{num}
        </div>
        <h3 className="text-[22px] font-semibold tracking-[-0.01em] mb-3">{project.title}</h3>
        <p className="font-light leading-[1.7] mb-6" style={{ fontSize: 14, color: 'var(--text-muted)' }}>
          {project.tagline}
        </p>

        <div className="flex flex-wrap gap-2 mb-7">
          {(project.techStack || []).slice(0, 5).map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] rounded"
              style={{
                color: 'var(--indigo)',
                background: 'var(--indigo-dim)',
                border: '1px solid rgba(129,140,248,0.2)',
                padding: '4px 10px',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[12px] font-medium flex items-center gap-[6px] transition-colors"
              style={{ color: 'var(--cyan)', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#22d3ee')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--cyan)')}
            >
              <Github size={14} /> GitHub
            </a>
          )}
          {project.externalUrl && (
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[12px] font-medium flex items-center gap-[6px] transition-colors"
              style={{ color: 'var(--cyan)', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#22d3ee')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--cyan)')}
            >
              Demo →
            </a>
          )}
        </div>
      </div>

      {featured && (
        <div
          className="rounded-[10px] flex flex-col items-center justify-center gap-4 font-mono"
          style={{
            background: 'rgba(6,182,212,0.04)',
            border: '1px solid rgba(6,182,212,0.12)',
            padding: 24,
            minHeight: 200,
          }}
        >
          <div style={{ fontSize: 48 }}>🐶</div>
          <div className="text-[36px] font-bold leading-none" style={{ color: 'var(--cyan)' }}>
            {project.metrics?.[0]?.value || '92%'}
          </div>
          <div className="text-[11px] uppercase tracking-[0.1em]" style={{ color: 'var(--text-muted)' }}>
            Model Accuracy
          </div>
          <div
            className="w-full rounded h-[6px] overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.05)' }}
          >
            <div
              className="h-full rounded"
              style={{
                width: '92%',
                background: 'linear-gradient(90deg, var(--cyan), var(--indigo))',
              }}
            />
          </div>
        </div>
      )}
    </ProjectCardShell>
  )
}

function ComingSoonCard({ num, title, desc, stack }) {
  return (
    <ProjectCardShell>
      <div className="font-mono text-[11px] tracking-wider mb-3" style={{ color: 'var(--text-muted)' }}>
        // project_{num}
      </div>
      <div
        className="inline-flex items-center gap-[6px] font-mono text-[10px] uppercase tracking-[0.08em] mb-3"
        style={{
          color: '#f59e0b',
          background: 'rgba(245,158,11,0.1)',
          border: '1px solid rgba(245,158,11,0.2)',
          padding: '3px 10px',
          borderRadius: 4,
        }}
      >
        <span className="block w-[5px] h-[5px] rounded-full" style={{ background: '#f59e0b' }} />
        EM DESENVOLVIMENTO
      </div>
      <h3 className="text-[22px] font-semibold tracking-[-0.01em] mb-3">{title}</h3>
      <p className="font-light leading-[1.7] mb-6" style={{ fontSize: 14, color: 'var(--text-muted)' }}>
        {desc}
      </p>
      <div className="flex flex-wrap gap-2 mb-7">
        {stack.map((t) => (
          <span
            key={t}
            className="font-mono text-[11px] rounded"
            style={{
              color: 'var(--indigo)',
              background: 'var(--indigo-dim)',
              border: '1px solid rgba(129,140,248,0.2)',
              padding: '4px 10px',
            }}
          >
            {t}
          </span>
        ))}
      </div>
      <a
        href={GITHUB}
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-[12px] font-medium flex items-center gap-[6px]"
        style={{ color: 'var(--cyan)', textDecoration: 'none' }}
      >
        <Github size={14} /> GitHub
      </a>
    </ProjectCardShell>
  )
}

/* ============================================================ */
/* EXPERIENCE                                                   */
/* ============================================================ */

function Experience() {
  const items = [
    {
      date: '2024 — Presente',
      role: 'AI Engineer (Estudos & Projetos)',
      company: 'Independente · Santa Helena/PR',
      result: 'Construindo pipelines RAG funcionais e integrações com LLMs do zero.',
      desc: 'Desenvolvimento de pipelines RAG, integrações com LLMs, automações com N8N e projetos de IA aplicada. Foco em soluções práticas com Python e LangChain.',
      tags: ['LLMs', 'RAG', 'LangChain', 'N8N', 'Python'],
      dotColor: 'var(--cyan)',
      glow: '0 0 12px rgba(6,182,212,0.5)',
    },
    {
      date: '2023 — 2024',
      role: 'Bootcamp de Deep Learning',
      company: 'Formação em IA & Machine Learning',
      result: '92% de acurácia no projeto final — classificador de raças de cães com CNN.',
      desc: 'Bootcamp intensivo em Deep Learning com projeto final entregue: classificador de raças de cães com CNN treinado sobre dataset de imagens reais.',
      tags: ['Deep Learning', 'CNN', 'Python', 'Computer Vision'],
      dotColor: 'var(--indigo)',
      glow: '0 0 12px rgba(129,140,248,0.5)',
      dateColor: 'var(--indigo)',
    },
    {
      date: '2022 — Presente',
      role: 'Bacharel em Ciência da Computação',
      company: 'UTFPR — Santa Helena, PR',
      result: 'Formação técnica sólida em algoritmos, sistemas e engenharia de software.',
      desc: 'Disciplinas de algoritmos, estruturas de dados, sistemas operacionais, banco de dados e engenharia de software — base que sustenta a atuação em IA e backend.',
      tags: ['Algoritmos', 'Estruturas de Dados', 'Banco de Dados', 'Engenharia de Software'],
      dotColor: 'rgba(6,182,212,0.4)',
      glow: 'none',
    },
  ]

  return (
    <section id="experience" className="reveal" style={{ padding: '120px 60px' }}>
      <SectionLabel>Timeline</SectionLabel>
      <SectionTitle>
        Minha <span style={{ color: 'var(--cyan)' }}>jornada</span>
      </SectionTitle>

      <div className="relative pl-[30px] mt-14">
        <div
          className="absolute left-0 top-0 bottom-0 w-px"
          style={{
            background: 'linear-gradient(to bottom, var(--cyan), var(--indigo), transparent)',
          }}
        />

        {items.map((it, i) => (
          <div key={i} className={`relative pl-10 ${i === items.length - 1 ? 'pb-0' : 'pb-14'}`}>
            <span
              className="absolute -left-[5px] top-1 w-[11px] h-[11px] rounded-full"
              style={{
                background: 'var(--bg)',
                border: `2px solid ${it.dotColor}`,
                boxShadow: it.glow,
              }}
            />
            <div
              className="font-mono text-[11px] uppercase tracking-[0.1em] mb-[10px]"
              style={{ color: it.dateColor || 'var(--cyan)' }}
            >
              {it.date}
            </div>
            <div className="text-[18px] font-semibold mb-1">{it.role}</div>
            <div className="text-[13px] mb-[14px]" style={{ color: 'var(--text-muted)' }}>{it.company}</div>
            <div
              className="font-mono text-[12px] font-medium inline-block mb-3 rounded-md tracking-wide"
              style={{
                color: 'var(--cyan)',
                background: 'var(--cyan-dim)',
                border: '1px solid rgba(6,182,212,0.2)',
                padding: '6px 12px',
              }}
            >
              {it.result}
            </div>
            <p className="text-[14px] font-light leading-[1.7]" style={{ color: 'var(--text-muted)' }}>
              {it.desc}
            </p>
            <div className="flex flex-wrap gap-[6px] mt-[14px]">
              {it.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] rounded"
                  style={{
                    color: 'var(--text-muted)',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--border)',
                    padding: '3px 10px',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ============================================================ */
/* CTA STRIP                                                    */
/* ============================================================ */

function CtaStrip() {
  return (
    <div
      className="reveal flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-[1] overflow-hidden"
      style={{
        margin: '0 60px',
        background: 'linear-gradient(135deg, rgba(6,182,212,0.08) 0%, rgba(129,140,248,0.08) 100%)',
        border: '1px solid rgba(6,182,212,0.2)',
        borderRadius: 16,
        padding: '40px 48px',
      }}
    >
      <div className="flex-1">
        <div
          className="font-mono text-[11px] uppercase tracking-[0.2em] mb-[10px] flex items-center gap-2"
          style={{ color: 'var(--cyan)' }}
        >
          <span className="block h-px w-4" style={{ background: 'var(--cyan)' }} />
          Open to work
        </div>
        <div className="text-[26px] font-bold leading-[1.2] tracking-[-0.02em] mb-2">
          Gostou do que viu?{' '}
          <span style={{ color: 'var(--cyan)' }}>Vamos trabalhar juntos.</span>
        </div>
        <div className="text-[14px] font-light" style={{ color: 'var(--text-muted)' }}>
          Disponível para estágios, projetos freelance e oportunidades em IA &amp; Backend — Curitiba/PR ou remote.
        </div>
      </div>
      <div className="flex flex-col gap-[10px] items-end">
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center gap-2 font-mono text-[13px] font-semibold tracking-wide rounded-md"
          style={{
            background: 'var(--cyan)',
            color: 'var(--bg)',
            padding: '12px 24px',
            textDecoration: 'none',
          }}
        >
          <Mail size={14} />
          Enviar mensagem
        </a>
        <div
          className="font-mono text-[11px] flex items-center gap-[6px]"
          style={{ color: 'var(--text-muted)' }}
        >
          <span
            className="block w-[6px] h-[6px] rounded-full"
            style={{ background: '#4ade80', boxShadow: '0 0 8px #4ade80' }}
          />
          Resposta em menos de 24 horas
        </div>
      </div>
    </div>
  )
}

/* ============================================================ */
/* CONTACT                                                      */
/* ============================================================ */

function Contact() {
  return (
    <section id="contact" className="reveal text-center" style={{ padding: '120px 60px' }}>
      <div className="max-w-[640px] mx-auto">
        <SectionLabel center>Contact</SectionLabel>
        <SectionTitle>
          Pronto para <span style={{ color: 'var(--cyan)' }}>começar?</span>
        </SectionTitle>
        <p
          className="font-light leading-[1.7] mt-4"
          style={{ fontSize: 15, color: 'var(--text-muted)' }}
        >
          Escolha como prefere entrar em contato. Estou ativo em todas as plataformas e respondo rapidamente.
        </p>

        <div className="grid md:grid-cols-3 gap-4 my-10">
          <ContactChannel
            href={`mailto:${EMAIL}`}
            icon={<Mail size={22} />}
            label="Email"
            value={EMAIL}
            action="Enviar email →"
            color="var(--cyan)"
            bg="var(--cyan-dim)"
          />
          <ContactChannel
            href={LINKEDIN}
            icon={<Linkedin size={22} />}
            label="LinkedIn"
            value="Vitor Eduardo de Lima Kenor"
            action="Ver perfil →"
            color="#0ea5e9"
            bg="rgba(14,165,233,0.1)"
          />
          <ContactChannel
            href={GITHUB}
            icon={<Github size={22} />}
            label="GitHub"
            value="@VitorEduardoLimaKenor"
            action="Ver código →"
            color="var(--indigo)"
            bg="var(--indigo-dim)"
          />
        </div>

        <div
          className="flex items-center justify-center gap-[10px] font-mono text-[12px] mt-2"
          style={{ color: 'var(--text-muted)' }}
        >
          <span
            className="block w-2 h-2 rounded-full pulse-ring"
            style={{ background: '#4ade80', boxShadow: '0 0 10px #4ade80' }}
          />
          <span>Online agora · Disponível para novos projetos e oportunidades</span>
        </div>
      </div>
    </section>
  )
}

function ContactChannel({ href, icon, label, value, action, color, bg }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="flex flex-col items-center gap-[14px] rounded-2xl text-center transition-all relative overflow-hidden"
      style={{
        background: 'var(--glass)',
        border: '1px solid var(--border)',
        padding: '28px 20px',
        textDecoration: 'none',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.borderColor = 'rgba(6,182,212,0.3)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.borderColor = 'var(--border)'
      }}
    >
      <div
        className="rounded-xl flex items-center justify-center"
        style={{ width: 48, height: 48, background: bg, color }}
      >
        {icon}
      </div>
      <div className="font-mono text-[10px] font-medium uppercase tracking-[0.15em]" style={{ color: 'var(--text-muted)' }}>
        {label}
      </div>
      <div className="text-[13px] font-medium break-all" style={{ color: 'var(--text-dim)' }}>
        {value}
      </div>
      <div className="font-mono text-[11px] font-semibold mt-1" style={{ color }}>
        {action}
      </div>
    </a>
  )
}

/* ============================================================ */
/* PAGE                                                         */
/* ============================================================ */

export default function Home() {
  // reveal-on-scroll
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <div className="relative">
      <Hero />
      <div className="section-divider mx-[60px]" />
      <About />
      <div className="section-divider mx-[60px]" />
      <Skills />
      <div className="section-divider mx-[60px]" />
      <ProjectsSection />
      <Experience />
      <div className="section-divider mx-[60px]" />
      <CtaStrip />
      <Contact />
    </div>
  )
}
