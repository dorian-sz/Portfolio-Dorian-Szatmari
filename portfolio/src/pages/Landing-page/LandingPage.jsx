import "./LandingPage.css";
import developer_activity from "../../img/undraw_developer_activity_re_39tg.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
        <div className='landing-page-container animate'>
            <div className="landing-page-introduction-container">
                <div className="landing-page-greeting-container">
                    <p className="landing-page-greeting">I'm&#160;</p>
                    <div className="landing-page-greeting-animation">
                        <div className="landing-page-greeting-first"><div>Szatmári Dorián</div></div>
                        <div className="landing-page-greeting-second">a <div>Full-stack Developer</div></div>
                        <div className="landing-page-greeting-third">a <div>Codecool Student</div></div>
                    </div>
                </div>
                <main>
                    <div className="landing-page-introduction">
                        <p id="intro-1" className="animate">This portfolio is a glimpse into my world of coding and also serves as a platform for others to learn more <span className="landing-page-introduction-highlight"><Link to="/projects">about me</Link></span> </p>
                        <p id="intro-2" className="animate">Here, you'll find a selection of <span className="landing-page-introduction-highlight"><Link to="/projects">projects</Link></span> that showcase my abilities and creativity as I strive to make a positive impact through technology.</p>
                    </div>
                </main>
                <div className="landing-page-links-container">
                    <a href="https://github.com/dorian-sz"><FontAwesomeIcon icon={faSquareGithub} style={{color: "#ffffff"}} /></a>
                    <a href="https://github.com/dorian-sz"><FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}} /></a>
                </div>
            </div>
            <div className="landing-page-image-container animate">
                <img src={developer_activity} alt="" className="landing-page-image"/>
            </div>
        </div>
  )
}

export default LandingPage