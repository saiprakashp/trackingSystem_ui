import React, {Component} from 'react';
import '../../../Styles/MasterCss.css';
import Save from '../../../resources/images/save.png';
import Input from '../../UI/Input';

class MyProfile extends Component {
    state = {
        personalInfo: {
            signum: '',
            name: '',
            customerId: '',
            email: '',
            phoneNo: '',
            personalNo: '',
            mobileNo: '',
            role: '',
            stream: '',
            privilege: '',
            employeeType: '',
            supervisor: '',
            skills: '',
            inputGroupFile: ''
        }
    }

    componentDidMount() {
        //service call setting all input assignment to states

    }


    render() {
        let loadingConetent = '';
        let inputChangeHandler = (event) => {
            let curState = this.state.personalInfo;
            curState[event.target.id] = event.target.value;
            console.log(event.target.value)
            this.setState({
                personalInfo: curState
            });

        }
        return (
            <div className="masterBorder bg-white">
                <div className={'container'}>

                    <div className="card mt-2 mr-1 ml-2 text-center border-0 ">
                        <div className="card-body">
                            <h5 className="card-title text-left font-weight-bold"> My Profile</h5>
                            <div className={'row mt-1 '}>
                                <div className={'col text-right t-b f-13'}>SIGNUM:</div>
                                <div className={'col text-left f-13'}>
                                    <Input
                                        elementType='text'
                                        elementConfig={
                                            {
                                                "type": 'text',
                                                "placeholder": 'Signum'
                                            }
                                        }
                                        id="signum"
                                        value={this.signum}
                                        changed={inputChangeHandler}
                                        classes={['w-ft', 'height20']}
                                    />
                                </div>
                            </div>
                            <div className={'row mt-1'}>
                                <div className={'col text-right t-b f-13'}>Name*:</div>
                                <div className={'col text-left f-13'}>
                                    <Input
                                        elementType='text'
                                        elementConfig={
                                            {
                                                "type": 'text',
                                                "placeholder": 'Name'
                                            }
                                        }
                                        id="name"
                                        value=""
                                        changed={inputChangeHandler}
                                        classes={['w-ft', 'height20']}
                                    />
                                </div>
                            </div>
                            <div className={'row mt-1'}>
                                <div className={'col text-right t-b f-13'}>CustomerID:</div>
                                <div className={'col text-left f-13'}>
                                    <Input
                                        elementType='text'
                                        elementConfig={
                                            {
                                                "type": 'text',
                                                "placeholder": 'Custome Id'
                                            }
                                        }
                                        id="customerId"
                                        changed={inputChangeHandler}
                                        value=""
                                        classes={['w-ft', 'height20']}
                                    />
                                </div>
                            </div>
                            <div className={'row mt-1'}>
                                <div className={'col text-right t-b f-13'}>Email*:</div>
                                <div className={'col text-left f-13'}>
                                    <Input
                                        elementType="email"
                                        elementConfig={
                                            {
                                                "type": 'text',
                                                "placeholder": 'Email'
                                            }
                                        }
                                        id="email"
                                        changed={inputChangeHandler}
                                        value=""
                                        classes={['w-ft', 'height20']}
                                    />
                                </div>
                            </div>
                            <div className={'row mt-1'}>
                                <div className={'col text-right t-b f-13'}>Phone No.:</div>
                                <div className={'col text-left f-13'}>
                                    <Input
                                        elementType='text'
                                        elementConfig={
                                            {
                                                "type": 'text',
                                                "placeholder": 'Phone No'
                                            }
                                        }
                                        id="phoneNo"
                                        value=""
                                        changed={inputChangeHandler}
                                        classes={['w-ft', 'height20']}
                                    />
                                </div>
                            </div>
                            <div className={'row mt-1'}>
                                <div className={'col text-right t-b f-13'}>Personal No.:</div>
                                <div className={'col text-left f-13'}>
                                    <Input
                                        elementType='text'
                                        elementConfig={
                                            {
                                                "type": 'text',
                                                "placeholder": 'Personal No'
                                            }
                                        }
                                        id="personalNo"
                                        value=""
                                        changed={inputChangeHandler}
                                        classes={['w-ft', 'height20']}
                                    />
                                </div>
                            </div>
                            <div className={'row mt-1'}>
                                <div className={'col text-right t-b f-13'}>Mobile No.:</div>
                                <div className={'col text-left f-13'}>
                                    <Input
                                        elementType='text'
                                        elementConfig={
                                            {"type": 'text', "placeholder": 'Mobile No'}
                                        }
                                        id="mobileNo"
                                        value=""
                                        changed={inputChangeHandler}
                                        classes={['w-ft', 'height20']}
                                    />
                                </div>
                            </div>
                            <div className={'row mt-1'}>
                                <div className={'col text-right t-b f-13'}>Role:</div>
                                <div className={'col text-left f-13'}>
                                    <Input
                                        elementType='text'
                                        elementConfig={
                                            {
                                                "type": 'text',
                                                "placeholder": 'Role'
                                            }
                                        }
                                        id="role"
                                        value=""
                                        changed={inputChangeHandler}
                                        classes={['w-ft', 'height20']}
                                    />
                                </div>
                            </div>
                            <div className={'row mt-1'}>
                                <div className={'col text-right t-b f-13'}>Stream:</div>
                                <div className={'col text-left f-13'}>
                                    <Input
                                        elementType='text'
                                        elementConfig={
                                            {
                                                "type": 'text',
                                                "placeholder": 'Stream'
                                            }
                                        }
                                        id="stream"
                                        value=""
                                        changed={inputChangeHandler}
                                        classes={['w-ft', 'height20']}
                                    />
                                </div>
                            </div>
                            <div className={'row mt-1'}>
                                <div className={'col text-right t-b f-13'}>Privilege:</div>
                                <div className={'col text-left f-13'}>
                                    <Input
                                        elementType='text'
                                        elementConfig={
                                            {
                                                "type": 'text',
                                                "placeholder": 'Privilege'
                                            }
                                        }
                                        id="privilege"
                                        value=""
                                        changed={inputChangeHandler}
                                        classes={['w-ft', 'height20']}
                                    />
                                </div>
                            </div>
                            <div className={'row mt-1'}>
                                <div className={'col text-right t-b f-13'}>Employee Type:</div>
                                <div className={'col text-left f-13'}>
                                    <Input
                                        elementType='text'
                                        elementConfig={
                                            {
                                                "type": 'text',
                                                "placeholder": 'Employee Type'
                                            }
                                        }
                                        id="employeeType"
                                        value=""
                                        changed={inputChangeHandler}
                                        classes={['w-ft', 'height20']}
                                    />
                                </div>
                            </div>
                            <div className={'row mt-1'}>
                                <div className={'col text-right t-b f-13'}>Supervisor:</div>
                                <div className={'col text-left f-13'}>
                                    <Input
                                        elementType='text'
                                        addAttrib={
                                            {'disabled': true}
                                        }
                                        elementConfig={
                                            {"type": 'text', "placeholder": 'Supervisor'}
                                        }
                                        id="supervisor"
                                        value=""
                                        changed={inputChangeHandler}
                                        classes={['w-ft', 'height20']}
                                    />
                                </div>
                            </div>
                            <div className={'row mt-1 m=0'}>
                                <div className={'col text-right t-b f-13'}>Primary Skill:</div>
                                <div className={'col text-left f-13'}>
                                    <Input
                                        elementType="select"
                                        addAttrib={
                                            {
                                                'disabled': true,
                                                class: ['w-ft', 'height20']
                                            }
                                        }
                                        elementConfig={
                                            {
                                                "type": 'text',
                                                "placeholder": 'Privilege',
                                                classes: ['w-ft', 'ml-0', 'height20'],
                                                options: [
                                                    {value: '-1', selected: true, displayValue: 'Please Select'},
                                                    {value: '1', displayValue: 'Java'},
                                                    {value: '2', displayValue: '.Net'}
                                                ]
                                            }}

                                        id="supervisor"
                                        value="1"
                                        changed={inputChangeHandler}
                                    />
                                </div>
                            </div>
                            <div className={'row mt-1'}>
                                <div className={'col text-right t-b f-13'}>Skills:</div>
                                <div className={'col text-left f-13'}>
                                    <div className="form-group">
                                        <select multiple className="form-control w-ft  " id="skills">
                                            <option>.Net</option>
                                            <option>C</option>
                                            <option>C++</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className={'row mt-1'}>
                                <div className={'col text-right t-b f-13'}>Photo:</div>
                                <div className={'col text-left f-13'}>
                                    <div className="input-group mb-3">
                                        <div className="custom-file">
                                            <input type="file" className="custom-file-input w-ft"
                                                   id="inputGroupFile02"/>
                                            <label className="custom-file-label w-30"
                                                   aria-describedby="inputGroupFileAddon02">Choose file</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="btn float-sm-right"><img src={Save} className='img-fluid'/> </a>
                        </div>
                    </div>


                </div>

            </div>
        );
    }
}

export default MyProfile;
