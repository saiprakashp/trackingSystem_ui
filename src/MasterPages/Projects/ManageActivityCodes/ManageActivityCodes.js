import React, {Component} from "react";
import * as pagerConst from "../../../Utils/constants/PagerConstants";
import {genericSpinned} from "../../UI/loaderComponent";
import * as styles from "../../../Utils/constants/GenericStyledClasses";
import {servicesUtil} from "../../../Services/ServiceUtil";
import * as title from "../../../Utils/constants/UIConstants";
import noData from "../../UI/NoDataComponent";
import {genericAlert} from "../../UI/errorComponenet";
import SingleTableTemplate from "../../UI/SingleTableTemplate";
import UpdateActivityCodes from "./UpdateActivityCodes";

class ManageActivityCodes extends Component {
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
                                name: 'approveAll',
                                scope: "col",
                                classes: [''],
                                id: 'allApprove',
                                type: 'checkbox',
                                changed: ('this.checkAll'),
                                checked: false,
                                elementConfig: {classes: []}
                            },
                            {
                                name: 'activityCode',
                                title: title.ACTIVITY_CODE,
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
                                name: 'createdBy',
                                title: title.CREATED_BY,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            },
                            {
                                name: 'updatedBy',
                                title: title.UPDATED_BY,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            }, {
                                name: 'createdDate',
                                title: title.CREATED_DATE,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            }, {
                                name: 'updatedDate',
                                title: title.UPDATED_DATE,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            }, {
                                name: 'description',
                                title: title.DESCRIPTION,
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
                                    name: 'appchk',
                                    value: 'chk',
                                    label: '',
                                    classes: ['appr_t1'],
                                    id: 'appr_t1',
                                    checked: false,
                                    changed: ('this.checkAll'),
                                    type: 'checkbox',
                                    elementConfig: {classes: []}
                                }, {
                                    name: 'activityCode',
                                    value: '8503',
                                    classes: [],
                                    id: 'activityCode1',
                                    type: 'tab'
                                }, {
                                    name: 'activity',
                                    value: '1232',
                                    classes: [],
                                    id: 'activity1',
                                    type: 'tab'
                                },
                                {
                                    name: 'createdBy',
                                    value: 'admin',
                                    classes: [],
                                    id: 'createdBy1',
                                    type: 'tab'
                                }, {
                                    name: 'createdDate',
                                    value: '29/10/2020',
                                    classes: [],
                                    id: 'createdDate1',
                                    type: 'tab'
                                },
                                {
                                    name: 'updatedBy',
                                    value: 'admin',
                                    classes: [],
                                    id: 'updatedBy1',
                                    type: 'tab'
                                },
                                {
                                    name: 'updatedDate`',
                                    value: '29/10/2020',
                                    classes: [],
                                    id: 'updatedDate1',
                                    type: 'tab'
                                },
                                {
                                    name: 'description',
                                    value: 'asda123sd',
                                    classes: [],
                                    id: 'description1',
                                    type: 'tab'
                                },
                            ], [
                                {
                                    name: 'appchk',
                                    value: 'chk',
                                    label: '',
                                    classes: ['appr_t2'],
                                    id: 'appr_t2',
                                    checked: false,
                                    changed: ('this.checkAll'),
                                    type: 'checkbox',
                                    elementConfig: {classes: []}
                                }, {
                                    name: 'activityCode',
                                    value: '8503',
                                    classes: [],
                                    id: 'activityCode2',
                                    type: 'tab'
                                }, {
                                    name: 'activity',
                                    value: '1232',
                                    classes: [],
                                    id: 'activity2',
                                    type: 'tab'
                                },
                                {
                                    name: 'createdBy',
                                    value: 'admin',
                                    classes: [],
                                    id: 'createdBy2',
                                    type: 'tab'
                                }, {
                                    name: 'createdDate',
                                    value: '29/10/2020',
                                    classes: [],
                                    id: 'createdDate2',
                                    type: 'tab'
                                },
                                {
                                    name: 'updatedBy',
                                    value: 'admin',
                                    classes: [],
                                    id: 'updatedBy2',
                                    type: 'tab'
                                },
                                {
                                    name: 'updatedDate',
                                    value: '29/10/2020',
                                    classes: [],
                                    id: 'updatedDate2',
                                    type: 'tab'
                                },
                                {
                                    name: 'description',
                                    value: 'asdasd',
                                    classes: [],
                                    id: 'description2',
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
                    isheadReq: true,
                    isFooterReq: true,
                    manageData: this.manageData,
                    manageEdit: false,
                    seratchQuery: true,
                    insertOk: true,
                    editOk: true,
                    deleteOk: true,
                    searchOk: true,
                    reloadOk: true,

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
    manageData = (type, index, value) => {
        console.log(type, index, value)
        let localState = this.state;

        if (type != null && type === 'delete') {
            if (value === null || (value != null && value.length <= 0)) {
                alert(title.DELETE_MESSAGE);
            } else {
                let localData = this.state;
                for (var i = value.length - 1; i >= 0; i--)
                    localData.data.rows.elementData.tab_td.splice(value[i], 1);
                localState.manageEdit = false;
                localState.errorMessage = null;
                this.setState(localState);
                this.manageProduct(null, null, null, null, 'delete');
            }
        }
        if (type === 'insert') {
            localState.manageEdit = true;
            localState.errorMessage = null;
            this.setState(localState);
        }
        if (type === 'edit') {
            if (index != null && index.length >= 0) {
                index = (index.length >= 1) ? index[index.length - 1] : index[0]
                let editData = localState.data.rows.elementData.tab_td[index];
                localState.manageEdit = true;
                localState.data.rows.elementData.tab_td[index].map(
                    data => {
                        switch (data.name) {
                            case'activityCode':
                                localState.activityCode = data.value;
                                break;
                            case'activity':
                                localState.activity = data.value;
                                break;
                            case'description':
                                localState.description = data.value;
                                break;
                        }
                    }
                );
                localState.errorMessage = null;
                this.setState(localState);
            } else {
                alert(title.EDIT_MESSAGE);
            }
        }
    }
    loadData = () => {
        return (this.state.data != null) ?
            <SingleTableTemplate seratchQuery={this.state.seratchQuery} data={this.state.data}
                                 manageData={this.manageData}/>
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
    manageProduct = async (productName, account, serviceAssurance, description,type) => {

        let localSate = this.state;
        localSate.lodaerComp = (genericSpinned(styles.SPIINER_SHOW));
        this.setState(localSate)
        //posts?userId=1
        let props = {
            service: 'todos/1',
            method: 'get',
            contentType: 'application/json'
        };

        //   setTimeout(() =>  res= fileupload(props),60000);
        let axios = servicesUtil(props);
        try {
            if(type==="delete"){

            }else{

            }
            axios.get().then(function (response) {
                if (response.state !== '200') {
                    this.hideCurrentLoader('fail');
                } else {
                    //  this.setState(response.data)
                    this.hideCurrentLoader('ok');
                }
            }).catch(() => {
                this.hideCurrentLoader('fail');
            })
        } catch (e) {
            this.hideCurrentLoader('fail');
        }

    }

    render() {
        let delselectModal = () => {
            let localSate = this.state;
            localSate.manageEdit = false;
            this.setState(localSate);
        }
        return (

            <div className="container bg-white">
                {(this.state.manageEdit === true) ? <UpdateActivityCodes manageProduct={this.manageProduct}
                                                                        delselectModal={delselectModal}
                                                                         activityCode={this.state.activityCode}
                                                                         activity={this.state.activity}
                                                                         description={this.state.description}
                /> : null
                }
                <div className="card mt-2 mr-1 ml-2  text-center border-0 ">
                    <div className="card-body">
                        <div className="row ml-2 mt-2">
                            <div className="col-sm-5">
                                <h5 className="card-title text-left font-weight-bold">{title.MANAGE_ACTIVITY_CODES}:</h5>
                            </div>
                            <div className="col-sm-2">
                                <div className="text-right">{this.state.lodaerComp}</div>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div
                                className="col">{(this.state.errorMessage != null) ? genericAlert(this.state.errorMessage, this.state.errorClasses) : null}</div>
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

export default ManageActivityCodes;
