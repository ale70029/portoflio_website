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
                </div>
            </div>
            <div className={styles.photo}>
                <img src={getImageUrl("hero/heroImage.png")} alt="Hero-image" />
            </div>

        </section>
    );
};


// <div  className={styles.container}>
//             <div id="home" className={styles.imgContainer}>
//                             <img src={getImageUrl("hero/heroImage.png")} 
//                                     alt="Hero-image" 
//                                 />
//             </div>
//             <div className={styles.hero}>
//                 <h1 className={styles.title}>{text[lang].heroGreeting}
//                                              <span className={styles.heroName}>{text.heroName}</span>
//                 </h1>
//                 <p className={styles.description}>{text[lang].heroText}</p>
//                 <a className={styles.contactBtn} 
//                    href="#contact" >
//                     {text[lang].heroContact}
//                 </a>
//             </div>

           
            
//         </div>