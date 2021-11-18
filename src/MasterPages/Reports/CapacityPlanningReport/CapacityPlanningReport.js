import React from 'react';
import Title from '../../UI/Title';
import Input from '../../UI/Input';
import CustomTable from '../../UI/CustomTable';
import './CapacityPlanningReport.css';

class CapacityPlanningReport extends React.Component{
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
                    {columnName: 'Name', displayValue: 'Name', sortColumn:true},
                    {columnName: 'Supervisor', displayValue: 'Supervisor'},
                    {columnName: 'HeadCount', displayValue: 'Head Count'},
                    {columnName: 'TargetCapacity', displayValue: 'Target Capacity'},
                    {columnName: 'Apr', displayValue: 'Apr'},
                    {columnName: 'May', displayValue: 'May'},
                    {columnName: 'June', displayValue: 'June'},
                    {columnName: 'July', displayValue: 'July'},
                    {columnName: 'Aug', displayValue: 'Aug'},
                    {columnName: 'Sep', displayValue: 'Sep'},
                    {columnName: 'Oct', displayValue: 'Oct'},
                    {columnName: 'Nov', displayValue: 'Nov'},
                    {columnName: 'Dec', displayValue: 'Dec'}
                ]
            },
            columnData: {
                data: [
                    {
                        'Name' : 'Administrator',
                        'Supervisor': 'Administrator',
                        'HeadCount' : '201',
                        'TargetCapacity' : '33337',
                        'Apr' : '24090',
                        'May' : '28420',
                        'June' : '30584',
                        'July' : '31302',
                        'Aug' : '31302',
                        'Sep' : '31302',
                        'Oct' : '32232',
                        'Nov' : '33082',
                        'Dec' : '33082',
                    },
                    {
                        'Name' : 'Ankush Kaul',
                        'Supervisor': 'Mohammed Majeed Ahmed',
                        'HeadCount' : '35',
                        'TargetCapacity' : '5950',
                        'Apr' : '4840',
                        'May' : '5228',
                        'June' : '5482',
                        'July' : '5950',
                        'Aug' : '5950',
                        'Sep' : '5950',
                        'Oct' : '5950',
                        'Nov' : '5950',
                        'Dec' : '5950',
                    },
                    {
                        'Name' : 'Bijju Paulose',
                        'Supervisor': 'Chitradurga Hanumantharao PavamanaKumar',
                        'HeadCount' : '13',
                        'TargetCapacity' : '2210',
                        'Apr' : '170',
                        'May' : '1195',
                        'June' : '1195',
                        'July' : '1275',
                        'Aug' : '1275',
                        'Sep' : '1275',
                        'Oct' : '1275',
                        'Nov' : '1275',
                        'Dec' : '1275',
                    },
                    {
                        'Name' : 'Chandrasekhar Naidu',
                        'Supervisor': 'Ankush Kaul',
                        'HeadCount' : '13',
                        'TargetCapacity' : '2210',
                        'Apr' : '170',
                        'May' : '1195',
                        'June' : '1195',
                        'July' : '1195',
                        'Aug' : '1195',
                        'Sep' : '1195',
                        'Oct' : '1195',
                        'Nov' : '1195',
                        'Dec' : '1195',
                    },
                    {
                        'Name' : 'Chitradurga Hanumantharao PavamanaKumar',
                        'Supervisor': 'Mohammed Majeed Ahmed',
                        'HeadCount' : '36',
                        'TargetCapacity' : '6290',
                        'Apr' : '2380',
                        'May' : '2380',
                        'June' : '2380',
                        'July' : '2380',
                        'Aug' : '2380',
                        'Sep' : '2380',
                        'Oct' : '2380',
                        'Nov' : '2380',
                        'Dec' : '2380',
                    },
                    {
                        'Name' : 'Chuck Delacy',
                        'Supervisor': 'Administrator',
                        'HeadCount' : '199',
                        'TargetCapacity' : '33337',
                        'Apr' : '24090',
                        'May' : '28420',
                        'June' : '28420',
                        'July' : '28420',
                        'Aug' : '28420',
                        'Sep' : '28420',
                        'Oct' : '28420',
                        'Nov' : '28420',
                        'Dec' : '28420',
                    },
                    {
                        'Name' : 'Dolly babb',
                        'Supervisor': 'Chuck Delacy',
                        'HeadCount' : '196',
                        'TargetCapacity' : '32997',
                        'Apr' : '23750',
                        'May' : '23750',
                        'June' : '23750',
                        'July' : '23750',
                        'Aug' : '23750',
                        'Sep' : '23750',
                        'Oct' : '23750',
                        'Nov' : '23750',
                        'Dec' : '23750',
                    },
                    {
                        'Name' : 'Krishna Reddy',
                        'Supervisor': 'Mohammed Majeed Ahmed',
                        'HeadCount' : '41',
                        'TargetCapacity' : '6970',
                        'Apr' : '2912',
                        'May' : '3960',
                        'June' : '3960',
                        'July' : '3960',
                        'Aug' : '3960',
                        'Sep' : '3960',
                        'Oct' : '3960',
                        'Nov' : '3960',
                        'Dec' : '3960',
                    },
                    {
                        'Name' : 'Mohammed Majeed Ahmed',
                        'Supervisor': 'Dolly Babb',
                        'HeadCount' : '122',
                        'TargetCapacity' : '20910',
                        'Apr' : '11662',
                        'May' : '15992',
                        'June' : '18158',
                        'July' : '18158',
                        'Aug' : '18158',
                        'Sep' : '18158',
                        'Oct' : '18158',
                        'Nov' : '18158',
                        'Dec' : '18158',
                    },
                    {
                        'Name' : 'Navven Rangaswamy',
                        'Supervisor': 'Krishna Reddy',
                        'HeadCount' : '8',
                        'TargetCapacity' : '1360',
                        'Apr' : '192',
                        'May' : '468',
                        'June' : '1360',
                        'July' : '1360',
                        'Aug' : '1360',
                        'Sep' : '1360',
                        'Oct' : '1360',
                        'Nov' : '1360',
                        'Dec' : '1360',
                    },
                    {
                        'Name' : 'Ningan Goud Sardar',
                        'Supervisor': 'Krishna Reddy',
                        'HeadCount' : '6',
                        'TargetCapacity' : '1020',
                        'Apr' : '170',
                        'May' : '682',
                        'June' : '1020',
                        'July' : '1020',
                        'Aug' : '1020',
                        'Sep' : '1020',
                        'Oct' : '1020',
                        'Nov' : '1020',
                        'Dec' : '1020',
                    },
                    {
                        'Name' : 'Parthiban Kannappan',
                        'Supervisor': 'Krishna Reddy',
                        'HeadCount' : '12',
                        'TargetCapacity' : '2040',
                        'Apr' : '0',
                        'May' : '260',
                        'June' : '940',
                        'July' : '940',
                        'Aug' : '940',
                        'Sep' : '940',
                        'Oct' : '940',
                        'Nov' : '940',
                        'Dec' : '940',
                    },
                    {
                        'Name' : 'Rambabu Kakumanu',
                        'Supervisor': 'Ankush Kaul',
                        'HeadCount' : '8',
                        'TargetCapacity' : '1360',
                        'Apr' : '1100',
                        'May' : '1360',
                        'June' : '1360',
                        'July' : '1360',
                        'Aug' : '1360',
                        'Sep' : '1360',
                        'Oct' : '1360',
                        'Nov' : '1360',
                        'Dec' : '1360',
                    },
                    {
                        'Name' : 'Sakthi Priya TR',
                        'Supervisor': 'Chitradurga Hanumanthrao PavamanaKumar',
                        'HeadCount' : '10',
                        'TargetCapacity' : '1870',
                        'Apr' : '1870',
                        'May' : '1870',
                        'June' : '1870',
                        'July' : '1870',
                        'Aug' : '1870',
                        'Sep' : '1870',
                        'Oct' : '1870',
                        'Nov' : '1870',
                        'Dec' : '1870',
                    },
                    {
                        'Name' : 'Shanmugan SS',
                        'Supervisor': 'Chitradurga Hanumanthrao PavamanaKumar',
                        'HeadCount' : '11',
                        'TargetCapacity' : '1870',
                        'Apr' : '1870',
                        'May' : '1870',
                        'June' : '1870',
                        'July' : '1870',
                        'Aug' : '1870',
                        'Sep' : '1870',
                        'Oct' : '1870',
                        'Nov' : '1870',
                        'Dec' : '1870',
                    },
                    {
                        'Name' : 'Shemendar Kumar',
                        'Supervisor': 'Mohammed Majeed Ahmed',
                        'HeadCount' : '9',
                        'TargetCapacity' : '1530',
                        'Apr' : '1360',
                        'May' : '1360',
                        'June' : '1360',
                        'July' : '1360',
                        'Aug' : '1360',
                        'Sep' : '1360',
                        'Oct' : '1360',
                        'Nov' : '1360',
                        'Dec' : '1360',
                    },
                    {
                        'Name' : 'Venkat Bhat',
                        'Supervisor': 'Dolly Babb',
                        'HeadCount' : '18',
                        'TargetCapacity' : '3145',
                        'Apr' : '3145',
                        'May' : '3145',
                        'June' : '3145',
                        'July' : '3145',
                        'Aug' : '3145',
                        'Sep' : '3145',
                        'Oct' : '3145',
                        'Nov' : '3145',
                        'Dec' : '3145',
                    }
                    
                ]

            }
        }
    }
    render(){
        return(
            <div className='contentWhite'>
                <div style={{width: 100+'%'}}>
                    <Title title="Capacity Forecasting"/>
                    <div>&nbsp;</div>
                    <div className='container'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-sm-1 titleFont'>Supervisor:</div>
                            <div className='col-sm-2 searchCrt'>
                                <Input id={'project'}
                                    elementType={this.state.supervisor.elementType}
                                    elementConfig={this.state.supervisor.elementConfig}
                                    classes={['form-control','form-control-sm','input-sm','select-box']}>
                                </Input>
                            </div>
                            <div className='col-sm-1 titleFont'>Region:</div>
                            <div className='col-sm-2 searchCrt'>
                                <Input id={'project'}
                                    elementType={this.state.supervisor.elementType}
                                    elementConfig={this.state.supervisor.elementConfig}
                                    classes={['form-control','form-control-sm','input-sm','select-box']}>
                                </Input>
                            </div>
                            <div className='col-sm-1 titleFont'>Status:</div>
                            <div className='col-sm-2 searchCrt'>
                                <Input id={'project'}
                                    elementType={this.state.supervisor.elementType}
                                    elementConfig={this.state.supervisor.elementConfig}
                                    classes={['form-control','form-control-sm','input-sm','select-box']}>
                                </Input>
                            </div>
                            <div className='col-sm-1 titleFont'>Stream:</div>
                            <div className='col-sm-2 searchCrt'>
                                <Input id={'project'}
                                    elementType={this.state.supervisor.elementType}
                                    elementConfig={this.state.supervisor.elementConfig}
                                    classes={['form-control','form-control-sm','input-sm','select-box']}>
                                </Input>
                            </div>
                        </div>
                    </div>
                    <div>&nbsp;</div>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-sm-1 titleFont'>Product:</div>
                            <div className='col-sm-2 searchCrt'>
                                <Input id={'project'}
                                    elementType={this.state.supervisor.elementType}
                                    elementConfig={this.state.supervisor.elementConfig}
                                    classes={['form-control','form-control-sm','input-sm','select-box']}>
                                </Input>
                            </div>
                            <div className='col-sm-1 titleFont'>Application:</div>
                            <div className='col-sm-2 searchCrt'>
                                <Input id={'project'}
                                    elementType={this.state.supervisor.elementType}
                                    elementConfig={this.state.supervisor.elementConfig}
                                    classes={['form-control','form-control-sm','input-sm','select-box']}>
                                </Input>
                            </div>
                            <div className='col-sm-1 titleFont'>Technology:</div>
                            <div className='col-sm-2 searchCrt'>
                                <Input id={'project'}
                                    elementType={this.state.supervisor.elementType}
                                    elementConfig={this.state.supervisor.elementConfig}
                                    classes={['form-control','form-control-sm','input-sm','select-box']}>
                                </Input>
                            </div>
                            <div className='col-sm-1 titleFont'>Year:</div>
                            <div className='col-sm-1 searchCrt'>
                                <Input id={'year'}
                                    elementType={this.state.year.elementType}
                                    elementConfig={this.state.year.elementConfig}
                                    classes={['form-control','form-control-sm','input-sm','select-box']}>
                                </Input>
                            </div>
                            <div className='col-sm-1 titleFont'>
                                <button type='button' className='btn btn-primary btn-sm'>Go</button>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div>&nbsp;</div>
                    <CustomTable
                        header={this.state.tableData}
                        rowsPerPage={5}
                        paginationActive={true}
                    ></CustomTable>
                </div>
            </div>
        )
    }

}

export default CapacityPlanningReport;