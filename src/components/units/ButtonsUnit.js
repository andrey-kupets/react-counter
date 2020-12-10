import React, {Component} from 'react';

class ButtonsUnit extends Component {

    state = {result: 0, input: 0};

    render() {
        let {fPlus, fReset} = this.props;

        return (

            <div>
                <div className={'btns'}>
                    <button onClick={()=>{fPlus(1)}} className={'btn'}>+1</button> {/*or onClick={this.plus.bind(null, 1)}*/}
                    <button onClick={()=>{fPlus(-1)}} className={'btn'}>-1</button>
                    <button onClick={()=>{fPlus(100)}} className={'btn'}>+100</button>
                    <button onClick={()=>{fPlus(-100)}} className={'btn'}>-100</button>
                    <button onClick={fReset} className={'btn_reset'}>reset</button>
                </div><hr/>
            </div>
        );
    }
}

export default ButtonsUnit;