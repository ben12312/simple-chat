import { useEffect, useState } from 'react';
// import io from 'socket.io-client';
import Chat from './Chat.jsx';
import axios from "./lib/axios";
import { useNavigate } from 'react-router-dom';
// const SERVER_URL = `http://localhost:5000`;


function Home(params) {
    const navigate = useNavigate();
    const [userLogin] = useState(JSON.parse(localStorage.getItem('accessToken')));
    const [initData, setInitData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function getInitChat() {
        let accessToken = localStorage.getItem("accessToken");
        if (!accessToken) return navigate("/login")
        let response = await axios({
            method: 'GET',
            url: `/chat/get`,
        })
        // console.log('initData',response.data);
        setInitData(response.data);
        setIsLoading(false);
    }
    
    function logoutButton () {
        localStorage.removeItem('accessToken');
        return navigate("/login")
    }

    useEffect(() => {
        if (!userLogin) return navigate("/login")
        getInitChat();
        // const socket = io(SERVER_URL, { transports: ['websocket'] });

        // socket.on('send_chat', (data) => {
        //     setMessage(data)
        // })
        // socket.on('recieve_chat', (data) => {
        //     setMessage(data)
        // })
        // return () => {
        //     socket.disconnect();
        // }
    }, [])

    return (
        <div>
            <h3 style={{ textAlign: 'right', margin: 20}}><a onClick={logoutButton} style={{ color: 'grey'}}>logout</a></h3>
            {
                isLoading ? <></> : <Chat initChat={initData}/> // RENDER AFTER LOAD
            }
        </div>
    )   
}

export default Home