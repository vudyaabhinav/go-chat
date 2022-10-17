import './ChatInput.scss';

export default function ChatInput(props) {
    return (
        <div className="ChatInput">
            <input onKeyDown={props.send} placeholder="Hit 'Enter' to send message"/>
        </div>
    )
}