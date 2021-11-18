import React, {useState} from 'react';
import HeadCount from './HeadCount/HeadCount';
import UnApprovedHours from "./UnApprovedHours/UnApprovedHours";
import './DashBoard.css';
import recordTimeIcon from '../../resources/images/forbidden_php.png';
import escalationIcon from '../../resources/images/escalationicon.jpg';
import holidayIcon from '../../resources/images/holiday_calendar.png';
import RecentlyChangedProj from "./RecentlyChangedProj/RecentlyChangedProj";
import Utilization from "./Utilization/Utilization";
import Announcements from "./Announcements/Announcements";
import '../../Styles/MasterCss.css';
import * as title from '../../Utils/constants/UIConstants';

const DashBoard = (props) => {

    const [headerCount, setHeadCount] = useState({
        headCount: {
            hc: 2,
            on: 12,
            sel: 0,
            lta: 0,
            ind: 0,
            op: 0,
            np: 0
        }
    });
    const [unap, setunap] = useState([
        '12'
    ]);
    const [recentlyCharged, setrecentlyCharged] = useState([{
        "data": "- 19.XX - ICP UC ITW/eBroker Retirement",
        "value": "5.0"
    },
        {"data": "- 20.XX - ICP UC CSSOP/eBroker Retirement", "value": "25.0"}]);
    const [utilization, setutilization] = useState([{
        "month": "Jan",
        "headCount": "12",
        "targetHrs": "123",
        "essHrs": "1421",
        "ptsHrs": "121",
        "percent": "1"
    },
        {
            "month": "Feb",
            "headCount": "121",
            "targetHrs": "1233",
            "essHrs": "14721",
            "ptsHrs": "1211",
            "percent": "23"
        }]);
    const [announcements, setannouncements] = useState([{"data": "announcements"}]);

    const headerCount1 = <HeadCount title={title.HEAD_COUNT} {...headerCount.headCount}
    />;
    const unApprovedHours1 = <UnApprovedHours title={title.UN_APPROVED_HRS} unap={unap}/>;
    const recentlyCharged1 = <RecentlyChangedProj title={title.RECENTLY_CHARGED_PROJECTS}
                                                  recentlyCharged={recentlyCharged}/>;
    const utilization1 = <Utilization
        title={title.UTILIZATION}
        month={title.MONTH}
        hc={title.HEAD_COUNT}
        th={title.TARGET_HRS}
        eh={title.ESS_HRS}
        ph={title.PTS_HRS}
        percent={title.PERCENT}
        utilization={utilization}/>;
    const announcements1 = <Announcements title={title.ANNOUNCEMENTS} announcements={announcements}/>;
    return (
        <div className="container bg-white masterBorder">
            <div className="card mt-2 mr-1 ml-2 text-center border-0 ">
                <div className="card-body ">
                    <div className="row mt-2 ml-1 mr-1">
                        <div className="col-sm-2">
                            <img width="80" height="120"
                                 src={recordTimeIcon}
                                 className="img-fluid float-left text-left" alt="Time Sheet"/>
                        </div>
                        <div className="col-sm-4">
                            {headerCount1}
                        </div>
                        <div className="col-sm-3">
                            {unApprovedHours1}
                        </div>
                        <div className="col-sm-3">
                            <img width="80" height="80"
                                 src={escalationIcon}
                                 className="img-fluid float-left text-left" alt="Escalation Matrix"/>
                            <img width="80" height="80"
                                 src={holidayIcon} data-toggle="modal" data-target="#holidayModal"
                                 className="img-fluid float-right text-right" alt="Holidays"/>

                            <div className="modal fade" id="holidayModal" tabIndex="-1" role="dialog"
                                 aria-labelledby="holidayModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="holidayModalLabel">PTS Holiday List</h5>
                                            <button type="button" className="close" data-dismiss="modal"
                                                    aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <nav aria-label="Nav">
                                                <ul className="pagination justify-content-center">
                                                    <div className="row">
                                                        <div className="col">
                                                            <li className="page-item pi_DashBoard"><a className="page-link"
                                                                                         href="#">US</a>
                                                            </li>
                                                        </div>
                                                        <div className="col">
                                                            <li className="page-item pi_DashBoard"><a className="page-link"
                                                                                         href="#">EGI</a>
                                                            </li>
                                                        </div>
                                                    </div>


                                                </ul>
                                            </nav>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary"
                                                    data-dismiss="modal">Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row mt-3 ml-1 mr-1 mb-2">
                        <div className="col-sm-6">
                            <div>{recentlyCharged1}</div>
                            <div className="mt-2">  {announcements1}</div>
                        </div>
                        <div className="col-sm-6 mb-2">
                            {utilization1}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DashBoard;
