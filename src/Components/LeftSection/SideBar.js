import React from "react";
import './SideBar.css';
import Logo from "./Logo/LogoComp";
import Branches from "./Branches/Branches";

function SideBar() {
    return (
        <section className="sec1">
            <Logo />
            <Branches />
        </section>
    );
}

export default SideBar;