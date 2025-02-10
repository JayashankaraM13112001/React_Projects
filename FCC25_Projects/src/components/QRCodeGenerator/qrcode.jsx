import { useState, useCallback } from "react";
import QRCode from 'react-qr-code';

export default function QRCodeGenerator() {
    const [qrcode, setQRCode] = useState("Hi!");
    const [input, setInput] = useState("");

    const createQRCode = useCallback(() => {
        if (input.trim()) {
            setQRCode(input);
            setInput("");
        }
    }, [input]);

    return (
        <div>
            <h1>QR Code Generator</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter data"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button disabled={!input.trim()} onClick={createQRCode}>Generate</button>
            </div>
            <br /><hr /><br />
            <div>
                <QRCode value={qrcode} size={300} bgColor="#fff" />
            </div>
        </div>
    );
}
