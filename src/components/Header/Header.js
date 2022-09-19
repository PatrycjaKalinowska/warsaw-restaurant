import React from "react";
import './Header.css';
import banner from '../../assets/banner.png';

const Header = () => {

    return <div className="header">
        <div className="header__title-container">
            <p className="header__title">Good food</p>
            <p className="header__title">for good people</p>
        </div>
        <img className="header__banner-img" src={banner} alt="banner"/>
    </div>
}

export default Header;