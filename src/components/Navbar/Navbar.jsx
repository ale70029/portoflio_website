import React, { useState, useContext, useEffect } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { text } from "../../data/translation";
import LangContext from "../../LanguageContext";

export const Navbar = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  const [languageOpen, setlanguageOpen] = useState(false);
  const { lang, setLang } = useContext(LangContext);

  return (

    <section className={styles.navbar}>
        <ul className={styles.anchors}>
            <li> <a href="#about">{text[lang].navAbout}</a> </li>
            <li> <a href="#experience">{text[lang].navExperience}</a> </li>
            <li> <a href="#projects">{text[lang].navProjects}</a> </li>
            <li> <a href="#contact">{text[lang].navContact}</a> </li>
        </ul>
    </section>
    
  );
};


/* 
<div className={styles.navbar}>
    
        <div className={styles.logoContainer}>
            <img src={getImageUrl(`nav/logo.png`)} alt="Logo" />
        </div>
      

   
      
        <div className={`${styles.menuButton} ${menuOpen ? styles.open : ""}`} onClick={ () => {setmenuOpen(!menuOpen)}}>
            <p>Menu</p> 
        </div>

        <div className={`${styles.sectionContainer} ${menuOpen ? styles.open : ""}`} onClick={ () => {setmenuOpen(!menuOpen)}}>
            <ul className={styles.links} >
                <li> <a href="#home">Home</a> </li>
                <li> <a href="#about">{text[lang].navAbout}</a> </li>
                <li> <a href="#experience">{text[lang].navExperience}</a> </li>
                <li> <a href="#projects">{text[lang].navProjects}</a> </li>
                <li> <a href="#contact">{text[lang].navContact}</a> </li>
            </ul>
        </div>

        <div className={styles.langContainer}>

            <div className={`${styles.lang} ${languageOpen ? styles.open : ""}`} onClick={ () => {setlanguageOpen(!languageOpen)}}>
                <img src={getImageUrl(`nav/${lang}.png`)} alt="" />
                <p>{text[lang].language}</p>
            </div>

            <div className={`${styles.languageMenu} ${languageOpen ? styles.open : ""}`} onClick={ () => {setlanguageOpen(!languageOpen)}}>
                <ul className={styles.languages} >
                    <li onClick={() => setLang("it")}>  
                        <img src={getImageUrl(`nav/it.png`)} alt="" />
                        Italiano
                    </li>
                    <li onClick={() => setLang("en")}>  
                        <img src={getImageUrl(`nav/en.png`)} alt="" />
                        English
                    </li>
                    <li onClick={() => setLang("es")}>  
                        <img src={getImageUrl(`nav/es.png`)} alt="" />
                        Español
                    </li>
                </ul>
            </div>
        </div>
    </div> */