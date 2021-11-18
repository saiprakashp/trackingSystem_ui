import React, {Component} from 'react';
import './RecordTimeSheet.css';
import '../../../Styles/MasterCss.css';
import save_tempalate from '../../../resources/images/SaveTemp.png';
import submit from '../../../resources/images/Submit.png';
import Input from '../../UI/Input';
import {genericSpinned} from '../../UI/loaderComponent';
import {genericAlert} from '../../UI/errorComponenet';
import * as title from '../../../Utils/constants/UIConstants';
import * as a from '../../../Services/ServiceUtil';
import * as styles from '../../../Utils/constants/GenericStyledClasses';
import axios from 'axios'

export default class RecordTimeSheet extends Component {

    state = {
        errorMessage: null,
        errorClasses: 'alert alert-warning alert-dismissible fade show vis-hide ',
        lodaerComp: genericSpinned(styles.SPIINER_HIDE),

    };

    hideCurrentLoader = (status) => {
        let errorClasses = '';
        if (status === 'ok') {
            this.setState({errorMessage: 'Your Data has been Loaded/ Saved Successfully'});
            this.setState({errorClasses: 'alert alert-success alert-dismissible fade show vis-show'});
        } else {
            this.setState({errorMessage: 'Unable to Save/ Load Data...'});
            this.setState({errorClasses: 'alert alert-danger alert-dismissible fade show vis-show'});
        }
        this.setState({lodaerComp: genericSpinned(styles.SPIINER_HIDE)});
    };
    loadTimeSheet = (props) => {
        let property = {
            baseURL: a.BASE_URL + props.service,
            method: props.method,
            timeout: a.TIME_OUT_SERVICE,
            data: (props.method === 'get') ? null : props.data,
            responseType: props.contentType,
            responseEncoding: 'utf8',
            maxRedirects: a.RETRY_COUNT,
            //  headers: {'X-Custom-Header': 'PTS', 'token': props.token},
            'Content-Type': props.contentType
        };
        if (props.method === 'get') {
            axios.create(
                property
            ).get().then((response) => {
                this.setState({
                    timeSheets: [
                        {
                            projectAssesment: {
                                elementType: 'select',
                                elementConfig: {
                                    options: [
                                        {value: '-1', selected: true, displayValue: 'Please Select'},
                                        {value: 'fastest', displayValue: 'Fastest'},
                                        {value: 'cheapest', displayValue: 'Cheapest'}
                                    ]
                                },
                                value: '-1',
                                classes: ['']
                            },
                            activity: {
                                elementType: 'select',
                                elementConfig: {
                                    options: [
                                        {value: '-1', selected: true, displayValue: 'Please Select'},
                                        {value: 'fastest', displayValue: 'Fastest'},
                                        {value: 'cheapest', displayValue: 'Cheapest'}
                                    ]
                                },
                                value: '-1',
                                classes: ['']
                            },
                            type: {
                                elementType: 'select',
                                elementConfig: {
                                    options: [
                                        {value: '-1', selected: true, displayValue: 'Please Select'},
                                        {value: 'fastest', displayValue: 'Fastest'},
                                        {value: 'cheapest', displayValue: 'Cheapest'}
                                    ]
                                },
                                value: '-1',
                                classes: ['']
                            },
                            monTim: {
                                elementType: 'float',
                                elementConfig: {
                                    type: 'number',
                                    placeholder: 'Mon Hrs'
                                },
                                value: 0,
                                classes: ['width80', 'height20']
                            },
                            tueTim: {
                                elementType: 'float',
                                elementConfig: {
                                    type: 'number',
                                    placeholder: 'Tue Hrs'
                                },
                                value: 0,
                                classes: ['width80', 'height20']
                            },
                            wedTim: {
                                elementType: 'float',
                                elementConfig: {
                                    type: 'number',
                                    placeholder: 'Wed Hrs'
                                },
                                value: 0,
                                classes: ['width80', 'height20']
                            },
                            thuTim: {
                                elementType: 'float',
                                elementConfig: {
                                    type: 'number',
                                    placeholder: 'Thu Hrs'
                                },
                                value: 0,
                                classes: ['width80', 'height20']
                            },
                            friTim: {
                                elementType: 'float',
                                elementConfig: {
                                    type: 'number',
                                    placeholder: 'Fri Hrs'
                                },
                                value: 0,
                                classes: ['width80', 'height20']
                            },
                            satTim: {
                                elementType: 'float',
                                elementConfig: {
                                    type: 'number',
                                    placeholder: 'Sat Hrs'
                                },
                                value: 0,
                                classes: ['width80', 'height20']
                            },
                            sunTim: {
                                elementType: 'float',
                                elementConfig: {
                                    type: 'number',
                                    placeholder: 'Sun Hrs'
                                },
                                value: 0,
                                classes: ['width80', 'height20']
                            },
                            total: {
                                elementType: 'float',
                                elementConfig: {
                                    type: 'number',
                                    disabled: true
                                },
                                value: 0,
                                classes: ['width80', 'height20']
                            },
                            status: {
                                elementType: 'float',
                                elementConfig: {
                                    type: 'number',
                                    disabled: true
                                },
                                value: 'N/A',
                                classes: ['width80', 'height20']
                            },
                            delete: {
                                elementType: 'img',
                                src: 'delete_red',
                                alt: 'Delete',
                                classes: ['img-thumbnail', 'imgsm', 'height20']
                            },

                        }, {

                            projectAssesment: {
                                elementType: 'select',
                                elementConfig: {
                                    options: [
                                        {value: '-1', selected: true, displayValue: 'Please Select'},
                                        {value: 'fastest', displayValue: 'Fastest'},
                                        {value: 'cheapest', displayValue: 'Cheapest'}
                                    ]
                                },
                                value: '-1',
                                classes: ['']
                            },
                            activity: {
                                elementType: 'select',
                                elementConfig: {
                                    options: [
                                        {value: '-1', selected: true, displayValue: 'Please Select'},
                                        {value: 'fastest', displayValue: 'Fastest'},
                                        {value: 'cheapest', displayValue: 'Cheapest'}
                                    ]
                                },
                                value: '-1',
                                classes: ['']
                            },
                            type: {
                                elementType: 'select',
                                elementConfig: {
                                    options: [
                                        {value: '-1', selected: true, displayValue: 'Please Select'},
                                        {value: 'fastest', displayValue: 'Fastest'},
                                        {value: 'cheapest', displayValue: 'Cheapest'}
                                    ]
                                },
                                value: '-1',
                                classes: ['']
                            },
                            monTim: {
                                elementType: 'float',
                                elementConfig: {
                                    type: 'number',
                                    placeholder: 'Mon Hrs'
                                },
                                value: 0,
                                classes: ['width80', 'height20']
                            },
                            tueTim: {
                                elementType: 'float',
                                elementConfig: {
                                    type: 'number',
                                    placeholder: 'Tue Hrs'
                                },
                                value: 0,
                                classes: ['width80', 'height20']
                            },
                            wedTim: {
                                elementType: 'float',
                                elementConfig: {
                                    type: 'number',
                                    placeholder: 'Wed Hrs'
                                },
                                value: 0,
                                classes: ['width80', 'height20']
                            },
                            thuTim: {
                                elementType: 'float',
                                elementConfig: {
                                    type: 'number',
                                    placeholder: 'Thu Hrs'
                                },
                                value: 0,
                                classes: ['width80', 'height20']
                            },
                            friTim: {
                                elementType: 'float',
                                elementConfig: {
                                    type: 'number',
                                    placeholder: 'Fri Hrs'
                                },
                                value: 0,
                                classes: ['width80', 'height20']
                            },
                            satTim: {
                                elementType: 'float',
                                elementConfig: {
                                    type: 'number',
                                    placeholder: 'Sat Hrs'
                                },
                                value: 0,
                                classes: ['width80', 'height20']
                            },
                            sunTim: {
                                elementType: 'float',
                                elementConfig: {
                                    type: 'number',
                                    placeholder: 'Sun Hrs'
                                },
                                value: 0,
                                classes: ['width80', 'height20']
                            },
                            total: {
                                elementType: 'float',
                                elementConfig: {
                                    type: 'number',
                                    disabled: true
                                },
                                value: 23,
                                classes: ['width80', 'height20']
                            }, status: {
                                elementType: 'float',
                                elementConfig: {
                                    type: 'number',
                                    disabled: true
                                },
                                value: 'N/A',
                                classes: ['width80', 'height20']
                            },
                            delete: {
                                elementType: 'img',
                                src: 'delete_red',
                                alt: 'Delete',
                                classes: ['img-thumbnail', 'imgsm', 'height20']
                            }
                        }
                    ],
                    projectCharged: {
                        projects: [{project: 'project1', capacity: 'cap1', capUtilized: '12', remainingCap: '12'},
                            {project: 'project2', capacity: 'cap2', capUtilized: '123', remainingCap: '123'}],
                        totalProjectCap: 135
                    },
                    totalMo: {
                        elementType: 'text',
                        elementConfig: {
                            type: 'text',
                            disabled: true
                        },
                        value: 0,
                        classes: ['width80', 'height20']
                    },
                    totalTu: {
                        elementType: 'text',
                        elementConfig: {
                            type: 'text',
                            disabled: true
                        },
                        value: 0,
                        classes: ['width80', 'height20']
                    },
                    totalWe: {
                        elementType: 'text',
                        elementConfig: {
                            type: 'text',
                            disabled: true
                        },
                        value: 0,
                        classes: ['width80', 'height20']
                    },
                    totalTh: {
                        elementType: 'text',
                        elementConfig: {
                            type: 'text',
                            disabled: true
                        },
                        value: 0,
                        classes: ['width80', 'height20']
                    },
                    totalFr: {
                        elementType: 'text',
                        elementConfig: {
                            type: 'text',
                            disabled: true
                        },
                        value: 0,
                        classes: ['width80', 'height20']
                    },
                    totalSa: {
                        elementType: 'text',
                        elementConfig: {
                            type: 'text',
                            disabled: true
                        },
                        value: 0,
                        classes: ['width80', 'height20']
                    },
                    totalSu: {
                        elementType: 'text',
                        elementConfig: {
                            type: 'text',
                            disabled: true
                        },
                        value: 0,
                        classes: ['width80', 'height20']
                    },
                    total: {
                        elementType: 'text',
                        elementConfig: {
                            type: 'text',
                            disabled: true
                        },
                        value: 0,
                        classes: ['width80', 'height20']
                    },
                    status: {
                        elementType: 'text',
                        elementConfig: {
                            type: 'text',
                            disabled: true
                        },
                        value: 'N/A',
                        classes: ['width80', 'height20']
                    },
                    loading: false

                });

                this.hideCurrentLoader('ok');
            }).catch((e) => {
                this.hideCurrentLoader('fail');
            })
        } else {
            axios.create(
                property
            ).post().then((res) => {
                this.hideCurrentLoader('ok');
            }).catch((err) => {
                this.hideCurrentLoader('fail');
            });
        }
    };

