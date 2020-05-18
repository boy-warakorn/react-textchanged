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
        <UserOutput userName={this.state.userName}></UserOutput>
        <UserOutput userName={this.state.userName}></UserOutput>
        <UserInput
          changed={this.changeNameHandler}
          userName={this.state.userName}
        ></UserInput>
      </div>
    );
  }
}

export default App;
