import './App.css';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './pages/Landing-page/LandingPage';
import './variables.css';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
