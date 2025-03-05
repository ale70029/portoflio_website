import React, { useState, useContext } from "react";
import { getImageUrl } from '../../utils';
import styles from './Navbar.module.css';
import { text } from "../../data/translation";
import LangContext from "../../LanguageContext";
import { Link } from 'react-scroll';

export const Navbar = () => {
  const { lang, setLang } = useContext(LangContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Funzione per chiudere la navbar
  const closeNavbar = () => {
    setIsMenuOpen(false);
  };

  return (
    <section>
      <nav className={`navbar navbar-expand-lg fixed-top ${styles.mobileNavbar}`} data-bs-theme="dark">
        <div className={`container-fluid justify-content-center`}>
          <button
            className={`navbar-toggler`}
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-controls="navbarSupportedContent"
            aria-expanded={isMenuOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item navbar-brand">
                <Link
                  className={`nav-link ${styles.navLink}`}
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}  
                  duration={500}
                  activeClass="active"
                  onClick={closeNavbar}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item navbar-brand">
                <Link
                  className={`nav-link ${styles.navLink}`}
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70} 
                  duration={500}  
                  activeClass="active"
                  onClick={closeNavbar} 
                >
                  {text[lang].navAbout}
                </Link>
              </li>
              <li className="nav-item navbar-brand">
                <Link
                  className={`nav-link ${styles.navLink}`}
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={-70}  
                  duration={500}
                  activeClass="active"
                  onClick={closeNavbar}
                >
                  {text[lang].navExperience}
                </Link>
              </li>
              <li className="nav-item navbar-brand">
                <Link
                  className={`nav-link ${styles.navLink}`}
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="active"
                  onClick={closeNavbar}
                >
                  {text[lang].navProjects}
                </Link>
              </li>
              <li className="nav-item navbar-brand">
                <Link
                  className={`nav-link ${styles.navLink}`}
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="active"
                  onClick={closeNavbar}
                >
                  {text[lang].navContact}
                </Link>
              </li>
            </ul>

            <li className={`nav-item dropdown me-5 ${styles.language}`}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={getImageUrl(`nav/${lang}.png`)} alt="language flag" />
                {text[lang].language}
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      setLang('it');
                      closeNavbar();
                    }}
                  >
                    <img src={getImageUrl("nav/it.png")} alt="IT " />
                    Italiano
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      setLang('en');
                      closeNavbar();
                    }}
                  >
                    <img src={getImageUrl("nav/en.png")} alt="EN " />
                    English
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      setLang('es');
                      closeNavbar();
                    }}
                  >
                    <img src={getImageUrl("nav/es.png")} alt="ES " />
                    Español
                  </a>
                </li>
              </ul>
            </li>
          </div>
        </div>
      </nav>
    </section>
  );
};
