import React, {Component} from 'react';
import * as title from '../../../Utils/constants/UIConstants';
import noData from "../../UI/NoDataComponent";
import {genericSpinned} from '../../UI/loaderComponent';
import {genericAlert} from '../../UI/errorComponenet';
import * as styles from "../../../Utils/constants/GenericStyledClasses";
import TableExpandTemplates from '../../UI/TableExpandTemplates';
import {servicesUtil} from '../../../Services/ServiceUtil';
import UseAutocomplete from "../../UI/AutoCompleteComponent";
import Input from "../../UI/Input";
import '../../../Styles/MasterCss.css';

class TimeSheetSummary extends Component {
    state = {
        resourceNames: [{title: 'Sai Prakash', id: 1},
            {title: 'Santosh', id: 4}, {title: 'Sudhakar', id: 2}, {title: 'Naidu', id: 3},],
        reporterType: [{title: 'All', id: 1}, {title: 'Direct', id: 1}],
        errorMessage: null,
        errorClasses: 'alert alert-warning alert-dismissible fade show vis-hide',
        lodaerComp: genericSpinned(styles.SPIINER_HIDE),
        data: null,
        showSubGrid: false,
        subgridPosition: -1,
        download: true,
        flag: false,
        rowlen: 0,
        subGridData: null,
        fromDate: new Date().getMonth + 1 + '/' + new Date().getDay() + '/' + new Date().getFullYear(),
        toDate: new Date().getMonth + 1 + '/' + new Date().getDay() + '/' + new Date().getFullYear()
    }
    delinquentEntries = false;

    resourceNames = [{title: 'Sai Prakash', id: 1},
        {title: 'Santosh', id: 4}, {title: 'Sudhakar', id: 2}, {title: 'Naidu', id: 3},]
    reporterType = [{title: 'All', id: 1}, {title: 'Direct', id: 1}]

    componentDidMount() {
        let localState = this.state;
        localState.lodaerComp = (genericSpinned(styles.SPIINER_SHOW));
        let props = {
            service: 'todos/1',
            method: 'get',
            contentType: 'application/json'
        };

        let axios = servicesUtil(props);
        try {

            //  axios.get().then(function (response)

            let rowData = [];
            for (let i = 0; i < 10; i++) {
                rowData.push([
                    {
                        classes: [],
                        title: title.BLANK,
                        elementConfig: {className: styles.EXPAND_SHOW},
                        changed: this.expandCurrent,
                        id: 'expand' + i,
                        type: 'expand'
                    },
                    {name: 'A' + i, value: 'A' + i, classes: [], id: 'gA' + i, type: 'tab'},
                    {name: 'B' + i, value: 'B' + i, classes: [], id: 'gB' + i, type: 'tab'},
                    {name: 'C' + i, value: 'C' + i, classes: [], id: 'gC' + i, type: 'tab'},
                    {name: 'D' + i, value: 'D' + i, classes: [], id: 'gD' + i, type: 'tab'},
                    {name: 'E' + i, value: 'E' + i, classes: [], id: 'gE' + i, type: 'tab'},
                    {name: 'F' + i, value: 'F' + i, classes: [], id: 'gF' + i, type: 'tab'},
                ])
            }
            localState.data = {
                columns: {
                    elementStyles: [' '],
                    elementData: [{
                        id: 'blank',
                        type: 'blank'
                    }, {
                        name: 'weekendDate',
                        title: title.WEEKENDING_DATE,
                        scope: "col",
                        classes: [],
                        id: 'g1',
                        type: 'tab'
                    },
                        {
                            name: 'project',
                            title: title.PROJECT,
                            scope: "col",
                            classes: [],
                            id: 'g1',
                            type: 'tab'
                        },
                        {
                            name: 'activity',
                            title: title.ACTIVITY,
                            scope: "col",
                            classes: [],
                            id: 'g1',
                            type: 'tab'
                        },
                        {
                            name: 'timeType',
                            title: title.TIME_TYPE,
                            scope: "col",
                            classes: [],
                            id: 'g1',
                            type: 'tab'
                        },
                        {
                            name: 'approveHours',
                            title: title.APPROVE_HOURS,
                            scope: "col",
                            classes: [],
                            id: 'g1',
                            type: 'tab'
                        },
                        {
                            name: 'pahours',
                            title: title.PR_HOURS,
                            scope: "col",
                            classes: [],
                            id: 'g1',
                            type: 'tab'
                        },
                    ]
                },
                rows: {
                    elemntStyles: ["thead-dark"],
                    elementData: {
                        tab_td: rowData
                    }
                },
                showSubGrid: false,
                subgridPosition: -1,
                download: true,
                flag: false,
                rowlen: 0,
                subGridData: null,
                isheadReq: true

            };

//     );
            this.hideCurrentLoader('ok');
            this.setState(localState);
//   }).catch((e) => {
//       hideCurrentLoader('fail');
//      })
        } catch (e) {
            this.hideCurrentLoader('fail');
        }
    }

