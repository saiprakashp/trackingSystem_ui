import React, {Component} from 'react';

export default class WrapperHoc extends Component {
    render() {
        return (
            <div className="WrapperHoc">
                {this.props.children}
            </div>
        )
    }
}
