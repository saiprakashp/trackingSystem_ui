import React, {Component} from 'react';
import * as title from '../../../Utils/constants/UIConstants';
import TableTemplates from '../../UI/SingleTableTemplate';
import '../../../Styles/MasterCss.css';
import * as pagerConst from '../../../Utils/constants/PagerConstants';
import {genericSpinned} from "../../UI/loaderComponent";
import * as styles from "../../../Utils/constants/GenericStyledClasses";
import {servicesUtil} from "../../../Services/ServiceUtil";
import UseAutocomplete from '../../UI/AutoCompleteComponent';
import Input from "../../UI/Input";
import {genericAlert} from "../../UI/errorComponenet";
import noData from "../../UI/NoDataComponent";


class ApproveTimeSheet extends Component {
    state = {
        pageSizes: pagerConst.PAGER_LIST,
        resourceNames: [{title: 'Sai Prakash', id: 1},
            {title: 'Santosh', id: 1}, {title: 'Sudhakar', id: 1}, {title: 'Naidu', id: 1},],
        errorMessage: null,
        errorClasses: 'alert alert-warning alert-dismissible fade show vis-hide ',
        lodaerComp: genericSpinned(styles.SPIINER_HIDE),
        resourcesVal: '',
        fromData: new Date().getDay + "/" + (new Date().getMonth() + 1 + '/' + new Date().getFullYear()),
        toData: new Date().getDay + "/" + (new Date().getMonth() + 1 + '/' + new Date().getFullYear()),
        data: null,
        status: 'pending',
        approveSelection: 0,
        rejectSelection: 0,
        prevlen: 0
    }

    showAllTillDate=false;

