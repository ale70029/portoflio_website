import React, { useContext } from 'react'
import {getImageUrl} from "../../utils"
import styles from "./About.module.css"
import about from "../../data/about.json"
import LangContext from "../../LanguageContext";

export const About = () => {
  const { lang, setLang } = useContext(LangContext);

  return (
    <section className={styles.about} id='about'>
        <ul className={styles.roles}>
                {about.map((about,id) =>{
                    return <li key={id} className={styles.role}>
                                <img src={getImageUrl(about.icon)} alt="icon" />
                                <h1>{about.title[lang]}</h1>
                                <p>{about.description[lang]}</p>
                            </li>
                })}   
        </ul>
    </section>
  )
}