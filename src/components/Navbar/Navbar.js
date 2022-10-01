import React, { forwardRef, useState } from "react";
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return <div className="navbar">
            <div className="navbar__logo"><a className="navbar__logo-link" href="#">Warsaw Restaurant</a></div>
            <nav className="navbar__nav">
                <ul className="navbar__menu-list">
                    <li className="navbar__menu-item"><a href="#">About Us</a></li>
                    <li className="navbar__menu-item"><a href="#">Menu</a></li>
                    <li className="navbar__menu-item"><a href="#">Chef</a></li>
                    <li className="navbar__menu-item"><a href="#">Gallery</a></li>
                    <li className="navbar__menu-item"><a href="#">Find Us</a></li>
                </ul>
                <div className="navbar__menu-hamburger">
                    <GiHamburgerMenu color="#cfcdcd" fontSize={25} onClick={() => {setToggleMenu(true)}}/>

                    {toggleMenu && (<div className="navbar__menu-hamburger-overlay">
                    <FaTimes className="navbar__menu-hamburger-overlay-close" color="#cfcdcd" font-size={25} onClick={() => {setToggleMenu(false)}}/>
                    <ul className="navbar__menu-hamburger-list">
                        <li className="navbar__menu-hamburger-item"><a href="#aboutUs">About Us</a></li>
                        <li className="navbar__menu-hamburger-item"><a href="#">Menu</a></li>
                        <li className="navbar__menu-hamburger-item"><a href="#">Chef</a></li>
                        <li className="navbar__menu-hamburger-item"><a href="#">Gallery</a></li>
                        <li className="navbar__menu-hamburger-item"><a href="#">Find Us</a></li>
                    </ul>
                </div>)}
                     


                </div>
            </nav>
    </div>

}

export default Navbar;