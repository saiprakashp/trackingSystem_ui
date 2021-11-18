import React, {Component} from "react";
import * as title from "../../../Utils/constants/UIConstants";
import Input from "../../UI/Input";

class UpdateApplicationModal extends Component {
        state={

        }
    componentDidMount() {
        document.getElementById("updateData").click();
        console.log(this.props)
        this.setState({
            application:(this.props.application)? this.props.application: '',
            account:(this.props.account)? this.props.account: '',
            product:(this.props.product)? this.props.product: '',
            description:(this.props.description)? this.props.description: '',
            sequenceOrder:(this.props.sequenceOrder)? this.props.sequenceOrder: '',

        })
    }

    render() {

        let changeData=(event)=>{
            let localState=this.state;
               switch (event.target.name) {
                   case 'application' :
                       localState.application=event.target.value;this.setState(localState);
                       break;
                   case 'account' :
                       localState.account=event.target.value;this.setState(localState);
                       break;
                   case 'product' :
                       localState.product=event.target.value;this.setState(localState);
                       break;
                   case 'description' :
                       localState.description=event.target.value;this.setState(localState);
                       break;
                   case 'sequenceOrder' :
                       localState.sequenceOrder=event.target.value;this.setState(localState);
                       break;
               }

        }
        let insertData = () => {
            console.log(this.state.application, this.state.account, this.state.product, this.state.description, this.state.sequenceOrder);
            return this.props.manageProduct(this.state.application, this.state.account, this.state.product, this.state.description,this.state. sequenceOrder,'inEdit');
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
                                    <td>{title.APPLICATION}</td>
                                    <td><Input
                                        elementType={"text"}
                                        elementConfig={{  name:'application' ,className:'ml-1'}}
                                        classses={['ml-1']}
                                        value={this.state.application}
                                        changed={changeData}
                                    /></td>
                                </tr>
                                <tr>
                                    <td>{title.ACCOUNT}</td>
                                    <td><Input
                                        elementType={'select'}
                                        elementConfig={{
                                            options: [
                                                {value: '-1', selected: true, displayValue: 'Please Select'},
                                                {value: 'fastest', displayValue: 'Fastest'},
                                                {value: 'cheapest', displayValue: 'Cheapest'}
                                            ],

                                        }}
                                        addAttrib={{name: 'account'}}
                                        classes={['ml-1']}
                                        value={this.state.account}
                                        changed={changeData}
                                    /></td>
                                </tr>
                                <tr>
                                    <td>{title.PRODUCT}</td>
                                    <td><Input
                                        name={"product"}
                                        elementType={'select'}
                                        addAttrib={{name: 'product'}}
                                        elementConfig={{
                                            options: [
                                                {value: '-1', selected: true, displayValue: 'Please Select'},
                                                {value: 'IPCOMS', displayValue: 'IPCOMS'},
                                                {value: 'CSSOP', displayValue: 'CSSOP'}
                                            ],
                                            name: 'product'
                                        }}
                                        classes={['ml-1']}
                                        value={this.state.product}
                                        changed={changeData}
                                    /></td>
                                </tr>
                                <tr>
                                    <td>{title.DESCRIPTION}</td>
                                    <td><Input
                                        name={"description"}
                                        elementType={'textarea'}
                                        elementConfig={{
                                            name: 'description'
                                        }}
                                        classes={['ml-1']}
                                        changed={changeData}
                                        value={this.state.description}
                                    /></td>
                                </tr>
                                <tr>
                                    <td>{title.SEQUNCE_ORDER}</td>
                                    <td><Input
                                        name={"sequenceOrder"}
                                        elementType={'text'}
                                        elementConfig={{
                                            name: 'sequenceOrder'
                                        }}
                                        value={this.state.sequenceOrder}
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
                                changed={this.props.delselectModal}
                                btnVal={'Close'}
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

export default UpdateApplicationModal;
