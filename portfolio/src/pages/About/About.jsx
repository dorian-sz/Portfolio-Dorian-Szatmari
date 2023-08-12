import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import {
  NodejsOriginalWordmark,
  DotnetcorePlain,
  MicrosoftsqlserverPlainWordmark,
  JavascriptPlain,
  ReactOriginalWordmark,
  CsharpOriginal,
  GitOriginalWordmark,
  DockerOriginalWordmark,
  PostgresqlOriginalWordmark,
  MongodbOriginalWordmark,
  BootstrapOriginalWordmark,
  Css3OriginalWordmark,
  Html5OriginalWordmark,
} from "devicons-react";
import TechCards from "../../components/AboutTech/TechCards";
import { useTitle } from "../../components/setTitle";

const icons = [
  NodejsOriginalWordmark,
  DotnetcorePlain,
  MicrosoftsqlserverPlainWordmark,
  JavascriptPlain,
  ReactOriginalWordmark,
  CsharpOriginal,
  GitOriginalWordmark,
  DockerOriginalWordmark,
  PostgresqlOriginalWordmark,
  MongodbOriginalWordmark,
  BootstrapOriginalWordmark,
  Css3OriginalWordmark,
  Html5OriginalWordmark,
];

const iconSize = 75;

const About = () => {
  useTitle("About");

  return (
    <div className="about-container animate">
      <div className="about-intro-container">
        <p className="about-title">About me</p>
        <p className="about-description">
          I'm an aspiring full-stack developer, currently a student at{" "}
          <span className="landing-page-introduction-highlight">
            <a
              href="https://codecool.com/en/about/"
              target="_blank"
              rel="noreferrer"
            >
              Codecool
            </a>
          </span>
          . I have a strong foundation in ASP.NET Core, React, CSS, Docker, and
          MSSQL that were developed through real-world Scrum{" "}
          <span className="landing-page-introduction-highlight">
            <Link to="/projects">projects</Link>
          </span>
          . In every project I undertake, my goal is to contribute meaningfully,
          innovate relentlessly, and grow consistently.
        </p>
        <p className="about-description">
          Having spent significant periods of my life in both England and
          Hungary, I am not only fluent in English and Hungarian but also adept
          at navigating diverse cultural contexts. This linguistic and
          multicultural flexibility enriches my ability to communicate
          effectively and empathize with team members from various backgrounds.
        </p>
      </div>
      <div className="about-tech-tools-container">
        <div className="about-tech-title-container">
          <p className="about-title">Technologies and Tools</p>
        </div>
        <div className="about-tech-card-container">
          {icons.map((icon, index) => (
            <TechCards key={index} Tech={icon} size={iconSize}></TechCards>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
