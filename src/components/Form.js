import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    var myWindow = window.open();
    myWindow.alert(` Username: ${this.state.username}, Password: ${this.state.password} `);
    myWindow.document.write(`<p> Username: ${this.state.username}, Password: ${this.state.password}</p> `);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} target="_blank">
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
        </div>
        <div>
          <button type="submit">FormSubmit</button>
        </div>
      </form>
    );
  }
}

export default Form;
