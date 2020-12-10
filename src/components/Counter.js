import React, {Component} from 'react';
import './Counter.css';

class Counter extends Component {
    state = {result: 0, input: 0};

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
        let {result} = this.state;

        return (
            <div className={'counter_wrap'}>Counter
                <div className={'result'}>{result}</div>
                <div className={'btns'}>
                    <button onClick={()=>{this.plus(1)}} className={'btn'}>+1</button> {/*or onClick={this.plus.bind(null, 1)}*/}
                    <button onClick={()=>{this.plus(-1)}} className={'btn'}>-1</button>
                    <button onClick={()=>{this.plus(100)}} className={'btn'}>+100</button>
                    <button onClick={()=>{this.plus(-100)}} className={'btn'}>-100</button>
                    <button onClick={this.reset} className={'btn_reset'}>reset</button>
                </div><hr/>
                <div className={'input_area'}>
                    <label>Number</label>
                    <input type={'number'} onChange={this.enterInput} className={'input'}/>
                    <button onClick={this.submitNumber} className={'btn'}>Submit</button>
                </div>
            </div>
        );
    }
}

export default Counter;
