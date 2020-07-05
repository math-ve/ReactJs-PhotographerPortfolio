import React, { useEffect, useState } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Header from './comps/Header';
import PageTransition from './comps/PageTransition';
import Acceuil from './pages/Acceuil';
import Albums from './pages/Albums';
import About from './pages/About';
import Contact from './pages/Contact';
import api from './api/api';

import './css/Header.css';
import './css/Acceuil.css';
import './css/Albums.css';
import './css/App.css';

function App() {

  const [allAlbums, setAllAlbums] = useState([]);

  useEffect(() => {
    window.onresize = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);  
    }
  })

  //API FETCH
  useEffect(() => {
    const fetchData = async () => {
        const result = await api.readAll();
        setAllAlbums(result);
    }
    fetchData();
  },[]);

  return (
    <div className="app-main-container">
      <div className="cover-bg-container">
        <div className="app-bg-shader"></div>        
      </div>   
      <HashRouter>
        <Header />
        <Route exact path="/" component={Acceuil} /> 
        <Route exact path="/albums"  render={(props) => <Albums {...props} dataAlbums={allAlbums} />}/> 
        <Route exact path="/about" component={About} /> 
        <Route exact path="/contact" component={Contact} /> 
      </HashRouter>
      <PageTransition />
    </div>
  );
}

export default App;
