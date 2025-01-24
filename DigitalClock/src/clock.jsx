import { useState, useEffect } from "react";
import './clock.css'

function DigitalClock(){

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const IntervalId = setInterval(() => {
            setTime(new Date());
        },1000);

        return () => {
            clearInterval(IntervalId);
        }
    },[]);

    function formatTime(){
        let hours = time.getHours();
        const mins = time.getMinutes();
        const secs = time.getSeconds();
        const meridiem  = hours>=12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(mins)}:${padZero(secs)} ${meridiem}`;
    }

    function padZero(num){
        return num<10 ? "0"+num : num;
    }

    return (
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}

export default DigitalClock;