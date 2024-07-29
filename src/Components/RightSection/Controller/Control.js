import React, { useState } from "react";
import './Control.css';




function Control() {
    const [isHeaterON, setIsHeaterON] = useState(false);
    const [heateronoff, setHeaterOnOff] = useState("ON");
    const heaterOnOff = () => {
        if (isHeaterON) {
            setIsHeaterON(false);
            setHeaterOnOff("ON");
        } else {
            setIsHeaterON(true);
            setHeaterOnOff("OFF");
            
        }
        
    }



    const [isFanON, setIsFanON] = useState(true);
    const [fanonoff, setFanOnOff] = useState("OFF");
    const fanOnOff = () => {
        if (isFanON) {
            setIsFanON(false);
            setFanOnOff("ON");
        } else {
            setIsFanON(true);
            setFanOnOff("OFF");
            
        }
        
    }



    const [isCoolerON, setIsCoolerON] = useState(false);
    const [Cooleronoff, setCoolerOnOff] = useState("ON");
    const coolerOnOff = () => {
        if (isCoolerON) {
            setIsCoolerON(false);
            setCoolerOnOff("ON");
        } else {
            setIsCoolerON(true);
            setCoolerOnOff("OFF");
            
        }
        
    }



    return (
        <section className="control">
            <h2>Controls</h2>
            <div className="controllers">
                <div className="eachControl">
                    <h3>Fan</h3>
                    <button onClick={fanOnOff} className={isFanON ? 'on' : 'off'}>{fanonoff}</button>
                </div>
                <div className="eachControl">
                    <h3>Cooler</h3>
                    <button onClick={coolerOnOff} className={isCoolerON ? 'on' : 'off'}>{Cooleronoff}</button>
                </div>
                <div className="eachControl">
                    <h3>Heater</h3>
                    <button onClick={heaterOnOff} className={isHeaterON ? 'on' : 'off'}>{heateronoff}</button>
                </div>
            </div>


        </section>
    );
}

export default Control;