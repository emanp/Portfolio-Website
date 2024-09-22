
import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact"


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element = {<Home/>} />
          {/* <Route path="/Portfolio" element = {<Portfolio/>} /> */}
          <Route path="/Contact" element={<Contact />} />
        </Routes> 
      </Router>
    </div>
  );
}

export default App;
