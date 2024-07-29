import React, { useState } from "react";
import './PlantDetails.css';
import plant from '../../../Assets/pngwing.com.png'

function PlantDetails() {
    let d = 225;
    let y = 0;
    const [name, setName] = useState("Zar3a")
    const [years, setYears] = useState(y)
    const [days, setDays] = useState(d)
    const [status, setStatus] = useState("Good")

    if (days === 365) {
        y = y + 1;
        d = 0
        setYears(y);
        setDays(d);        
    }



    return (
        <div className="details">
            <h2>Plant details</h2>
            <div className="sec">
                <img src={plant} alt="Plant" />
                <div className="info">
                    <p>Name: {name}</p>
                    <p>Age: {years} ys / {days } ds</p>
                    <p>Status: {status}</p>
                </div>


            </div>
        </div>
    );
}

export default PlantDetails;