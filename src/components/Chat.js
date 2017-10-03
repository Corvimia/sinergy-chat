import React from "react";

const Chat = ({ messages }) => {
    return (
        <div className="Chat">
            <ul>
                {messages.map(message => {
                    return (
                        <li key={message.id}>
                            <span>{message.username}:</span>
                            <span>{message.text}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Chat;
