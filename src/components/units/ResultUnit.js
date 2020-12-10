import React, {Component} from 'react';


class ResultUnit extends Component {
    render() {
        let {divResult} = this.props;
        return (
            <div>
                <div className={'result'}>{divResult}</div>
            </div>
        );
    }
}

export default ResultUnit;