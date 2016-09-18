import React from "react";
import ReactDom from "react-dom";

/*
const App = React.createClass({
    render: function () {
        return (
            <h1>Hello!</h1>
        )
    }
});

export default App;
*/

class App extends React.Component {
    render(){
        let txt = this.props.txt;

        console.log(txt);

        return (
            <div>
                <h1>{txt}</h1>
            </div>
        )
    }
};

App.propTypes = {
    txt: React.PropTypes.string.isRequired,
    num: React.PropTypes.number.isRequired
};

App.defaultProps = {
    num: 5
}

ReactDom.render(<App txt={"111"} num={4} />, document.getElementById("content"));

//React lessons
//https://egghead.io/courses/react-fundamentals