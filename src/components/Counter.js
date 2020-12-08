import React, {Component} from 'react';

class Counter extends Component {
    state = {result: 0};

    plus1 = () => {
        let {result} = this.state;
        let add1 = result + 1;
        this.setState({result: add1});
    };

    minus1 = () => {
        let {result} = this.state;
        let away1 = result - 1;
        this.setState({result: away1});
    };

    plus100 = () => {
        let {result} = this.state;
        let add100 = result + 100;
        this.setState({result: add100});
    };

    minus100 = () => {
        let {result} = this.state;
        let away100 = result - 100;
        this.setState({result: away100});
    };

    reset = () => {this.setState({result: 0})};

    enterInput = (e) => { //   сделать его контролируемым
        console.log(e.target.valueAsNumber);
    }

    submitNumber = (event) => {
        let {result} = this.state;
        console.log(event.target);
        let actNumber = result + event.target.previousSibling.valueAsNumber;
        console.log(actNumber);
        this.setState({result: actNumber})
    }


    render() {
        let {result} = this.state;
        return (
            <div className={'Wrapper'}>
                <div>Counter
                    <div>{result}</div>
                    <div>
                        <button onClick={this.plus1}>+1</button>
                        <button onClick={this.minus1}>-1</button>
                        <button onClick={this.plus100}>+100</button>
                        <button onClick={this.minus100}>-100</button>
                        <button onClick={this.reset}>reset</button>
                    </div>
                    <div>
                        <label/>Number
                        <input type={'number'} onChange={this.enterInput}/>
                        <button onClick={this.submitNumber}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Counter;