const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer
      className="relative z-[1] flex flex-col md:flex-row items-center justify-between gap-3 px-[60px] py-8 font-mono text-[12px]"
      style={{ borderTop: '1px solid var(--border)', color: 'var(--text-muted)' }}
    >
      <span>
        vitor<span style={{ color: 'var(--cyan)' }}>.dev</span>
      </span>
      <span>Desenvolvido com Python &amp; HTML</span>
      <span>© {year} Vitor Eduardo de Lima Kenor</span>
    </footer>
  )
}
