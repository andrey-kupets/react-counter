import React, {Component} from 'react';
import './Counter.css';

class Counter extends Component {
    state = {result: 0, input: 0};

    plus1 = () => {
        let {result} = this.state;
        let add1 = result + 1;
        this.setState({result: add1});
    };

    minus1 = () => {
        let {result} = this.state;
        let subtract1 = result - 1;
        this.setState({result: subtract1});
    };

    plus100 = () => {
        let {result} = this.state;
        let add100 = result + 100;
        this.setState({result: add100});
    };

    minus100 = () => {
        let {result} = this.state;
        let subtract100 = result - 100;
        this.setState({result: subtract100});
    };

    reset = () => {this.setState({result: 0})};

    enterInput = (event) => {
        let inputValue = event.target.valueAsNumber;
        this.setState({input: inputValue});
    }

    // submitNumber = (event) => {          // работает без функции, налаживаемой на инпут enterInput - напрямую вызывает значение элемента рядом
    //     let {result} = this.state;
    //     let actNumber = result + event.target.previousSibling.valueAsNumber;
    //     this.setState({result: actNumber});
    // }

    submitNumber = (enterInput) => {
        let {input, result} = this.state;
        let RESULT = result + input;
        this.setState({result: RESULT})
    }

    render() {
        let {result} = this.state;
        return (
            <div className={'counter_wrap'}>Counter
                <div className={'result'}>{result}</div>
                <div className={'btns'}>
                    <button onClick={this.plus1} className={'btn'}>+1</button>
                    <button onClick={this.minus1} className={'btn'}>-1</button>
                    <button onClick={this.plus100} className={'btn'}>+100</button>
                    <button onClick={this.minus100} className={'btn'}>-100</button>
                    <button onClick={this.reset} className={'btn_reset'}>reset</button>
                </div><hr/>
                <div className={'input_area'}>
                    <label/>Number
                    <input type={'number'} onChange={this.enterInput} className={'input'}/>
                    <button onClick={this.submitNumber} className={'btn'}>Submit</button>
                </div>
            </div>
        );
    }
}

export default Counter;