    componentDidMount() {
        let localSate = this.state;
        localSate.lodaerComp = (genericSpinned(styles.SPIINER_SHOW));
        //posts?userId=1
        let props = {
            service: 'todos/1',
            method: 'get',
            contentType: 'application/json'
        };

        //   setTimeout(() =>  res= fileupload(props),60000);
        let axios = servicesUtil(props);
        try {

            //   axios.get().then(function (response)
            {

                //response.data
                //  tableApproveTimeSheet = tables.tableNorm(response.data);
                localSate.data = ({
                    columns: {
                        elementStyles: [' '],
                        elementData: [

                            {
                                name: 'weekendDate',
                                title: title.WEEKENDING_DATE,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            },
                            {
                                name: 'resource',
                                title: title.RESOURCE_NAME,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            },
                            {
                                name: 'project',
                                title: title.PROJECT_OR_ASSIGNMENTS,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            },
                            {
                                name: 'activity',
                                title: title.ACTIVITY,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            },
                            {
                                name: 'type',
                                title: title.TYPE,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            },
                            {
                                name: 'on',
                                title: title.MON_DAY,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            },
                            {
                                name: 'on',
                                title: title.TUE_DAY,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            },
                            {
                                name: 'on',
                                title: title.WED_DAY,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            },
                            {
                                name: 'on',
                                title: title.THU_DAY,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            },
                            {
                                name: 'on',
                                title: title.FRI_DAY,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            },
                            {
                                name: 'on',
                                title: title.SAT_DAY,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            },
                            {
                                name: 'on',
                                title: title.SUN_DAY,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            },
                            {
                                name: ' ',
                                title: title.BLANK,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            },
                            {
                                name: 'total',
                                title: title.TOTAL,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            },
                            {
                                name: 'weekendDate',
                                label: 'Approve',
                                title: title.APPROVE_HOURS,
                                scope: "col",
                                classes: [''],
                                id: 'allApprove',
                                type: 'checkbox',
                                changed:  ('this.checkAll'),
                                checked: false,
                                elementConfig: {classes: []}
                            },
                            {
                                name: 'weekendDate',
                                label: 'Reject',
                                title: title.REJECT_HOURS,
                                scope: "col",
                                classes: [], changed: ('this.checkAll'),
                                id: 'allreject',
                                type: 'checkbox',
                                checked: false,
                                elementConfig: {classes: []}
                            },
                        ]
                    },
                    rows: {
                        elemntStyles: ["thead-dark"],
                        elementData: {
                            tab_td: [[
                                {
                                    name: 'APPROVE_HOURS',
                                    value: 'APPROVE_HOURS',
                                    classes: [],
                                    id: '3',
                                    type: 'tab'
                                },
                                {
                                    name: 'APPROVE_HOURS',
                                    value: 'APPROVE_HOURS',
                                    classes: [],
                                    id: '4',
                                    type: 'tab'
                                },
                                {
                                    name: 'APPROVE_HOURS',
                                    value: 'APPROVE_HOURS',
                                    classes: [],
                                    id: '5',
                                    type: 'tab'
                                },
                                {
                                    name: 'APPROVE_HOURS',
                                    value: 'APPROVE_HOURS',
                                    classes: [],
                                    id: '6',
                                    type: 'tab'
                                },
                                {
                                    name: 'APPROVE_HOURS',
                                    value: 'APPROVE_HOURS',
                                    classes: [],
                                    id: '7',
                                    type: 'tab'
                                }, {
                                    name: 'APPROVE_HOURS',
                                    value: 'APPROVE_HOURS',
                                    classes: [],
                                    id: '7',
                                    type: 'tab'
                                }, {
                                    name: 'APPROVE_HOURS',
                                    value: 'APPROVE_HOURS',
                                    classes: [],
                                    id: '7',
                                    type: 'tab'
                                }, {
                                    name: 'APPROVE_HOURS',
                                    value: 'APPROVE_HOURS',
                                    classes: [],
                                    id: '7',
                                    type: 'tab'
                                }, {
                                    name: 'APPROVE_HOURS',
                                    value: 'APPROVE_HOURS',
                                    classes: [],
                                    id: '7',
                                    type: 'tab'
                                }, {
                                    name: 'APPROVE_HOURS',
                                    value: 'APPROVE_HOURS',
                                    classes: [],
                                    id: '7',
                                    type: 'tab'
                                }, {
                                    name: 'APPROVE_HOURS',
                                    value: 'APPROVE_HOURS',
                                    classes: [],
                                    id: '7',
                                    type: 'tab'
                                }, {
                                    name: 'APPROVE_HOURS',
                                    value: 'APPROVE_HOURS',
                                    classes: [],
                                    id: '7',
                                    type: 'tab'
                                }, {
                                    name: 'APPROVE_HOURS',
                                    value: ' ',
                                    classes: [],
                                    id: '7',
                                    type: 'tab'
                                },
                                {
                                    name: 'APPROVE_HOURS',
                                    value: ' ',
                                    classes: [],
                                    id: '8',
                                    type: 'tab'
                                }, {
                                    name: 'APPROVE_HOURS',
                                    value: 'APPROVE_HOURS',
                                    label: '',
                                    classes: ['appr_t1'],
                                    id: 'appr_t1',
                                    checked: false,
                                    changed:  ('this.checkAll'),
                                    type: 'checkbox',
                                    elementConfig: {classes: []}
                                },
                                {
                                    name: 'APPROVE_HOURS',
                                    value: 'APPROVE_HOURS',
                                    label: '',
                                    classes: ['rej_t1'],
                                    id: 'rej_t1',
                                    checked: false,
                                    changed:  ('this.checkAll'),
                                    type: 'checkbox',
                                    elementConfig: {classes: []}
                                },
                            ]
                            ]
                        }
                    },
                    pager: [],
                    pagerSelector: [],
                    scroller: [],
                    showAllTillDate:false

                });
                this.hideCurrentLoader('ok');
            }
            //).catch(() => {
            //   this.hideCurrentLoader('fail');
            //})
        } catch (e) {
            this.hideCurrentLoader('fail');
        }
        this.setState(localSate)
    }

