import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
    return( 
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Ciao! Sono Alessandro.</h1>
                <p className={styles.description}>Sto cercando lavoro come sviluppatore.</p>
                <a className={styles.contactBtn} 
                   href="#contact" >
                    Mettiamoci in contatto!
                </a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} 
                alt="Hero-image" 
                className={styles.heroImg}
            />
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    );
}
