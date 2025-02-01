import { useCallback, useEffect, useState } from 'react'
import './random_color.css'

export default function RandomColor() {

    const [colorType, setColorType] = useState("hex")
    const [color, setColor] = useState("#000000")
    

    function randomColorIndex(len){
        return Math.floor(Math.random()*len)
    }
    
    const handleCreateRGBColor = useCallback(() => {
        const r = randomColorIndex(256)
        const g = randomColorIndex(256)
        const b = randomColorIndex(256)

        setColor(`rgb(${r},${g},${b})`)
    },[])

    const handleCreateHEXColor = useCallback(() => {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
        let hexColor = "#"
        for (let i = 0; i < 6; i++){
            hexColor += hex[randomColorIndex(hex.length)]
        }
        setColor(hexColor);
    },[])

    useEffect(() => {
        if (colorType === 'rgb') {
            handleCreateRGBColor();
        } else {
            handleCreateHEXColor();
        }
    }, [colorType,handleCreateHEXColor,handleCreateRGBColor]); // Triggers when colorType changes

    
    return (
        <div className='container' style={{backgroundColor:color}}>
            <div className="buttons">
                <button className='btn hex' onClick={()=>{setColorType("hex")}}>Generate Hex Color</button>
                <button className='btn rgb' onClick={()=>{setColorType("rgb")}}>Generate RGB Color</button>
                <button className='btn random' onClick={
                    colorType === "hex" ? handleCreateHEXColor : handleCreateRGBColor
                }>Generate Random Color</button>
            </div>
            <div className="show-text">
                <h2>{colorType === "hex" ? "Hex color" : "RGB color"}: {color}</h2>
            </div>
        </div>
        
    )
}