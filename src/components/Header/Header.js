import React from "react";
import './Header.css';
import banner from '../../assets/banner.png';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Header = () => {

    return <div className="header" id="header">
        <div className="header__title-container">
            <p className="header__title">Good food</p>
            <p className="header__title">for good people</p>
        </div>
            <FaFacebook className="header__socials-icon icon-fb" />
            <FaInstagram className="header__socials-icon icon-insta"/>
            <FaTwitter className="header__socials-icon icon-tt"/>

        <img className="header__banner-img" src={banner} alt="banner"/>
    </div>
}

export default Header;