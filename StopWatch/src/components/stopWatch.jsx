
import { useRef, useState } from 'react';
import './stopwatch.css';

function StopWatch(){

    const [time,setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [laps, setLaps] = useState([]);
    const intervalRef = useRef(null);

    const startTimer = () => {
        if (!isRunning){
            setIsRunning(true);
            intervalRef.current = setInterval(() => {
                setTime((prevtime) => prevtime + 10);
            }, 10);
        }
    };

    const pauseTimer = () => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
    };

    const resetTimer = () => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
        setTime(0);
        setLaps([]);
    };

    const recordLap = () => {
        setLaps((prevLaps) => [...prevLaps,time]);
    }

    const formatTime = (time) => {
        const milliseconds = time %1000;
        const seconds = Math.floor((time/1000)%60);
        const minutes = Math.floor((time/60000)%60);
        const hours = Math.floor(time/3600000);

        return `${hours.toString().padStart(2,"0")}:
                ${minutes.toString().padStart(2,"0")}:
                ${seconds.toString().padStart(2,"0")}.
                ${Math.floor(milliseconds/10).toString().padStart(2,"0")}`
    };

    return (
        <div className="stopwatch-container">
            <h2 className="time">{formatTime(time)}</h2>
            <div className="buttons">
                {
                    !isRunning ? (
                        <button className="start-button" onClick={startTimer}>Start</button>
                    ) : (
                        <button className="pause-button" onClick={pauseTimer}>Pause</button>
                    )
                }
                <button className="reset-button" onClick={resetTimer}>Reset</button>
                <button className="lap" onClick={recordLap} disabled={!isRunning}>Lap</button>
            </div>
            <br />
            <hr />
            <br />
            <ul>
                {
                    laps.map((lap,index) => (
                        <li key={index}>Lap{index+1}:{formatTime(lap)}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default StopWatch;