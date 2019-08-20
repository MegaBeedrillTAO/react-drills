import React, { Component } from "react";
import Login from "./components/Login";

class App extends Component {
  constructor(){
    super();
    this.state ={
      username: "",
      password: ""
    }
  }


  render(){
    return (
      <div>
        <Login/>
      </div>
    )
  }
}

export default App;
