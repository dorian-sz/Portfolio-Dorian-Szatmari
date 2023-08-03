import "./ProjectDetails.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft ,faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import Tech from "./Tech"

const ProjectDetails = ({setDisplay}) => {
  return (
    <div className='project-details-container' onClick={() => setDisplay()}>
        <div className="project-details-sidebar project-details-sidebar-animation">
            <div className="project-details-exit-container">
                <FontAwesomeIcon className="project-details-exit" icon={faChevronLeft} rotation={180} style={{color: "#ffffff",}} />
            </div>
            <div className="project-details-group">
                <p className="project-details-title">Mental Health Journal</p>
                <p className="project-details-description">Your mental health companion.</p>
            </div>
            <img src="images/mental-health.gif" alt=""/>
            <div className="project-details-group">
                <p className="project-details-title">About</p>
                <p className="project-details-description">
                    Mental Health Journal is an app for people who struggle with mental health and would like to keep track of it and improve it.
                </p>
            </div>
            <div className="project-details-group">
                <p className="project-details-title">Technologies</p>
                <div className="project-details-tech-container">
                    <Tech techName={"React"} fontSize={"14px"}></Tech>
                    <Tech techName={"Javascript"} fontSize={"14px"}></Tech>
                    <Tech techName={"CSS"} fontSize={"14px"}></Tech>
                    <Tech techName={"ASP.NET Core"} fontSize={"14px"}></Tech>
                    <Tech techName={"Entity Frameworks"} fontSize={"14px"}></Tech>
                    <Tech techName={"Mssql"} fontSize={"14px"}></Tech>
                </div>
            </div>
            <div className="project-details-links">
                <a className="project-details-link" href="https://github.com/lilifarkas/mental-health-journal/tree/development" target="_blank" rel="noreferrer">Open project <FontAwesomeIcon icon={faUpRightFromSquare} style={{color: "#ffffff",}} /></a>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails