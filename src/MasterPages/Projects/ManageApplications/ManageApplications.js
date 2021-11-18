import React, {Component} from "react";
import * as pagerConst from "../../../Utils/constants/PagerConstants";
import {genericSpinned} from "../../UI/loaderComponent";
import * as styles from "../../../Utils/constants/GenericStyledClasses";
import {servicesUtil} from "../../../Services/ServiceUtil";
import * as title from "../../../Utils/constants/UIConstants";
import SingleTableTemplate from "../../UI/SingleTableTemplate";
import noData from "../../UI/NoDataComponent";
import Input from "../../UI/Input";
import {genericAlert} from "../../UI/errorComponenet";
import UpdateApplicationModal from "./UpdateApplicationModal";

class ManageApplications extends Component {
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

    showAllTillDate = false;
    searchText = null;
    application = null;
    account = null;
    description = null;
    sequenceOrder = null;
    editId = -1;

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
                                name: 'application',
                                title: title.APPLICATION,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            },
                            {
                                name: 'account',
                                title: title.ACCOUNT,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            },
                            {
                                name: 'product',
                                title: title.PRODUCT,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            },
                            {
                                name: 'activity',
                                title: title.CREATED_BY,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            },
                            {
                                name: 'type',
                                title: title.CREATED_DATE,
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
                            },
                            {
                                name: 'updatedDate',
                                title: title.UPDATED_DATE,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            },
                            {
                                name: 'description',
                                title: title.DESCRIPTION,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            }, {
                                name: 'sequenceOrder',
                                title: title.SEQUNCE_ORDER,
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
                                    name: 'application',
                                    value: 'CSSOP1',
                                    classes: [],
                                    id: '3',
                                    type: 'tab'
                                }, {
                                    name: 'account',
                                    value: 'VERIZON',
                                    classes: [],
                                    id: '3',
                                    type: 'tab'
                                },
                                {
                                    name: 'product',
                                    value: 'CX',
                                    classes: [],
                                    id: '4',
                                    type: 'tab'
                                },
                                {
                                    name: 'createdBy',
                                    value: 'createdBy',
                                    classes: [],
                                    id: '5',
                                    type: 'tab'
                                }, {
                                    name: 'createdDate',
                                    value: 'createdDate',
                                    classes: [],
                                    id: '5',
                                    type: 'tab'
                                },
                                {
                                    name: 'updatedBy',
                                    value: 'updatedBy',
                                    classes: [],
                                    id: '6',
                                    type: 'tab'
                                },
                                {
                                    name: 'updatedDate',
                                    value: 'updatedDate',
                                    classes: [],
                                    id: '7',
                                    type: 'tab'
                                },
                                {
                                    name: 'description',
                                    value: 'description',
                                    classes: [],
                                    id: '7',
                                    type: 'tab'
                                }, {
                                    name: 'sequenceOrder',
                                    value: '1',
                                    classes: [],
                                    id: '7',
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
                                    name: 'application',
                                    value: 'CSSOP',
                                    classes: [],
                                    id: '3',
                                    type: 'tab'
                                }, {
                                    name: 'account',
                                    value: 'VERIZON',
                                    classes: [],
                                    id: '3',
                                    type: 'tab'
                                },
                                {
                                    name: 'product',
                                    value: 'CX',
                                    classes: [],
                                    id: '4',
                                    type: 'tab'
                                },
                                {
                                    name: 'createdBy',
                                    value: 'createdBy',
                                    classes: [],
                                    id: '5',
                                    type: 'tab'
                                }, {
                                    name: 'createdDate',
                                    value: 'createdDate',
                                    classes: [],
                                    id: '5',
                                    type: 'tab'
                                },
                                {
                                    name: 'updatedBy',
                                    value: 'updatedBy',
                                    classes: [],
                                    id: '6',
                                    type: 'tab'
                                },
                                {
                                    name: 'updatedDate',
                                    value: 'updatedDate',
                                    classes: [],
                                    id: '7',
                                    type: 'tab'
                                },
                                {
                                    name: 'description',
                                    value: 'description',
                                    classes: [],
                                    id: '7',
                                    type: 'tab'
                                }, {
                                    name: 'sequenceOrder',
                                    value: '1',
                                    classes: [],
                                    id: '7',
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
                    applicationName: '',
                    account: -1,
                    product: -1,
                    description: '',
                    application: '',
                    sequenceOrder: '',
                    insertOk:true,
                    editOk:true,
                    deleteOk:true,
                    searchOk:true,
                    reloadOk:true,
                    manageEdit: false

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

    insertUpdateProduct = async (application, account, product, description, sequenceOrder,type) => {
        console.log(application, account, product, description, sequenceOrder);
        if(type==='delete'){
            //axios delete
        }else{
            //axios rest al
        }
    }
        application='';
      account='';
      product='';
      description='';
      sequenceOrder='';
    manageData = (type, index, value) => {

        if (type != null && type === 'reload') {
            this.getAllProjects(null, null);
        }

        if (type != null && type === 'insert') {
            let localSate = this.state;
            localSate.errorMessage=null;
            localSate.manageEdit = true;
            this.setState(localSate)
        }

        if (type != null && type === 'edit') {
            let localSate = this.state;

            if (!index) {
                alert(title.EDIT_MESSAGE);
            } else {
                console.log(index)
                index = (index.length >= 1) ? index[index.length - 1] : index[0];
                console.log('->',((index.length >= 1) ? index[index.length - 1] : index[0] ) )
                this.editId = index;
                this.state.data.rows.elementData.tab_td[index].map((data, index) => {
                    switch (data.name) {
                        case 'product':
                            this.product = data.value;
                            break;
                        case 'account':
                            this.account = data.value;
                            break;
                        case 'sequenceOrder':
                            this.sequenceOrder = data.value;
                            break;
                        case 'description':
                            this.description = data.value;
                            break;
                        case 'application' :
                            this.application = data.value
                    }
                });
                localSate.editPosition = index;
                localSate.errorMessage=null;
                localSate.oper = 'edit';
                localSate.manageEdit = true;
                this.setState(localSate)
            }
        }
        if (type != null && type === 'delete') {
            if (value === null || (value != null && value.length <= 0)) {
                alert("Please select Values to Delete");
            } else {
                let localData = this.state;
                for (var i = value.length - 1; i >= 0; i--)
                    localData.data.rows.elementData.tab_td.splice(value[i], 1);
                this.setState(localData);
                this.insertUpdateProduct(null,null,null,null,null,'delete');
            }
        }

        if (type != null && type === 'copy') {

        }
        if (type != null && type === 'search') {
            this.getAllProjects('search', value);
        }
    }
    getAllProjects = async (type, value) => {
        let localSate = this.state;
        try {
            //   localSate.lodaerComp = (genericSpinned(styles.SPIINER_SHOW));
            //posts?userId=1
            let props = {
                service: 'todos/1',
                method: 'get',
                contentType: 'application/json'
            };
            let axios = servicesUtil(props);
            // await   axios.get(
            //{data:this.searchText
            // }).then(function (response)
            {
                localSate.data = {
                    pager: [],
                    pagerSelector: [],
                    scroller: [],
                    showAllTillDate: false

                };
                //   this.setState(localSate);
                //    this.hideCurrentLoader('ok');
                /*  }).catch(() => {
                      hideCurrentLoader('fail');
                  })*/
            }
        } catch (e) {
            //    this.hideCurrentLoader('fail');
        }
    };


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
        let delselectModal = () => {
            let localSate = this.state;
            localSate.manageEdit = false;
            this.setState(localSate);
        }

     let loadCrudModal=()=>{return <UpdateApplicationModal application={this.application}  account={this.account} product={this.product}
                                description={this.description} sequenceOrder={this.sequenceOrder}
                                manageProduct={this.insertUpdateProduct} delselectModal={delselectModal} />}
        return (

            <div className="container bg-white">

                    {(this.state.manageEdit === true) ? loadCrudModal() : null
                }
                <div className="card mt-2 mr-1 ml-2  text-center border-0 ">
                    <div className="card-body">
                        <div className="row ml-2 mt-2">
                            <div className="col-sm-5">
                                <h5 className="card-title text-left font-weight-bold">{title.MANAGE_APPLICATION}:</h5>
                            </div>
                            <div className="col-sm-2">
                                <div className="text-right">{this.state.lodaerComp}</div>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div
                                className="col">{(this.state.errorMessage!=null) ? genericAlert(this.state.errorMessage, this.state.errorClasses) : null}</div>
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

export default ManageApplications;
