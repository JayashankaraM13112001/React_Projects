import { useLayoutEffect, useState } from "react"


export default function WindowResize() {

    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
    
    function handleResize() {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    useLayoutEffect(() => {
        handleResize()

        window.addEventListener("resize", handleResize)
        
        return ()=>{window.removeEventListener("resize", handleResize)}
    },[])
    
    return (
        <div>
            <h1>Resizing window using React hook</h1>
            <p>Width is {windowSize.width}</p>
            <p>Height is {windowSize.height}</p>
        </div>
    )
}