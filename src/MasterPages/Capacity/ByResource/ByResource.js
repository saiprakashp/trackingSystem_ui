import React from 'react';
import Title from '../../UI/Title';
import CustomTable from '../../UI/CustomTable';
import Input from '../../UI/Input';
import './ByResource.css';

class ByResource extends React.Component {
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
                        {columnName: 'Name', displayValue: 'Name', sortColumn:true},
                        {columnName: 'Supervisor', displayValue: 'Supervisor', sortColumn:true},
                        {columnName: 'PrimarySkill', displayValue: 'Primary Skill', sortColumn:true}
                    ]
                },
                columnData: {
                    data: [
                        {
                            'Name': 'Mohammed Majeed Ahmed',
                            'Supervisor' : 'Dolly Babb',
                            'PrimarySkill' : 'Program Management'
                        },
                        {
                            'Name': 'Krishna Reddy',
                            'Supervisor' : 'Mohammed Majeed Ahmed',
                            'PrimarySkill' : 'Testing'
                        },
                        {
                            'Name': 'Ankush Kaul',
                            'Supervisor' : 'Mohammed Majeed Ahmed',
                            'PrimarySkill' : 'Management'
                        },
                        {
                            'Name': 'Navin Kumar',
                            'Supervisor' : 'Ankush Kaul',
                            'PrimarySkill' : '	C++'
                        },
                        {
                            'Name': 'Shemendra Kumar',
                            'Supervisor' : 'Mohammed Majeed Ahmed',
                            'PrimarySkill' : 'Project Management'
                        },
                        {
                            'Name': 'Biju Paulose',
                            'Supervisor' : 'Chitradurga Hanumantharao Pavamanakumar',
                            'PrimarySkill' : 'JAVA'
                        },
                        {
                            'Name': 'Rambabu Kakumanu',
                            'Supervisor' : 'Ankush Kaul',
                            'PrimarySkill' : 'JAVA'
                        },
                        {
                            'Name': 'Saber Rajmohammed',
                            'Supervisor' : 'Ankush Kaul',
                            'PrimarySkill' : 'JAVA'
                        },
                        {
                            'Name': 'Abhijit Hazari',
                            'Supervisor' : 'Ankush Kaul',
                            'PrimarySkill' : '	Scripting'
                        },
                        {
                            'Name': 'Chandrasekhar Naidu',
                            'Supervisor' : 'Ankush Kaul',
                            'PrimarySkill' : 'JAVA'
                        },
                        {
                            'Name': 'Sakthi Priya T R',
                            'Supervisor' : 'Chitradurga Hanumantharao Pavamanakumar',
                            'PrimarySkill' : 'JAVA'
                        },
                        {
                            'Name': 'Namrata Deshmukh',
                            'Supervisor' : 'Krishna Reddy',
                            'PrimarySkill' : 'Testing'
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
                            <div className='col-sm-1 titleFont'>Resource Name: </div>
                            <div className='col-sm-2 searchCrt'><Input id={'name'}
                                elementType={'text'}
                                classes={['form-control','form-control-sm','text-box']}>
                                </Input>
                            </div>
                            <div className='col-sm-1 titleFont'>Supervisor: </div>
                            <div className='col-sm-2 searchCrt'>
                                <Input id={'supervisor'}
                                    elementType={this.state.supervisor.elementType}
                                    elementConfig={this.state.supervisor.elementConfig}
                                    classes={['form-control','form-control-sm','input-sm','select-box']}>
                                </Input>
                            </div>
                            <div className='col-sm-1 titleFont'>Year: </div>
                            <div className='col-sm-1 searchCrt'>
                                <Input id={'year'}
                                    elementType={this.state.year.elementType}
                                    elementConfig={this.state.year.elementConfig}
                                    classes={['form-control','form-control-sm','select-box']}>
                                </Input>
                            </div>
                            <div className='col-sm-1'>
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
        );
    }
}

export default ByResource;