import React, {Component} from 'react';
import InputUnit from "../units/InputUnit";
import '../Counter.css';

class InputArea extends Component {
    render() {
        const {fInput, fSubmit} = this.props;
        return (
            <div className={'input_area'}>
                <label>Number</label>
                <InputUnit fSubmit={fSubmit} fInput={fInput}/>
                <button onClick={fSubmit}>Submit</button>
            </div>
        );
    }
}

export default InputArea;