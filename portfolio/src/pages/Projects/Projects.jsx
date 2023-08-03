import React from 'react'
import "./Projects.css"
import ProjectCard from '../../components/Projects/ProjectCard'

const Projects = ({setDisplayDetails}) => {
  return (
    <div className='projects-container'>
        <p className='projects-introduction animate-appearing'>Projects</p>
        <div className="projects-cards-container animate-sliding">
            <ProjectCard gif={"images/mental-health.gif"} setDisplayDetails={setDisplayDetails}></ProjectCard>
        </div>
    </div>
  )
}

export default Projects