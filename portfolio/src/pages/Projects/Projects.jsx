import React from "react";
import "./Projects.css";
import ProjectCard from "../../components/Projects/ProjectCard";

const Projects = ({ setDisplayDetails, projects, setProject }) => {
  return (
    <div className="projects-container">
      <p className="projects-introduction animate-appearing">Projects</p>
      <div className="projects-cards-container animate-sliding">
        {projects.ProjectArr.map((project, i) => {
          return (
            <ProjectCard
              key={i}
              project={project}
              setDisplayDetails={setDisplayDetails}
              setProject={setProject}
            ></ProjectCard>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
