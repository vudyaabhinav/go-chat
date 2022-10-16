import React from 'react';
import './ChatHistory.scss';

export default function ChatHistory(props) {
    return (
        <div className="ChatHistory">
            <h2>Messages</h2>
            {props.messages.map((msg, index) => <p key={index}>{msg.data}</p>)}
        </div>
    )
}