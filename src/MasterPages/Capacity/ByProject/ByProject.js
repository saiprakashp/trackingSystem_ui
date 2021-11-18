import React from 'react';
import Title from '../../UI/Title';
import CustomTable from '../../UI/CustomTable';
import '../../../Styles/MasterCss.css';
import Input from '../../UI/Input';
import './ByProject.css';

class ByProject extends React.Component {
    state = {
                supervisor : {
                    elementType:'select',
                    elementConfig: {
                        options: [
                            {value: '-1', selected: true, displayValue: 'Please Select'},
                            {value: 'santosh', displayValue: 'Santosh'},
                            {value: 'kalyan', displayValue: 'Kalyan'}
                        ]
                    }
                },
                year : {
                    elementType:'select',
                    elementConfig: {
                        options: [
                            {value: '-1', selected: true, displayValue: 'Please Select'},
                            {value: '2019', displayValue: '2019'},
                            {value: '2020', displayValue: '2020'}
                        ]
                    }
                },
                tableData : {
                    columnHeader: {
                        header: [
                            {columnName: 'add', displayValue: '', sortColumn:false},
                            {columnName: 'Project', displayValue: 'Project', sortColumn:true, sortType:'String'},
                            {columnName: 'Application', displayValue: 'Application', sortColumn:true, sortType:'String'},
                            {columnName: 'DevLOE', displayValue: 'Dev LOE', sortColumn:true, sortType:'Integer'},
                            {columnName: 'PlannedCapacity', displayValue: 'Planned Capacity', sortColumn:true, sortType:'Integer'},
                            {columnName: 'ChargedHours', displayValue: 'Charged Hours', sortColumn:true, sortType:'Integer'}
                        ]
                    },
                    columnData: {
                        data: [
                            {
                                //'' : 'expand',
                                'Project': 'IPIVR 17.8-IPIVR - New HP Virtual Connect Release 4.75',
                                'Application' : 'IPIVR',
                                'DevLOE' : '0',
                                'PlannedCapacity' : '1058',
                                'ChargedHours' : '14351.75'
                            },
                            {
                                //'' : 'expand',
                                'Project': 'NGSN.1701.RCHKits-RCH Kits Upgrade',
                                'Application' : 'NGSN',
                                'DevLOE' : '352',
                                'PlannedCapacity' : '0',
                                'ChargedHours' : '2570.5'
                            },
                            {
                                //'' : 'expand',
                                'Project': 'HICR17.5-Oracle 11.2.0.4 Upgrade',
                                'Application' : 'HICR',
                                'DevLOE' : '0',
                                'PlannedCapacity' : '0',
                                'ChargedHours' : '8.5'
                            },
                            {
                                //'' : 'expand',
                                'Project': 'VCB 18.1-EXEC.2016.AA0.6498: HICR - Voice Callback TLS v1.0 Support',
                                'Application' : 'VCB',
                                'DevLOE' : '3100',
                                'PlannedCapacity' : '0',
                                'ChargedHours' : '5086.75'
                            },
                            {
                                //'' : 'expand',
                                'Project': '999-VERIZON-COST',
                                'Application' : 'Admin',
                                'DevLOE' : '0',
                                'PlannedCapacity' : '0',
                                'ChargedHours' : '4017'
                            },
                            {
                                //'' : 'expand',
                                'Project': '18.04- IPIVR.18.04..20G UAT',
                                'Application' : 'IPIVR',
                                'DevLOE' : '845',
                                'PlannedCapacity' : '0',
                                'ChargedHours' : '3291.75'
                            },
                            {
                                //'' : 'expand',
                                'Project': 'DA 1805-DA 1805 IGUS Web Server HW Refresh',
                                'Application' : 'DA',
                                'DevLOE' : '0',
                                'PlannedCapacity' : '0',
                                'ChargedHours' : '2559.25'
                            },
                            {
                                //'' : 'expand',
                                'Project': 'IPIVR.18.03.VCPCert-VCP IP IVR Certification',
                                'Application' : 'IPIVR',
                                'DevLOE' : '0',
                                'PlannedCapacity' : '4090',
                                'ChargedHours' : '11349'
                            },
                            {
                                //'' : 'expand',
                                'Project': 'NGSN.18.03.PCRArchiveUpgrade-NGSN PCR Archive Refresh	',
                                'Application' : 'NGSN',
                                'DevLOE' : '3950',
                                'PlannedCapacity' : '232',
                                'ChargedHours' : '6484.75'
                            },
                            {
                                //'' : 'expand',
                                'Project': '18.8-IPIVR.18.8.IPIVR.10G MS upgrade',
                                'Application' : 'IPIVR',
                                'DevLOE' : '213',
                                'PlannedCapacity' : '0',
                                'ChargedHours' : '551'
                            },
                            {
                                //'' : 'expand',
                                'Project': 'IPIVR.19.06-IPIVR.19.06.CAPDownersGrove',
                                'Application' : 'IPIVR',
                                'DevLOE' : '0',
                                'PlannedCapacity' : '0',
                                'ChargedHours' : '34'
                            },
                            {
                                //'' : 'expand',
                                'Project': '19.04-HICR19.4.P08 Sizing Increase',
                                'Application' : 'HICR',
                                'DevLOE' : '0',
                                'PlannedCapacity' : '0',
                                'ChargedHours' : '0'
                            }
                            
                        ]

                    }
                }

    };
    render(){
        return (
            <div className='contentWhite'>
                <div style={{width: 100+'%'}}>
                    <Title title="Capacity Planning"/>
                    <div>&nbsp;</div>
                    <div className='container'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-sm-1 titleFont'>Project: </div>
                                <div className='col-sm-2 searchCrt'><Input id={'project'}
                                    elementType={'text'}
                                    classes={['form-control','form-control-sm','text-box']}>
                                    </Input>
                                </div>
                                <div className='col-sm-1 titleFont'>Supervisor: </div>
                                <div className='col-sm-2 searchCrt'>
                                <Input id={'project'}
                                    elementType={this.state.supervisor.elementType}
                                    elementConfig={this.state.supervisor.elementConfig}
                                    classes={['form-control','form-control-sm','input-sm','select-box']}>
                                </Input>
                                </div>
                                <div className='col-sm-2 titleFont'>Application Name: </div>
                                <div className='col-sm-2 searchCrt'><Input id={'appName'}
                                    elementType={'text'}
                                    classes={['form-control','form-control-sm','text-box']}>
                                    </Input>
                                </div>
                                <div className='col-sm-1 titleFont' align='right'>Year: </div>
                                <div className='col-sm-1 searchCrt'>
                                    <Input id={'year'}
                                        elementType={this.state.year.elementType}
                                        elementConfig={this.state.year.elementConfig}
                                        classes={['form-control','form-control-sm','select-box']}>
                                    </Input>
                                </div>
                            </div>
                        </div>
                        <div>&nbsp;</div>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-sm-10'></div>
                                <div className='col-sm-1 titleFont'>Active Projects : </div>
                                <div className='searchCrt'>  <input type='checkbox' value=''></input></div>
                                <div className=''><button type='button' className='btn btn-primary btn-sm'>Go</button></div>
                            </div>
                        </div>
                    </div>
                    <div>&nbsp;</div>
                    <CustomTable
                        header={this.state.tableData}
                        rowsPerPage={5}
                        paginationActive={true}
                        rowExpand={true}
                    ></CustomTable>
                </div>
            </div>
        );
    }
}

export default ByProject;