import './App.css';
import { connect, sendMsg } from './api';
import { useEffect, useState } from 'react'

import Header from './components/Header/Header';
import ChatHistory from './components/ChatHistory/ChatHistory';

function App() {

  const [messages, setMessages] = useState([])

  useEffect(() => {
    console.log('on init')
    connect((msg) => {
      setMessages(history => [...history, msg])
    })
  }, [])

  const send = () => {
    sendMsg('Bro')
  }
  return (
    <div className="App">
      <Header />
      <ChatHistory messages={messages} />
      <button onClick={send}>Hit</button>
    </div>
  );
}

export default App;
