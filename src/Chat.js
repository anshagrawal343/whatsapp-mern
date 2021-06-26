import React from 'react';
import './Chat.css';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { useState } from "react";
import axios from './axios.js';

const Chat = ({messages}) => {
    const [input, setInput] = useState("");
    const sendMessage = async (event) => {
        event.preventDefault();
        axios.post('/messages/new', {
            message: input,
            name: "Demo",
            timestamp: "just now",
            received: true
        });
        setInput('');
    }
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />
                <div className="chat_headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat_body">
                {messages.map((message) => {
                return <p className={`chat_message ${message.received && "chat_reciever"}`}>
                    <span className="chat_name">
                        {message.name}
                    </span>
                    {message.message}
                    <span className="chat_timestamp">
                        {message.timestamp}
                    </span>
                </p>
                })}
            </div>
            <div className="chat_footer">
                <IconButton>
                    <InsertEmoticonIcon />
                </IconButton>
                <form action="">
                    <input value={input} onChange = {(event => {
                        setInput(event.target.value)
                    })} type="text" name="" id="" placeholder="Type a message" />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <IconButton>
                    <MicIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Chat
