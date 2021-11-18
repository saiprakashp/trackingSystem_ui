import React, {Component} from 'react';
import './NavBar.css';
import '../../Styles/MasterCss.css';

import $ from 'jquery';

export default class NavBar extends Component {
    componentDidMount() {

  /*      $('ul.nav li.dropdown').hover(function () {
            $('.dropdown-menu').css('dispaly', 'block');
            $(this).find('.dropdown-menu').stop(true, true).delay(1).fadeIn(50);
        }, function () {
            $(this).find('.dropdown-menu').stop(true, true).delay(22).fadeOut(12);
        });*/
    }

    render() {
        return (<div className="bg-primary namMain">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <ul className="nav globalnav">
                                <li className="nav-item">
                                    <a className="nav-link active text-white" href="/pts-ui/home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/pts-ui/resources">Resources</a>
                                </li>
                                <li className="nav-item dropdown globalnav">
                                    <a href="/pts-ui#" className="dropdown-toggle text-white"
                                       data-toggle="dropdown">Projects </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item font-weight-bolder" href="/pts-ui/projects/manageProducts">Products</a>
                                        <a className="dropdown-item font-weight-bolder" href="/pts-ui/projects/manageApplications">Manage
                                            Application</a>
                                        <a className="dropdown-item font-weight-bolder" href="/pts-ui/projects/planUserUtilization">Plan User Utilization</a>
                                        <a className="dropdown-item font-weight-bolder" href="/pts-ui/projects/uploadTfs">Upload TFS Data</a>
                                        <a className="dropdown-item font-weight-bolder" href="/pts-ui/projects/manageprojects">Manage
                                            Projects</a>
                                        <a className="dropdown-item font-weight-bolder" href="/pts-ui/projects/manageActivityCodes">Manage
                                            Activity Codes</a>
                                        <a className="dropdown-item font-weight-bolder" href="/pts-ui/projects/assignResource">Assign
                                            Resources</a>
                                        <a className="dropdown-item font-weight-bolder" href="/pts-ui/projects/announcements">Announcements</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown globalnav">
                                    <a href="/pts-ui#" className="dropdown-toggle text-white"
                                       data-toggle="dropdown">TimeSheet </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item font-weight-bolder" href="/pts-ui/timesheet/recordTimeSheet">Record
                                            TimeSheet</a>
                                        <a className="dropdown-item font-weight-bolder" href="/pts-ui/timesheet/timeSheetDetails">Timesheet
                                            Details</a>
                                        <a className="dropdown-item font-weight-bolder" href="/pts-ui/timesheet/approveTimeSheet">Approve
                                            Timesheets</a>
                                        <a className="dropdown-item font-weight-bolder" href="/pts-ui/timesheet/timeSheetSummary">Timesheet
                                            Summary</a>
                                        <a className="dropdown-item font-weight-bolder" href="/pts-ui/timesheet/projectWiseUtil">Project Wise
                                            Utilization</a>
                                        <a className="dropdown-item font-weight-bolder" href="/pts-ui/timesheet/utilization">Utilization</a>
                                        <a className="dropdown-item font-weight-bolder" href="/pts-ui/timesheet/ess">Ess Data Feed</a>
                                    </div>
                                </li>


                                <li className="nav-item dropdown globalnav">
                                    <a href="/pts-ui#" className="dropdown-toggle text-white" data-toggle="dropdown">Capacity
                                        Planning</a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item font-weight-bolder" href="/pts-ui/capacity/byResource">Capacity Planning
                                            By Resource</a>
                                        <a className="dropdown-item font-weight-bolder" href="/pts-ui/capacity/byProject">Capacity Planning By
                                            Project</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown globalnav">
                                    <a href="/pts-ui#" className="dropdown-toggle text-white"
                                       data-toggle="dropdown">Reports </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item font-weight-bolder" href='/pts-ui/reports/userContributionReport'>Summary/
                                            Contribution</a>
                                        <a className="dropdown-item font-weight-bolder" href= '/pts-ui/reports/capacityPlanningReport' >Capacity
                                            Forecast</a>
                                        <a className="dropdown-item font-weight-bolder" href="/pts-ui/reports/capacityPlanningDetailsReport">Capacity
                                            View</a>
                                        <a className="dropdown-item font-weight-bolder" href="/pts-ui/reports/releaseTrainReport">Release
                                            Train</a>
                                        <a className="dropdown-item font-weight-bolder" href="/pts-ui/reports/capacityPlanningByProjectType">Capacity
                                            Planning By Project</a>
                                        <a className="dropdown-item font-weight-bolder" href="/pts-ui/reports/utilization">Resource
                                            utilization</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
