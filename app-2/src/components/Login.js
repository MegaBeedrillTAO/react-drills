import React, { Component } from "react";

class Login extends Component{
    
    constructor(){
        super();
        this.state ={
          username: "",
          password: ""
        }
        this.clickButton = this.clickButton.bind(this);
    }

    clickButton(){
        window.alert(`Username: ${this.state.username}  Password: ${this.state.password}`)
    }
    changeUsername = e =>{
        this.setState({username: e.target.value});
    }
    changePassword = e =>{
        this.setState({password: e.target.value});
    }
    render(){
        return(
            <div>
                <input placeholder="username" onChange={this.changeUsername}/>
                <input placeholder="password" onChange={this.changePassword}/>
                <button onClick={this.clickButton}>Login</button>
            </div>
        )
    }
    
}
export default Login;