const ButtonsUnit = ({fPlus, fReset, myBtn})=>{

    const handlerButton = (num) => fPlus(num);
    const reset = () => fReset();
    const createBtn = () => {
        myBtn.map(value => <button onClick={()=>{handlerButton({value})}} className={'btn'}>
            {value}</button>)
    }


    return (

            <div>
                <div className={'btns'}>
                    {/*<button onClick={()=>{handlerButton(1)}} className={'btn'}>+1</button> /!*or onClick={this.plus.bind(null, 1)}*!/*/}
                    {/*<button onClick={()=>{handlerButton(-1)}} className={'btn'}>-1</button>*/}
                    {/*<button onClick={()=>{handlerButton(100)}} className={'btn'}>+100</button>*/}
                    {/*<button onClick={()=>{handlerButton(-100)}} className={'btn'}>-100</button>*/}
                    {createBtn}
                    <button onClick={reset} className={'btn_reset'}>reset</button>
                </div>
                <hr/>
            </div>
        );
}

export default ButtonsUnit;