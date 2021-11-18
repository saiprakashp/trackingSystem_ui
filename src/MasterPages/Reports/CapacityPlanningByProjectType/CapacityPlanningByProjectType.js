import React from 'react';
import Title from '../../UI/Title';
import Input from '../../UI/Input';
import CustomTable from '../../UI/CustomTable';
import './CapacityPlanningByProjectType.css';

class CapacityPlanningByProjectType extends React.Component{

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
                    {columnName: 'Month', displayValue: 'Month'},
                    {columnName: 'HeadCount', displayValue: 'Head Count'},
                    {columnName: 'TargetCapacity', displayValue: 'Target Capacity'},
                    {columnName: 'Project', displayValue: 'Project'},
                    {columnName: 'Adhoc', displayValue: 'Adhoc'},
                    {columnName: 'Feasibility', displayValue: 'Feasibility'},
                    {columnName: '4thSupport', displayValue: '4th Support'},
                    {columnName: 'Total', displayValue: 'Total'},
                    {columnName: 'Difference', displayValue: 'Difference(Target-Total)'}
                ]
            },
            columnData:{
                data:[
                    {
                        'Month':'Jan',
                        'HeadCount':'122',
                        'TargetCapacity':'20740',
                        'Project':'11901',
                        'Adhoc':'0',
                        'Feasibility':'0',
                        '4thSupport':'0',
                        'Total':'11901',
                        'Difference':'9649'

                    },
                    {
                        'Month':'Feb',
                        'HeadCount':'122',
                        'TargetCapacity':'20740',
                        'Project':'11447.5',
                        'Adhoc':'0',
                        'Feasibility':'0',
                        '4thSupport':'0',
                        'Total':'11447.5',
                        'Difference':'9292.5'

                    },
                    {
                        'Month':'Mar',
                        'HeadCount':'122',
                        'TargetCapacity':'20740',
                        'Project':'11525',
                        'Adhoc':'0',
                        'Feasibility':'0',
                        '4thSupport':'0',
                        'Total':'11525',
                        'Difference':'9215'

                    },
                    {
                        'Month':'Apr',
                        'HeadCount':'122',
                        'TargetCapacity':'20740',
                        'Project':'9247.5',
                        'Adhoc':'0',
                        'Feasibility':'0',
                        '4thSupport':'0',
                        'Total':'9247.5',
                        'Difference':'11492.5'

                    },
                    {
                        'Month':'May',
                        'HeadCount':'122',
                        'TargetCapacity':'20740',
                        'Project':'4917.5',
                        'Adhoc':'0',
                        'Feasibility':'0',
                        '4thSupport':'0',
                        'Total':'4917.5',
                        'Difference':'15822.5'

                    },
                    {
                        'Month':'June',
                        'HeadCount':'122',
                        'TargetCapacity':'20740',
                        'Project':'2752.5',
                        'Adhoc':'0',
                        'Feasibility':'0',
                        '4thSupport':'0',
                        'Total':'2752.5',
                        'Difference':'17987.5'

                    },
                    {
                        'Month':'July',
                        'HeadCount':'122',
                        'TargetCapacity':'20740',
                        'Project':'2035',
                        'Adhoc':'0',
                        'Feasibility':'0',
                        '4thSupport':'0',
                        'Total':'2035',
                        'Difference':'18705'

                    },
                    {
                        'Month':'Aug',
                        'HeadCount':'122',
                        'TargetCapacity':'20740',
                        'Project':'2035',
                        'Adhoc':'0',
                        'Feasibility':'0',
                        '4thSupport':'0',
                        'Total':'2035',
                        'Difference':'18705'

                    },
                    {
                        'Month':'Sep',
                        'HeadCount':'122',
                        'TargetCapacity':'20740',
                        'Project':'2035',
                        'Adhoc':'0',
                        'Feasibility':'0',
                        '4thSupport':'0',
                        'Total':'2035',
                        'Difference':'18705'

                    },
                    {
                        'Month':'Oct',
                        'HeadCount':'122',
                        'TargetCapacity':'20740',
                        'Project':'1105',
                        'Adhoc':'0',
                        'Feasibility':'0',
                        '4thSupport':'0',
                        'Total':'1105',
                        'Difference':'19635'

                    },
                    {
                        'Month':'Nov',
                        'HeadCount':'122',
                        'TargetCapacity':'20740',
                        'Project':'255',
                        'Adhoc':'0',
                        'Feasibility':'0',
                        '4thSupport':'0',
                        'Total':'255',
                        'Difference':'20485'

                    },
                    {
                        'Month':'Dec',
                        'HeadCount':'122',
                        'TargetCapacity':'20740',
                        'Project':'255',
                        'Adhoc':'0',
                        'Feasibility':'0',
                        '4thSupport':'0',
                        'Total':'255',
                        'Difference':'20485'

                    }
                ]
            }

        }
    }
    render(){
        return(
            <div className='contentWhite'>
                <div style={{width: 100+'%'}}>
                    <Title title="Capacity Forecast"/>
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
                                <div className='col-sm-1 titleFont'>Status:</div>
                                <div className='col-sm-2 searchCrt'>
                                <Input id={'status'}
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
                    ></CustomTable>
                </div>
            </div>
        )
    }

}

export default CapacityPlanningByProjectType;