    componentDidMount() {
        this.setState({lodaerComp: genericSpinned(styles.SPIINER_SHOW)});
        //posts?userId=1

        try {
            this.loadTimeSheet({
                    service: 'todos/1',
                    method: 'get',
                    contentType: 'application/json'
                }
            );

        } catch (e) {

        }
    }


    // used for adding duplicate row
    dummyTimeSheet = {

        projectAssesment: {
            elementType: 'select',
            elementConfig: {
                options: [
                    {value: '-1', selected: true, displayValue: 'Please Select'},
                    {value: 'fastest', displayValue: 'Fastest'},
                    {value: 'cheapest', displayValue: 'Cheapest'}
                ]
            },
            value: '-1',
            classes: ['']
        },
        activity: {
            elementType: 'select',
            elementConfig: {
                options: [
                    {value: '-1', selected: true, displayValue: 'Please Select'},
                    {value: 'fastest', displayValue: 'Fastest'},
                    {value: 'cheapest', displayValue: 'Cheapest'}
                ]
            },
            value: '-1',
            classes: ['']
        },
        type: {
            elementType: 'select',
            elementConfig: {
                options: [
                    {value: '-1', selected: true, displayValue: 'Please Select'},
                    {value: 'fastest', displayValue: 'Fastest'},
                    {value: 'cheapest', displayValue: 'Cheapest'}
                ]
            },
            value: '-1',
            classes: ['']
        },
        monTim: {
            elementType: 'float',
            elementConfig: {
                type: 'text',
                placeholder: 'Mon Hrs'
            },
            value: 0,
            classes: ['width80', 'height20']
        },
        tueTim: {
            elementType: 'float',
            elementConfig: {
                type: 'number',
                placeholder: 'Tue Hrs'
            },
            value: 0,
            classes: ['width80', 'height20']
        },
        wedTim: {
            elementType: 'float',
            elementConfig: {
                type: 'number',
                placeholder: 'Wed Hrs'
            },
            value: 0,
            classes: ['width80', 'height20']
        },
        thuTim: {
            elementType: 'float',
            elementConfig: {
                type: 'number',
                placeholder: 'Thu Hrs'
            },
            value: 0,
            classes: ['width80', 'height20']
        },
        friTim: {
            elementType: 'float',
            elementConfig: {
                type: 'number',
                placeholder: 'Fri Hrs'
            },
            value: 0,
            classes: ['width80', 'height20']
        },
        satTim: {
            elementType: 'float',
            elementConfig: {
                type: 'number',
                placeholder: 'Sat Hrs'
            },
            value: 0,
            classes: ['width80', 'height20']
        },
        sunTim: {
            elementType: 'float',
            elementConfig: {
                type: 'number',
                placeholder: 'Sun Hrs'
            },
            value: 0,
            classes: ['width80', 'height20']
        },
        total: {
            elementType: 'float',
            elementConfig: {
                type: 'number',
                disabled: true
            },
            value: 0,
            classes: ['width80', 'height20']
        },
        status: {
            elementType: 'text',
            elementConfig: {
                type: 'text',
                disabled: true
            },
            value: 'N/A',
            classes: ['width80', 'height20']
        },
        delete: {
            elementType: 'img',
            src: 'delete_red',
            alt: 'Delete',
            classes: ['img-thumbnail', 'imgsm', 'height20']
        },

    };


