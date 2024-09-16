import React, {useState} from "react";
import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils";
import {text,language,getFlag,setLanguage} from "../../data/translation"

export const Navbar = () =>{
    const [menuOpen,setMenuOpen] = useState(false);
    const [flagOpen,setflagOpen] = useState(false);
    /*const [language, setLanguage] = useState("it");*/
    return (<nav className={styles.navbar}>
    <a href="/" className={styles.title}>{text[language].navHome}</a>
    
    <div className={styles.menu1}>
        <img 
            className={styles.menuBtn}
            src={getImageUrl(getFlag({language}))}
            alt="menu-button"
            onClick={() => alert(language)}
        />
        <ul
           className={`${styles.menuItems} ${flagOpen && styles.menuOpen}`}
           onClick={() => setflagOpen(false)}
        >
            <li>
                <img src={getImageUrl("nav/it.png")} alt="it" onClick={() => setLanguage("it")}/>
            </li>
            <li>
                <img src={getImageUrl("nav/en.png")} alt="en" onClick={() => setLanguage("en")}/>
            </li>
            <li>
                <img src={getImageUrl("nav/es.png")} alt="es" onClick={() => setLanguage("es")}/>
            </li>
        </ul>
    </div>
    
    <div className={styles.menu2}>
        <img 
            className={styles.menuBtn}
            src={
                menuOpen
                ? getImageUrl("nav/closeIcon.png")
                : getImageUrl("nav/menuIcon.png")
            }    
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
            className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}
        >
            <li>
                <a href="#about">{text[language].navAbout}</a>
            </li>
            <li>
                <a href="#experience">{text[language].navExperience}</a>
            </li>
            <li>
                <a href="#projects">{text[language].navProjects}</a>
            </li>
            <li>
                <a href="#contact">{text[language].navContact}</a>
            </li>
        </ul>
    </div>

    </nav>
    );
};