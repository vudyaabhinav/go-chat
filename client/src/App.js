import './App.css';
import { connect, sendMsg } from './api';
import { useEffect, useState } from 'react'

import Header from './components/Header/Header';
import ChatHistory from './components/ChatHistory/ChatHistory';
import ChatInput from './components/ChatInput/ChatInput';

function App() {

  const [chatHistory, setChatHistory] = useState([])

  useEffect(() => {
    console.log('on init')
    connect((msg) => {
      setChatHistory(history => [...history, msg])
    })
  }, [])

  const onSend = (event) => {
    if (event.keyCode === 13) {
      if (!event.target.value.length) {
        alert('Please type a message')
        return
      }

      sendMsg(event.target.value)
      event.target.value = ''
    }
  }

  return (
    <div className="App">
      <Header />
      <ChatHistory chatHistory={chatHistory} />
      <ChatInput send={onSend} />
    </div>
  );
}

export default App;
