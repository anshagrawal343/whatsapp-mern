import React from 'react';
import './SidebarChat.css';
import Avatar from '@material-ui/core/Avatar';

const SidebarChat = () => {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat_info">
                <h1>Room Name</h1>
                <p>This is the last message</p>
            </div>
        </div>
    )
}

export default SidebarChat
