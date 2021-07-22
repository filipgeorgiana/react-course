import React from 'react';
import './Counter.css';

export default class Counter extends React.Component {
    state = {
        counter: 0
    };

    increment = () => {
        this.setState({counter: this.state.counter + 1});
    };

    decrement = () => {
        this.setState({counter: this.state.counter - 1});
    }
    render() {
        const { counter } = this.state;
        const { name } = this.props;
        return(
            <div className='counter-box'>
                <button onClick={this.increment}> plus </button>
                <span className= {this.state.counter < 0 ? 'counter-box--warning' : ''}>
                    {name} {counter}
                </span>
                <button onClick={this.decrement}> minus </button>
            </div>
        )
    }
}