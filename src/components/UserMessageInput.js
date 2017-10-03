import React, { Component } from "react";

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
        console.log("test");
        e.preventDefault();
        if (!this.state.username || !this.state.message) {
            return;
        }
        this.props.submitMessage(this.state.username, this.state.message);
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
