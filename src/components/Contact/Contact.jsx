import React, {useContext} from 'react'
import {getImageUrl} from "../../utils"
import {text} from "../../data/translation"
import styles from "./Contact.module.css"
import LangContext from "../../LanguageContext";


export const Contact = () => {
    const { lang, setLang } = useContext(LangContext);
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>{text[lang].navContact}</h2>
            <p>{text[lang].contactMessage}</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email" />
                <a href="mailto:ale70029@gmail.com">ale70029@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn" />
                <a href="https://www.linkedin.com/in/alessandro-ciccarone-a88b0611b/">LinkedIn</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github" />
                <a href="https://github.com/ale70029">GitHub</a>
            </li>
        </ul>
    </footer>
  )
}
