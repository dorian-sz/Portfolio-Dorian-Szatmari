import { useState } from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import ProjectDetails from './components/Projects/ProjectDetails';
import LandingPage from './pages/Landing-page/LandingPage';
import Projects from './pages/Projects/Projects';
import './variables.css';
import ProjectsData from "./components/data/projects.json"

function App() {
  const [displayDetails, setDisplayDetails] = useState(false);

  const setDisplay = () => {
    setDisplayDetails(!displayDetails);
  }

  return (
    <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/projects' element={<Projects setDisplayDetails={setDisplay}/>}></Route>
        </Routes>
        {displayDetails && <ProjectDetails setDisplay={setDisplayDetails}/>}
    </div>
  );
}

export default App;
