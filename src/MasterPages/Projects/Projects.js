import React, {PureComponent} from 'react';
import * as a from "../../SyledComponent/StyledHomeComp";
import Header from "../Header/Header";
import Navbar from "../NavBar/NavBar";
import {withRouter} from 'react-router-dom';
import Breadcrumb from "../BreadCrums/BreadCrums";
import Footer from "../Footer/Footer";
import ManageProjects from './ManageProjects/ManageProjects';
import ManageApplications from './ManageApplications/ManageApplications';
import ManageProducts from './ManageProducts/ManageProducts';
import Announcements from './Announcements/Announcements';
import AssignResource from './AssignResource/AssignResource';
import ManageActivityCodes from './ManageActivityCodes/ManageActivityCodes';
import PlanUserUtilization from './PlanUserUtilization/PlanUserUtilization';
import UploadTfs from './UploadTfs/UploadTfs';
import '../../Styles/MasterCss.css';

class Projects extends PureComponent {
    componentDidMount() {

    }

    render() {
        const path = this.props.location.pathname;
        let loadedComp = null;
        switch (path) {

            case '/pts-ui/projects/manageProducts':
                loadedComp =  <ManageProducts/>;
                break;
            case '/pts-ui/projects/manageApplications':
                loadedComp = <ManageApplications/>;
                break;
            case '/pts-ui/projects/planUserUtilization':
                loadedComp =    <PlanUserUtilization/>;
                break;
            case '/pts-ui/projects/uploadTfs':
                loadedComp = <UploadTfs/>;
                break;
            case '/pts-ui/projects/manageprojects':
                loadedComp =  <ManageProjects/>;
                break;
            case '/pts-ui/projects/manageActivityCodes':
                loadedComp =  <ManageActivityCodes/>;
                break;
            case '/pts-ui/projects/assignResource':
                loadedComp = <AssignResource/>;
                break;
            case '/pts-ui/projects/announcements':
                loadedComp =  <Announcements/>;
                break;
        }

        return (
            <div className="homeMain">
                <React.Fragment>
                    <a.HeaderStyleDiv>
                        <Header userName={"Admin"}/>
                    </a.HeaderStyleDiv>
                    <div>
                        <Navbar/>
                    </div>
                    <div className="container">
                        <Breadcrumb/>
                    </div>
                    <div className="masterPage container">
                        {loadedComp}
                    </div>
                    <a.FooterStyledDiv className="container-fluid">
                        <Footer/>
                    </a.FooterStyledDiv>
                </React.Fragment>
            </div>
        )
    }
}

export default withRouter(Projects);
