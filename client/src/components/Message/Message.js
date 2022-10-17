import { useState } from 'react';
import './Message.scss';

export default function Message(props) {
    const msg = JSON.parse(props.message)
    const [message] = useState(msg)

    return <div className="Message">{message.body}</div>
}