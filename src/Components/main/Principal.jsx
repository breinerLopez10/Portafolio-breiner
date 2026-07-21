import React from 'react'
import "./Styles/Styles.css"
import sena from "../assets/imagenes/sena.jpg"
import unal from "../assets/imagenes/unal.png"
import bolivar1 from "../assets/imagenes/bolivar3.png"
import abbott from "../assets/imagenes/abbott.jpg"
import Navbar from "../../Components/Navbar/Navbar.jsx"
import logoun from "../assets/imagenes/UNTransp.png"
import { Icon } from '@iconify/react';
import cv from "../assets/cv/cv.pdf"
import carrito2 from "../assets/imagenes/carrito2.png"
import Contact from '../contact/contact.jsx'
import { useLanguage } from '../../Context/LanguageContext'

const experienceImages = [abbott, bolivar1, unal]
const educationImages = [unal, sena]

const projectsMeta = [
  {
    link: "https://unevento.vercel.app/home",
    image: logoun,
    icons: ["teenyicons:angular-outline", "simple-icons:springboot", "simple-icons:mysql"],
  },
  {
    link: "https://e-comerce-un.vercel.app/",
    image: carrito2,
    icons: ["simple-icons:react", "fa6-brands:node", "simple-icons:express", "simple-icons:mysql"],
  },
]

const skillGroups = [
  {
    key: "frontend",
    catIcon: "ph:code-bold",
    accent: "var(--accent)",
    items: [
      { icon: "fab fa-html5", label: "Html" },
      { icon: "fab fa-css3-alt", label: "Css" },
      { icon: "fab fa-sass", label: "Sass" },
      { icon: "fab fa-js", label: "Javascript" },
      { icon: "fab fa-react", label: "React" },
      { icon: "fab fa-angular", label: "Angular" },
      { icon: "fab fa-bootstrap", label: "Bootstrap" },
    ],
  },
  {
    key: "backend",
    catIcon: "ph:database-bold",
    accent: "var(--accent)",
    items: [
      { icon: "fab fa-node", label: "Node.js" },
      { iconify: "simple-icons:spring", label: "Spring-boot" },
    ],
  },
  {
    key: "ai",
    catIcon: "ph:robot-bold",
    accent: "var(--accent-2)",
    items: [
      { iconify: "simple-icons:python", label: "Python" },
      { iconify: "simple-icons:langchain", label: "LangChain" },
      { iconify: "mdi:chart-timeline-variant", label: "LangSmith" },
      { iconify: "simple-icons:n8n", label: "n8n" },
      { iconify: "simple-icons:zapier", label: "Zapier" },
      { iconify: "simple-icons:googleappsscript", label: "Google Apps Script" },
      { iconify: "simple-icons:powerbi", label: "Power BI" },
      { iconify: "arcticons:microsoft-copilot", label: "Copilot Studio" },
      { iconify: "simple-icons:google", label: "Google AI Studio" },
    ],
  },
  {
    key: "aiTools",
    catIcon: "ph:sparkle-bold",
    accent: "var(--accent-3)",
    items: [
      { iconify: "simple-icons:openai", label: "ChatGPT" },
      { iconify: "simple-icons:claude", label: "Claude" },
      { iconify: "simple-icons:googlegemini", label: "Gemini" },
      { iconify: "simple-icons:perplexity", label: "Perplexity" },
      { iconify: "simple-icons:githubcopilot", label: "GitHub Copilot" },
      { iconify: "bxl:midjourney", label: "Midjourney" },
    ],
  },
  {
    key: "cloud",
    catIcon: "ph:cloud-bold",
    accent: "var(--accent)",
    items: [
      { icon: "fab fa-wordpress-simple", label: "Wordpress" },
      { icon: "fab fa-github", label: "Github" },
      { icon: "fab fa-aws", label: "Aws" },
      { icon: "fa-brands fa-google", label: "Gcp" },
    ],
  },
]

