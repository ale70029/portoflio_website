import React, {useContext} from 'react'
import {getImageUrl} from "../../utils"
import {text} from "../../data/translation"
import styles from "./Contact.module.css"
import LangContext from "../../LanguageContext";
import ContactForm from './ContactForm';


export const Contact = () => {
    const { lang, setLang } = useContext(LangContext);
  return (
    <footer className={styles.contact} id='contact'>
            <ul>
                <a href="mailto:alessandro.ciccarone1994@gmail.com">
                    <li>
                        <img src={getImageUrl("contact/emailIcon.png")} alt="Email" />
                        <p>{text[lang].mail}</p>
                    </li>
                </a>
                <a href="https://www.linkedin.com/in/alessandro-ciccarone/">
                    <li>
                        <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn" />
                        <p>LinkedIn</p>
                    </li>
                </a>
                <a href="https://github.com/ale70029">
                    <li>
                        <img src={getImageUrl("contact/githubIcon.png")} alt="Github" />
                        <p> GitHub</p>
                    </li>
                </a>
            </ul>
            <h2>2024 - Alessandro Ciccarone</h2>
    </footer>
  )
}