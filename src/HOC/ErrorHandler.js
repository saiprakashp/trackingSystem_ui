import React, {Component} from 'react';

export default class HOC extends Component {
    render() {
        return (
            <div className="hoc">
                {this.props.children}
            </div>
        )
    }
}
