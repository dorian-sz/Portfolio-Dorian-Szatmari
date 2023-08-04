import "./ProjectDetails.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft ,faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import Tech from "./Tech"

const ProjectDetails = ({setDisplay, project}) => {
  return (
    <div className='project-details-container' onClick={() => setDisplay()}>
        <div className="project-details-sidebar project-details-sidebar-animation">
            <div className="project-details-exit-container">
                <FontAwesomeIcon className="project-details-exit" icon={faChevronLeft} rotation={180} style={{color: "#ffffff",}} />
            </div>
            <div className="project-details-group">
                <p className="project-details-title">{project.projectName}</p>
                <p className="project-details-description">{project.shortDescription}</p>
            </div>
            <img src={`${project.gif}`} alt=""/>
            <div className="project-details-group">
                <p className="project-details-title">About</p>
                <p className="project-details-description">
                   {project.longDescription}
                </p>
            </div>
            <div className="project-details-group">
                <p className="project-details-title">Technologies</p>
                <div className="project-details-tech-container">
                    {
                        project.techUsed.map((tech,)=>{
                            return(
                                <Tech key={tech} techName={tech} fontSize={"14px"}></Tech>
                            )
                        })
                    }
                </div>
            </div>
            <div className="project-details-links">
                <a className="project-details-link" href={`${project.github}`} target="_blank" rel="noreferrer">Open project <FontAwesomeIcon icon={faUpRightFromSquare} style={{color: "#ffffff",}} /></a>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails