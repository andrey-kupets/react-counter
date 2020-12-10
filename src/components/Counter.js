import React, {Component} from 'react';
import './Counter.css';
import ButtonsUnit from "./units/ButtonsUnit";
import InputUnit from "./units/InputUnit";
import ResultUnit from "./units/ResultUnit";

class Counter extends Component {
    state = {
        result: 0,
        input: 0,
        mybutton: [1,-1,-25,100]
    };

    plus = (n) => {
        // let {result} = this.state;
        // let add1 = result + n;
        // if(add1 < 0)
        // {
        //     this.setState({result: 0})
        // }else
        // {



        // }

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
        let {result,mybutton} = this.state;

        return (
            <div className={'counter_wrap'}>Counter
                <ResultUnit divResult={result}/>
                <ButtonsUnit fPlus = {this.plus} fReset={this.reset} mybut={mybutton}/>
                <div className={'input_area'}>
                    <label>Number</label>
                    <InputUnit fInput={this.enterInput}/>
                    <button onClick={this.submitNumber} className={'btn'}>Submit</button>
                </div>
            </div>
        );
    }
}

export default Counter;
