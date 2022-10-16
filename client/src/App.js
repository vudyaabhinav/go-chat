import './App.css';
import { connect, sendMsg } from './api';
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    console.log('on init')
    connect()
  }, [])

  const send = () => {
    console.log('bro')
    sendMsg('Bro')
  }
  return (
    <div className="App">
      <button onClick={send}>Hit</button>
    </div>
  );
}

export default App;
