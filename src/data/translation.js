export const text = {
    it:{
        heroGreeting: "Ciao, mi chiamo Alessandro.",
        heroText: "Sto cercando lavoro come sviluppatore.",
        heroContact: "Mettiamoci in contatto!",

        navHome: "Portfolio",
        navAbout:"Competenze",
        navExperience:"Esperienza",
        navProjects: "Progetti",
        navContact: "Contatti",

        contactMessage: "Mettiti in contatto con me!"

    },

    en:{
        heroGreeting: "Hi, I'm Alessandro.",
        heroText: "I'm looking for a job as a developer.",
        heroContact: "Get in touch!",
    
        navHome: "Portfolio",
        navAbout: "About",
        navExperience: "Experience",
        navProjects: "Projects",
        navContact: "Contact",
    
        contactMessage: "Get in touch with me!"
    },

    es: {
        heroGreeting: "Hola, me llamo Alessandro.",
        heroText: "Estoy buscando trabajo como desarrollador.",
        heroContact: "Pongámonos en contacto!",
    
        navHome: "Portafolio",
        navAbout: "Competencias",
        navExperience: "Experiencia",
        navProjects: "Proyectos",
        navContact: "Contactos",
    
        contactMessage: "Ponte en contacto conmigo!"
    }
};

export var language = "it";

export const getFlag = ({language}) => {
    let iconPath;
  
    switch (language) {
      case "it":
        iconPath = "nav/it.png";
        break;
      case"es":
        iconPath = "nav/es.png";
        break;
      case"en":
        iconPath = "nav/en.png";
        break;
      default:
        iconPath = "nav/menuIcon.png"; // Impostazione predefinita
    }
    return iconPath;
}


export const setLanguage = (lang) =>{
    switch(lang){
        case "it":
            language="it";
            break;
        case "en":
            language="en";
            break;
        case "es":
            language="es";
            break;
        default:
            break;
    }
}

