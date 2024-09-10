
import React from 'react'
import logo from './logo.svg';
import './App.css';
import { NavigationBar } from "./Components/NavigationBar";
import {Banner} from "./Components/Banner";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Banner />
    </div>
  );
}

export default App;
