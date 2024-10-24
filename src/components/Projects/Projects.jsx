import React,{useContext} from 'react'
import projects from "../../data/projects.json"
import {text} from "../../data/translation"
import { getImageUrl } from '../../utils'
import styles from "./Projects.module.css"
import LangContext from "../../LanguageContext";

export const Projects = () => {
  const { lang, setLang } = useContext(LangContext);
  return (
    <section className={styles.projects} id='projects' >
        <h1>{text[lang].navProjects}</h1>
        <div className={styles.items}>
            {projects.map((project,id) => {
                return(
                  <div className={styles.item}>
                    <img src={getImageUrl(project.imageSrc)} alt={project.title[lang]}/>
                    <h1>{project.title[lang]}</h1>
                    <p>{project.description[lang]}</p>
                    <ul className={styles.skills}>{project.skills.map((skill,id) =>{
                        return(
                          <li>{skill}</li>
                        )})}
                    </ul>
                    <div className={styles.links}>
                        {Object.entries(project.links).map(([key,link]) =>{
                            return(
                                <a href={link}>{key}</a>
                            )})
                        }
                    </div>
                  </div>
                )})}
        </div>
    </section>
  )
}