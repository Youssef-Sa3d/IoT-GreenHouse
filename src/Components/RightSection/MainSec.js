import React from "react";
import './MainSec.css';
import MainHead from "./Header/MainHead";
import Plant from "./Plant/Plant";
import Control from "./Controller/Control";



function MainSec() {
	return (
		<section className="sec2">
			<MainHead />
			<Plant />
            <Control />
		</section>
	);
}

export default MainSec;