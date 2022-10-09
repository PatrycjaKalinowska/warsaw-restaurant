import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import Menu from './components/Menu/Menu';
import Gallery from './components/Gallery/Gallery';
import FindUs from './components/FindUs/FindUs';
import Footer from './components/Footer/Footer';

const App = () => { 


  return (
    <div className='app__container'>
      <Navbar />
      <Header />
      <AboutUs />
      <Menu />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  )
}

export default App;
