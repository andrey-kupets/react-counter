import React, {Component} from 'react';

class InputUnit extends Component {
    render() {
        let {fInput} = this.props;

        return (
                <input type={'number'} onChange={fInput} className={'input'}/>
       );
    }
}

export default InputUnit;