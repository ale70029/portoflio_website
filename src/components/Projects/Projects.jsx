import React,{useContext} from 'react'
import projects from "../../data/projects.json"
import {text} from "../../data/translation"
import { ProjectCard } from './ProjectCard'
import styles from "./Projects.module.css"
import LangContext from "../../LanguageContext";




export const Projects = () => {
  const { lang, setLang } = useContext(LangContext);
  return (
    <section id='projects' className={styles.container} >
        <h2 className={styles.title}>{text[lang].navProjects}</h2>
        <div className={styles.projects}>
            {projects.map((project,id) => {
                return(
                    <ProjectCard key={id} project={project} />
                )
            })}
        </div>
    </section>
  )
}
