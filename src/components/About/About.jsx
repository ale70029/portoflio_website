import React from 'react'
import {getImageUrl} from "../../utils"
import styles from "./About.module.css"

export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
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
                        <p>I can develop webpages like this, using Html, CSS, JavaScript and React.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I can develop applications with Java, Python and C#.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="Ui icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Graphic Designer</h3>
                        <p>I can develop graphics with Photoshop.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
