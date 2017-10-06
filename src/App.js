import React, { Component } from "react";
import firebase from "./firebase.js";

import Chat from "./components/Chat";
import UserMessageInput from "./components/UserMessageInput";

import "./css/App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            windowFocused: true
        };
        this.setFocusState = this.setFocusState.bind(this);
    }
    setFocusState(windowFocused) {
        this.setState({ windowFocused });
        document.title = "SINergy chat";
    }
    componentDidMount() {
        window.addEventListener("focus", () => this.setFocusState(true));
        window.addEventListener("blur", () => this.setFocusState(false));

        const messageRef = firebase
            .database()
            .ref("messages")
            .limitToLast(60);

        messageRef.on("value", snapshot => {
            document.title = this.state.windowFocused ? "SINergy chat" : "New - SINergy chat";
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
        return (
            <div className="App">
                <Chat messages={this.state.messages} />
                <UserMessageInput submitMessage={this.submitMessage} />
            </div>
        );
    }
}

export default App;
