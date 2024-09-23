
import React from 'react'
import './App.css';
<<<<<<< HEAD
import NavigationBar from "./Components/NavigationBar.js";

=======
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact"
import Projects from './Pages/Projects';


>>>>>>> a4305d1b2202cb78acc16439b7192f6044550fcd
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element = {<Home/>} />
          <Route path="/Projects" element = {<Projects/>} />
          <Route path="/Contact" element={<Contact />} />
        </Routes> 
      </Router>
    </div>
  );
}

export default App;