export const Principal = () => {
  const { t, language } = useLanguage()

  return (
    <div>
      <Navbar />

      <section className="sect1" id="home">

        <div className='foto-tittles'>

          <div className='container-foto'>
            <div className="foto"></div>
          </div>

          <div className="titulos">
            <h1 className="soft">{t.hero.role}</h1>
            <h2 className="developer">{t.hero.devRole}</h2>
            <h2 className="nombre">{t.hero.name}</h2>
            <p className="tagline">{t.hero.tagline}</p>
            <a href="#contactt" className="hero-cta">{t.hero.cta}</a>
          </div>

        </div>
      </section>

      <section className="sect2">
        <div className='section-two'>

          <div className='container-about'>
            <div className='container-conectar-tittle'>
              <Icon icon="entypo:link" />
              <h2 className='tittle-conectar'>{t.connect.title}</h2>
            </div>

            <div className="connect-chips">
              <a className="connect-chip" href="mailto:brlopezf@unal.edu.co">
                <Icon icon="ic:outline-email" />
                brlopezf@unal.edu.co
              </a>

              <a className="connect-chip" href="https://www.linkedin.com/in/breiner-lopez-ba654b25a/" target='_blank' rel="noreferrer">
                <Icon icon="mdi:linkedin" />
                {t.connect.linkedin}
              </a>

              <a className="connect-chip" href="https://github.com/breinerLopez10" target='_blank' rel="noreferrer">
                <Icon icon="mdi:github" />
                {t.connect.github}
              </a>

              <a className="connect-chip" href={cv} download="cv">
                <Icon icon="material-symbols:download" />
                {t.connect.cv}
              </a>
            </div>
          </div>

        </div>
      </section>

      <section className="sect3">
        <div className="Education">
          <h1 className="education">{t.experience.title}</h1>

          <div className="timeline-grid">
            {t.experience.items.map((item, index) => (
              <div key={item.company} className="timeline-item">
                <div className='container-tittle-education'>
                  <div className="bolivar">
                    <img src={experienceImages[index]} className='img-unal' alt={item.company} />
                  </div>

                  <div>
                    <p className='tittle-college'>
                      {item.role}
                    </p>
                  </div>
                </div>

                <p className="university">
                  {item.company}
                </p>

                <p className="item-dates">{item.dates}</p>

                <p>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </section>

      <section className="sect3">
        <div className="Education">
          <h1 className="education">{t.education.title}</h1>

          <div className="timeline-grid">
            {t.education.items.map((item, index) => (
              <div key={item.school + item.degree} className="timeline-item">
                <div className='container-tittle-education'>
                  <div className="unal">
                    <img src={educationImages[index]} className='img-unal' alt={item.school} />
                  </div>

                  <div>
                    <p className='tittle-college'>
                      {item.school}
                    </p>
                  </div>
                </div>

                <p className="university">
                  {item.degree}
                </p>

                <p className="item-dates">{item.dates}</p>

                <p>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </section>

      <section className="sect4">

        <div className='container-projects-tittle'>
          <h2 id="projects" className="projects">{t.projects.title}</h2>
        </div>

        <div className="gallery-projects">

          {t.projects.items.map((item, index) => {
            const meta = projectsMeta[index]
            return (
              <a key={item.name} href={meta.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                <div className='container-unevento'>
                  <div className='container-title-project'>
                    <div>
                      <img className='img-gallery1' alt={item.name} src={meta.image} />
                    </div>
                    <div>
                      <h2 className='tittle-unevento'>{item.name}</h2>
                    </div>
                  </div>
                  <p className='text-project'>
                    {item.description}
                  </p>
                  <div className='icon-container'>
                    {meta.icons.map((icon) => (
                      <Icon key={icon} icon={icon} className='icon-modify' />
                    ))}
                  </div>
                </div>
              </a>
            )
          })}

        </div>
      </section>

      <section className="sect5">

        <div className='container-sect-5'>

          <h2 id="sk" className="sk">{t.skills.title}</h2>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className="skill-category" key={group.key} style={{ '--cat-color': group.accent }}>
                <div className="skill-category-header">
                  <Icon icon={group.catIcon} className="cat-icon" />
                  <h3>{t.skills[group.key]}</h3>
                </div>

                <div className="skill-pills">
                  {group.items.map((skill) => (
                    <span className="skill-pill" key={skill.label}>
                      {skill.iconify ? (
                        <Icon icon={skill.iconify} className="pill-icon" />
                      ) : (
                        <i className={`pill-icon ${skill.icon}`}></i>
                      )}
                      {skill.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      <footer>
        <h2 id="contactt" className="contactt">{t.contact.title}</h2>
        <div>
          <div className='container-component-contact'>
            <Contact key={language} />
          </div>
        </div>

        <p className="footer-rights">© {new Date().getFullYear()} Breiner López — {t.footer.rights}</p>
      </footer>
    </div>
  )
}
