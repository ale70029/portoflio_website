import React, { useContext } from 'react'
import {getImageUrl} from "../../utils"
import styles from "./About.module.css"
import about from "../../data/about.json"
import { text } from '../../data/translation'
import LangContext from "../../LanguageContext";

export const About = () => {
    const { lang, setLang } = useContext(LangContext);
  return (
    <div className={styles.container} id='about'>
        <h2 className={styles.title}>{text[lang].navAbout}</h2>
        <div className={styles.content}>
            <ul className={styles.aboutItems}>
                {about.map((about,id) =>{
                    return <li key={id} className={styles.aboutItem}>
                                <img src={getImageUrl(about.icon)} alt="icon" />
                                <div className={styles.aboutItemText}>
                                    <h3>{about.title[lang]}</h3>
                                    <p>{about.description[lang]}</p>
                                </div>
                            </li>
                    })}   
            </ul>
        </div>
    </div>
  )
}
