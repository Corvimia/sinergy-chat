import React, { Component } from "react";

const makeRandomHash = length => {
    var text = "";
    var possible = "0123456789";

    for (var i = 0; i < length; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
};

class UserMessageInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            message: ""
        };
        this.submitMessage = this.submitMessage.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    submitMessage(e) {
        e.preventDefault();

        let { username, message } = this.state;

        if (!username) {
            username = "#" + makeRandomHash(8);
        }

        if (username === "GOD" && window.location.href.indexOf("localhost") === -1) {
            return;
        }
        if (!message) {
            alert("You need a message!");
            return;
        }
        this.props.submitMessage(username, message);
        this.setState({ message: "" });
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        return (
            <div className="UserMessageInput">
                <form onSubmit={this.submitMessage}>
                    <input type="text" name="username" placeholder="Username" onChange={this.handleChange} value={this.state.username} />
                    <input type="text" name="message" placeholder="Message. Press Enter to send." onChange={this.handleChange} value={this.state.message} />
                    <button>Send</button>
                </form>
            </div>
        );
    }
}

export default UserMessageInput;
