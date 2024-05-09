import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Chat from './Chat.jsx';

function Home(params) {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const socket = io(`http://localhost:5000`, { transports: ['websocket'] });

        socket.on('custom_connect', (data) => {
            setMessage(data)
        })
        return () => {
            socket.disconnect();
        }
    }, [])
    return (
        <div>
            <h1>Websocket</h1>
            <p>{JSON.stringify(message)}</p>
            <Chat/>
        </div>
    )   
}

export default Home