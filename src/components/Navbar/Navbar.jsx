import React, {useState,useContext } from "react";
import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils";
import {text} from "../../data/translation"
import LangContext from "../../LanguageContext";

export const Navbar = () =>{
    const [menuOpen,setMenuOpen] = useState(false);
    const [flagOpen,setFlagOpen] = useState(false);
    const { lang, setLang } = useContext(LangContext);
    return (
        
    <nav className={styles.navbar}>
        <div className={styles.langMenu}>
            <img 
                className={styles.langBtn}
                src={getImageUrl(`nav/${lang}.png`)}
                alt="menu-button"
                onClick={() => setFlagOpen(!flagOpen)}
            />
            <ul
            className={`${styles.langItems} ${flagOpen && styles.langOpen}`}
            onClick={() => setFlagOpen(false)}
            >
                <li>
                    <img src={getImageUrl("nav/it.png")} alt="it" onClick={() => setLang("it")}/>
                </li>
                <li>
                    <img src={getImageUrl("nav/en.png")} alt="en" onClick={() => setLang("en")}/>
                </li>
                <li>
                    <img src={getImageUrl("nav/es.png")} alt="es" onClick={() => setLang("es")}/>
                </li>
            </ul>
        </div>
        
        <div className={styles.sectionsMenu}>
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
                    <a href="#about">{text[lang].navAbout}</a>
                </li>
                <li>
                    <a href="#experience">{text[lang].navExperience}</a>
                </li>
                <li>
                    <a href="#projects">{text[lang].navProjects}</a>
                </li>
                <li>
                    <a href="#contact">{text[lang].navContact}</a>
                </li>
            </ul>
        </div>
    </nav>
    );
};