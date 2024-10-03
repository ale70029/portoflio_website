import React,{useContext} from 'react'
import skills from "../../data/skills.json"
import history from "../../data/history.json"
import { getImageUrl } from '../../utils'
import {text} from "../../data/translation"
import styles from "./Experience.module.css"
import LangContext from "../../LanguageContext";


export const Experience = () => {
    const { lang, setLang } = useContext(LangContext);
  return (
    <section id='experience' className={styles.container}>
        <h2 className={styles.title}>{text[lang].navExperience}</h2>

        <div className={styles.content}>

            <div className={styles.skillsContainer}>
                <div className={styles.skills}>
                    {skills.map((skill,id) =>{
                        return <div key={id} 
                        className={`${styles.skill} ${skill.level === 'advanced' ? styles.advanced : ''} 
                        ${skill.level === 'intermediate' ? styles.intermediate : ''} 
                        ${skill.level === 'beginner' ? styles.beginner : ''}`}>
                            <div className={styles.skillImageContainer}>
                                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    })}
                </div>
            </div>
            
            <hr className={styles.divider}></hr>

            <ul className={styles.history}>
                {
                    history.map((historyItem,id) => {
                        return <li key={id} className={styles.historyItem}>
                            <img src={getImageUrl(historyItem.imageSrc)} alt={historyItem.organisation} />
                            <div className={styles.historyItemDetails}>
                                <h3> {historyItem.role[lang]}</h3>
                                <h2> {historyItem.organisation}</h2>
                                <p>{historyItem.startDate + 
                                    " - " + 
                                    (historyItem.endDate === "" ? text[lang].onGoing : historyItem.endDate)}
                                </p>

                                <ul>{historyItem.experiences.map((experience,id) => {
                                    return <li key={id}>{experience}</li>
                                    })}
                                </ul>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    </section>
  )
}
