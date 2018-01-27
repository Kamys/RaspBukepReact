import React from "react";
import ReactDOM from "react-dom";


class HelloWorld extends React.Component {
    render() {
        return (<div>
            <button type="button" className="btn btn-primary">Главный</button>
            <button type="button" className="btn btn-secondary">Вторичный</button>
            <button type="button" className="btn btn-success">Успех</button>
            <button type="button" className="btn btn-danger">Опасность</button>
            <button type="button" className="btn btn-warning">Предупреждение</button>
            <button type="button" className="btn btn-info">Инфо</button>
            <button type="button" className="btn btn-light">Светлый</button>
            <button type="button" className="btn btn-dark">Темный</button>
        </div>);
    }
}

ReactDOM.render(
    <HelloWorld/>,
    document.getElementById("app")
);
