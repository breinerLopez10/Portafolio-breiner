import React from 'react'
import "./Styles/Styles.css"
import sena from "../assets/imagenes/sena.jpg"
import unal from "../assets/imagenes/unal.png"
import Navbar from "../../Components/Navbar/Navbar.jsx"
import logoun from "../assets/imagenes/UNTransp.png"
import { Icon } from '@iconify/react';
import cv from "../assets/cv/cv.pdf"
import carrito2 from "../assets/imagenes/carrito2.png"
import Contact from '../contact/contact.jsx'

export const Principal = () => {
  return (
<div>
  <Navbar/>

<section className="sect1">

  <div className='foto-tittles'>

  <div className='container-foto'>
          <div className="foto"></div>
  </div>


      <div className="titulos">
        <h1 className="soft">Software</h1>
        <h2 className="developer">Developer</h2>
        <h2 className="nombre">Breiner López</h2>
      </div>


  </div>
</section>

<br />
<br />
<br />
<br />
<br />
<br />

<section className="sect2">
<div className='section-two'>
{/* 
    <div className='card container-description '> 
      <h2 className="tittle-description">About me</h2>
    </div> */}







  
  <div className='container-about '>
    <div className='container-title-project'>
      <div className='container-conectar-tittle'>
        <Icon icon="entypo:link" />
        <h2 className='tittle-conectar'>Conect</h2>
      </div>
    </div>
    <br />


    <div className='container-contact'>
    <Icon icon="ic:outline-email" />
        <p className='text-project'>
          brlopezf@unal.edu.co
        </p> 
    </div>

    <br />


    <div className='container-contact'>
      <Icon icon="mdi:linkedin" />

      <a href="https://www.linkedin.com/in/breiner-lopez-ba654b25a/" target='_blank'>
      
      <p className='text-project'>
          Linkedind
        </p> 
      </a>
       
    </div>
    <br />

    <div className='container-contact'>
        <Icon icon="mdi:github" />

    <a href="https://github.com/breinerLopez10" target='_blank'>
        <p className='text-project'>
          Github
        </p> 
    </a>
    </div>

    <br />
    
    <div className='container-contact'>
    <Icon icon="material-symbols:download" />
   <span className="cV">
            <a href={cv} download="cv" className="cV">Curriculum</a>
          </span>
    </div>
  </div>


      </div>
</section>








<section className="sect3">
  <div className="Education">
    <h1 className="education">Experience</h1>

    <br />
    <br />

<div>

      <div className='container-tittle-education'>
          <div className="unal">
                <img src={unal}  className='img-unal' alt="Universidad Nacional de Colombia" />
          </div>

          <div>
              <p className='tittle-college'>
             Freelance developer <br />
              </p>
          </div>
      </div>

      <br />
    <p className="university">
    Universidad Nacional de Colombia <br />
    </p>

    <p>
    Oct. 2025 -  Apr 2026 <br />
    <br />
    Freelance developer, with a focus on software development, graph theory, and data structures. Actively participating in web application development projects.
    </p>

</div>

    <br />
    <br />
    <br />
   

    </div>

</section>



















<section className="sect3">
  <div className="Education">
    <h1 className="education">Education</h1>

    <br />
    <br />

<div>

      <div className='container-tittle-education'>
          <div className="unal">
                <img src={unal}  className='img-unal' alt="Universidad Nacional de Colombia" />
          </div>

          <div>
              <p className='tittle-college'>
              Universidad Nacional de Colombia <br />
              </p>
          </div>
      </div>

      <br />
    <p className="university">
Systems and Computing Engineering <br />
    </p>

    <p>
    Ene. 2021 - Dic. 2026 <br />
    <br />
    Currently studying Systems Engineering, with a focus on software development, graph theory, and data structures. Actively participating in web application development projects.
    </p>

</div>

    <br />
    <br />
    <br />
    <div>

<div className='container-tittle-education'>
    <div className="unal">
          <img src={sena}  className='img-unal' alt="Universidad Nacional de Colombia" />
    </div>

    <div>
        <p className='tittle-college'>
        Servicio Nacional De Aprendizaje <br />
        </p>
    </div>
</div>
<br />
<p className="university">
Técnico de sistemas<br />
</p>
<p>
Ene. 2019 - Dic. 2020 <br />
<br />
Systems technician, with a focus on software development, equipment maintenance, and technical support. Actively participating in web application development projects
</p>

</div>

    </div>

</section>

<br />
<br />
<br />

<section className="sect4">


<div className='container-projects-tittle'>
<h2 id="projects" className="projects">Projects</h2>
</div>

      <br />
      <br />
      <br />


<div className="gallery-projects">


       
  <a href="https://unevento.vercel.app/home" target="_blank" style={{ textDecoration: 'none' }}>
  <div className='container-unevento'>
    <div className='container-title-project'>
      <div>
        <img className='img-gallery1' alt="project react" src={logoun} />
      </div>
      <div>
        <h2 className='tittle-unevento'> evento</h2>
      </div>
    </div>
    <p className='text-project'>
    Web platform that centralizes and facilitates the organization and dissemination of academic and cultural events at the National University of Colombia, Bogotá headquarters.
    </p>    
    <div className='icon-container'>  
      <Icon icon="teenyicons:angular-outline" className='icon-modify' />
      <Icon icon="simple-icons:springboot" className='icon-modify' />
      <Icon icon="simple-icons:mysql" className='icon-modify' />
    </div>
  </div>
</a>



       
<a href="https://unecommerce.vercel.app" target="_blank" style={{ textDecoration: 'none' }}>
  <div className='container-unevento'>
    <div className='container-title-project'>
      <div>
        <img className='img-gallery1' alt="project react" src={carrito2} />
      </div>
      <div>
        <h2 className='tittle-unevento'>Ecommerce</h2>
      </div>
    </div>
    <p className='text-project'>
    Web platform that allows buyers and sellers to market their products and centralizes lower cost items for low-income people.
    </p>    
    <div className='icon-container'>  
      <Icon icon="simple-icons:react"  className='icon-modify' />
      <Icon icon="fa6-brands:node" className='icon-modify' />
      <Icon icon="simple-icons:express"  className='icon-modify' />
      <Icon icon="simple-icons:mysql" className='icon-modify' />
    </div>
  </div>
</a>


      </div>
</section>



<br />
<br />
<br />
<br />
<br />
<br />


<section className="sect5">
      
      <div className='container-sect-5'> 


      <h2 id="sk" className="sk">Skills</h2>

<div className='container-tittle-front'>
<h2 className="front">Front-end</h2>

</div>


      <div className="frontend">
        <div>
          <span className="iconw"><i className="fab fa-html5"></i></span>
          <strong>Html</strong>
        </div>
        <div>
          <span className="iconw"><i className="fab fa-css3-alt"></i></span>
          <strong>Css</strong>
        </div>
        <div>
          <span className="iconw"><i className="fab fa-sass"></i></span>
          <strong>Sass</strong>
        </div>
        <div>
          <span className="iconw"><i className="fab fa-js"></i></span>
          <strong>Javascript</strong>
        </div>
        <div>
          <span className="iconw"><i className="fab fa-react"></i></span>
          <strong>React</strong>
        </div>


        <div>
          <span className="iconw"><i className="fab fa-angular"></i></span>
          <strong>Angular</strong>
        </div>
        <div>
          <span className="iconw"><i className="fab fa-bootstrap"></i></span>
          <strong>Boostrap</strong>
        </div>
      </div>

      <div className='container-tittle-front'>
      <h2 className="back">Back-end</h2>
      </div>



      <div className="backend">
        <div>
          <span className="iconw"><i className="fab fa-node"></i></span>
          <strong>Node.js</strong>
        </div>
 
         <div>
          <Icon icon="simple-icons:spring" className="spring-icon" />
          <strong>Spring-boot</strong>
        </div>
      </div>


      <div className='container-tittle-front'>
      <h2 className="gen">Cloud platforms</h2>
      </div>

      <div className="general">
        <div>
          <span className="iconw"><i className="fab fa-wordpress-simple"></i></span>
          <strong>Wordpress</strong>
        </div>
        <div>
          <span className="iconw"><i className="fab fa-github"></i></span>
          <strong>Github</strong>
        </div>


        <div>
          <span className="iconw"><i className="fab fa-aws"></i></span>
          <strong>Aws</strong>
      </div>
  
      <div>
      <span className="iconw"><i className="fa-brands fa-google"></i></span>
          <strong>Gcp</strong>
        </div>
      </div>
      </div>

</section>

<footer>

  <br />
  <br />
  <h2 id="contactt"  className="contactt">Contact me</h2>
  <div>



<div className='container-component-contact'>
<Contact/>
</div>


  </div>
</footer>
</div> 
  )
}
