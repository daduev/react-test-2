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
*/

class App extends React.Component {
    render(){
        let txt = this.props.txt;
        let chl = this.props.children;

        console.log(chl);

        return (
            <div>
                <h1>{txt}</h1>
                {chl}
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

//ReactDom.render(<App txt={"111"} num={4} />, document.getElementById("content"));

export default App;
