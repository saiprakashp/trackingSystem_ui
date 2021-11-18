import React from 'react';
import Header from "../MasterPages/Header/Header";
import Home from "../MasterPages/Home/Home";
import DashBoard from "../MasterPages/DashBoard/DashBoard";
import TimeSheet from "../MasterPages/TimeSheet/TimeSheet";
import Users from "../MasterPages/Users/Users";
import Login from "../Auth/Login/Login";
import Logout from "../Auth/Logout/Logout";
import {withRouter} from "react-router-dom";
import ValidatorHoc from "../HOC/ValidatorHoc";
import Capacity from '../MasterPages/Capacity/Capacity';
import Reports from "../MasterPages/Reports/Reports";
import Projects from "../MasterPages/Projects/Projects";
import ForgetPassword from "../Auth/ForgetPassword/ForgetPassword";

function ComponentGen(props) {

    switch (props.type) {
        case "timeSheet": {
            return (
                <ValidatorHoc history={props.history}>
                    <TimeSheet/>
                </ValidatorHoc>)
        }
        case "reports": {
            return (
                <ValidatorHoc history={props.history}>
                    <Reports/>
                </ValidatorHoc>)
        }
        case "projects": {
            return (
                <ValidatorHoc history={props.history}>
                    <Projects/>
                </ValidatorHoc>)
        }
        case "header": {
            return (
                <ValidatorHoc history={props.history}>
                    <Header/>
                </ValidatorHoc>
            )
        }
        case "home": {
            return (
                <ValidatorHoc history={props.history}>
                    <Home/>
                </ValidatorHoc>
            )
        }
        case "dashboard": {
            return (
                <ValidatorHoc history={props.history}>
                    <DashBoard/>
                </ValidatorHoc>
            )
        }
        case "user": {
            return (
                <ValidatorHoc history={props.history}>
                    <Users/>
                </ValidatorHoc>
            )
        }
        case "login": {
            return (
                <Login/>
            )
        }
        case "forgetPassword": {
            return (
                <ForgetPassword/>
            )
        }

        case "capacity": {
            return (
                <ValidatorHoc history={props.history}>
                    <Capacity/>
                </ValidatorHoc>
            )
        }
        case "logout": {
            return (
                <ValidatorHoc history={props.history} logout={true}>
                    <Logout/>
                </ValidatorHoc>
            )
        }
    }
}

export default withRouter(ComponentGen);
