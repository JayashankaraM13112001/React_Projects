import { useState } from "react";
import data from './data.js'
import './accordion.css'

function Accordion(){

    const [selected, setSelected] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([])

    function handleSingleSelection(itemId){
        setSelected(itemId === selected ? null : itemId);
    }

    function handleMultipleSelection(itemId){
        let cpyMultiple = [...multiple];
        const indexofItem = cpyMultiple.indexOf(itemId);

        if (indexofItem === -1) cpyMultiple.push(itemId);
        else cpyMultiple.splice(indexofItem,1);

        setMultiple(cpyMultiple);
    }

    return (
        <div className="container">
            <div className="accordion">
                <div className="head-line">
                    <h1>Accordion</h1>
                    <button onClick={() => setEnableMultiSelection(!enableMultiSelection)} style={enableMultiSelection ? {backgroundColor: "green"} : {backgroundColor: "red"}}>Multiselection:{enableMultiSelection ? "On" : "Off"}</button>
                </div>
                {
                    data && data.length > 0 ? 
                        data.map(dataItem => 
                            <div className="item" key={dataItem.id} onClick={
                                enableMultiSelection ? () => handleMultipleSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)
                            }>
                                <div className="title">
                                    <h3>{dataItem.question}</h3>
                                    <span>{selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? "-" : "+"}</span>
                                </div>

                                {
                                    selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? <div className="answer">{dataItem.answer}</div> : null
                                }
                            </div>
                        )
                    : <div>No data found</div>
                }
            </div>
        </div>
    )
}

export default Accordion;