import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import MatrixRain from './components/MatrixRain'

function App() {
  return (
    <div className="bg-hack-dark min-h-screen font-mono text-gray-300 relative">
      <div className="scanline" />
      <MatrixRain />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}

export default App
