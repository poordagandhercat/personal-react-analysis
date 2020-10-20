import React from './my-react-js';
let ReactDOM = React;

function App(props) {
    const [num, setNum] = React.useState(1)
    return (
        <div id="App">
            <div>{props.title}、{num}</div>
            <button onClick={() => setNum(num + 1)}>累加</button>
            <div>源码</div>
        </div>
    );
}

let element = <App title="学习react" />

ReactDOM.render(
    element,
    document.getElementById('root')
);
