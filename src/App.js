import React, { createRef, useRef } from 'react'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Menu from './components/Menu/Menu';
import Gallery from './components/Gallery/Gallery';
import FindUs from './components/FindUs/FindUs';

const App = () => { 


  return (
    <div className='app__container'>
      <Navbar />
      <Header />
      <AboutUs />
      <Menu />
      <Gallery />
      <FindUs />
    </div>
  )
}

export default App;
