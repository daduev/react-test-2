import React from "react";
import ReactDom from "react-dom";

class App2 extends React.Component {
    constructor(){
        super();

        this.state = {
            txt: "This is txt",
            cat: 0
        }
    }

    update(e){
        console.log(e);
        this.setState({txt: e.target.value});
    }



    render(){

        return (
            <div>
                <h1>{this.state.txt}</h1>
                <input type="text"
                       onChange={this.update(this)}/>
            </div>
        )
    }
};

ReactDom.render(<App2 />, document.getElementById("content"));