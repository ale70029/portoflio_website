import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
    return( 
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Alessandro</h1>
                <p className={styles.description}>I'm currently looking for a job!</p>
                <a className={styles.contactBtn} 
                   href="mailto:ale70029@gmail.com" >
                    Send me an e-mail!
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
