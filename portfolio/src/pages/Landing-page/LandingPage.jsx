import "./LandingPage.css";
import feeling_proud from "../../img/feeling_proud.svg"
const LandingPage = () => {
  return (
        <div className='landing-page-container'>
            <div className="landing-page-introduction-container">
                <div className="landing-page-greeting-container">
                    <p className="landing-page-greeting">I'm</p>
                    <div className="landing-page-greeting-animation">
                        <div className="landing-page-greeting-first"><div>&#160;Szatmári Dorián</div></div>
                        <div className="landing-page-greeting-second">&#160;a <div>Full-stack Developer</div></div>
                        <div className="landing-page-greeting-third">&#160;a <div>Codecool Student</div></div>
                    </div>
                </div>
            </div>
            <div className="landing-page-image-container">
                <img src={feeling_proud} alt="" className="landing-page-image"/>
            </div>
        </div>
  )
}

export default LandingPage