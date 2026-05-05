import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'
import ScrollProgress from './components/layout/ScrollProgress'
import FloatingCTA from './components/layout/FloatingCTA'
import BackgroundFX from './components/layout/BackgroundFX'

import Home from './pages/Home'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollProgress />
      <BackgroundFX />
      <FloatingCTA />
      <div className="min-h-screen flex flex-col relative" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
        <Header />
        <main className="flex-1 relative z-[1]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
