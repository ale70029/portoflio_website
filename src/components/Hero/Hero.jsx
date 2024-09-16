import React, {useState} from "react";
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";
import {text,language} from "../../data/translation"


export const Hero = () => {
    return(
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>{text[language].heroGreeting}</h1>
                <p className={styles.description}>{text[language].heroText}</p>
                <a className={styles.contactBtn} 
                   href="#contact" >
                    {text[language].heroContact}
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
