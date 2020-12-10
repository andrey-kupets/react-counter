import React, {Component} from 'react';

class InputUnit extends Component {
    render() {
        let {fInput} = this.props;

        return (
            <div>
                <input type={'number'} onChange={fInput} className={'input'}/>
            </div>
        );
    }
}

export default InputUnit;