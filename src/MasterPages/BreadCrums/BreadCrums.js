import React from 'react';
import {withRouter} from 'react-router-dom';
import * as title from '../../Utils/constants/UIConstants';
import '../../Styles/MasterCss.css';

const BreadCrums = (props) => {
    let breadCrums = '';
    switch (props.location.pathname) {
        case '/pts-ui/resources/manageResources':
            breadCrums = <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">{title.MANAGE_RESOURCES}</li>
            </ol>;
            break;
        case '/pts-ui/projects/manageProducts':
            breadCrums = <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">{title.PRODUCTS}</li>
            </ol>;
            break;
        case '/pts-ui/projects/manageApplications':
            breadCrums = <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">{title.MANAGE_APPLICATION}</li>
            </ol>;
            break;
        case '/pts-ui/projects/planUserUtilization':
            breadCrums = <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">{title.PLAN_USER_UTILIZATION}</li>
            </ol>;
            break;
        case '/pts-ui/projects/uploadTfs':
            breadCrums = <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">{title.TFS_DATA_UPLOAD}</li>
            </ol>;
            break;
        case '/pts-ui/projects/manageprojects':
            breadCrums = <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">{title.MANAGE_PROJECTS}</li>
            </ol>;
            break;
        case '/pts-ui/projects/assignResource':
            breadCrums = <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">{title.ASSIGN_RESOURCES}</li>
            </ol>;
            break;
        case '/pts-ui/projects/announcements':
            breadCrums = <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">{title.ANNOUNCEMENTS}</li>
            </ol>;
            break;
        case '/pts-ui/projects/manageActivityCodes':
            breadCrums = <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">{title.MANAGE_ACTIVITY_CODES}</li>
            </ol>;
            break;

        case '/pts-ui/timesheet/recordTimeSheet':
            breadCrums = <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Record TimeSheet</li>
            </ol>;
            break;
        case '/pts-ui/timesheet/timeSheetDetails':
            breadCrums = <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">TimeSheet Details</li>
            </ol>;
            break;
        case '/pts-ui/timesheet/approveTimeSheet':
            breadCrums = <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Approve TimeSheet</li>
            </ol>;
            break;
        case '/pts-ui/timesheet/timeSheetSummary':
            breadCrums = <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">TimeSheet Summary</li>
            </ol>;
            break;
        case '/pts-ui/timesheet/ess':
            breadCrums = <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">ESS Data Feed</li>
            </ol>;
            break;
        case '/pts-ui/timesheet/projectWiseUtil':
            breadCrums = <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Project Wise Utilization</li>
            </ol>;
            break;
        case '/pts-ui/timesheet/utilization':
            breadCrums = <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Utilization</li>
            </ol>;
            break;
        case '/pts-ui/user/profile/edit':
            breadCrums = <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Users</li>
            </ol>;
            break;
        case '/pts-ui/capacity/byResource':
            breadCrums = <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Capacity By Resource</li>
            </ol>;
            break;
        case '/pts-ui/capacity/byProject':
            breadCrums = <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Capacity By Project</li>
            </ol>;
            break;
        case '/pts-ui/reports/userContributionReport':
            breadCrums = <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Summary/ Contribution</li>
            </ol>;
            break;
        case '/pts-ui/reports/capacityPlanningReport':
            breadCrums = <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Capacity Forecast</li>
            </ol>;
            break;
        case '/pts-ui/reports/capacityPlanningDetailsReport':
            breadCrums = <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Capacity View</li>
            </ol>;
            break;
        case '/pts-ui/reports/releaseTrainReport':
            breadCrums = <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Release Train</li>
            </ol>;
            break;
        case '/pts-ui/reports/capacityPlanningByProjectType':
            breadCrums = <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Capacity Planning By Project</li>
            </ol>;
            break;
        case '/pts-ui/reports/utilization':
            breadCrums = <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Resource utilization</li>
            </ol>;
            break;
        default:
            breadCrums = <ol className="breadcrumb">
                <li className="breadcrumb-item active" aria-current="page"><a href="/">Home</a></li>
            </ol>;
            break;
    }
    return (
        <nav aria-label="breadcrumb" className="breadcrumbMain">
                {breadCrums}
        </nav>
    )
};
export default withRouter(BreadCrums)
