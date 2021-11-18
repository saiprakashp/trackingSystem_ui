import React, {Component} from "react";
import {genericSpinned} from "../../UI/loaderComponent";
import * as styles from "../../../Utils/constants/GenericStyledClasses";
import * as pagerConst from "../../../Utils/constants/PagerConstants";
import {servicesUtil} from "../../../Services/ServiceUtil";
import * as title from "../../../Utils/constants/UIConstants";
import {genericAlert} from "../../UI/errorComponenet";
import SingleTableTemplate from "../../UI/SingleTableTemplate";
import noData from "../../UI/NoDataComponent";
import UpdateAnnouncements from './UpdateAnnouncements';
class Announcements extends Component {
    state = {
        pageSizes: pagerConst.PAGER_LIST,
        errorMessage: null,
        errorClasses: 'alert alert-warning alert-dismissible fade show vis-hide ',
        lodaerComp: genericSpinned(styles.SPIINER_HIDE),
        resourcesVal: '',
        fromData: new Date().getDay + "/" + (new Date().getMonth() + 1 + '/' + new Date().getFullYear()),
        toData: new Date().getDay + "/" + (new Date().getMonth() + 1 + '/' + new Date().getFullYear()),
        data: null,
        oper: '',
        isheadReq: true
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
                                type: 'checkbox',
                                changed: ('this.checkAll'),
                                checked: false,
                                elementConfig: {classes: []}
                            }, {
                                name: 'announcementId',
                                title: title.ANNOUNCEMENT_ID,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            }, {
                                name: 'announcement',
                                title: title.ANNOUNCEMENT,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            },
                            {
                                name: 'announcementType',
                                title: title.ANNOUNCEMENT_TYPE,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            },
                            {
                                name: 'announcementToShow',
                                title: title.ANNOUNCEMENT_TO_SHOW,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            },
                            {
                                name: 'announcementDate',
                                title: title.ANNOUNCEMENT_DATE,
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
                                    name: 'announcementId',
                                    value: '1',
                                    classes: [],
                                    id: '1',
                                    type: 'tab'
                                }, {
                                    name: 'announcement',
                                    value: 'TESTING announcement',
                                    classes: [],
                                    id: '2',
                                    type: 'tab'
                                },{
                                    name: 'announcementName',
                                    value: 'Week',
                                    classes: [],
                                    id: '12',
                                    type: 'tab'
                                },
                                {
                                    name: 'announcementType',
                                    value: 'ALL',
                                    classes: [],
                                    id: '3',
                                    type: 'tab'
                                },
                                {
                                    name: 'announcementDate',
                                    value: '4/29/2020',
                                    classes: [],
                                    id: '4',
                                    type: 'tab'
                                },
                            ], [
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
                                    name: 'announcementId',
                                    value: '1',
                                    classes: [],
                                    id: '1',
                                    type: 'tab'
                                }, {
                                    name: 'announcement',
                                    value: 'TESTING announcement',
                                    classes: [],
                                    id: '2',
                                    type: 'tab'
                                },{
                                    name: 'announcementName',
                                    value: '123WDAD',
                                    classes: [],
                                    id: '12',
                                    type: 'tab'
                                },
                                {
                                    name: 'announcementType',
                                    value: 'TEAM',
                                    classes: [],
                                    id: '3',
                                    type: 'tab'
                                },
                                {
                                    name: 'announcementDate',
                                    value: '4/19/2020',
                                    classes: [],
                                    id: '4',
                                    type: 'tab'
                                },
                            ]
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
                    insertOk: true,
                    editOk: true,
                    deleteOk: true,
                    searchOk: true,
                    reloadOk: true,
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

    manageData = (type, index, value) => {

        if (type != null && type === 'search') {
            this.getAllAnnouncements(type, [index, value]);
        }
        if (type != null && type === 'reload') {
            this.getAllAnnouncements(null, null);
        }
        if (type != null && type === 'insert') {
            let localSate = this.state;
            localSate.announcementId = '';
            localSate.announcement = '';
            localSate.announcementType = '';
            localSate.announcementDate = '';
            localSate.oper = 'insert';
            localSate.manageEdit = true;
            localSate.errorMessage = null;
            this.setState(localSate)

        }

        if (type != null && type === 'edit') {
            let localSate = this.state;

            if (index) {
                index = (index.length >= 1) ? index[index.length - 1] : index[0];

                this.editId = index;
                this.state.data.rows.elementData.tab_td[index].map((data, index) => {
                    switch (data.name) {
                        case 'announcementId':
                            localSate.announcementId = data.value;
                            break;
                        case 'announcement':
                            localSate.announcement = data.value;
                            break;
                        case 'announcementType':
                            localSate.announcementType = data.value;
                            break;
                        case 'announcementDate':
                            localSate.announcementDate = data.value;
                            break;
                        case 'announcementName':
                            localSate.announcementName = data.value;
                            break;
                    }
                });
                localSate.errorMessage = null;
                localSate.manageEdit = true;
                this.setState(localSate)
            } else {
                alert(title.EDIT_MESSAGE);
            }
        }

        if (type != null && type === 'delete') {
            if (value === null || (value != null && value.length <= 0)) {
                alert(title.DELETE_MESSAGE);
            } else {
                let localData = this.state;
                for (var i = value.length - 1; i >= 0; i--)
                    localData.data.rows.elementData.tab_td.splice(value[i], 1);
                this.setState(localData);
                this.manageProduct(null, null, null, null, null,'delete');
            }
        }

        if (type != null && type === 'copy') {

        }
        if (type != null && type === 'search') {
            this.getAllAnnouncements('search', value);
        }
    }
    getAllAnnouncements = async (type, value) => {
        let localSate = this.state;
        try {
            //   localSate.lodaerComp = (genericSpinned(styles.SPIINER_SHOW));
            //posts?userId=1
            let props = {
                service: 'todos/1',
                method: 'get',
                contentType: 'application/json'
            };
            let searchType = '';
            let searchValue = '';
            if (type === 'search') {
                searchType = value[0];
                searchValue = value[1];
            }
            let axios = servicesUtil(props);
            // await   axios.get(
            //{data:this.searchText
            // }).then(function (response)
            {
                localSate.data = ({
                    columns: {
                        elementStyles: [' '],
                        elementData: [

                            {
                                name: 'weekendDate',
                                scope: "col",
                                classes: [''],
                                id: 'allApprove',
                                type: 'checkbox',
                                changed: ('this.checkAll'),
                                checked: false,
                                elementConfig: {classes: []}
                            }, {
                                name: 'announcementId',
                                title: title.ANNOUNCEMENT_ID,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            }, {
                                name: 'announcement',
                                title: title.ANNOUNCEMENT,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            },
                            {
                                name: 'announcementType',
                                title: title.ANNOUNCEMENT_TYPE,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            },
                            {
                                name: 'announcementDate',
                                title: title.ANNOUNCEMENT_DATE,
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
                                    name: 'announcementId',
                                    value: '1',
                                    classes: [],
                                    id: '1',
                                    type: 'tab'
                                }, {
                                    name: 'announcement',
                                    value: 'TESTING announcement',
                                    classes: [],
                                    id: '2',
                                    type: 'tab'
                                },{
                                    name: 'announcementName',
                                    value: '123WDAD',
                                    classes: [],
                                    id: '12',
                                    type: 'tab'
                                },
                                {
                                    name: 'announcementType',
                                    value: 'ALL',
                                    classes: [],
                                    id: '3',
                                    type: 'tab'
                                },
                                {
                                    name: 'announcementDate',
                                    value: '4/29/2020',
                                    classes: [],
                                    id: '4',
                                    type: 'tab'
                                },
                            ], [
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
                                    name: 'announcementId',
                                    value: '1',
                                    classes: [],
                                    id: '1',
                                    type: 'tab'
                                }, {
                                    name: 'announcement',
                                    value: 'TESTING announcement',
                                    classes: [],
                                    id: '2',
                                    type: 'tab'
                                },{
                                    name: 'announcementName',
                                    value: '123WDAD',
                                    classes: [],
                                    id: '12',
                                    type: 'tab'
                                },
                                {
                                    name: 'announcementType',
                                    value: 'TEAM',
                                    classes: [],
                                    id: '3',
                                    type: 'tab'
                                },
                                {
                                    name: 'announcementDate',
                                    value: '4/19/2020',
                                    classes: [],
                                    id: '4',
                                    type: 'tab'
                                },
                            ]
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
                    insertOk: true,
                    editOk: true,
                    deleteOk: true,
                    searchOk: true,
                    reloadOk: true,
                });
                this.setState(localSate)
                this.hideCurrentLoader('ok');
            }
        } catch (e) {
            this.hideCurrentLoader('fail');
        }
    };

    manageProduct = async (announcementId, announcement, announcementType, announcementDate,announcemenName, type) => {

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
            if (type === "delete") {

            } else {

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


    loadData = () => {
        return (this.state.data != null) ? <SingleTableTemplate data={this.state.data}/> : noData;
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

        let delselectModal = () => {
            let localSate = this.state;
            localSate.manageEdit = false;
            this.setState(localSate);
        }
        let loadCrudModal = () => {
            return <UpdateAnnouncements manageProduct={this.manageProduct}
                                        delselectModal={delselectModal}
                                        announcementId={this.state.announcementId}
                                        announcement={this.state.announcement}
                                        announcementType={this.state.announcementType}
                                        announcementDate={this.state.announcementDate}
                                        announcementName={this.state.announcementName}
            />
        }
        return (

            <div className="container bg-white">
                {(this.state.manageEdit === true) ? loadCrudModal() : null
                }
                <div className="card mt-2 mr-1 ml-2  text-center border-0 ">
                    <div className="card-body">
                        <div className="row ml-2 mt-2">
                            <div className="col-sm-5">
                                <h5 className="card-title text-left font-weight-bold">{title.ANNOUNCEMENTS}:</h5>
                            </div>
                            <div className="col-sm-2">
                                <div className="text-right">{this.state.lodaerComp}</div>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div
                                className="col">{(this.state.errorMessage !== null) ? genericAlert(this.state.errorMessage, this.state.errorClasses) : null}</div>
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

export default Announcements;