    getAllTimeShet = async (event) => {

        let localSate = this.state;
        try {
            localSate.lodaerComp = (genericSpinned(styles.SPIINER_SHOW));
            //posts?userId=1
            let props = {
                service: 'todos/1',
                method: 'get',
                contentType: 'application/json'
            };
            let axios = servicesUtil(props);
            // await   axios.get().then(function (response)
            {
                localSate.data = {
                    columns: {
                        elementStyles: [' '],
                        elementData: [

                            {
                                name: 'weekendDate',
                                title: title.WEEKENDING_DATE,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            },
                            {name: 'project', title: title.PROJECT, scope: "col", classes: [], id: '', type: 'tab'},
                            {
                                name: 'activity',
                                title: title.ACTIVITY,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            },
                            {
                                name: 'timeType',
                                title: title.TIME_TYPE,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            },
                            {
                                name: 'approveHours',
                                title: title.APPROVE_HOURS,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            },
                            {
                                name: 'pahours',
                                title: title.PR_HOURS,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            },
                            {
                                name: 'weekendDate',
                                label: 'APPROVE_HOURS',
                                title: title.APPROVE_HOURS,
                                scope: "col",
                                classes: [''],
                                id: 'allApprove',
                                type: 'checkbox',
                                changed: eval('this.checkAll'),
                                checked: false,
                                elementConfig: {classes: []}
                            },
                            {
                                name: 'weekendDate',
                                label: 'Reject Hours',
                                title: title.REJECT_HOURS,
                                scope: "col",
                                classes: [],
                                id: 'allReject',
                                type: 'checkbox',
                                checked: false,
                                changed: eval('this.checkAll'),
                                elementConfig: {classes: []}
                            },
                        ]
                    },
                    rows: {
                        elemntStyles: ["thead-dark"],
                        elementData: {
                            tab_td: [[
                                {name: 'APPROVE_HOURS', value: 'APPROVE_HOURS', classes: [], id: '3', type: 'tab'},
                                {name: '23', value: 'APPR23OVE_HOURS', classes: [], id: '4', type: 'tab'},
                                {name: 'APPROVE_HOURS', value: 'APPROVE_HOURS', classes: [], id: '5', type: 'tab'},
                                {name: 'APPROVE_HOURS', value: 'APPROVE_HOURS', classes: [], id: '6', type: 'tab'},
                                {name: 'APPROVE_HOURS', value: 'APPROVE_HOURS', classes: [], id: '7', type: 'tab'},
                                {
                                    name: 'APPROVE_HOURS',
                                    value: 'APPROVE_HOURS',
                                    classes: [],
                                    id: '8',
                                    type: 'tab'
                                }, {
                                    name: 'APPROVE_HOURS',
                                    value: 'APPROVE_HOURS',
                                    label: 'APPROVE_HOURS',
                                    classes: ['appr_t1'],
                                    id: 'appr_t1',
                                    type: 'checkbox',
                                    checked: false,
                                    changed: eval('this.checkAll'),
                                    elementConfig: {classes: []}
                                },
                                {
                                    name: 'APPROVE_HOURS',
                                    value: 'APPROVE_HOURS',
                                    label: 'APPROVE_HOURS',
                                    classes: ['rej_t1'],
                                    id: 'rej_t1',
                                    type: 'checkbox',
                                    checked: false,
                                    changed: eval('this.checkAll'),
                                    elementConfig: {classes: []}
                                },
                            ], [
                                {name: 'APPROVE_HOURS', value: 'APPROVE_HOURS', classes: [], id: '3', type: 'tab'},
                                {name: 'APPROVE_HOURS', value: 'APPROVE_HOURS', classes: [], id: '4', type: 'tab'},
                                {name: 'APPROVE_HOURS', value: 'APPROVE_HOURS', classes: [], id: '5', type: 'tab'},
                                {name: 'APPROVE_HOURS', value: 'APPROVE_HOURS', classes: [], id: '6', type: 'tab'},
                                {name: 'APPROVE_HOURS', value: 'APPROVE_HOURS', classes: [], id: '7', type: 'tab'},
                                {
                                    name: 'APPROVE_HOURS',
                                    value: 'APPROVE_HOURS',
                                    classes: [],
                                    id: '8',
                                    type: 'tab'
                                }, {
                                    name: 'APPROVE_HOURS',
                                    value: 'APPROVE_HOURS',
                                    label: 'APPROVE_HOURS',
                                    classes: ['appr_t2'],
                                    id: 'appr_t2',
                                    type: 'checkbox',
                                    checked: false,
                                    changed: eval('this.checkAll'),
                                    elementConfig: {classes: []}
                                },
                                {
                                    name: 'APPROVE_HOURS',
                                    value: 'APPROVE_HOURS',
                                    label: 'APPROVE_HOURS',
                                    classes: ['rej_t2'],
                                    id: 'rej_t2',
                                    checked: false,
                                    type: 'checkbox',
                                    changed: eval('this.checkAll'),
                                    elementConfig: {classes: []}
                                },
                            ], [
                                {name: 'APPROVE_HOURS', value: 'APPROVE_HOURS', classes: [], id: '3', type: 'tab'},
                                {name: 'APPROVE_HOURS', value: 'APPROVE_HOURS', classes: [], id: '4', type: 'tab'},
                                {name: 'APPROVE_HOURS', value: 'APPROVE_HOURS', classes: [], id: '5', type: 'tab'},
                                {name: 'APPROVE_HOURS', value: 'APPROVE_HOURS', classes: [], id: '6', type: 'tab'},
                                {name: 'APPROVE_HOURS', value: 'APPROVE_HOURS', classes: [], id: '7', type: 'tab'},
                                {
                                    name: 'APPROVE_HOURS',
                                    value: 'APPROVE_HOURS',
                                    classes: [],
                                    id: '8',
                                    type: 'tab'
                                }, {
                                    name: 'APPROVE_HOURS',
                                    value: 'APPROVE_HOURS',
                                    label: 'APPROVE_HOURS',
                                    classes: ['appr_t2'],
                                    id: 'appr_t2',
                                    type: 'checkbox',
                                    checked: false,
                                    changed: eval('this.checkAll'),
                                    elementConfig: {classes: []}
                                },
                                {
                                    name: 'APPROVE_HOURS',
                                    value: 'APPROVE_HOURS',
                                    label: 'APPROVE_HOURS',
                                    classes: ['rej_t2'],
                                    id: 'rej_t2',
                                    checked: false,
                                    type: 'checkbox',
                                    changed: eval('this.checkAll'),
                                    elementConfig: {classes: []}
                                },
                            ]
                            ]
                        }
                    },
                    pager: [],
                    pagerSelector: [],
                    scroller: [],
                    showAllTillDate:false

                };

                this.setState(localSate);
                this.hideCurrentLoader('ok');
                /*  }).catch(() => {
                      hideCurrentLoader('fail');
                  })*/
            }
        } catch (e) {
            this.hideCurrentLoader('fail');

        }


    };
    loadData = () => {
        return <TableTemplates data={this.state.data}/>
    };
    hideCurrentLoader = (status) => {
        let localSate = this.state;

        let errorClasses = '';
        if (status === 'ok') {
            localSate.errorMessage = ('Your Data has been Loaded/ Saved Successfully');
            localSate.errorClasses = ('alert alert-success alert-dismissible fade show vis-show');


        } else {
            localSate.errorMessage = ('Unable to Save/ Load Data...');
            localSate.errorClasses = ('alert alert-danger alert-dismissible fade show vis-show');

        }

        localSate.lodaerComp = (genericSpinned(styles.SPIINER_HIDE));
        this.setState(localSate);
        this.loadData();
    };

