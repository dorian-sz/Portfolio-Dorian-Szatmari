import { Link } from 'react-router-dom'
import "./Navbar.css"
import { useState } from 'react'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
      <nav className='nav-container'>
          <div className="nav">
            <div className="nav-logo-container">
              <p className='nav-logo'> <span aria-hidden="true">SzD.</span>SzD.<span aria-hidden="true">SzD.</span></p>
            </div>  
              <ul className={`${toggleMenu ? "nav-list" : "nav-list nav-list-hidden"}`}>
                <div className="nav-li-container">
                  <li className='nav-li'>
                    <Link to="/" className='nav-link'>Home</Link>
                  </li>
                </div>        
                <div className="nav-li-container">
                  <li className='nav-li'>
                    <Link to="/about-me" className='nav-link'>About</Link>
                  </li>
                </div>        
                <div className="nav-li-container">
                  <li className='nav-li'>
                    <Link to="/projects" className='nav-link'>Projects</Link>
                  </li>
                </div>    
                <div className="nav-li-container">
                  <li className='nav-li'>
                  <Link to="/curriculum-vitae" className='nav-link'>Curriculum Vitae</Link>
                  </li>
                </div> 
              </ul>
              <div className={`${toggleMenu ? "nav-hamburger-menu-container open" : "nav-hamburger-menu-container"}`} onClick={() => setToggleMenu(!toggleMenu)} >
                  <span className="nav-hamburger-bar"></span>
                  <span className="nav-hamburger-bar"></span>
              </div>
          </div>
      </nav>
  )
}

export default Navbar