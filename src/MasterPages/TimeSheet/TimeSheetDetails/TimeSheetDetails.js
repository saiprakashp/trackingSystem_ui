import React, {useCallback, useEffect, useRef, useState} from 'react';
import '../../../Styles/MasterCss.css';
import Input from "../../UI/Input";
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';
import * as title from '../../../Utils/constants/UIConstants';
import * as styles from '../../../Utils/constants/GenericStyledClasses';
import {genericSpinned} from '../../UI/loaderComponent';
import {servicesUtil} from "../../../Services/ServiceUtil";
import noData from "../../UI/NoDataComponent";
import saveAs from "file-saver";
import * as pager from "../../../Utils/constants/PagerConstants";
import {genericAlert} from "../../UI/errorComponenet";
import SingleTableTemplate from "../../UI/SingleTableTemplate";

const TimeSheetDetails = (props) => {
    const exporterRef = useRef(null);
    const startExport = useCallback(() => {
        exporterRef.current.exportGrid();
    }, [exporterRef]);
    const onSave = (workbook) => {
        const date = new Date();
        workbook.xlsx.writeBuffer().then((buffer) => {
            saveAs(new Blob([buffer], {type: 'application/octet-stream'}), title.UTILIZATION_FILE_DOWNLOAD
                + "_" + date.getDay() + '_' + date.getMonth() + '_' + date.getFullYear() + ".xlsx"
            )
        });
    };
    const [errorMessage, seterrorMessage] = useState('');
    const [errorClasses, seterrorClasses] = useState('alert alert-warning alert-dismissible fade show vis-hide ');
    const [lodaerComp, setlodaerComp] = useState(genericSpinned(styles.SPIINER_HIDE));

    const [data, setData] = useState(null);

    let hideCurrentLoader = (status) => {
        if (status === 'ok') {
            seterrorMessage('Your Data has been Loaded/ Saved Successfully');
            seterrorClasses('alert alert-success alert-dismissible fade show vis-show');
        } else {
            seterrorMessage('Unable to Save/ Load Data...');
            seterrorClasses('alert alert-danger alert-dismissible fade show vis-show');
        }

        setlodaerComp(genericSpinned(styles.SPIINER_HIDE))
    };
    let downloadData = () => {console.log('DOWNLOAD')
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

             //  axios.get().then(function (response) {

                    //response.data
                    //  tableApproveTimeSheet = tables.tableNorm(response.data);

                    let localData={
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
                                    name: 'PROJECT',
                                    title: title.PROJECT,
                                    scope: "col",
                                    classes: [],
                                    id: '',
                                    type: 'tab'
                                },
                                {
                                    name: 'ACTIVITY',
                                    title: title.ACTIVITY,
                                    scope: "col",
                                    classes: [],
                                    id: '',
                                    type: 'tab'
                                },
                                {
                                    name: 'TIME_TYPE',
                                    title: title.TIME_TYPE,
                                    scope: "col",
                                    classes: [],
                                    id: '',
                                    type: 'tab'
                                },
                                {
                                    name: 'APPROVE_HOURS',
                                    title: title.APPROVE_HOURS,
                                    scope: "col",
                                    classes: [],
                                    id: '',
                                    type: 'tab'
                                },
                                {
                                    name: 'PR_HOURS',
                                    title: title.PR_HOURS,
                                    scope: "col",
                                    classes: [],
                                    id: '',
                                    type: 'tab'
                                }
                            ]
                        },
                        rows: {
                            elemntStyles: ["thead-dark"],
                            elementData: {
                                tab_td: [[

                                    {
                                        name: 'weekendDate',
                                        value: '03/27/1',
                                        classes: [],
                                        id: '4',
                                        type: 'tab'
                                    },
                                    {
                                        name: 'project',
                                        value: '94245792 - Verizon RICO Ad Hoc Conf',
                                        classes: [],
                                        id: '5',
                                        type: 'tab'
                                    },
                                    {
                                        name: 'activity',
                                        value: 'Application Development',
                                        classes: [],
                                        id: '6',
                                        type: 'tab'
                                    },
                                    {
                                        name: 'Productive',
                                        value: 'Productive',
                                        classes: [],
                                        id: '7',
                                        type: 'tab'
                                    }, {
                                        name: 'approveHours',
                                        value: '0',
                                        classes: [],
                                        id: '7',
                                        type: 'tab'
                                    }, {
                                        name: 'pahours',
                                        value: '20',
                                        classes: [],
                                        id: '7',
                                        type: 'tab'
                                    },
                                ],
                                    [
                                        {
                                            name: 'weekendDate',
                                            value: '03/27/2020',
                                            classes: [],
                                            id: '4',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'project',
                                            value: '94245792 - Verizon RICO Ad Hoc Conf',
                                            classes: [],
                                            id: '5',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'activity',
                                            value: 'Application Development',
                                            classes: [],
                                            id: '6',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'Productive',
                                            value: 'Productive',
                                            classes: [],
                                            id: '7',
                                            type: 'tab'
                                        }, {
                                        name: 'approveHours',
                                        value: '0',
                                        classes: [],
                                        id: '7',
                                        type: 'tab'
                                    }, {
                                        name: 'pahours',
                                        value: '20',
                                        classes: [],
                                        id: '7',
                                        type: 'tab'
                                    },
                                    ],
                                    [
                                        {
                                            name: 'weekendDate',
                                            value: '03/27/2020',
                                            classes: [],
                                            id: '4',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'project',
                                            value: '94245792 - Verizon RICO Ad Hoc Conf',
                                            classes: [],
                                            id: '5',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'activity',
                                            value: 'Application Development',
                                            classes: [],
                                            id: '6',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'Productive',
                                            value: 'Productive',
                                            classes: [],
                                            id: '7',
                                            type: 'tab'
                                        }, {
                                        name: 'approveHours',
                                        value: '0',
                                        classes: [],
                                        id: '7',
                                        type: 'tab'
                                    }, {
                                        name: 'pahours',
                                        value: '20',
                                        classes: [],
                                        id: '7',
                                        type: 'tab'
                                    },
                                    ],
                                    [
                                        {
                                            name: 'weekendDate',
                                            value: '03/27/2020',
                                            classes: [],
                                            id: '4',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'project',
                                            value: '94245792 - Verizon RICO Ad Hoc Conf',
                                            classes: [],
                                            id: '5',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'activity',
                                            value: 'Application Development',
                                            classes: [],
                                            id: '6',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'Productive',
                                            value: 'Productive',
                                            classes: [],
                                            id: '7',
                                            type: 'tab'
                                        }, {
                                        name: 'approveHours',
                                        value: '0',
                                        classes: [],
                                        id: '7',
                                        type: 'tab'
                                    }, {
                                        name: 'pahours',
                                        value: '20',
                                        classes: [],
                                        id: '7',
                                        type: 'tab'
                                    },
                                    ],
                                    [
                                        {
                                            name: 'weekendDate',
                                            value: '03/27/2020',
                                            classes: [],
                                            id: '4',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'project',
                                            value: '94245792 - Verizon RICO Ad Hoc Conf',
                                            classes: [],
                                            id: '5',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'activity',
                                            value: 'Application Development',
                                            classes: [],
                                            id: '6',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'Productive',
                                            value: 'Productive',
                                            classes: [],
                                            id: '7',
                                            type: 'tab'
                                        }, {
                                        name: 'approveHours',
                                        value: '0',
                                        classes: [],
                                        id: '7',
                                        type: 'tab'
                                    }, {
                                        name: 'pahours',
                                        value: '20',
                                        classes: [],
                                        id: '7',
                                        type: 'tab'
                                    },
                                    ],
                                    [
                                        {
                                            name: 'weekendDate',
                                            value: '03/27/2020',
                                            classes: [],
                                            id: '4',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'project',
                                            value: '94245792 - Verizon RICO Ad Hoc Conf',
                                            classes: [],
                                            id: '5',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'activity',
                                            value: 'Application Development',
                                            classes: [],
                                            id: '6',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'Productive',
                                            value: 'Productive',
                                            classes: [],
                                            id: '7',
                                            type: 'tab'
                                        }, {
                                        name: 'approveHours',
                                        value: '0',
                                        classes: [],
                                        id: '7',
                                        type: 'tab'
                                    }, {
                                        name: 'pahours',
                                        value: '20',
                                        classes: [],
                                        id: '7',
                                        type: 'tab'
                                    },
                                    ],
                                    [
                                        {
                                            name: 'weekendDate',
                                            value: '03/27/2020',
                                            classes: [],
                                            id: '4',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'project',
                                            value: '94245792 - Verizon RICO Ad Hoc Conf',
                                            classes: [],
                                            id: '5',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'activity',
                                            value: 'Application Development',
                                            classes: [],
                                            id: '6',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'Productive',
                                            value: 'Productive',
                                            classes: [],
                                            id: '7',
                                            type: 'tab'
                                        }, {
                                        name: 'approveHours',
                                        value: '0',
                                        classes: [],
                                        id: '7',
                                        type: 'tab'
                                    }, {
                                        name: 'pahours',
                                        value: '20',
                                        classes: [],
                                        id: '7',
                                        type: 'tab'
                                    },
                                    ],
                                    [
                                        {
                                            name: 'weekendDate',
                                            value: '03/27/2020',
                                            classes: [],
                                            id: '4',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'project',
                                            value: '94245792 - Verizon RICO Ad Hoc Conf',
                                            classes: [],
                                            id: '5',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'activity',
                                            value: 'Application Development',
                                            classes: [],
                                            id: '6',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'Productive',
                                            value: 'Productive',
                                            classes: [],
                                            id: '7',
                                            type: 'tab'
                                        }, {
                                        name: 'approveHours',
                                        value: '0',
                                        classes: [],
                                        id: '7',
                                        type: 'tab'
                                    }, {
                                        name: 'pahours',
                                        value: '20',
                                        classes: [],
                                        id: '7',
                                        type: 'tab'
                                    },
                                    ],
                                    [
                                        {
                                            name: 'weekendDate',
                                            value: '03/27/2020',
                                            classes: [],
                                            id: '4',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'project',
                                            value: '94245792 - Verizon RICO Ad Hoc Conf',
                                            classes: [],
                                            id: '5',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'activity',
                                            value: 'Application Development',
                                            classes: [],
                                            id: '6',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'Productive',
                                            value: 'Productive',
                                            classes: [],
                                            id: '7',
                                            type: 'tab'
                                        }, {
                                        name: 'approveHours',
                                        value: '0',
                                        classes: [],
                                        id: '7',
                                        type: 'tab'
                                    }, {
                                        name: 'pahours',
                                        value: '20',
                                        classes: [],
                                        id: '7',
                                        type: 'tab'
                                    },
                                    ],
                                    [
                                        {
                                            name: 'weekendDate',
                                            value: '03/27/2020',
                                            classes: [],
                                            id: '4',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'project',
                                            value: '94245792 - Verizon RICO Ad Hoc Conf',
                                            classes: [],
                                            id: '5',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'activity',
                                            value: 'Application Development',
                                            classes: [],
                                            id: '6',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'Productive',
                                            value: 'Productive',
                                            classes: [],
                                            id: '7',
                                            type: 'tab'
                                        }, {
                                        name: 'approveHours',
                                        value: '0',
                                        classes: [],
                                        id: '7',
                                        type: 'tab'
                                    }, {
                                        name: 'pahours',
                                        value: '20',
                                        classes: [],
                                        id: '7',
                                        type: 'tab'
                                    },
                                    ],
                                    [
                                        {
                                            name: 'weekendDate',
                                            value: '03/27/2020',
                                            classes: [],
                                            id: '4',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'project',
                                            value: '94245792 - Verizon RICO Ad Hoc Conf',
                                            classes: [],
                                            id: '5',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'activity',
                                            value: 'Application Development',
                                            classes: [],
                                            id: '6',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'Productive',
                                            value: 'Productive',
                                            classes: [],
                                            id: '7',
                                            type: 'tab'
                                        }, {
                                        name: 'approveHours',
                                        value: '0',
                                        classes: [],
                                        id: '7',
                                        type: 'tab'
                                    }, {
                                        name: 'pahours',
                                        value: '20',
                                        classes: [],
                                        id: '7',
                                        type: 'tab'
                                    },
                                    ],
                                    [
                                        {
                                            name: 'weekendDate',
                                            value: '03/27/2020',
                                            classes: [],
                                            id: '4',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'project',
                                            value: '94245792 - Verizon RICO Ad Hoc Conf',
                                            classes: [],
                                            id: '5',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'activity',
                                            value: 'Application Development',
                                            classes: [],
                                            id: '6',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'Productive',
                                            value: 'Productive',
                                            classes: [],
                                            id: '7',
                                            type: 'tab'
                                        }, {
                                        name: 'approveHours',
                                        value: '0',
                                        classes: [],
                                        id: '7',
                                        type: 'tab'
                                    }, {
                                        name: 'pahours',
                                        value: '20',
                                        classes: [],
                                        id: '7',
                                        type: 'tab'
                                    },
                                    ],
                                    [
                                        {
                                            name: 'weekendDate',
                                            value: '03/27/2020',
                                            classes: [],
                                            id: '4',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'project',
                                            value: '94245792 - Verizon RICO Ad Hoc Conf',
                                            classes: [],
                                            id: '5',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'activity',
                                            value: 'Application Development',
                                            classes: [],
                                            id: '6',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'Productive',
                                            value: 'Productive',
                                            classes: [],
                                            id: '7',
                                            type: 'tab'
                                        }, {
                                        name: 'approveHours',
                                        value: '0',
                                        classes: [],
                                        id: '7',
                                        type: 'tab'
                                    }, {
                                        name: 'pahours',
                                        value: '20',
                                        classes: [],
                                        id: '7',
                                        type: 'tab'
                                    },
                                    ],
                                    [
                                        {
                                            name: 'weekendDate',
                                            value: '03/27/2020',
                                            classes: [],
                                            id: '4',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'project',
                                            value: '94245792 - Verizon RICO Ad Hoc Conf',
                                            classes: [],
                                            id: '5',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'activity',
                                            value: 'Application Development',
                                            classes: [],
                                            id: '6',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'Productive',
                                            value: 'Productive',
                                            classes: [],
                                            id: '7',
                                            type: 'tab'
                                        }, {
                                        name: 'approveHours',
                                        value: '0',
                                        classes: [],
                                        id: '7',
                                        type: 'tab'
                                    }, {
                                        name: 'pahours',
                                        value: '20',
                                        classes: [],
                                        id: '7',
                                        type: 'tab'
                                    },
                                    ],
                                    [
                                        {
                                            name: 'weekendDate',
                                            value: '03/27/2020',
                                            classes: [],
                                            id: '4',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'project',
                                            value: '94245792 - Verizon RICO Ad Hoc Conf',
                                            classes: [],
                                            id: '5',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'activity',
                                            value: 'Application Development',
                                            classes: [],
                                            id: '6',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'Productive',
                                            value: 'Productive',
                                            classes: [],
                                            id: '7',
                                            type: 'tab'
                                        }, {
                                        name: 'approveHours',
                                        value: '0',
                                        classes: [],
                                        id: '7',
                                        type: 'tab'
                                    }, {
                                        name: 'pahours',
                                        value: '20',
                                        classes: [],
                                        id: '7',
                                        type: 'tab'
                                    },
                                    ],
                                    [
                                        {
                                            name: 'weekendDate',
                                            value: '03/27/2020',
                                            classes: [],
                                            id: '4',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'project',
                                            value: '94245792 - Verizon RICO Ad Hoc Conf',
                                            classes: [],
                                            id: '5',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'activity',
                                            value: 'Application Development',
                                            classes: [],
                                            id: '6',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'Productive',
                                            value: 'Productive',
                                            classes: [],
                                            id: '7',
                                            type: 'tab'
                                        }, {
                                        name: 'approveHours',
                                        value: '0',
                                        classes: [],
                                        id: '7',
                                        type: 'tab'
                                    }, {
                                        name: 'pahours',
                                        value: '20',
                                        classes: [],
                                        id: '7',
                                        type: 'tab'
                                    },
                                    ],
                                    [
                                        {
                                            name: 'weekendDate',
                                            value: '03/27/2020',
                                            classes: [],
                                            id: '4',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'project',
                                            value: '94245792 - Verizon RICO Ad Hoc Conf',
                                            classes: [],
                                            id: '5',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'activity',
                                            value: 'Application Development',
                                            classes: [],
                                            id: '6',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'Productive',
                                            value: 'Productive',
                                            classes: [],
                                            id: '7',
                                            type: 'tab'
                                        }, {
                                        name: 'approveHours',
                                        value: '0',
                                        classes: [],
                                        id: '7',
                                        type: 'tab'
                                    }, {
                                        name: 'pahours',
                                        value: '20',
                                        classes: [],
                                        id: '7',
                                        type: 'tab'
                                    },
                                    ],
                                    [
                                        {
                                            name: 'weekendDate',
                                            value: '03/27/2020',
                                            classes: [],
                                            id: '4',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'project',
                                            value: '94245792 - Verizon RICO Ad Hoc Conf',
                                            classes: [],
                                            id: '5',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'activity',
                                            value: 'Application Development',
                                            classes: [],
                                            id: '6',
                                            type: 'tab'
                                        },
                                        {
                                            name: 'Productive',
                                            value: 'Productive',
                                            classes: [],
                                            id: '7',
                                            type: 'tab'
                                        }, {
                                        name: 'approveHours',
                                        value: '0',
                                        classes: [],
                                        id: '7',
                                        type: 'tab'
                                    }, {
                                        name: 'pahours',
                                        value: '20',
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
                        download:true,
                        downloadNow: ()=>{downloadData()} ,
                        downloadId:'200',
                        isheadReq:true

                    };
                    setData(localData);
                    showgrid(localData)
                    hideCurrentLoader('ok');
             //   }).catch((e) => {
            //        hideCurrentLoader('fail');
         //       })
            } catch (e) {
                hideCurrentLoader('fail');
            }

        }

    }, [data === null]);

    let getTimeShet = (event) => {
        {
            setData(null);
            setlodaerComp(genericSpinned(styles.SPIINER_SHOW));
            //posts?userId=1

            let props = {
                service: 'todos/1',
                method: 'get',
                contentType: 'application/json'
            };

            //   setTimeout(() =>  res= fileupload(props),60000);
            let axios = servicesUtil(props);
            try {
           //     axios.get().then(function (response) {
                let localData={
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
                                name: 'PROJECT',
                                title: title.PROJECT,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            },
                            {
                                name: 'ACTIVITY',
                                title: title.ACTIVITY,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            },
                            {
                                name: 'TIME_TYPE',
                                title: title.TIME_TYPE,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            },
                            {
                                name: 'APPROVE_HOURS',
                                title: title.APPROVE_HOURS,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            },
                            {
                                name: 'PR_HOURS',
                                title: title.PR_HOURS,
                                scope: "col",
                                classes: [],
                                id: '',
                                type: 'tab'
                            }
                        ]
                    },
                    rows: {
                        elemntStyles: ["thead-dark"],
                        elementData: {
                            tab_td: [[

                                {
                                    name: 'weekendDate',
                                    value: '03/27/2020',
                                    classes: [],
                                    id: '4',
                                    type: 'tab'
                                },
                                {
                                    name: 'project',
                                    value: '94245792 - Verizon RICO Ad Hoc Conf',
                                    classes: [],
                                    id: '5',
                                    type: 'tab'
                                },
                                {
                                    name: 'activity',
                                    value: 'Application Development',
                                    classes: [],
                                    id: '6',
                                    type: 'tab'
                                },
                                {
                                    name: 'Productive',
                                    value: 'Productive',
                                    classes: [],
                                    id: '7',
                                    type: 'tab'
                                }, {
                                    name: 'approveHours',
                                    value: '0',
                                    classes: [],
                                    id: '7',
                                    type: 'tab'
                                }, {
                                    name: 'pahours',
                                    value: '20',
                                    classes: [],
                                    id: '7',
                                    type: 'tab'
                                },
                            ],
                                [

                                    {
                                        name: 'weekendDate',
                                        value: '03/27/2020',
                                        classes: [],
                                        id: '4',
                                        type: 'tab'
                                    },
                                    {
                                        name: 'project',
                                        value: '94245792 - Verizon RICO Ad Hoc Conf',
                                        classes: [],
                                        id: '5',
                                        type: 'tab'
                                    },
                                    {
                                        name: 'activity',
                                        value: 'Application Development',
                                        classes: [],
                                        id: '6',
                                        type: 'tab'
                                    },
                                    {
                                        name: 'Productive',
                                        value: 'Productive',
                                        classes: [],
                                        id: '7',
                                        type: 'tab'
                                    }, {
                                    name: 'approveHours',
                                    value: '0',
                                    classes: [],
                                    id: '7',
                                    type: 'tab'
                                }, {
                                    name: 'pahours',
                                    value: '20',
                                    classes: [],
                                    id: '7',
                                    type: 'tab'
                                },
                                ],
                                [

                                    {
                                        name: 'weekendDate',
                                        value: '03/27/2020',
                                        classes: [],
                                        id: '4',
                                        type: 'tab'
                                    },
                                    {
                                        name: 'project',
                                        value: '94245792 - Verizon RICO Ad Hoc Conf',
                                        classes: [],
                                        id: '5',
                                        type: 'tab'
                                    },
                                    {
                                        name: 'activity',
                                        value: 'Application Development',
                                        classes: [],
                                        id: '6',
                                        type: 'tab'
                                    },
                                    {
                                        name: 'Productive',
                                        value: 'Productive',
                                        classes: [],
                                        id: '7',
                                        type: 'tab'
                                    }, {
                                    name: 'approveHours',
                                    value: '0',
                                    classes: [],
                                    id: '7',
                                    type: 'tab'
                                }, {
                                    name: 'pahours',
                                    value: '20',
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
                    download:true,
                    downloadNow:()=>{downloadData()},
                    downloadId:'200'
                } ;
                setData(localData);
                showgrid(localData);
                hideCurrentLoader('ok');
            } catch (e) {
                hideCurrentLoader('fail');
            }
        }
        setlodaerComp(genericSpinned(styles.SPIINER_HIDE));
    };

    let showgrid = (localData) => {
        localData=(data===null)?localData:data;
         return  <SingleTableTemplate data={localData}/>;
    };

    return (
        <div className="container bg-white">
            <div className="card mt-2 mr-1 ml-2 text-center border-0 ">
                <div className="card-body">
                    <h5 className="card-title text-left font-weight-bold">{title.TIMESHEET_DETAILS}:</h5>
                    <div className="row mt-2">
                        <div className="col">{(errorMessage!=null)?genericAlert(errorMessage, errorClasses):null}</div>
                    </div>
                    <div className="row ml-2 mt-2">
                        <div className="col-sm-3">
                            <span className='t-b text-left'>{title.FROM_DATE}:</span>
                            <input type="date" className='ml-2 text-left' min="2020-01-01" id={'fromdate'}
                            ></input>
                        </div>
                        <div className="col-sm-3">
                            <span className='t-b  float-left text-left'>{title.TO_DATE}:</span>
                            <input type="date" className='ml-2  float-left text-left' min="2020-01-01" id={'toDate'}
                            ></input>
                            <Input
                                id={'getTimeShet'}
                                elementType={'img'}
                                src={'go'}
                                alt={'Go'}
                                classes={['img-fluid', 'ml-4', 'imgsm', 'h20', 'float-left', 'text-left']}
                                imgclick={getTimeShet}
                            ></Input>
                        </div>
                        {lodaerComp}
                    </div>

                    <div className="row ml-2 mt-2 masterBorder">
                        <div className="col-sm">
                            {showgrid()}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};
export default TimeSheetDetails;