    getTimeSheetDetails = (event) => {
        // service call with set state
    }
    inputChangeHandler = (event) => {
        let curState = this.state;
        let timSht = curState.timeSheets;
        var x = event.target.id;
        let targetCur = x.substring(0, x.length - 1);
        let currentId = x.substring(x.length - 1, x.length);
        let parsed = JSON.parse(JSON.stringify(timSht[currentId]));
        if (parsed['total'].value == null) {
            parsed['total'].value = 0;
        }
        if (event.target.value === '') {
            event.target.value = 0;
        }
        var patt = new RegExp("[0-9 .]");
        if (event.target.value.lastIndexOf(title.TIME_SHEET_SEPERATOR) === (event.target.value.length - 1)) {
            console.log('HERE')
            console.log(parsed[targetCur].value)
            parsed[targetCur].value = (event.target.value);
            console.log(parsed[targetCur].value)
        } else {
            if (patt.test(event.target.value)) {
                parsed[targetCur].value = parseFloat(event.target.value);
                parsed['total'].value = parsed['monTim'].value + parsed['tueTim'].value + parsed['wedTim'].value + parsed['thuTim'].value + parsed['friTim'].value + parsed['satTim'].value +
                    parsed['sunTim'].value;


                timSht[currentId] = parsed;

                curState.timeSheets = timSht;
                let totalCurTar = 0;
                let maxTot = 0;
                timSht.map(p => {
                    totalCurTar += p[targetCur].value;
                    maxTot += p['total'].value;
                });

                switch (targetCur) {
                    case 'monTim':
                        curState['totalMo'].value = totalCurTar;
                        break;
                    case 'tueTim':
                        curState['totalTu'].value = totalCurTar;
                        break;
                    case 'wedTim':
                        curState['totalWe'].value = totalCurTar;
                        break;
                    case 'thuTim':
                        curState['totalTh'].value = totalCurTar;
                        break;
                    case 'friTim':
                        curState['totalFr'].value = totalCurTar;
                        break;
                    case 'satTim':
                        curState['totalSa'].value = totalCurTar;
                        break;
                    case 'sunTim':
                        curState['totalSu'].value = totalCurTar;
                        break;
                }
                curState['total'].value = maxTot;

            } else {
                parsed[targetCur].value = event.target.value;
                if (event.target.value !== '-1') {
                    parsed[targetCur].elementConfig.options[0].selected = false;
                    parsed[targetCur].elementConfig.options.map((p, index) => {
                        if (p.value === event.target.value) {
                            p.selected = true;
                            parsed[targetCur].elementConfig.options[index].selected = true;
                        }
                    })

                }

                timSht[currentId] = parsed;
                curState.timeSheets = timSht;
            }
        }
        curState.errorMessage = null;
        this.setState({
            curState
        });
    };

