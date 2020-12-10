const ButtonsUnit = ({fPlus, fReset, myBtn})=>{

    const handlerButton = (num) => fPlus(num);
    const reset = () => fReset();

    return (

            <div>
                <div className={'btns'}>
                    {myBtn.map(value => <button onClick={()=>{handlerButton(value)}} className={'btn'}>
                        {value}</button>)}
                    <button onClick={reset} className={'btn_reset'}>reset</button>
                </div>
                <hr/>
            </div>
        );
}

export default ButtonsUnit;