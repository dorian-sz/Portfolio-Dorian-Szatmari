import "./ProjectCard.css";
import Tech from "./Tech";

const ProjectCard = ({ project, setDisplayDetails, setProject }) => {
  const setupProjectDetails = () => {
    setDisplayDetails();
    setProject(project);
  };

  return (
    <div
      className="project-card-container"
      style={{ backgroundImage: `url(${project.gif})` }}
      onClick={() => setupProjectDetails()}
    >
      <div className="project-card-hover-info">
        <p className="project-card-title">{project.projectName}</p>
        <p className="project-card-info">{project.shortDescription}</p>
        <div className="project-card-tech-container">
          {project.techUsed.map((tech) => {
            return <Tech techName={tech}></Tech>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
