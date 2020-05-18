import React from "react";
import "./UserInput.css";

const UserInput = (props) => {
  return (
    <div>
      <label>Input your name: </label>
      <input type="text" onChange={props.changed} value={props.userName} />
    </div>
  );
};

export default UserInput;
