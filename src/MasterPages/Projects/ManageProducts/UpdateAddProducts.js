import React, {Component} from "react";
import * as title from "../../../Utils/constants/UIConstants";
import Input from "../../UI/Input";

class UpdateAddProducts extends Component {
    state = {}

    componentDidMount() {
        document.getElementById("updateData").click();
        this.setState({
            productName: (this.props.productName) ? this.props.productName : '',
            account: (this.props.account) ? this.props.account : '',
            serviceAssurance: (this.props.serviceAssurance) ? this.props.serviceAssurance : '',
            description: (this.props.description) ? this.props.description : '',
        })
    }

    render() {

        let changeData = (event) => {
            let localState = this.state;
            switch (event.target.name) {
                case 'productName' :
                    localState.productName = event.target.value;
                    this.setState(localState);
                    break;
                case 'account' :
                    localState.account = event.target.value;
                    this.setState(localState);
                    break;
                case 'serviceAssurance' :
                    localState.serviceAssurance = event.target.value;
                    this.setState(localState);
                    break;
                case 'description' :
                    localState.description = event.target.value;
                    this.setState(localState);
                    break;
            }
            this.setState(localState)
        }
        let insertData = () => {
            return this.props.manageProduct(this.state.productName, this.state.account, this.state.serviceAssurance, this.state.description,'inDelete');
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
                                    <td>{title.PRODUCTS_OR_PILLAR}</td>
                                    <td><Input
                                        elementType={"text"}
                                        elementConfig={{name: 'productName',className:'ml-1'}}
                                        classses={['ml-1']}
                                        value={this.state.productName}
                                        changed={changeData}
                                    /></td>
                                </tr>
                                <tr>
                                    <td>{title.ACCOUNT}</td>
                                    <td><Input
                                        name={"workingHours"}
                                        elementType={'text'}
                                        elementConfig={{
                                            name: 'account'
                                        }}
                                        value={this.state.account}
                                        classes={['ml-1']}
                                        changed={changeData}
                                    /></td>
                                </tr>
                                <tr>
                                    <td>{title.SERVICE_ASSURANCE}</td>
                                    <td><Input
                                        name={"serviceAssurance"}
                                        elementType={'text'}
                                        elementConfig={{
                                            name: 'serviceAssurance'
                                        }}
                                        value={this.state.serviceAssurance}
                                        classes={['ml-1']}
                                        changed={changeData}
                                    /></td>
                                </tr>
                                <tr>
                                    <td>{title.DESCRIPTION}</td>
                                    <td><Input
                                        name={"description"}
                                        elementType={'text'}
                                        elementConfig={{
                                            name: 'description'
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

export default UpdateAddProducts;
