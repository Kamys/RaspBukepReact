import React from "react";
import ReactDOM from "react-dom";


class HelloWorld extends React.Component {
    render() {
        return <h1>HelloWorld</h1>;
    }
}

ReactDOM.render(
    <HelloWorld/>,
    document.getElementById("app")
);
