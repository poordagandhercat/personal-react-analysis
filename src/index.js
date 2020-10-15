import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            say: '你想说什么fefe',
        }
    }

    render() {
        return (
            <div>
                <div>{this.state.say}</div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
