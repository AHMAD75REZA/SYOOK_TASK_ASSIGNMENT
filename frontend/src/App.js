import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3001'); // Adjust the URL to match the Listener Service's URL

function App() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on('newMessage', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });
    }, []);

    return (
        <div>
            <h1>Encrypted Timeseries Data</h1>
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>{JSON.stringify(message)}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
