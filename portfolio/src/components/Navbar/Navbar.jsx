import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
      <nav className='nav-container'>
          <div className="nav">
            <div className="nav-logo-container">
              <p className='nav-logo'> <span aria-hidden="true">SzD.</span>SzD.<span aria-hidden="true">SzD.</span></p>
            </div>  
              <ul className='nav-list'>
                <div className="nav-li-container">
                  <li className='nav-li'>
                    <Link to="/" className='nav-link'>Home</Link>
                  </li>
                </div>        
                <div className="nav-li-container">
                  <li className='nav-li'>
                    <Link to="/about-me" className='nav-link'>About me</Link>
                  </li>
                </div>        
                <div className="nav-li-container">
                  <li className='nav-li'>
                    <Link to="/projects" className='nav-link'>Projects</Link>
                  </li>
                </div>    
                <div className="nav-li-container">
                  <li className='nav-li'>
                  <Link to="/curriculum-vitae" className='nav-link'>Curriculum vitae</Link>
                  </li>
                </div> 
              </ul>
          </div>
      </nav>
  )
}

export default Navbar