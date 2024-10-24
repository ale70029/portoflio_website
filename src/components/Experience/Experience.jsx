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
    const [area, setArea] = useState("all");

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
                return <div key={id} 
                className={styles.skill}>
                    <div className={styles.skillImageContainer}>
                        <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                    </div>
                    <h1>{skill.title}</h1>
                    <p>{getLevel(skill.level)}</p>
                </div>
            })}

        </div>
        <hr className={styles.separator}></hr>
        <div className={styles.history}>

        </div>
    </section>
  )
}


// <section id='experience' className={styles.container}>
//         <h2 className={styles.title}>{text[lang].navExperience}</h2>

//         <div className={styles.content}>

//             <div className={styles.legend}>
//                 <ul className={styles.levels}>
//                     <li>{text[lang].beginner} ★ </li>
//                     <li>{text[lang].intermediate} ★★ </li>
//                     <li>{text[lang].advanced} ★★★</li>
//                 </ul>
//             </div>

//             <div className={styles.filter}>
//                 <label htmlFor="filter">{text[lang].filter}</label>
//                 <select onChange={handleFilterChange}>
//                     <option value="">{text[lang].all}</option>
//                     <option value="Frontend">Frontend</option>
//                     <option value="Backend">Backend</option>
//                     <option value="Data">Data</option>
//                     <option value="IDE">IDE</option>
//                     <option value="OS">OS</option>
//                 </select>
//             </div>

//             <div className={styles.skillsContainer}>
//                 <div className={styles.skills}>
//                     {items.map((skill,id) =>{
//                         return <div key={id} 
//                         className={styles.skill}>
//                             <div className={styles.skillImageContainer}>
//                                 <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
//                             </div>
//                             <p>{skill.title}</p>
//                             <p className={styles.levelStars}>{getLevel(skill.level)}</p>
//                         </div>
//                     })}
//                 </div>
//             </div>
            
//             <hr className={styles.divider}></hr>

//             <ul className={styles.history}>
//                 {
//                     history.map((historyItem,id) => {
//                         return <li key={id} className={styles.historyItem}>
//                             <img src={getImageUrl(historyItem.imageSrc)} alt={historyItem.organisation} />
//                             <div className={styles.historyItemDetails}>
//                                 <h3> {historyItem.role[lang]}</h3>
//                                 <h2> {historyItem.organisation}</h2>
//                                 <p>{historyItem.startDate + 
//                                     " - " + 
//                                     (historyItem.endDate === "" ? text[lang].onGoing : historyItem.endDate)}
//                                 </p>

//                                 <ul>{historyItem.experiences.map((experience,id) => {
//                                     return <li key={id}>{experience}</li>
//                                     })}
//                                 </ul>
//                             </div>
//                         </li>
//                     })
//                 }
//             </ul>
//         </div>
//     </section>