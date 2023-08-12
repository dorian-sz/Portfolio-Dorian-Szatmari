import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ProjectDetails from "./components/Projects/ProjectDetails";
import LandingPage from "./pages/Landing-page/LandingPage";
import Projects from "./pages/Projects/Projects";
import "./variables.css";
import ProjectsData from "./components/data/projects.json";
import CVPage from "./pages/CV-page/CVPage";
import About from "./pages/About/About";

function App() {
  const [displayDetails, setDisplayDetails] = useState(false);
  const [currentProject, setCurrentProject] = useState({});

  const setDisplay = () => {
    setDisplayDetails(!displayDetails);
  };

  const setProject = (proj) => {
    setCurrentProject(proj);
  };

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route
          path="/projects"
          element={
            <Projects
              setDisplayDetails={setDisplay}
              projects={ProjectsData}
              setProject={setProject}
            />
          }
        ></Route>
        <Route path="/curriculum-vitae" element={<CVPage />}></Route>
        <Route path="/about-me" element={<About />}></Route>
      </Routes>
      {displayDetails && (
        <ProjectDetails
          setDisplay={setDisplayDetails}
          project={currentProject}
        />
      )}
    </div>
  );
}

export default App;
