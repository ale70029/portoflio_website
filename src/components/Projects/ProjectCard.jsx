import React,{useContext} from 'react'
import { getImageUrl } from '../../utils'
import styles from "./ProjectCard.module.css"
import LangContext from "../../LanguageContext";

export const ProjectCard = ({project}) => {
    const { lang, setLang } = useContext(LangContext);
    return(
        <div className={styles.container}>

            <img src={getImageUrl(project.imageSrc)} 
                alt={project.title[lang]}
                className={styles.image}
            />

            <h3 className={styles.title}>{project.title[lang]}</h3>
            <p className={styles.description}>{project.description[lang]}</p>
            
            <ul className={styles.skills}>{project.skills.map((skill,id) =>{
                return(
                    <li key={id} className={styles.skill}>
                        {skill}
                    </li>
                )
                })}
            </ul>

            <div className={styles.links}>
                <ul className={styles.links}>{Object.entries(project.links).map(([key,link]) =>{
                    return(
                    <li >
                        <a className={styles.link} href={link}>{key}</a>
                    </li>
                    )
                    })}
                </ul>
            </div>

        </div>
    )
};
