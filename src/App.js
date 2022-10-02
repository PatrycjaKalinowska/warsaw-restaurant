import React, { createRef, useRef } from 'react'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Menu from './components/Menu/Menu';

const App = () => { 


  return (
    <div className='app__container'>
      <Navbar />
      <Header />
      <AboutUs />
      <Menu />
    </div>
  )
}

export default App;
