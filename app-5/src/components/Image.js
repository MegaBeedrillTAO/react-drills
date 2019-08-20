import React, { Component } from "react";

class Image extends Component{
    render(){
        return(
            <div>
                <img src={this.props.source} alt="Some picture"/>
            </div>
        )
    }
}
export default Image;