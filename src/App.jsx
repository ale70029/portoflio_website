import styles from './App.module.css'
import { About } from './components/About2/About'
import { Experience } from './components/Experience2/Experience'
import { Hero } from './components/Hero2/Hero'
import { Navbar } from './components/Navbar2/Navbar'
import { Projects } from './components/Projects2/Projects'
import { Contact } from "./components/Contact2/Contact"
import { LangProvider } from "./LanguageContext"



function App () {
  
  return (
    <LangProvider>
      <div className={styles.App}>
      <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        
      </div>
    </LangProvider>

  )
}

/*
function App () {
  
  return (
    <LangProvider>
      <div className={styles.App}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </LangProvider>

  )
}
  */

export default App
