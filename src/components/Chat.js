import React from "react";
import DateDisplay from "./Date";

const Chat = ({ messages }) => {
    return (
        <div className="Chat">
            <ul>
                {messages.map(message => {
                    return (
                        <li key={message.id}>
                            {message.timestamp && <DateDisplay value={message.timestamp} format={"YYYY/MM/DD 0H:0M:0S"} />}
                            <span className="username">
                                {message.username}
                                {">"}
                            </span>
                            <span className="message">{message.text}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Chat;
