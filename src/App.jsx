import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Technologies from './components/Technologies'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased">
      <Background />
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 lg:px-8">
        <Hero />
        <Experience />
        <Skills />
        <Technologies />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
