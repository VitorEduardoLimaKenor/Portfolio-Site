/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:        '#080b14',
        bg2:       '#0d1120',
        bg3:       '#111827',
        cyan2:     '#06b6d4',
        indigo2:   '#818cf8',
        text2:     '#e2e8f0',
        muted:     '#64748b',
        dim:       '#94a3b8',
      },
      fontFamily: {
        sans:    ['Space Grotesk', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'cyan-glow':   '0 0 30px rgba(6,182,212,0.5)',
        'cyan-soft':   '0 0 60px rgba(6,182,212,0.08), 0 32px 64px rgba(0,0,0,0.4)',
        'indigo-glow': '0 0 20px rgba(129,140,248,0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
