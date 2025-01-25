import { useEffect, useState } from "react";
import './digitalClock.css'

function DigitalClock(){

    const [time, setTime] = useState(new Date());

    useEffect(()=> {
        const interval = setInterval(()=>{
            setTime(new Date());
        },1000);

        return ()=> clearInterval(interval);
    },[])

    function handleDigitalClock(){
        let hours = time.getHours();
        const mins = time.getMinutes();
        const secs = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${padZeroes(hours)}:${padZeroes(mins)}:${padZeroes(secs)} ${meridiem}`;
    }

    function padZeroes(num){
        return num<10 ? "0"+num : num;
    }

    return (
        <div className="dc-container">
            <span>{handleDigitalClock()}</span>
        </div>
    )
}

export default DigitalClock;