import React, {useContext} from "react";
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";
import {text} from "../../data/translation"
import LangContext from "../../LanguageContext";


export const Hero = () => {
    const { lang, setLang } = useContext(LangContext);
    return(
        <section className={styles.hero} id="home">
            <div className={styles.text}>
                <h1>Alessandro Ciccarone</h1>
                <p>{text[lang].heroText}</p>
                <div className={styles.buttons}>
                    <a href="#contact"> {text[lang].heroContact}</a>
                    <a href="https://raw.githubusercontent.com/ale70029/portoflio_website/master/src/data/CV%20Alessandro%20Ciccarone.pdf">
                        {text[lang].curriculum}
                    </a>
                </div>
            </div>
            <div className={styles.photo}>
                <img src={getImageUrl("hero/heroImage.png")} alt="Hero-image" />
            </div>
        </section>
    )
}