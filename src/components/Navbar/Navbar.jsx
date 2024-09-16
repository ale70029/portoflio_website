import React, {useState,useContext } from "react";
import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils";
import {text} from "../../data/translation"
import LangContext from "../../language";

export const Navbar = () =>{
    const [menuOpen,setMenuOpen] = useState(false);
    const [flagOpen,setflagOpen] = useState(false);
    const { lang, setLang } = useContext(LangContext);
    return (<nav className={styles.navbar}>
    <a href="/" className={styles.title}>{text[lang].navHome}</a>
    
    <div className={styles.menu1}>
        <img 
            className={styles.menuBtn}
            src={getImageUrl(`nav/it.png`)}
            alt="menu-button"
        />
        <ul
           className={`${styles.menuItems} ${flagOpen && styles.menuOpen}`}
           onClick={() => setflagOpen(false)}
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