    hideCurrentLoader = (status) => {
        let localState = this.state;
        if (status === 'ok') {
            localState.errorMessage = 'Your Data has been Loaded/ Saved Successfully';
            localState.errorClasses = 'alert alert-success alert-dismissible fade show vis-show';
        } else {
            localState.seterrorMessage = 'Unable to Save/ Load Data...';
            localState.errorClasses = 'alert alert-danger alert-dismissible fade show vis-show';
        }

        localState.lodaerComp = (genericSpinned(styles.SPIINER_HIDE));
        this.setState(localState)
    };
    getSubgridData = () => {
        let rowData = [];
        for (let i = 0; i < 1; i++) {
            rowData.push([
                {name: 'A' + i, value: 'A' + i, classes: [], id: 's1gA' + i, type: 'tab'},
                {name: 'B' + i, value: 'B' + i, classes: [], id: 's1gB' + i, type: 'tab'},
                {name: 'C' + i, value: 'C' + i, classes: [], id: 's1gC' + i, type: 'tab'},
                {name: 'D' + i, value: 'D' + i, classes: [], id: 's1gD' + i, type: 'tab'},
                {name: 'E' + i, value: 'E' + i, classes: [], id: 's1gE' + i, type: 'tab'},
                {name: 'F' + i, value: 'F' + i, classes: [], id: 's1gF' + i, type: 'tab'},
                {name: 'G' + i, value: 'G' + i, classes: [], id: 's1gG' + i, type: 'tab'},
            ])
        }
        let data = {
            columns: {
                elementStyles: [' '],
                elementData: [{
                    name: 'weekendDate',
                    title: title.PROJECT_ID,
                    scope: "col",
                    classes: [],
                    id: '',
                    type: 'tab'
                },
                    {
                        name: 'project',
                        title: title.PROJECT_NAME,
                        scope: "col",
                        classes: [],
                        id: '',
                        type: 'tab'
                    },
                    {
                        name: 'activity',
                        title: title.ACTIVITY_CODE,
                        scope: "col",
                        classes: [],
                        id: '',
                        type: 'tab'
                    },
                    {
                        name: 'timeType',
                        title: title.ACTIVITY,
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
                        title: title.TIME_TYPE,
                        scope: "col",
                        classes: [],
                        id: '',
                        type: 'tab'
                    }, {
                        name: 'pahours',
                        title: title.HOURS,
                        scope: "col",
                        classes: [],
                        id: '',
                        type: 'tab'
                    },
                ]
            },
            rows: {
                elemntStyles: ["thead-dark"],
                elementData: {
                    tab_td: rowData
                }
            },
            isheadReq: true
        };
        return data;

    };
    loadData = (data) => {/*console.log(data)*/
        return <TableExpandTemplates data={(data) ? data : this.state.data}/>
    };
    expandCurrent = (event) => {
        let localData = this.state.data;
        const id = (event.target.id);
        if (id.search('expand') >= 0) {
            localData.errorMessage = null;
            let position = parseInt(id.substring(id.length - 1, id.length));
            localData.rowlen = localData.rows.elementData.tab_td[0].length;
            localData.subGridData = this.getSubgridData();
            localData.showSubGrid = (localData.subgridPosition != null && localData.subgridPosition === position)
                ? false : true;
            localData.subgridPosition = position;
            localData.rows.elementData.tab_td.map(td => {
                td.map(data => {
                    if (data.id === id && localData.showSubGrid) {
                        data.type = 'deExpand';
                        return true;
                    } else if (data.id === id && !localData.showSubGrid) {
                        data.type = 'expand';
                        return true;
                    }
                })
            })

        }
        localData.flag = !localData.flag;

        this.setState(localData);
        //    this.loadData(localData)
    };

