import React, {Component} from 'react';

const ButtonsUnit = ({fPlus, fReset})=>{

    const handlerButton =(num)=> fPlus(num);
    const reset=()=> fReset();

        return (

            <div>
                <div className={'btns'}>
                    <button onClick={()=>{handlerButton(1)}} className={'btn'}>+1</button> {/*or onClick={this.plus.bind(null, 1)}*/}
                    <button onClick={()=>{handlerButton(-1)}} className={'btn'}>-1</button>
                    <button onClick={()=>{handlerButton(100)}} className={'btn'}>+100</button>
                    <button onClick={()=>{handlerButton(-100)}} className={'btn'}>-100</button>
                    <button onClick={reset} className={'btn_reset'}>reset</button>
                </div>
                <hr/>
            </div>
        );
}

export default ButtonsUnit;
