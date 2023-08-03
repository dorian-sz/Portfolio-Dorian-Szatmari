import React, { useState } from 'react'
import "./ProjectCard.css"
import Tech from './Tech'


const ProjectCard = ({gif}) => {

  return (
    <div className='project-card-container' style={{backgroundImage: `url("images/mental-health.gif")`}}>
        <div className="project-card-hover-info">
            <p className='project-card-title'>Mental Health Journal</p>
            <p className='project-card-info'>An app that helps you track your mood and tasks for the day.</p>
            <div className="project-card-tech-container">
                <Tech techName={"React"}></Tech>
                <Tech techName={"ASP.NET Core"}></Tech>
                <Tech techName={"Mssql"}></Tech>
            </div>
        </div>

    </div>
  )
}

export default ProjectCard