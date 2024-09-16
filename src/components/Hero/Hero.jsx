import React, {useContext} from "react";
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";
import {text} from "../../data/translation"
import LangContext from "../../LanguageContext";


export const Hero = () => {
    const { lang, setLang } = useContext(LangContext);
    return(
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>{text[lang].heroGreeting}</h1>
                <p className={styles.description}>{text[lang].heroText}</p>
                <a className={styles.contactBtn} 
                   href="#contact" >
                    {text[lang].heroContact}
                </a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} 
                alt="Hero-image" 
                className={styles.heroImg}
            />
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    );
};
