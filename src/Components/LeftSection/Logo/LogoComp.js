import React from "react";
import './LogoComp.css';
import logo from '../../Assets/Logo.png';

function Logo() {
    return (
        <div className="logo">
            <img src={logo} alt="GreenHouse logo" />
            <h1>Green House</h1>

        </div>
    );
}

export default Logo;