    addRowTimeSheet = () => {
        let masterTimeSheet = this.state.timeSheets;
        masterTimeSheet.push(this.dummyTimeSheet);
        this.setState({
            timeSheets: masterTimeSheet
        });
    };
    deleteTimeHseetRow = (event) => {
        let timSht = this.state.timeSheets;
        var x = event.target.id;
        let currentId = x.substring(x.length - 1, x.length)
        let constState = this.state.timeSheets;
        constState.splice(currentId, 1);
        this.setState({
            timeSheets: constState
        });
    };

    render() {
        let saveTeamplate = () => {
            this.setState({lodaerComp: genericSpinned(styles.SPIINER_SHOW)});
            //posts?userId=1
            let props = {
                service: 'todos/1',
                method: 'post',
                contentType: 'application/json'
            };
            try {
                this.loadTimeSheet();
            } catch (e) {
                hideCurrentLoader('fail', 'template');
            }
        };
        let hideCurrentLoader = (status) => {
            let errorMessage = '';
            let errorClasses = '';
            if (status === 'ok') {
                errorMessage = 'Your Data has been saved Successfully';
                errorClasses = 'alert alert-success alert-dismissible fade show vis-show';
            } else {
                errorMessage = 'Unable to Save Data...';
                errorClasses = 'alert alert-danger alert-dismissible fade show vis-show';
            }
            this.setState({
                errorMessage: errorMessage,
                errorClasses: errorClasses,
                lodaerComp: genericSpinned(styles.SPIINER_HIDE)
            });
        };

        let saveTimeSheet = () => {
            this.setState({lodaerComp: genericSpinned(styles.SPIINER_SHOW)});
            //posts?userId=1
            let props = {
                service: 'todos/1',
                method: 'post',
                contentType: 'application/json'
            };
            this.loadTimeSheet(props);
            //weekoff
        };
        let i = -1;
        let timeSheetArray = [];
        let timeSheets = <tr>
            <td></td>
        </tr>;
        let addDataimg = <tr>
            <td className='border-0'></td>
            <td className='border-0'></td>
            <td className='border-0'></td>
            <td className='border-0'></td>
            <td className='border-0'></td>
            <td className='border-0'></td>
            <td className='border-0'></td>
            <td className='border-0'></td>
            <td className='border-0'></td>
            <td className='border-0'></td>
            <td className='border-0'></td>
            <td className='border-0'></td>
            <td className='border-0'><Input
                id={'addRowimg'}
                elementType={'img'}
                src={'add_row'}
                alt={'Add'}
                classes={['img-thumbnail', 'imgsm', 'height20']}
                imgclick={this.addRowTimeSheet}
            ></Input></td>
        </tr>;
        let masterTimeSheet = this.state.timeSheets;
        let stataCur = this.state;
        if (masterTimeSheet) {
            let j = 0;
            timeSheets = masterTimeSheet.map(timeSheet => {
                i++;
                timeSheetArray = [];
                for (let key in timeSheet) {
                    timeSheetArray.push({
                        id: key + i,
                        config: timeSheet[key]
                    });
                }
                j++;
                return <tr key={i + j}>
                    {
                        timeSheetArray.map((p, index) => {
                            return <td id={'' + j + index} key={'' + j + index}><Input
                                id={p.id}
                                elementType={p.config.elementType}
                                elementConfig={p.config.elementConfig}
                                src={p.config.src}
                                alt={p.config.alt}
                                classes={p.config.classes}
                                value={p.config.value}
                                imgclick={this.deleteTimeHseetRow}
                                changed={this.inputChangeHandler}
                            ></Input></td>
                        })}
                </tr>
            });

            // Total tab Timesheet
            addDataimg = <tr>
                <td className='border-0'></td>
                <td className='border-0'></td>
                <td className='border-0'></td>
                <td className='border-0'><Input
                    id={'totalMo'}
                    elementType={stataCur['totalMo'].elementType}
                    elementConfig={stataCur['totalMo'].elementConfig}
                    src={stataCur['totalMo'].src}
                    alt={stataCur['totalMo'].alt}
                    classes={stataCur['totalMo'].classes}
                    value={stataCur['totalMo'].value}
                ></Input></td>
                <td className='border-0'><Input
                    id={'totalTu'}
                    elementType={stataCur['totalTu'].elementType}
                    elementConfig={stataCur['totalTu'].elementConfig}
                    src={stataCur['totalTu'].src}
                    alt={stataCur['totalTu'].alt}
                    classes={stataCur['totalTu'].classes}
                    value={stataCur['totalTu'].value}
                ></Input></td>
                <td className='border-0'><Input
                    id={'totalWe'}
                    elementType={stataCur['totalWe'].elementType}
                    elementConfig={stataCur['totalWe'].elementConfig}
                    src={stataCur['totalWe'].src}
                    alt={stataCur['totalWe'].alt}
                    classes={stataCur['totalWe'].classes}
                    value={stataCur['totalWe'].value}
                ></Input></td>
                <td className='border-0'><Input
                    id={'totalTh'}
                    elementType={stataCur['totalTh'].elementType}
                    elementConfig={stataCur['totalTh'].elementConfig}
                    src={stataCur['totalTh'].src}
                    alt={stataCur['totalTh'].alt}
                    classes={stataCur['totalTh'].classes}
                    value={stataCur['totalTh'].value}
                ></Input></td>
                <td className='border-0'><Input
                    id={'totalFr'}
                    elementType={stataCur['totalFr'].elementType}
                    elementConfig={stataCur['totalFr'].elementConfig}
                    src={stataCur['totalFr'].src}
                    alt={stataCur['totalFr'].alt}
                    classes={stataCur['totalFr'].classes}
                    value={stataCur['totalFr'].value}
                ></Input></td>
                <td className='border-0'><Input
                    id={'totalSa'}
                    elementType={stataCur['totalSa'].elementType}
                    elementConfig={stataCur['totalSa'].elementConfig}
                    src={stataCur['totalSa'].src}
                    alt={stataCur['totalSa'].alt}
                    classes={stataCur['totalSa'].classes}
                    value={stataCur['totalSa'].value}
                ></Input></td>
                <td className='border-0'><Input
                    id={'totalSu'}
                    elementType={stataCur['totalSu'].elementType}
                    elementConfig={stataCur['totalSu'].elementConfig}
                    src={stataCur['totalSu'].src}
                    alt={stataCur['totalSu'].alt}
                    classes={stataCur['totalSu'].classes}
                    value={stataCur['totalSu'].value}
                ></Input></td>
                <td className='border-0'><Input
                    id={'totalSu'}
                    elementType={stataCur['total'].elementType}
                    elementConfig={stataCur['total'].elementConfig}
                    src={stataCur['total'].src}
                    alt={stataCur['total'].alt}
                    classes={stataCur['total'].classes}
                    value={stataCur['total'].value}
                ></Input></td>
                <td className='border-0'><Input
                    id={'status'}
                    elementType={stataCur['status'].elementType}
                    elementConfig={stataCur['status'].elementConfig}
                    src={stataCur['status'].src}
                    alt={stataCur['status'].alt}
                    classes={stataCur['status'].classes}
                    value={stataCur['status'].value}
                ></Input></td>
                <td className='border-0'><Input
                    id={'addRowimg'}
                    elementType={'img'}
                    src={'add_row'}
                    alt={'Add'}
                    classes={['img-thumbnail', 'imgsm', 'height20']}
                    imgclick={this.addRowTimeSheet}
                ></Input></td>
            </tr>;

        }// end of Master Time Sheet
        let capacityStateDat = null;
        if (this.state.projectCharged)
            capacityStateDat = this.state.projectCharged.projects;
        let capacityData = <tr>
            <td></td>
        </tr>;
        i = 0;
        if (capacityStateDat) {
            capacityData = capacityStateDat.map(cap => {
                i++;
                return <tr key={'cap' + i}>

                    <td>{cap.project}</td>
                    <td>{cap.capacity}</td>
                    <td>{cap.capUtilized}</td>
                    <td>{cap.remainingCap}</td>

                </tr>
            });
        }
        return (<div className="container bg-white">
                <div className="card mt-2 mr-1 text-center border-0 ">
                    <div className="card-body">
                        <h5 className="card-title text-left font-weight-bold">{title.RECORD_TIMESHEET}</h5>
                        {(this.state.errorMessage!=null)?genericAlert(this.state.errorMessage, this.state.errorClasses):null}
                        <div className="row">
                            <div className="col-sm-12 col-md-3">
                                <p><span className='t-b text-left'>{title.RESOURCE_NAME}:</span>
                                    <span className='pl-1'> Admin </span></p>
                            </div>
                            <div className="col-sm-12 col-md-3">
                                <span className='t-b text-left'>{title.WEEKENDING_DATE}:</span>
                                <input type="date" className='ml-2' min="2020-01-01"
                                       onChange={this.getTimeSheetDetails}></input>
                            </div>
                            <div className="col-sm-12 col-md-3">{this.state.lodaerComp}</div>
                            <div className="col-sm-12 col-md-3">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text h20">
                                            <input type="checkbox" id="weekoff" aria-label="Week Off"/>
                                        </div>
                                    </div>
                                    <input type="text" className="form-control bg-white h20 t-b text-left"
                                           value={'Week off:'}
                                           disabled={true}
                                           aria-label="Text input with checkbox"/>
                                </div>
                            </div>
                        </div>
                        <div className="row ml-2 mr-2 masterBorder">
                            <div className="col-sm">
                                <table className="table table-responsive ">
                                    <thead className='thead-light'>
                                    <tr>
                                        <th scope="col"
                                            className='border-white border-right-solid '>{title.PROJECT_ASSIGNED}
                                        </th>
                                        <th scope="col"
                                            className='border-white border-right-solid '>{title.ACTIVITY}</th>
                                        <th scope="col" className='border-white border-right-solid '>{title.TYPE}</th>
                                        <th scope="col"
                                            className='border-white border-right-solid '>{title.MON_DAY}</th>
                                        <th scope="col"
                                            className='border-white border-right-solid '>{title.TUE_DAY}</th>
                                        <th scope="col"
                                            className='border-white border-right-solid '>{title.WED_DAY}</th>
                                        <th scope="col"
                                            className='border-white border-right-solid '>{title.THU_DAY}</th>
                                        <th scope="col"
                                            className='border-white border-right-solid '>{title.FRI_DAY}</th>
                                        <th scope="col"
                                            className='border-white border-right-solid '>{title.SAT_DAY}</th>
                                        <th scope="col"
                                            className='border-white border-right-solid '>{title.SUN_DAY}</th>
                                        <th scope="col" className='border-white border-right-solid '>{title.TOTAL}</th>
                                        <th scope="col" className='border-white border-right-solid '>{title.STATUS}</th>
                                        <th scope="col"
                                            className='border-white border-right-solid '>{title.ADD_DELETE}</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {timeSheets}
                                    {addDataimg}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="btn-group mt-2 float-right h20 saveBtn" role="group"
                             aria-label="TimeSheet Record">
                            <img src={save_tempalate} onClick={saveTeamplate} className='img-thumbnail h30 width80'
                                 alt={'Save Template'}/>
                            <img src={submit} onClick={saveTimeSheet} className='img-thumbnail h30 width80'
                                 alt={'Save Template'}/>
                        </div>

                        <div className="row mt-5 ml-2 mr-2 masterBorder">
                            <div className="col-sm"><label
                                className={'t-b font-weight-bold'}>{title.RECENTLY_CHARGED_PROJECTS}</label>
                                <table className="table">
                                    <thead className='thead-light'>

                                    <tr>
                                        <th scope="col"
                                            className='border-white border-right-solid t-b font-weight-bold'>{title.PROJECTS}
                                        </th>
                                        <th scope="col"
                                            className='border-white border-right-solid t-b font-weight-bold'>{title.PLANNED_CAPACITY}
                                        </th>
                                        <th scope="col"
                                            className='border-white border-right-solid t-b font-weight-bold'>{title.CAPACITY_UTILIZATION}
                                        </th>
                                        <th scope="col"
                                            className='border-white border-right-solid t-b font-weight-bold'>{title.REMAINING_CAPACITY}
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {capacityData}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
