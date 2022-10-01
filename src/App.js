import React, { createRef, useRef } from 'react'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';

const App = () => { 


  return (
    <div className='app__container'>
      <Navbar />
      <Header />
      <AboutUs />
    </div>
  )
}

export default App;