    render() {


        const getTimeSheetSummary = () => {
            let loadData = this.state;
            loadData.lodaerComp = (genericSpinned(styles.SPIINER_SHOW));
            let props = {
                service: 'todos/1',
                method: 'get',
                contentType: 'application/json'
            };

            let axios = servicesUtil(props);
            try {
                let data = this.state;
                //    axios.get().then(function (response)


                this.hideCurrentLoader('ok');
                this.setState(data);
                //).catch((e) => {
                //   hideCurrentLoader('fail');
                //})
            } catch (e) {
                this.hideCurrentLoader('fail');
            }
        };


        const setDlinquentEntry = () => {
            this.delinquentEntries = !this.delinquentEntries;

        };
        const changed = (event) => {
            console.log(event)
        };
        const changeData = (event) => {
            let localData = this.state;
            console.log(event.target.id.search('to'))
            if (event.target.id.search('to') > -1) {
                localData.toDate = event.target.value;
            } else if (event.target.id.search('from') > -1) {
                localData.fromDate = event.target.value;
            }
            this.setState(localData)
        }
        return (
            <div className="container bg-white">
                <div className="card mt-2 mr-1 ml-2 text-center border-0 ">
                    <div className="card-body">
                        <h5 className="card-title text-left font-weight-bold">{title.TIMESHEET_SUMMARY}:</h5>
                    </div>
                </div>
                <div className="row mt-2 ml-2">
                    <div className="col">{
                        (this.state.errorMessage !== null) ? genericAlert(this.state.errorMessage, this.state.errorClasses) : null
                    }</div>
                </div>
                <div className="row pl-4 ml-2">
                    <div className="col-sm-3 ">
                        {(this.resourceNames != null) ? UseAutocomplete({
                            title: title.RESOURCE_NAME,
                            data: this.resourceNames,
                            classes: 't-b mr-1',
                            id: 'resourceName'
                        }) : null}
                    </div>
                    <div className="col-sm-3  ml-2">
                        {(this.reporterType != null) ? UseAutocomplete({
                            title: title.REPORTER_TYPE,
                            ref: this.resourceNames,
                            classes: 't-b mr-1',
                            data: this.resourceNames,
                            onChange: changed,
                            id: 'reporterType'
                        }) : null}
                    </div>

                    <div className="col-sm-2 float-left ml-2">
                        <span className='t-b float-left mr-1'>{title.DELINQUENT_ENTRIES}:</span>
                        <Input
                            id={'delinquentEntries'}
                            elementType={'checkbox'}
                            elementConfig={{
                                name: 'delinquentEntries',
                            }}
                            classes={['']}
                            changed={setDlinquentEntry}
                        />
                    </div>
                    <div className="col-sm-3 float-left ml-2">
                        <span className='t-b float-left mr-1'>{title.FROM_DATE}:</span>
                        <Input
                            id={'fromDate'}
                            elementType={'date'}
                            elementConfig={{
                                type: 'date',
                                min: "2020/01/01"
                            }}
                            classes={['w-a', ' height20']}
                            value={this.fromDate}
                            changed={changeData}
                        />
                    </div>
                </div>
                <div className="row mt-2 ml-4">

                    <div className="col-sm-2 float-left ml-2 mb-2">
                        <span className='t-b float-left mr-1'>{title.TO_DATE}:</span>
                        <Input
                            id={'toDate'}
                            elementType={'date'}
                            elementConfig={{
                                type: 'date',
                                min: "2020/01/01"
                            }}
                            classes={['w-a', ' height20']}
                            value={this.state.toDate}
                            changed={changeData}
                        />
                    </div>
                    <div className="col-sm-1 float-left ml-2">
                        <Input
                            id={'getSummary'}
                            elementType={'img'}
                            src={'go'}
                            alt={'Go'}
                            classes={[' img-responsive', ' hp-20', ' w-20']}
                            imgclick={getTimeSheetSummary}
                        />
                    </div>
                </div>

                <div className="row ml-2 mr-2 mt-2 masterBorder">
                    <div className="col-sm">
                        {this.state.data != null ? this.loadData(null) : noData}
                    </div>
                </div>
            </div>

        )
    }
}

export default TimeSheetSummary;
