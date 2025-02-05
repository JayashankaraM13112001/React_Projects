import { useState } from "react"
import QRCode from 'react-qr-code'

export default function QRCodeGenerator() {

    const [qrcode, setQRCode] = useState("Hi!")
    const [input, setInput] = useState("")

    const createQRCode = () => {
        setQRCode(input);
        setInput("")
    }

    return (
        <div>
            <h1>QR Code Generator</h1>
            <div>
                <input type="text"
                    placeholder="enter data"
                    value={input}
                    onChange={(e) => setInput(e.target.value)} />
                <button disabled={input && input.trim()!== "" ? false : true} onClick={createQRCode}>Generate</button>
            </div>
            <br /><hr /><br />
            <div>
                <QRCode value={qrcode} size={300} bgColor="#fff" />
            </div>
        </div>
    )
}