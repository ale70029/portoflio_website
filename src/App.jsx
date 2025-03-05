import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styles from './App.module.css'
import { LangProvider } from "./LanguageContext"

import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { Projects } from './components/Projects/Projects'
import { Contact } from "./components/Contact/Contact"


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

export default App;