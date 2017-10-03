import React from "react";

const Chat = ({ messages }) => {
    return (
        <div className="Chat">
            <ul>
                {messages.map(message => {
                    return (
                        <li key={message.id}>
                            <span className="username">{message.username}:</span>
                            <span className="message">{message.text}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Chat;
