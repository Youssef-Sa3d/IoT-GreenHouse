import React, { useState } from "react";
import './Status.css';
import humidity from '../../../Assets/Humidity.png'
import temp from '../../../Assets/temp.png'

function Status() {

    const [hum, setHumidity] = useState(48)
    const [temperature, setTemp] = useState(23)



    return (
        <div className="status">
            <h2>Status</h2>
            <div className="cards">
                <div className="eachCard">
                    <img src={humidity} alt="Humidity" />
                    <h4>{hum}%</h4>
                    <p>Humidity perceetage</p>
                </div>
                <div className="eachCard">
                    <img src={temp} alt="Humidity" />
                    <h4>{temperature} C</h4>
                    <p>Temperature</p>
                </div>


            </div>

        </div>
    );
}

export default Status;