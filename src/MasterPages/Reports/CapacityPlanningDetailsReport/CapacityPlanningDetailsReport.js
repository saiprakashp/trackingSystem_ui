import React from 'react';
import Input from '../../UI/Input';
import Title from '../../UI/Title';
import CustomTable from '../../UI/CustomTable';
import './CapacityPlanningDetailsReport.css';

class CapacityPlanningDetailsReport extends React.Component{
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
                    {columnName: 'add', displayValue: ''},
                    {columnName: 'Name', displayValue: 'Name', sortColumn:true},
                    {columnName: 'PrimarySkill', displayValue: 'Primary Skill'},
                    {columnName: 'Jan', displayValue: 'Jan'},
                    {columnName: 'Feb', displayValue: 'Feb'},
                    {columnName: 'Mar', displayValue: 'Mar'},
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
                        'Name' : 'Aarthi Samaditya',
                        'PrimarySkill': 'C++',
                        'Jan' : '170',
                        'Feb' : '170',
                        'Mar' : '170',
                        'Apr' : '170',
                        'May' : '0',
                        'June' : '0',
                        'July' : '0',
                        'Aug' : '0',
                        'Sep' : '0',
                        'Oct' : '0',
                        'Nov' : '0',
                        'Dec' : '0'
                    },
                    {
                        'Name' : 'Akash Nagaraj',
                        'PrimarySkill': 'DB Dev',
                        'Jan' : '170',
                        'Feb' : '170',
                        'Mar' : '170',
                        'Apr' : '170',
                        'May' : '0',
                        'June' : '0',
                        'July' : '0',
                        'Aug' : '0',
                        'Sep' : '0',
                        'Oct' : '0',
                        'Nov' : '0',
                        'Dec' : '0'
                    },
                    {
                        'Name' : 'Biju Paulose',
                        'PrimarySkill': 'Java',
                        'Jan' : '10',
                        'Feb' : '170',
                        'Mar' : '170',
                        'Apr' : '170',
                        'May' : '0',
                        'June' : '0',
                        'July' : '0',
                        'Aug' : '0',
                        'Sep' : '0',
                        'Oct' : '0',
                        'Nov' : '0',
                        'Dec' : '0'
                    },
                    {
                        'Name' : 'Chokkam Reddy Preethi',
                        'PrimarySkill': 'Java',
                        'Jan' : '170',
                        'Feb' : '170',
                        'Mar' : '170',
                        'Apr' : '170',
                        'May' : '0',
                        'June' : '0',
                        'July' : '0',
                        'Aug' : '0',
                        'Sep' : '0',
                        'Oct' : '0',
                        'Nov' : '0',
                        'Dec' : '0'
                    },
                    {
                        'Name' : 'Deepak Kumar',
                        'PrimarySkill': 'Testing',
                        'Jan' : '170',
                        'Feb' : '170',
                        'Mar' : '170',
                        'Apr' : '170',
                        'May' : '0',
                        'June' : '0',
                        'July' : '0',
                        'Aug' : '0',
                        'Sep' : '0',
                        'Oct' : '0',
                        'Nov' : '0',
                        'Dec' : '0'
                    },
                    {
                        'Name' : 'Dong Lee',
                        'PrimarySkill': 'Testing',
                        'Jan' : '170',
                        'Feb' : '170',
                        'Mar' : '170',
                        'Apr' : '170',
                        'May' : '0',
                        'June' : '0',
                        'July' : '0',
                        'Aug' : '0',
                        'Sep' : '0',
                        'Oct' : '0',
                        'Nov' : '0',
                        'Dec' : '0'
                    },
                    {
                        'Name' : 'Govind Rao',
                        'PrimarySkill': 'Java',
                        'Jan' : '170',
                        'Feb' : '170',
                        'Mar' : '170',
                        'Apr' : '170',
                        'May' : '0',
                        'June' : '0',
                        'July' : '0',
                        'Aug' : '0',
                        'Sep' : '0',
                        'Oct' : '0',
                        'Nov' : '0',
                        'Dec' : '0'
                    },
                    {
                        'Name' : 'Harishkumar Kakkulla',
                        'PrimarySkill': 'C++',
                        'Jan' : '170',
                        'Feb' : '170',
                        'Mar' : '170',
                        'Apr' : '170',
                        'May' : '0',
                        'June' : '0',
                        'July' : '0',
                        'Aug' : '0',
                        'Sep' : '0',
                        'Oct' : '0',
                        'Nov' : '0',
                        'Dec' : '0'
                    },
                    {
                        'Name' : 'Janardhana Polamparri',
                        'PrimarySkill': 'C++',
                        'Jan' : '170',
                        'Feb' : '170',
                        'Mar' : '170',
                        'Apr' : '170',
                        'May' : '0',
                        'June' : '0',
                        'July' : '0',
                        'Aug' : '0',
                        'Sep' : '0',
                        'Oct' : '0',
                        'Nov' : '0',
                        'Dec' : '0'
                    },
                    {
                        'Name' : 'Karthick C',
                        'PrimarySkill': 'Java',
                        'Jan' : '170',
                        'Feb' : '170',
                        'Mar' : '170',
                        'Apr' : '170',
                        'May' : '0',
                        'June' : '0',
                        'July' : '0',
                        'Aug' : '0',
                        'Sep' : '0',
                        'Oct' : '0',
                        'Nov' : '0',
                        'Dec' : '0'
                    },
                    {
                        'Name' : 'Kimidi Chinnam Naidu',
                        'PrimarySkill': 'Testing',
                        'Jan' : '170',
                        'Feb' : '170',
                        'Mar' : '170',
                        'Apr' : '170',
                        'May' : '0',
                        'June' : '0',
                        'July' : '0',
                        'Aug' : '0',
                        'Sep' : '0',
                        'Oct' : '0',
                        'Nov' : '0',
                        'Dec' : '0'
                    },
                    {
                        'Name' : 'Krishna Kishore Kasarneni',
                        'PrimarySkill': 'Java',
                        'Jan' : '170',
                        'Feb' : '170',
                        'Mar' : '170',
                        'Apr' : '170',
                        'May' : '0',
                        'June' : '0',
                        'July' : '0',
                        'Aug' : '0',
                        'Sep' : '0',
                        'Oct' : '0',
                        'Nov' : '0',
                        'Dec' : '0'
                    },
                    {
                        'Name' : 'Krishnamraju Karkarlapudi',
                        'PrimarySkill': '.NET',
                        'Jan' : '170',
                        'Feb' : '170',
                        'Mar' : '170',
                        'Apr' : '170',
                        'May' : '0',
                        'June' : '0',
                        'July' : '0',
                        'Aug' : '0',
                        'Sep' : '0',
                        'Oct' : '0',
                        'Nov' : '0',
                        'Dec' : '0'
                    },
                    {
                        'Name' : 'Lilee Naik',
                        'PrimarySkill': 'C++',
                        'Jan' : '170',
                        'Feb' : '170',
                        'Mar' : '170',
                        'Apr' : '170',
                        'May' : '0',
                        'June' : '0',
                        'July' : '0',
                        'Aug' : '0',
                        'Sep' : '0',
                        'Oct' : '0',
                        'Nov' : '0',
                        'Dec' : '0'
                    },
                    {
                        'Name' : 'Santosh Kajuluri',
                        'PrimarySkill': 'Java',
                        'Jan' : '170',
                        'Feb' : '170',
                        'Mar' : '170',
                        'Apr' : '170',
                        'May' : '0',
                        'June' : '0',
                        'July' : '0',
                        'Aug' : '0',
                        'Sep' : '0',
                        'Oct' : '0',
                        'Nov' : '0',
                        'Dec' : '0'
                    },
                    {
                        'Name' : 'Naresh Kumar Bashaboina',
                        'PrimarySkill': 'Java',
                        'Jan' : '170',
                        'Feb' : '170',
                        'Mar' : '170',
                        'Apr' : '170',
                        'May' : '0',
                        'June' : '0',
                        'July' : '0',
                        'Aug' : '0',
                        'Sep' : '0',
                        'Oct' : '0',
                        'Nov' : '0',
                        'Dec' : '0'
                    },
                    {
                        'Name' : 'Naveen Rangaswamy',
                        'PrimarySkill': 'Testing',
                        'Jan' : '170',
                        'Feb' : '170',
                        'Mar' : '170',
                        'Apr' : '170',
                        'May' : '0',
                        'June' : '0',
                        'July' : '0',
                        'Aug' : '0',
                        'Sep' : '0',
                        'Oct' : '0',
                        'Nov' : '0',
                        'Dec' : '0'
                    },
                    {
                        'Name' : 'Ragini B',
                        'PrimarySkill': 'Testing',
                        'Jan' : '170',
                        'Feb' : '170',
                        'Mar' : '170',
                        'Apr' : '170',
                        'May' : '0',
                        'June' : '0',
                        'July' : '0',
                        'Aug' : '0',
                        'Sep' : '0',
                        'Oct' : '0',
                        'Nov' : '0',
                        'Dec' : '0'
                    },
                    {
                        'Name' : 'Sai Prakash',
                        'PrimarySkill': 'Java',
                        'Jan' : '170',
                        'Feb' : '170',
                        'Mar' : '170',
                        'Apr' : '170',
                        'May' : '0',
                        'June' : '0',
                        'July' : '0',
                        'Aug' : '0',
                        'Sep' : '0',
                        'Oct' : '0',
                        'Nov' : '0',
                        'Dec' : '0'
                    },
                    {
                        'Name' : 'Sudhakar Enuganti',
                        'PrimarySkill': 'Java',
                        'Jan' : '170',
                        'Feb' : '170',
                        'Mar' : '170',
                        'Apr' : '170',
                        'May' : '0',
                        'June' : '0',
                        'July' : '0',
                        'Aug' : '0',
                        'Sep' : '0',
                        'Oct' : '0',
                        'Nov' : '0',
                        'Dec' : '0'
                    }
                    
                    
                ]

            }
        }
    }
    render(){
        return(
            <div className='contentWhite'>
                <div style={{width: 100+'%'}}>
                    <Title title="Capacity View"/>
                    <div>&nbsp;</div>
                    <div className='container'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-sm-1 titleFont'>Supervisor:</div>
                                <div className='col-sm-2 searchCrt'>
                                <Input id={'supervisor'}
                                    elementType={this.state.supervisor.elementType}
                                    elementConfig={this.state.supervisor.elementConfig}
                                    classes={['form-control','form-control-sm','input-sm','select-box']}>
                                </Input>
                                </div>
                                <div className='col-sm-1 titleFont'>Region:</div>
                                <div className='col-sm-2 searchCrt'>
                                <Input id={'region'}
                                    elementType={'text'}
                                    classes={['form-control','form-control-sm','text-box']}>
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
                        rowExpand={true}
                    ></CustomTable>
                </div>
            </div>
        )
    }
}

export default CapacityPlanningDetailsReport;