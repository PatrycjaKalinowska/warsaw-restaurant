import React, { useState } from "react";
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import { Link } from "react-scroll";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return <div className="navbar">
            <div className="navbar__logo"><Link to="header" spy={true} smooth={true} duration={600} className="navbar__logo-link">Warsaw Restaurant</Link></div>
            <nav className="navbar__nav">
                <ul className="navbar__menu-list">
                    <li className="navbar__menu-item"><Link to="aboutUs" spy={true} smooth={true} offset={10} duration={600}>About Us</Link></li>
                    <li className="navbar__menu-item"><Link to="menu" spy={true} smooth={true} offset={10} duration={600}>Menu</Link></li>
                    <li className="navbar__menu-item"><Link to="gallery" spy={true} smooth={true} offset={10} duration={600}>Gallery</Link></li>
                    <li className="navbar__menu-item"><Link to="findUs" spy={true} smooth={true} offset={10} duration={600}>Find Us</Link></li>
                </ul>
                <div className="navbar__menu-hamburger">
                    <GiHamburgerMenu className="navbar__menu-hamburger__icon" onClick={() => {setToggleMenu(true)}}/>

                    {toggleMenu && (<div className="navbar__menu-hamburger-overlay">
                    <FaTimes className="navbar__menu-hamburger-overlay-close" onClick={() => {setToggleMenu(false)}}/>
                    <ul className="navbar__menu-hamburger-list">
                        <li className="navbar__menu-hamburger-item"><a href="#aboutUs">About Us</a></li>
                        <li className="navbar__menu-hamburger-item"><a href="#menu">Menu</a></li>
                        <li className="navbar__menu-hamburger-item"><a href="#gallery">Gallery</a></li>
                        <li className="navbar__menu-hamburger-item"><a href="#findUs">Find Us</a></li>
                    </ul>
                </div>)}
                     


                </div>
            </nav>
    </div>

}

export default Navbar;