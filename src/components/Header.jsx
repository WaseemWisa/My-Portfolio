import { useState } from 'react'
import '../Styles/components/header.scss'

function Header() {
  const [isActive, setIsActive] = useState(false);
  const toggleIsActive = () => setIsActive(false);
  return (
    <header id='header'>
      <div className="container">
        <div className="mob_nav">
          <h3>Waseem Wisa</h3>
          <i className="bi bi-list mob-i" onClick={() => setIsActive(!isActive)}></i>
        </div>
        <nav className={isActive ? `mob-links` : 'none'}>
          <a href="#" onClick={toggleIsActive}>Home</a>
          <a href="#about" onClick={toggleIsActive}>About</a>
          <a href="#projects" onClick={toggleIsActive}>Projects</a>
          <a href="#contact" onClick={toggleIsActive}>Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header