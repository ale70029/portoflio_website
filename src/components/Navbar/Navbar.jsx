import React, {useContext} from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { text } from "../../data/translation";
import LangContext from "../../LanguageContext";

export const Navbar = () => {
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
  )
}