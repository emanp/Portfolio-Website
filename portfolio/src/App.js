
import React from 'react'
import './App.css';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact"
import Projects from './Pages/Projects';


function App() {
  return (
    <div className="App">
      <Router basename={"/Portfolio-Website"}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="Home" element = {<Home/>} />
          <Route path="Projects" element = {<Projects/>} />
          <Route path="Contact" element={<Contact />} />
        </Routes> 
      </Router>
    </div>
  );
}

export default App;
