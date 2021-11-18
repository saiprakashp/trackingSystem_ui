import React, {Component} from "react";
import * as title from "../../../Utils/constants/UIConstants";
import Input from "../../UI/Input";

class UpdateActivityCodes extends Component {
        state={

        }
    componentDidMount() {
        document.getElementById("updateData").click();

        this.setState({
            activityCode:(this.props.activityCode)? this.props.activityCode: '',
            activity:(this.props.activity)? this.props.activity: '',
            description:(this.props.description)? this.props.description: ''
        })
    }

    render() {

        let changeData=(event)=>{
            let localState=this.state;
               switch (event.target.name) {
                   case 'activity' :
                       localState. activity=event.target.value;this.setState(localState);
                       break;
                   case 'activityCode' :
                       localState.activityCode=event.target.value;this.setState(localState);
                       break;
                   case 'description' :
                       localState.description=event.target.value;this.setState(localState);
                       break;
               }
                this.setState(localState)
        }
        let insertData = () => {
            return this.props.manageProduct(this.state.activityCode, this.state.activity, this.state.description);
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
                                    <td>{title.ACTIVITY_CODE}</td>
                                    <td><Input
                                        elementType={"text"}
                                        elementConfig={{  name:'activityCode',
                                        class:'ml-1'}}
                                        classses={['ml-1']}
                                        value={this.state.activityCode}
                                        changed={changeData}
                                    /></td>
                                </tr>
                                <tr>
                                    <td>{title.ACTIVITY}</td>
                                    <td><Input
                                        name={"activity"}
                                        elementType={'text'}
                                        elementConfig={{
                                            name: 'activity'
                                        }}
                                        value={this.state.activity}
                                        classes={['ml-1']}
                                        changed={changeData}
                                    /></td>
                                </tr>
                                <tr>
                                    <td>{title.DESCRIPTION}</td>
                                    <td><Input
                                        name={"description"}
                                        elementType={'textarea'}
                                        elementConfig={{
                                            name: 'description',
                                            rows:"4",
                                            cols:"50"
                                        }}
                                        value={this.state.description}
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

export default UpdateActivityCodes;
