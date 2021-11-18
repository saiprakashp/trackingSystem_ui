import React, {Component} from "react";
import * as pagerConst from "../../../Utils/constants/PagerConstants";
import {genericSpinned} from "../../UI/loaderComponent";
import * as styles from "../../../Utils/constants/GenericStyledClasses";
import {servicesUtil} from "../../../Services/ServiceUtil";
import * as title from "../../../Utils/constants/UIConstants";
import noData from "../../UI/NoDataComponent";
import Input from "../../UI/Input";
import {genericAlert} from "../../UI/errorComponenet";
import UseAutocomplete from "../../UI/AutoCompleteComponent";
import SingleTableTemplate from "../../UI/SingleTableTemplate";
import UpdateUserUtilizationModal from "./UpdateUserUtilizationModal";

class PlanUserUtilization extends Component {
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
        prevlen: 0,
        oper: '',
        isheadReq: true,
        insertReq: false
    }


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
                                scope: "col",
                                classes: [''],
                                id: 'allApprove',
                                type: 'blank',
                                elementConfig: {classes: []}
                            }, {
                                name: 'weekendDate',
                                title: title.LOCATION_NAME,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            },
                            {
                                name: 'resource',
                                title: title.HEAD_COUNT,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            },
                            {
                                name: 'project',
                                title: title.WORKING_DAYS,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            },
                            {
                                name: 'activity',
                                title: title.TARGET_HRS,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            }, {
                                name: 'activity',
                                title: title.WORKING_HOURS,
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
                            tab_td: [[
                                {
                                    name: 'chk',
                                    value: 'chk',
                                    label: '',
                                    classes: ['appr_t1'],
                                    id: 'appr_t1',
                                    checked: false,
                                    changed: ('this.checkAll'),
                                    type: 'checkbox',
                                    elementConfig: {classes: []}
                                }, {
                                    name: 'location',
                                    value: 'Hyderabad',
                                    classes: [],
                                    id: 'hyderabadId',
                                    type: 'tab'
                                }, {
                                    name: 'headCount',
                                    value: '2',
                                    classes: [],
                                    id: 'hc',
                                    type: 'tab'
                                },
                                {
                                    name: 'workingDays',
                                    value: '12',
                                    classes: [],
                                    id: 'workingDays',
                                    type: 'tab'
                                },
                                {
                                    name: 'targetHours',
                                    value: '121',
                                    classes: [],
                                    id: 'targetHours',
                                    type: 'tab'
                                },
                            ],
                                [
                                    {
                                        name: 'chk',
                                        value: 'chk',
                                        label: '',
                                        classes: ['appr_t2'],
                                        id: 'appr_t2',
                                        checked: false,
                                        changed: ('this.checkAll'),
                                        type: 'checkbox',
                                        elementConfig: {classes: []}
                                    }, {
                                    name: 'location',
                                    value: 'Chennai',
                                    classes: [],
                                    id: 'chennaiId',
                                    type: 'tab'
                                },{
                                    name: 'headCount',
                                    value: '2',
                                    classes: [],
                                    id: 'hc',
                                    type: 'tab'
                                },{
                                        name: 'workingDays',
                                        value: '112',
                                        classes: [],
                                        id: 'workingDays',
                                        type: 'tab'
                                    },
                                    {
                                        name: 'targetHours',
                                        value: '1321',
                                        classes: [],
                                        id: 'targetHours',
                                        type: 'tab'
                                    },
                                ], [
                                    {
                                        name: 'chk',
                                        value: 'chk',
                                        label: '',
                                        classes: ['appr_t3'],
                                        id: 'appr_t3',
                                        checked: false,
                                        changed: ('this.checkAll'),
                                        type: 'checkbox',
                                        elementConfig: {classes: []}
                                    }, {
                                        name: 'location',
                                        value: 'Banglore',
                                        classes: [],
                                        id: 'bangloreId',
                                        type: 'tab'
                                    }, {
                                        name: 'headCount',
                                        value: '24',
                                        classes: [],
                                        id: 'hc',
                                        type: 'tab'
                                    },
                                    {
                                        name: 'workingDays',
                                        value: '112',
                                        classes: [],
                                        id: 'workingDays',
                                        type: 'tab'
                                    },
                                    {
                                        name: 'targetHours',
                                        value: '1421',
                                        classes: [],
                                        id: 'targetHours',
                                        type: 'tab'
                                    },
                                ], [
                                    {
                                        name: 'chk',
                                        value: 'chk',
                                        label: '',
                                        classes: ['appr_t4'],
                                        id: 'appr_t4',
                                        checked: false,
                                        changed: ('this.checkAll'),
                                        type: 'checkbox',
                                        elementConfig: {classes: []}
                                    }, {
                                        name: 'location',
                                        value: 'Mana',
                                        classes: [],
                                        id: 'manaId',
                                        type: 'tab'
                                    }, {
                                        name: 'headCount',
                                        value: '2',
                                        classes: [],
                                        id: 'hc',
                                        type: 'tab'
                                    },
                                    {
                                        name: 'workingDays',
                                        value: '12',
                                        classes: [],
                                        id: 'workingDays',
                                        type: 'tab'
                                    },
                                    {
                                        name: 'targetHours',
                                        value: '121',
                                        classes: [],
                                        id: 'targetHours',
                                        type: 'tab'
                                    },
                                ], [
                                    {
                                        name: 'chk',
                                        value: 'chk',
                                        label: '',
                                        classes: ['appr_t5'],
                                        id: 'appr_t5',
                                        checked: false,
                                        changed: ('this.checkAll'),
                                        type: 'checkbox',
                                        elementConfig: {classes: []}
                                    }, {
                                        name: 'location',
                                        value: 'Egi',
                                        classes: [],
                                        id: 'egiId',
                                        type: 'tab'
                                    }, {
                                        name: 'headCount',
                                        value: '',
                                        classes: [],
                                        id: '',
                                        type: 'blank'
                                    },
                                    {
                                        name: 'workingDays',
                                        value: '',
                                        classes: [],
                                        id: '',
                                        type: 'blank'
                                    },
                                    {
                                        name: 'targetHours',
                                        value: '',
                                        classes: [],
                                        id: '',
                                        type: 'blank'
                                    }, {
                                        name: 'workingHours',
                                        value: '2',
                                        classes: [],
                                        id: '',
                                        type: 'tab'
                                    },
                                ], [
                                    {
                                        name: 'chk',
                                        value: 'chk',
                                        label: '',
                                        classes: ['appr_t6'],
                                        id: 'appr_t6',
                                        checked: false,
                                        changed: ('this.checkAll'),
                                        type: 'checkbox',
                                        elementConfig: {classes: []}
                                    }, {
                                        name: 'location',
                                        value: 'Mana',
                                        classes: [],
                                        id: 'bangloreId',
                                        type: 'tab'
                                    }, {
                                        name: 'headCount',
                                        value: '',
                                        classes: [],
                                        id: '',
                                        type: 'blank'
                                    },
                                    {
                                        name: 'workingDays',
                                        value: '',
                                        classes: [],
                                        id: '',
                                        type: 'blank'
                                    },
                                    {
                                        name: 'targetHours',
                                        value: '',
                                        classes: [],
                                        id: '',
                                        type: 'blank'
                                    }, {
                                        name: 'workingHours',
                                        value: '2',
                                        classes: [],
                                        id: '',
                                        type: 'tab'
                                    },
                                ],
                            ]
                        }
                    },
                    pager: [],
                    pagerSelector: [],
                    scroller: [],
                    showAllTillDate: false,
                    isheadReq: false,
                    isFooterReq: true,
                    manageData: this.manageData,
                    manageEdit:false,
                    reloadOk:true,
                    editOk:true,

                });
                localSate.supervisors = [{title: 'Sai Prakash', id: 1},
                    {title: 'Santosh', id: 1}, {title: 'Sudhakar', id: 1}, {title: 'Naidu', id: 1},];
                localSate.years = [{title: '2020', id: 1},
                    {title: '2021', id: 2},];
                localSate.months = [{title: 'Jan', id: 1},
                    {title: 'Feb', id: 2}, {title: 'Mar', id: 3}, {title: 'Apr', id: 4},];
                this.setState(localSate)
                this.hideCurrentLoader('ok');
            }
            //).catch(() => {
            //   this.hideCurrentLoader('fail');
            //})
        } catch (e) {
            this.hideCurrentLoader('fail');
        }

    }

    table_classes = ['table', 'table-borderless', 'table-responsive-sm', ' table-sm', 'tabCustom', 'w-100'];
    thead_classes = ["thead-light"];
    tbody_classes = [''];
    manageData = (type, index, data) => {
         let localState=this.state;
        if(type==='edit')
        {
            if(index!=null && index.length>=0){
            index = (index.length  >= 1) ? index[index.length - 1] : index[0];
            let editData=localState.data. rows  .elementData. tab_td[index];
            localState.manageEdit=true;
            localState.errorMessage=null;
            localState.data. rows  .elementData. tab_td[index].map(
                data =>{
                    switch (data.name) {
                        case'location':
                            localState.location = data.value;
                            break;
                        case'headCount':
                            localState.headCount = data.value;
                            break;
                        case'workingDays':
                            localState.workingDays = data.value;
                            break;
                        case'targetHours':
                            localState.targetHours = data.value;
                            break;
                        case'workingHours':
                            localState.workingHours = data.value;
                            break;
                    }
                }
            )
            this.setState(localState);
            }else {
                alert(title.EDIT_MESSAGE)
            }
        }
    }
    loadData = () => {
        return (this.state.data != null) ? <SingleTableTemplate data={this.state.data} manageData={this.manageData}/>
            : noData;
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
    };

    render() {

        let projectMonthChange = (event) => {
            console.log(document.getElementById("supervisors").value,
                document.getElementById("years").value, event.target.innerHTML)
        }
        let manageProduct=(headCount, workingDays, totalHours, workingHours, location)=>{
            console.log(headCount, workingDays, totalHours, workingHours, location)
        }
        let delselectModal = () => {
            let localSate = this.state;
            localSate.manageEdit = false;
            this.setState(localSate);
        };

        return (

            <div className="container bg-white">
                {(this.state.manageEdit===true)?<UpdateUserUtilizationModal   ln={this.state.location}
                                                                       hc={this.state.headCount}
                                                                       wd={this.state.workingDays}
                                                                       th={this.state.targetHours}
                                                                       wh={this.state.workingHours}
                                                                       manageProduct={manageProduct}
                                                                       delselectModal={delselectModal}
                    />:null
                }
                <div className="card mt-2 mr-1 ml-2  text-center border-0 ">
                    <div className="card-body">
                        <div className="row ml-2 mt-2">
                            <div className="col-sm-5">
                                <h5 className="card-title text-left font-weight-bold">{title.PLAN_USER_UTILIZATION}:</h5>
                            </div>
                            <div className="col-sm-2">
                                <div className="text-right">{this.state.lodaerComp}</div>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div
                                className="col">{(this.state.errorMessage != null) ? genericAlert(this.state.errorMessage, this.state.errorClasses) : null}</div>
                        </div>
                        <div className="row mt-2 pl-4">
                            <div className="col-sm-3 float-left">
                                {UseAutocomplete({
                                    title: title.SUPERVISOR,
                                    data: (this.state.supervisors) ? this.state.supervisors : [],
                                    id: 'supervisors'
                                })}
                            </div>
                            <div className="col-sm-3 float-left">
                                {UseAutocomplete({
                                    title: title.YEAR,
                                    data: (this.state.years) ? this.state.years : [],
                                    id: 'years'
                                })}
                            </div>
                            <div className="col-sm-3 float-left">
                                {UseAutocomplete({
                                    title: title.MONTH,
                                    data: (this.state.months) ? this.state.months : [],
                                    changed: projectMonthChange,
                                    id: 'months'
                                })}
                            </div>
                        </div>
                        <div className="row ml-2 mt-1 mr-2 masterBorder">
                            <div className="col-sm">
                                {this.loadData()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlanUserUtilization;
