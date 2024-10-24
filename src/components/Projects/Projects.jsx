import React,{useContext} from 'react'
import projects from "../../data/projects.json"
import {text} from "../../data/translation"
import { getImageUrl } from '../../utils'
import { ProjectCard } from './ProjectCard'
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
                    <ul className={styles.itemSkills}>{project.skills.map((skill,id) =>{
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


// <section id='projects' className={styles.container} >
//         <h2 className={styles.title}>{text[lang].navProjects}</h2>
//         <div className={styles.projects}>
//             {projects.map((project,id) => {
//                 return(
//                   <div className={styles.container}>

//                   <img src={getImageUrl(project.imageSrc)} 
//                       alt={project.title[lang]}
//                       className={styles.image}
//                   />
      
//                   <h3 className={styles.title}>{project.title[lang]}</h3>
//                   <p className={styles.description}>{project.description[lang]}</p>
                  
//                   <ul className={styles.skills}>{project.skills.map((skill,id) =>{
//                       return(
//                           <li key={id} className={styles.skill}>
//                               {skill}
//                           </li>
//                       )
//                       })}
//                   </ul>
      
//                   <div className={styles.links}>
//                       <ul className={styles.links}>{Object.entries(project.links).map(([key,link]) =>{
//                           return(
//                           <li >
//                               <a className={styles.link} href={link}>{key}</a>
//                           </li>
//                           )
//                           })}
//                       </ul>
//                   </div>
      
//               </div>
//                 )
//             })}
//         </div>
//     </section>