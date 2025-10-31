import React, { useState } from "react";

const Popup: React.FC = () => {
    const [message, setMessage] = useState("Hello Chrome Extension!");

    const handleClick = () => {
        // バックグラウンドスクリプトにメッセージを送信
        chrome.runtime.sendMessage({ action: "test" }, (response) => {
            console.log("Response from background:", response);
            setMessage("Message sent to background!");
        });
    };

    return (
        <div style={{ width: "300px", padding: "20px" }}>
            <h2>Chrome Extension</h2>
            <p>{message}</p>
            <button onClick={handleClick}>Send Message</button>
        </div>
    );
};

export default Popup;
