import React from 'react'
import {getImageUrl} from "../../utils"
import styles from "./About.module.css"
import about from "../../data/about.json"
import { text, language } from '../../data/translation'

export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>{text[language].About}</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} 
                alt="About image" 
                className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                {about.map((about,id) =>{
                    return <li key={id} className={styles.aboutItem}>
                                <img src={getImageUrl(about.icon)} alt="icon" />
                                <div className={styles.aboutItemText}>
                                    <h3>{about.title[language]}</h3>
                                    <p>{about.description[language]}</p>
                                </div>
                            </li>
                    })}   
            </ul>
        </div>
    </section>
  )
}
