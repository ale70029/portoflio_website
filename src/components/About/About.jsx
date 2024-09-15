import React from 'react'
import {getImageUrl} from "../../utils"
import styles from "./About.module.css"

export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>Competenze</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} 
                alt="About image" 
                className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>Posso sviluppare pagine web come questa, usando HTML, CSS, JavaScript e React.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>Posso sviluppare applicazioni con Java, Python e C#.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/dataIcon.png")} alt="Ui icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Data Analyst</h3>
                        <p>Posso creare report raccogliendo dati ed elaborandoli con Excel,PowerBI o Looker Studio.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="Ui icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Graphic Designer</h3>
                        <p>Posso creare grafiche con Photoshop.</p>
                    </div>
                </li>
                
            </ul>
        </div>
    </section>
  )
}