    render() {
        const approveRejectData = () => {
            let localSate = this.state;
            localSate.lodaerComp = (genericSpinned(styles.SPIINER_SHOW));
            //posts?userId=1
            let props = {
                service: 'todos/1',
                method: 'get',
                contentType: 'application/json'
            };

            //   setTimeout(() =>  res= fileupload(props),60000);
            let axios = servicesUtil(props);
            try {

          //      axios.get().then(function (response) {
              //      this.hideCurrentLoader('ok');
              //      this.setState(localSate)
      //          }).catch(() => {
         //           this.hideCurrentLoader('fail');
          //      })
         } catch (e) {
                this.hideCurrentLoader('fail');
            }
       //     this.setState(localSate)
        };
        let buttonSave = <div className={'row'}>
            <div className="col-sm float-right">
                <Input
                    id={'save'}
                    elementType={'img'}
                    src={'save'}
                    alt={'save'}
                    classes={['img-responsive', 'float-right', 'mt-2', 'mr-4', 'mb-1', 'height20']}
                    imgclick={approveRejectData}
                ></Input>
            </div>
        </div>;

        let localState = this.state.data;
        return (

            <div className="container bg-white">
                <div className="card mt-2 mr-1 ml-2  text-center border-0 ">
                    <div className="card-body">
                        <div className="row ml-2 mt-2">
                            <div className="col-sm-5">
                                <h5 className="card-title text-left font-weight-bold">{title.APPROVE_TIMESHEET}:</h5>
                            </div>
                            <div className="col-sm-2">
                                <div className="text-right">{this.state.lodaerComp}</div>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div
                                className="col">{(this.state.data) ? genericAlert(this.state.errorMessage, this.state.errorClasses) : null}</div>
                        </div>
                        <div className="row mt-2 pl-4">
                            <div className="col-sm-3 float-left">
                                {UseAutocomplete({
                                    title: title.RESOURCE_NAME,
                                    data: this.state.resourceNames,
                                    id: 'resourceName'
                                })}
                            </div>
                            <div className="col-sm-3 float-left ml-2">
                                <span className='t-b float-left mr-1'>{title.FROM_DATE}:</span>
                                <input type="date" className='' min="2020/01/01" id={'fromDate'}
                                ></input>
                            </div>
                            <div className="col-sm-3 float-left">
                                <span className='t-b float-left mr-1'>{title.TO_DATE}:</span>
                                <input type="date" className='' min="2020/01/01" id={'toDate'}
                                ></input>
                            </div>

                        </div>
                        <div className="row mt-2 pl-4">
                            <div className="col-sm-3 float-left">
                                <span className='t-b float-left mr-1'>{title.SHOW_ALL_UNAPPROVED_TILL_DATE}:</span>
                                <input type="checkbox" className='' onChange={e => this.showAllTillDate=!this.showAllTillDate}
                                       value={this.showAllTillDate}
                                ></input>
                            </div>
                            <div className="col-sm-2 float-left">
                                <span className='t-b float-left mr-1'>{title.STATUS}:</span>
                                <select id={'status'} className={'float-left'} value={this.state.status}
                                        onChange={(e) => {
                                            this.state.status = (e.target.value)
                                        }}>
                                    <option value='all'>All</option>
                                    <option value='pending'>pending</option>
                                </select>
                                <Input
                                    id={'getTimeShet'}
                                    elementType={'img'}
                                    src={'go'}
                                    alt={'Go'}
                                    classes={['img-fluid', 'ml-4', 'imgsm', 'h20',]}
                                    imgclick={this.getAllTimeShet}
                                ></Input></div>
                        </div>

                        <div className="mt-1">
                            <div className="row ml-2 mt-2">
                                <div className="col-sm text-right">
                             <span className={'mr-1'}>Approved selected:
                                 {this.state.approveSelection}</span>
                                    <span className={'ml-1 mr-4'}>    Rejected selected:
                                        {this.state.rejectSelection}</span>
                                </div>
                            </div>
                            <div className="row ml-2 mt-1 scroll mr-2 masterBorder">
                                <div className="col-sm">
                                    {(this.state.data) ? this.loadData() : noData}
                                </div>
                            </div>
                            {buttonSave}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};
export default ApproveTimeSheet;
