import React, {PureComponent} from 'react';
import * as a from "../../SyledComponent/StyledHomeComp";
import Header from "../Header/Header";
import Navbar from "../NavBar/NavBar";
import {withRouter} from 'react-router-dom';
import Breadcrumb from "../BreadCrums/BreadCrums";
import RecordTimeSheet from "./RecordTimeSheet/RecordTimeSheet";
import TimeSheetDetails from "./TimeSheetDetails/TimeSheetDetails";
import ApproveTimeSheet from "./ApproveTimeSheet/ApproveTimeSheet";
import  ProjectWiseUtilization from "./ProjectWiseUtilization/ProjectWiseUtilization";
import TimeSheetSummary from "./TimeSheetSummary/TimeSheetSummary";
import Utilization from './Utilization/Utilization';
import EssDataFeed from './EssDataFeed/EssDataFeed';
import Footer from "../Footer/Footer";
import '../../Styles/MasterCss.css';

class TimeSheet extends PureComponent {
    //DOM loaded
    componentDidMount() {

    }

    render() {
        const path = this.props.location.pathname;
        let loadedComp = null;
        switch (path) {
            case '/pts-ui/timesheet/recordTimeSheet':
                loadedComp = <RecordTimeSheet/>;
                break;
            case '/pts-ui/timesheet/timeSheetDetails':
                loadedComp = <TimeSheetDetails loadData={true} />;
                break;
            case '/pts-ui/timesheet/approveTimeSheet':
                loadedComp = <ApproveTimeSheet/>;
                break;
            case '/pts-ui/timesheet/timeSheetSummary':
                loadedComp = <TimeSheetSummary/>;
                break;
            case '/pts-ui/timesheet/utilization':
                loadedComp = <Utilization/>;
                break;
            case '/pts-ui/timesheet/projectWiseUtil':
                loadedComp = <ProjectWiseUtilization/>;
                break;
            case '/pts-ui/timesheet/ess':
                loadedComp = <EssDataFeed/>;
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

export default withRouter(TimeSheet);
