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

            <a href="mailto:alessandro.ciccarone1994@gmail.com">
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email" />
                    <h4>alessandro.ciccarone1994@gmail.com</h4>
                </li>
            </a>

            <a href="https://www.linkedin.com/in/alessandro-ciccarone/">
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn" />
                    <h2>LinkedIn</h2>
                </li>
            </a>

            <a href="https://github.com/ale70029">
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Github" />
                    <h2> GitHub</h2>
                </li>
            </a>

        </ul>
    </footer>
  )
}
