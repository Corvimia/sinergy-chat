import React, { Component } from "react";
import firebase from "./firebase.js";

import Chat from "./components/Chat";
import UserMessageInput from "./components/UserMessageInput";

import "./css/App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
    }
    componentDidMount() {
        const messageRef = firebase
            .database()
            .ref("messages")
            .limitToLast(60);

        messageRef.on("value", snapshot => {
            let items = snapshot.val();
            let newState = [];
            for (let item in items) {
                newState.push({
                    id: item,
                    text: items[item].text,
                    username: items[item].username,
                    timestamp: items[item].timestamp
                });
            }

            this.setState({
                messages: newState
            });
        });
    }

    submitMessage(username, messageText) {
        const messagesRef = firebase.database().ref("messages");
        const message = {
            username,
            text: messageText,
            timestamp: new Date().getTime()
        };
        messagesRef.push(message);
    }

    render() {
        console.log(this.state.messages);
        return (
            <div className="App">
                <Chat messages={this.state.messages} />
                <UserMessageInput submitMessage={this.submitMessage} />
            </div>
        );
    }
}

export default App;
