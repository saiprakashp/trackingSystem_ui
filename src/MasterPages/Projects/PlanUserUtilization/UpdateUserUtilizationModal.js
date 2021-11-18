import React, {Component} from "react";
import * as title from "../../../Utils/constants/UIConstants";
import Input from "../../UI/Input";

class UpdateUserUtilizationModal extends Component {
        state={

        }
    componentDidMount() {
        document.getElementById("updateData").click();
        console.log(this.props)
        this.setState({
            location:(this.props.ln)? this.props.ln: '',
            headCount:(this.props.hc)? this.props.hc: '',
            workingDays:(this.props.wd)? this.props.wd: '',
            targetHours:(this.props.th)? this.props.th: '',
            workingHours:(this.props.wh)? this.props.wh: '',
        })
    }

    render() {

        let changeData=(event)=>{
            let localState=this.state;
               switch (event.target.name) {
                   case 'location' :
                       localState. productName=event.target.value;this.setState(localState);
                       break;
                   case 'headCount' :
                       localState.account=event.target.value;this.setState(localState);
                       break;
                   case 'workingDays' :
                       localState.serviceAssurance=event.target.value;this.setState(localState);
                       break;
                   case 'targetHours' :
                       localState.description=event.target.value;this.setState(localState);
                       break;
                   case 'workingHours' :
                       localState.description=event.target.value;this.setState(localState);
                       break;
               }
                this.setState(localState)
        }
        let insertData = () => {
            console.log(this.state.productName, this.state.account, this.state.serviceAssurance, this.state.description);
            return this.props.manageProduct(this.state.productName, this.state.account, this.state.serviceAssurance, this.state.description);
        }
        return <div>
            <a data-toggle="modal" data-target="#insertUpdateModal" id="updateData" className={'displayNone'}></a>
            <div className="modal fade" id="insertUpdateModal" role="dialog">
                <div className="modal-dialog">

                    <div className="modal-content">

                        <div className="modal-body">
                            <table className='table table-borderless'>
                                <tbody>
                                <tr>
                                    <td>{title.LOCATION_NAME}</td>
                                    <td><Input
                                        elementType={"text"}
                                        elementConfig={{  name:'location',className:'ml-1' }}
                                        classses={['ml-1']}
                                        value={this.state.location}
                                        changed={changeData}
                                    /></td>
                                </tr>
                                <tr>
                                    <td>{title.HEAD_COUNT}</td>
                                    <td><Input
                                        name={"headCount"}
                                        elementType={'text'}
                                        elementConfig={{
                                            name: 'headCount'
                                        }}
                                        value={this.state.headCount}
                                        classes={['ml-1']}
                                        changed={changeData}
                                    /></td>
                                </tr>
                                <tr>
                                    <td>{title.WORKING_DAYS}</td>
                                    <td><Input
                                        name={"workingDays"}
                                        elementType={'text'}
                                        elementConfig={{
                                            name: 'workingDays'
                                        }}
                                        value={this.state.workingDays}
                                        classes={['ml-1']}
                                        changed={changeData}
                                    /></td>
                                </tr>
                                <tr>
                                    <td>{title.TARGET_HRS}</td>
                                    <td><Input
                                        name={"targetHours"}
                                        elementType={'text'}
                                        elementConfig={{
                                            name: 'targetHours'
                                        }}
                                        value={this.state.targetHours}
                                        classes={['ml-1']}
                                        changed={changeData}
                                    /></td>
                                </tr>
                                <tr>
                                    <td>{title.WORKING_HOURS}</td>
                                    <td><Input
                                        name={"workingHours"}
                                        elementType={'text'}
                                        elementConfig={{
                                            name: 'workingHours'
                                        }}
                                        value={this.state.workingHours}
                                        classes={['ml-1']}
                                        changed={changeData}
                                    /></td>
                                </tr>
                                </tbody>
                            </table>


                        </div>

                        <div className="modal-footer">
                            <Input
                                elementType={'button'}
                                classes={['btn btn-default']}
                                elementConfig={{
                                    'data-dismiss': 'modal'
                                }}
                                btnVal={'Close'}
                                changed={this.props.delselectModal}
                            />
                            <Input
                                elementType={'button'}
                                classes={['btn btn-primary']}
                                elementConfig={{
                                    'data-dismiss': 'modal'
                                }}
                                changed={insertData}
                                btnVal={'Submit'}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default UpdateUserUtilizationModal;
