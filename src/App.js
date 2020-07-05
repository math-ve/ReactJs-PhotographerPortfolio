import React, { useEffect } from 'react';
import './css/App.css';
import { HashRouter, Route, Link } from 'react-router-dom';
import Header from './comps/Header';
import Acceuil from './pages/Acceuil';
import Albums from './pages/Albums';
import About from './pages/About';
import Contact from './pages/Contact';

import './css/Header.css';
import './css/Acceuil.css';
import './css/Albums.css';

function App() {

  useEffect(() => {
    window.onresize = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);  
    }
  })

  return (
    <div className="app-main-container">
      <div className="cover-bg-container">
        <div className="app-bg-shader"></div>        
      </div>

            
      <HashRouter>
        <Header />
        <Route exact path="/" component={Acceuil} /> 
        <Route exact path="/albums" component={Albums} /> 
        <Route exact path="/about" component={About} /> 
        <Route exact path="/contact" component={Contact} /> 
      </HashRouter>
      <ul className="app-tr-1">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default App;
