import { useState, useEffect } from "react";
import "./clock.css";

function AnalogClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
        setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const hourHandStyle = {
        transform: `rotate(${
        (time.getHours() % 12) * 30 + time.getMinutes() * 0.5 + time.getSeconds() * (0.5 / 60)
        }deg)`,
    };

    const minuteHandStyle = {
        transform: `rotate(${time.getMinutes() * 6 + time.getSeconds() * 0.1}deg)`,
    };

    const secondHandStyle = {
        transform: `rotate(${time.getSeconds() * 6}deg)`,
    };

    return (
        <div className="clock-container">
            <h1>Analog Clock</h1>
            <div className="clock">
                <div className="face">
                    {/* Center Dot */}
                    <div className="center-dot"></div>
                    
                    {/* Hour Hand */}
                    <div className="hand hour" style={hourHandStyle}></div>

                    {/* Minute Hand */}
                    <div className="hand min" style={minuteHandStyle}></div>

                    {/* Second Hand */}
                    <div className="hand second" style={secondHandStyle}></div>

                    {/* Hour Markers */}
                    {[...Array(12).keys()].map((index) => (
                        <div
                            key={index}
                            className="hour-marker"
                            style={{ transform: `rotate(${index * 30}deg)` }}
                            >
                                <div className="marker"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AnalogClock;
