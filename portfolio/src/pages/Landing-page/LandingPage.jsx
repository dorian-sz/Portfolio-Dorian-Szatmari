import "./LandingPage.css";
import programming from "../../img/undraw_programming_re_kg9v.svg"

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
            </div>
            <div className="landing-page-image-container animate">
                <img src={programming} alt="" className="landing-page-image"/>
            </div>
        </div>
  )
}

export default LandingPage