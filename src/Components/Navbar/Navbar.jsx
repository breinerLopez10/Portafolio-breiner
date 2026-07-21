import React, { useState } from 'react'
import { useLanguage } from '../../Context/LanguageContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()

  const closeMenu = () => setIsOpen(false)

  return (

    <header className="header">
      <nav className="nav">
        <a href="#home" className="logo">Breiner L</a>

        <div className="nav-actions">
          <button
            className="lang-toggle"
            onClick={toggleLanguage}
            aria-label="Switch language"
            type="button"
          >
            <span className={language === 'en' ? 'lang-option active' : 'lang-option'}>EN</span>
            <span className="lang-divider">/</span>
            <span className={language === 'es' ? 'lang-option active' : 'lang-option'}>ES</span>
          </button>

          <button
            className={isOpen ? 'nav-toggle nav-toggle-active' : 'nav-toggle'}
            aria-label="Abrir menú"
            aria-expanded={isOpen}
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="nav-toggle-bar"></span>
            <span className="nav-toggle-bar"></span>
            <span className="nav-toggle-bar"></span>
          </button>
        </div>

        <ul className={isOpen ? 'nav-menu nav-menu-visible' : 'nav-menu'}>
          <li className="nav-menu-item">
            <a href="#home" className="nav-menu-link nav-link" onClick={closeMenu}>{t.nav.home}</a>
          </li>
          <li className="nav-menu-item">
            <a href="#sk" className="nav-menu-link nav-link" onClick={closeMenu}>{t.nav.skills}</a>
          </li>
          <li className="nav-menu-item">
            <a href="#projects" className="nav-menu-link nav-link" onClick={closeMenu}>{t.nav.projects}</a>
          </li>
          <li className="nav-menu-item">
            <a href="#contactt" className="nav-menu-link nav-link" onClick={closeMenu}>{t.nav.contact}</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
