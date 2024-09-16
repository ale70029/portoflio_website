import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./ProjectCard.module.css"
import {language} from "../../data/translation"

export const ProjectCard = ({project}) => {
    return(
        <div className={styles.container}>
            <img src={getImageUrl(project.imageSrc)} 
                alt={project.title[language]}
                className={styles.image}
            />
            <h3 className={styles.title}>{project.title[language]}</h3>
            <p className={styles.description}>{project.description[language]}</p>
            <ul className={styles.skills}>{project.skills.map((skill,id) =>{
                return(
                    <li key={id} className={styles.skill}>
                        {skill}
                    </li>
                )
                })}
            </ul>
            <div className={styles.links}>
                {project.demo!="no"   && (<a href={project.demo} className={styles.link}>Demo</a>)}
                {project.source!="no" && (<a href={project.source} className={styles.link}>Source</a>)}
            </div>
        </div>
    )
}
