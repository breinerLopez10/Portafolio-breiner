import React from 'react'

const Navbar = () => {
  return (
   
    <header className="header">
      <nav className="nav">
        <a href="#" className="logo">Breiner L</a>
        <button className="nav-toggle" aria-label="Abrir menú">
          <i className="icon-menu"></i>
        </button>

        <ul className="nav-menu">
          <li className="nav-menu-item">
            <a href="#" className="nav-menu-link nav-link">Home</a>
          </li>
          <li className="nav-menu-item">
            <a href="#sk" className="nav-menu-link nav-link">Skills</a>
          </li>
          <li className="nav-menu-item">
            <a href="#projects" className="nav-menu-link nav-link">Projects</a>
          </li>
          <li className="nav-menu-item">
            <a href="#contactt" className="nav-menu-link nav-link">Contact me</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar