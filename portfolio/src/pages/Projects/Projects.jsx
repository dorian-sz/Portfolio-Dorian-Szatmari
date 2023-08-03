import React from 'react'
import "./Projects.css"
import ProjectCard from '../../components/Projects/ProjectCard'

const Projects = ({setDisplayDetails}) => {
  return (
    <div className='projects-container'>
        <p className='projects-introduction'>Projects</p>
        <div className="projects-cards-container">
            <ProjectCard gif={"images/mental-health.gif"} setDisplayDetails={setDisplayDetails}></ProjectCard>
        </div>
    </div>
  )
}

export default Projects