import { useState } from 'react';
import DigitalClock from './components/digitalClock';
import AnalogClock  from './components/analogClock';
import StopWatch from './components/stopWatch';
import './clock.css'

function Clocks(){

    const [clockType, setClockType] = useState("DC");

    return (
        <div className="container">
            <div className="nav-bar">
                <div className="analog" onClick={() => setClockType("AC")}>Analog Clock</div>
                <div className="digital" onClick={() => setClockType("DC")}>Digital Clock</div>
                <div className="stopwatch" onClick={() => setClockType("SW")}>Stopwatch</div>
            </div>

            <div className="clock-window">
                {clockType === "AC" && <AnalogClock />}
                {clockType === "SW" && <StopWatch />}
                {clockType === "DC" && <DigitalClock />}
            </div>
        </div>
    )
}

export default Clocks;