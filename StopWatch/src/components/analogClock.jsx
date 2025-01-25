import { useState, useEffect } from "react";
import './analogClock.css'

function AnalogClock(){

    const [time, setTime] = useState(new Date());

    useEffect(()=> {
        const interval = setInterval(()=> {
            setTime(new Date());
        },1000);

        return ()=> clearInterval(interval);
    },[])

    const getRotation = (value, max) => {
        return `rotate(${value * (360/max)}deg)`;
    }

    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours()%12 + minutes/60;

    return (
        <div className="analog-clock-container">
            <div className="face">
                {
                    [...Array(12)].map((_,index) => (
                        <div className="hour-marks" key={index} style={{transform: `rotate(${index*30}deg)`}}></div>
                    ))
                }

                {/* Clock hands */}
                <div className="hand hour-hand" style={{transform: getRotation(hours,12)}}></div>
                <div className="hand minute-hand" style={{transform: getRotation(minutes,60)}}></div>
                <div className="hand second-hand" style={{transform: getRotation(seconds,60)}}></div>

                <div className="center-point"></div>
            </div>
        </div>
    );
}

export default AnalogClock;