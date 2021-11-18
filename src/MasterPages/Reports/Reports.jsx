import React, {Component} from 'react';
import * as a from "../../SyledComponent/StyledHomeComp";
import Header from "../Header/Header";
import Navbar from "../NavBar/NavBar";
import UserContributionReport from './UserContributionReport/UserContributionReport';
import CapacityPlanningReport from './CapacityPlanningReport/CapacityPlanningReport';
import CapacityPlanningDetailsReport from './CapacityPlanningDetailsReport/CapacityPlanningDetailsReport';
import ReleaseTrainReport from './ReleaseTrainReport/ReleaseTrainReport';
import CapacityPlanningByProjectType from './CapacityPlanningByProjectType/CapacityPlanningByProjectType';
import Utilization from './Utilization/Utilization';
import {withRouter} from 'react-router-dom';
import Breadcrumb from "../BreadCrums/BreadCrums";
import Footer from "../Footer/Footer";
import '../../Styles/MasterCss.css';

class Reports extends Component{
    render(){
        const path = this.props.location.pathname;
        console.log(path)
        let loadedComp = null;
        switch (path) {
            case '/pts-ui/reports/userContributionReport':
                loadedComp = <UserContributionReport/>
                break;
            case '/pts-ui/reports/capacityPlanningReport':
                loadedComp = <CapacityPlanningReport/>
                break;
            case '/pts-ui/reports/capacityPlanningDetailsReport':
                loadedComp = <CapacityPlanningDetailsReport/>;
                break;
            case '/pts-ui/reports/releaseTrainReport':
                loadedComp = <ReleaseTrainReport/>;
                break;
            case '/pts-ui/reports/capacityPlanningByProjectType':
                loadedComp = <CapacityPlanningByProjectType/>;
                break;
            case '/pts-ui/reports/utilization':
                loadedComp = <Utilization/>;
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

export default withRouter(Reports);
