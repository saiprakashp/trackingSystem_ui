import React, {Component} from 'react';
import connect from "react-redux/lib/connect/connect";
import {toNumber} from "reactstrap/es/utils";
import {logoutUser} from "../MasterPages/store/actions/PtsUserAction";

// Used for login validation defined at router level
class ValidatorHoc extends Component {
    componentDidMount() {
        if (this.props.logout) {
              this.props.onLogoutUser('userName', this.props.user.userName, this.props.history);
        }
        if (typeof (Storage) === "undefined") {
            let UserIndo = localStorage.id_token;
         //   this.props.history.push('/pts-ui')
        }
        if (typeof (Storage) !== "undefined") {
            if (localStorage.length <= 0) {
            //    this.props.history.push('/pts-ui')
            } else {
                let userInfo = JSON.parse(localStorage.userInfo);
                if (toNumber(userInfo.timeOut) + toNumber(userInfo.loginTime.split('-')[1]) <= new Date().getHours())
                {
                    //       this.props.history.push('/pts-ui')
                }
            }
        }
        if (!this.props.validLogin) {
            //this.props.history.push('/pts-ui')
        }
        if (toNumber(this.props.secure.loginTime.split('-')[1]) + this.props.secure.timeOut === new Date().getHours()) {
         //   this.props.history.push('/pts-ui')
        }

    }

    render() {
        return (
            <div className="ValidatorHoc">
                {this.props.children}
            </div>
        )
    }
}

const mapStatetoProps = state => {
    return {
        user: state.ctr.user,
        validLogin: state.ctr.loginValid,
        secure: state.ctr.secure,
        error: state.ctr.error
    }
};
const mapDispatchtoProps = dispatch => {
    return {
        onLogoutUser: (userKey, userValue, history) => {
            dispatch(logoutUser(userKey, userValue, history))
        }
    }
};
export default connect(mapStatetoProps, mapDispatchtoProps)(ValidatorHoc);
