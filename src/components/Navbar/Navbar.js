import React from "react";
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {

    return <div className="navbar">
        <header className="navbar__header">
            <span className="navbar__logo">Warsaw Restaurant</span>
            <nav className="navbar__nav">
                <ul className="navbar__menu-list">
                    <li className="navbar__menu-item">About Us</li>
                    <li className="navbar__menu-item">Menu</li>
                    <li className="navbar__menu-item">Chef</li>
                    <li className="navbar__menu-item">Gallery</li>
                    <li className="navbar__menu-item">Find Us</li>
                </ul>
            </nav>
        </header>
    </div>

}

export default Navbar;