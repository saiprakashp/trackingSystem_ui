import React, {useCallback, useEffect, useRef, useState} from 'react';
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';

import SingleTableTemplate from "../../UI/SingleTableTemplate";
import * as titles from '../../../Utils/constants/UIConstants';
import 'font-awesome/css/font-awesome.min.css';
import '../../../Styles/MasterCss.css';
import {genericAlert} from "../../UI/errorComponenet";
import {genericSpinned} from "../../UI/loaderComponent";
import * as styles from "../../../Utils/constants/GenericStyledClasses";
import {servicesUtil} from "../../../Services/ServiceUtil";
import noData from "../../UI/NoDataComponent";
import Input from "../../UI/Input";

const Utilization = (props) => {
    const [errorMessage, seterrorMessage] = useState('');
    const [errorClasses, seterrorClasses] = useState('alert alert-warning alert-dismissible fade show vis-hide');
    const [lodaerComp, setlodaerComp] = useState(genericSpinned(styles.SPIINER_HIDE));
    const [fromDate, setfromDate] = useState('2020-04-13');
    const [toDate, settoDate] = useState('2020-04-13');

    const [data, setData] = useState(null);
    let hideCurrentLoader = (status) => {
        let errorClasses = '';
        if (status === 'ok') {
            seterrorMessage('Your Data has been Loaded/ Saved Successfully');
            seterrorClasses('alert alert-success alert-dismissible fade show vis-show');
        } else {
            seterrorMessage('Unable to Save/ Load Data...');
            seterrorClasses('alert alert-danger alert-dismissible fade show vis-show');
        }

        setlodaerComp(genericSpinned(styles.SPIINER_HIDE))
    };

    const exporterRef = useRef(null);
    const startExport = useCallback(() => {
        exporterRef.current.exportGrid();
    }, [exporterRef]);
    const downloadData = () => {console.log('DOWNLOAD')
    };


    useEffect(() => {
        if (data === null) {
            setlodaerComp(genericSpinned(styles.SPIINER_SHOW));
            let props = {
                service: 'todos/1',
                method: 'get',
                contentType: 'application/json'
            };

            let axios = servicesUtil(props);
            try {
                //         axios.get().then(function (response) {
                setData({
                    isheadReq: true,
                    title: 'Page',
                    columns: {
                        elementStyles: [' '],
                        elementData: [
                            {
                                name: 'resourceName',
                                title: titles.WEEKEND,
                                scope: "col",
                                classes: [],
                                id: 'resourceName',
                                type: 'tab'
                            },
                            {
                                name: 'resourceType',
                                title: titles.RESOURCE_NAME,
                                scope: "col",
                                classes: [],
                                id: 'resourceType',
                                type: 'tab'
                            },
                            {
                                name: 'weekendDate',
                                title: titles.SUPERVISOR,
                                scope: "col",
                                classes: [],
                                id: 'weekendDate',
                                type: 'tab'
                            },
                            {
                                name: 'effort',
                                title: titles.PROJECT,
                                scope: "col",
                                classes: [],
                                id: 'effort',
                                type: 'tab'
                            },
                            {
                                name: 'supervisor',
                                title: titles.ACTIVITY,
                                scope: "col",
                                classes: [],
                                id: 'supervisor',
                                type: 'tab'
                            },
                            {
                                name: 'supervisor',
                                title: titles.TIME_TYPE,
                                scope: "col",
                                classes: [],
                                id: 'supervisor',
                                type: 'tab'
                            },
                            {
                                name: 'supervisor',
                                title: titles.APPROVE_HOURS,
                                scope: "col",
                                classes: [],
                                id: 'supervisor',
                                type: 'tab'
                            },{
                                name: 'supervisor',
                                title: titles.PR_HOURS,
                                scope: "col",
                                classes: [],
                                id: 'supervisor',
                                type: 'tab'
                            }
                        ]
                    },
                    rows: {
                        elemntStyles: ["thead-dark"],
                        elementData: {
                            tab_td: [[
                                {name: '1', value: 'APPROVE_HOURS', classes: [], id: '3', type: 'tab'},
                                {name: 'APPROVE_HOURS', value: 'APPROVE_HOURS', classes: [], id: '3', type: 'tab'},
                                {name: 'APPROVE_HOURS', value: 'APPROVE_HOURS', classes: [], id: '3', type: 'tab'},
                                {name: 'APPROVE_HOURS', value: 'APPROVE_HOURS', classes: [], id: '3', type: 'tab'},
                                {name: 'APPROVE_HOURS', value: 'APPROVE_HOURS', classes: [], id: '3', type: 'tab'},
                                {name: 'APPROVE_HOURS', value: 'APPROVE_HOURS', classes: [], id: '3', type: 'tab'},
                                {name: 'APPROVE_HOURS', value: 'APPROVE_HOURS', classes: [], id: '3', type: 'tab'},
                                {name: 'APPROVE_HOURS', value: 'APPROVE_HOURS', classes: [], id: '3', type: 'tab'},
                            ],  [
                                {name: 'APPROVE_HOURS', value: 'APPROVE_HOURS', classes: [], id: '3', type: 'tab'},
                                {name: 'APPROVE_HOURS', value: 'APPROVE_HOURS', classes: [], id: '3', type: 'tab'},
                                {name: 'APPROVE_HOURS', value: 'APPROVE_HOURS', classes: [], id: '3', type: 'tab'},
                                {name: 'APPROVE_HOURS', value: 'APPROVE_HOURS', classes: [], id: '3', type: 'tab'},
                                {name: 'APPROVE_HOURS', value: 'APPROVE_HOURS', classes: [], id: '3', type: 'tab'},
                                {name: 'APPROVE_HOURS', value: 'APPROVE_HOURS', classes: [], id: '3', type: 'tab'},
                                {name: 'APPROVE_HOURS', value: 'APPROVE_HOURS', classes: [], id: '3', type: 'tab'},
                                {name: 'APPROVE_HOURS', value: 'APPROVE_HOURS', classes: [], id: '3', type: 'tab'},
                            ],]
                        }
                    },
                    pager: [],
                    pagerSelector: [],
                    scroller: [],
                    download:true,
                    downloadNow: ()=>{downloadData()} ,
                    downloadId:'200',
                    isheadReq:true,
                    isFooterReq:true,
                    downloadOk:true
                });
                hideCurrentLoader('ok');
                //    }).catch((e) => {
                //        hideCurrentLoader('fail');
                //     })
            } catch (e) {
                hideCurrentLoader('fail');
            }
        }
    }, [(data === null)]);
    const setGridData = () => {
            return (data !== null)?<SingleTableTemplate data={data}/>:noData;
    };
    const getUtilization = () => {
        setlodaerComp(genericSpinned(styles.SPIINER_SHOW));
        let props = {
            service: 'todos/1',
            method: 'get',
            contentType: 'application/json'
        };

        let axios = servicesUtil(props);
        try {

            //  axios.get().then(function (response) {
            setData({
                isheadReq: true,
                title: 'Page',
                columns: {
                    elementStyles: [' '],
                    elementData: [
                        {
                            name: 'resourceName',
                            title: titles.WEEKEND,
                            scope: "col",
                            classes: [],
                            id: 'resourceName',
                            type: 'tab'
                        },
                        {
                            name: 'resourceType',
                            title: titles.RESOURCE_NAME,
                            scope: "col",
                            classes: [],
                            id: 'resourceType',
                            type: 'tab'
                        },
                        {
                            name: 'weekendDate',
                            title: titles.SUPERVISOR,
                            scope: "col",
                            classes: [],
                            id: 'weekendDate',
                            type: 'tab'
                        },
                        {
                            name: 'effort',
                            title: titles.PROJECT,
                            scope: "col",
                            classes: [],
                            id: 'effort',
                            type: 'tab'
                        },
                        {
                            name: 'supervisor',
                            title: titles.ACTIVITY,
                            scope: "col",
                            classes: [],
                            id: 'supervisor',
                            type: 'tab'
                        },
                        {
                            name: 'supervisor',
                            title: titles.TIME_TYPE,
                            scope: "col",
                            classes: [],
                            id: 'supervisor',
                            type: 'tab'
                        },
                        {
                            name: 'supervisor',
                            title: titles.APPROVE_HOURS,
                            scope: "col",
                            classes: [],
                            id: 'supervisor',
                            type: 'tab'
                        },{
                            name: 'supervisor',
                            title: titles.PR_HOURS,
                            scope: "col",
                            classes: [],
                            id: 'supervisor',
                            type: 'tab'
                        }
                    ]
                },
                rows: {
                    elemntStyles: ["thead-dark"],
                    elementData: {
                        tab_td: [[
                            {name: '1', value: 'APPROVE_HOURS', classes: [], id: '3', type: 'tab'},
                            {name: 'APPROVE_HOURS', value: 'APPROVE_HOURS', classes: [], id: '3', type: 'tab'},
                            {name: 'APPROVE_HOURS', value: 'APPROVE_HOURS', classes: [], id: '3', type: 'tab'},
                            {name: 'APPROVE_HOURS', value: 'APPROVE_HOURS', classes: [], id: '3', type: 'tab'},
                            {name: 'APPROVE_HOURS', value: 'APPROVE_HOURS', classes: [], id: '3', type: 'tab'},
                        ],  [
                            {name: 'APPROVE_HOURS', value: 'APPROVE_HOURS', classes: [], id: '3', type: 'tab'},
                            {name: 'APPROVE_HOURS', value: 'APPROVE_HOURS', classes: [], id: '3', type: 'tab'},
                            {name: 'APPROVE_HOURS', value: 'APPROVE_HOURS', classes: [], id: '3', type: 'tab'},
                            {name: 'APPROVE_HOURS', value: 'APPROVE_HOURS', classes: [], id: '3', type: 'tab'},
                            {name: 'APPROVE_HOURS', value: 'APPROVE_HOURS', classes: [], id: '3', type: 'tab'},
                        ],]
                    }
                },
                pager: [],
                pagerSelector: [],
                scroller: []
            });
            hideCurrentLoader('ok');
            this.setState(data);
            //  });
            hideCurrentLoader('ok');
            //     }).catch((e) => {
            //  //       hideCurrentLoader('fail');
            //    })
        } catch (e) {
            hideCurrentLoader('fail');
        }
    };
    return (
        <div className="container bg-white">
            <div className="card mt-2 mr-2  text-center border-0 ">
                <div className="card-body">
                    <h5 className="card-title text-left font-weight-bold">Utilization:</h5>
                </div>
            </div>
            <div className="row mr-2 ml-2">
                <div className="col">{genericAlert(errorMessage, errorClasses)}</div>
            </div>
            <div className="row ml-2">
                <div className="col-sm-2 col-md-2 col-xs-3 float-left">
                    <span className='t-b text-left'>{titles.FROM_DATE}:</span>
                    <input type="date" className='ml-2' min="2020-01-01" value={fromDate}
                           onChange={(e) => {
                               setfromDate(e.target.value)
                           }}></input>
                </div>
                <div className="col-sm-12 col-md-2 col-xs-3 float-left">
                    <span className='t-b text-left'>{titles.TO_DATE}:</span>
                    <input type="date" className='' min="2020-01-01" value={toDate}
                           onChange={(e) => {
                               settoDate(e.target.value)
                           }}></input>
                </div>
                <div className="col-sm-12 col-md-2 col-xs-3 float-left">
                    <Input
                        id={'go'}
                        elementType={'img'}
                        src={'go'}
                        alt={'go'}
                        classes={['img-responsive', 'imgsm', 'height20']}
                        imgclick={getUtilization}
                    ></Input>
                </div>
            </div>


            <div className="row ml-2 mt-2 mr-1 masterBorder">
                <div className="col-sm">
                    {setGridData()}
                </div>
            </div>
        </div>
    )
}
export default Utilization;
