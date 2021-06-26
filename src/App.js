import './App.css';
import Sidebar from './Sidebar.js';
import Chat from './Chat.js';
import { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import axios from './axios.js';

function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios.get('/messages/sync').then(response => {
      setMessages(response.data);
    });
  }, [])
  useEffect(() => {
    const pusher = new Pusher('f85dee62b3c265cc7e67', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages]);
  console.log(messages);
  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;