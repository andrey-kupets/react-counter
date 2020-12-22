import React, {Component} from 'react';
import './Counter.css';
import ButtonsUnit from "./units/ButtonsUnit";
import ResultUnit from "./units/ResultUnit";
import InputArea from "./input-area/InputArea";

class Counter extends Component {
    state = {
        result: 0,
        input: 0,
        myButton: [1,-1, 100, -100]
    };

    plus = (n) => {

        this.setState(prevState=>{

            let {result} = prevState
            let add1 = result + n;

            return (add1 < 0) ? {result: 0} : {result: add1}
        })


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

    submitNumber = () => {

        let {input} = this.state;
        this.plus(input);
    }

    render() {
        let {result, myButton} = this.state;

        return (
            <div className={'counter_wrap'}>Counter
                <ResultUnit divResult={result}/>
                <ButtonsUnit fPlus = {this.plus} fReset={this.reset} myBtn={myButton}/>
                <InputArea fSubmit={this.submitNumber} fInput={this.enterInput}/>
            </div>
        );
    }
}

export default Counter;
