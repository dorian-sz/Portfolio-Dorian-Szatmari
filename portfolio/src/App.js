import './App.css';
import Navbar from './components/Navbar/Navbar';
import './variables.css';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Routes>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
