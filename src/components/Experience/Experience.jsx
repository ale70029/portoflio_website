import React,{useContext,useState} from 'react'
import skills from "../../data/skills.json"
import history from "../../data/history.json"
import { getImageUrl } from '../../utils'
import {text} from "../../data/translation"
import styles from "./Experience.module.css"
import LangContext from "../../LanguageContext";
import '../../vars.css';


export const Experience = () => {
    const { lang, setLang } = useContext(LangContext);
    const [items, setItems] = useState(skills);
    const [area, setArea] = useState("");

  const handleFilter = (filter) => {
    setArea(filter);
    if (filter === '') {
        setItems(skills);
    } else {
      const filteredItems = skills.filter(item => item.area === filter);
      setItems(filteredItems);
    }
  };

  const getLevel = (level) => {
    if (level === "beginner") {
      return "★";
    } else if (level === "intermediate") {
      return "★★";
    } else if (level === "advanced") {
      return "★★★";
    } else {
      return "";
    }
  };
  
  return (
    <section className={styles.experience} id='experience'>
        <h1>{text[lang].navExperience}</h1>

        {/* SKILLS */}
            <div className={styles.filters}>
                <p onClick={() => {handleFilter("")}}  className={`${area === "" ? styles.selected : ""}`}>  {text[lang].filters.all} </p>
                <p onClick={() => {handleFilter("Frontend")}}   className={`${area === "Frontend" ? styles.selected : ""}`}>   {text[lang].filters.FE}</p>
                <p onClick={() => {handleFilter("Backend")}}   className={`${area === "Backend" ? styles.selected : ""}`}>   {text[lang].filters.BE}</p>
                <p onClick={() => {handleFilter("Data")}} className={`${area === "Data" ? styles.selected : ""}`}> {text[lang].filters.Data}</p>
                <p onClick={() => {handleFilter("IDE")}}  className={`${area === "IDE" ? styles.selected : ""}`}>  {text[lang].filters.IDE}</p>
                <p onClick={() => {handleFilter("OS")}}   className={`${area === "OS" ? styles.selected : ""}`}>   {text[lang].filters.OS}</p>
            </div>
            <hr className={styles.separator}></hr>
            <ul className={styles.levels}>
                <li>{text[lang].beginner} ★ </li>
                <li>{text[lang].intermediate} ★★ </li>
                <li>{text[lang].advanced} ★★★</li>
            </ul>
            <div className={styles.skills}>
                {items.map((skill,id) =>{
                    return <div key={id} className={styles.skill}>
                        <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                        <h1>{skill.title}</h1>
                        <p>{getLevel(skill.level)}</p>
                    </div>
                })}
            </div>
            <hr className={styles.separator}></hr>

        {/* HISTORY */}
            <div className={styles.history}>
                {history.map((item,id) => {
                    return <li key={id} className={styles.item}>
                                    <img src={getImageUrl(item.imageSrc)} alt={item.organisation} />
                                    <h1> {item.role[lang]}</h1>
                                    <h2> {item.organisation}</h2>
                                    <h3>{item.startDate + " - " + (item.endDate === "" ? text[lang].onGoing : item.endDate)}</h3>                       
                                <ul>{item.experiences.map((experience,id) => {
                                    return <li key={id}>{experience}</li>
                                    })}
                                </ul>
                            </li>
                })}
            </div>
    </section>
  )
}