import React, { Component } from "react";
import "./App.css";
import UserOutput from "./User/UserOutput";
import UserInput from "./User/UserInput";

class App extends Component {
  state = {
    userName: "Warakorn",
  };

  changeNameHandler = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };
  render() {
    return (
      <div class="App">
        <div className="header">
          <p className="header-text">Comments</p>
          <hr />
        </div>
        <UserInput
          changed={this.changeNameHandler}
          userName={this.state.userName}
        ></UserInput>
        <UserOutput userName={this.state.userName}></UserOutput>
        <UserOutput userName={this.state.userName}></UserOutput>
      </div>
    );
  }
}

export default App;
