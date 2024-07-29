import React from "react";
import './Plant.css';
import PlantDetails from "./PlantDetails/PlantDetails";
import Status from "./Status/Status";



function Plant() {
    return (
        <section className="plant">
            <PlantDetails />
            <Status />
        </section> 
    );
}

export default Plant;