import React, {Component} from "react";
import * as title from "../../../Utils/constants/UIConstants";
import Input from "../../UI/Input";

class UpdateAnnouncements extends Component {
    state={

    }
    componentDidMount() {
        document.getElementById("updateData").click();
        console.log(this.props)
        this.setState({
            announcementId:(this.props.announcementId)? this.props.announcementId: '',
            announcement:(this.props.announcement)? this.props.announcement: '',
            announcementType:(this.props.announcementType)? this.props.announcementType: '',
            announcementDate:(this.props.announcementDate)? this.props.announcementDate: '',
            announcementName:(this.props.announcementName)? this.props.announcementName: '',
        })
    }

    render() {

        let changeData=(event)=>{
            let localState=this.state;
            switch (event.target.name) {
                case 'announcementId' :
                    localState. announcementId=event.target.value;this.setState(localState);
                    break;
                case 'announcement' :
                    localState.announcement=event.target.value;this.setState(localState);
                    break;
                case 'announcementType' :
                    localState.announcementType=event.target.value;this.setState(localState);
                    break;
                case 'announcementDate' :
                    localState.announcementDate=event.target.value;this.setState(localState);
                    break;
                case 'announcementName' :
                    localState.announcementName=event.target.value;this.setState(localState);
                    break;

            }
            this.setState(localState)
        }
        let insertData = () => {
            console.log(this.state.announcementId, this.state.announcement, this.state.announcementType, this.state.announcementDate,this.state.announcementName);
            return this.props.manageProduct(this.state.announcementId, this.state.announcement, this.state.announcementType, this.state.announcementDate,this.state.announcementName,'InEdit');
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
                                    <td>{title.ACCOUNT_ID}</td>
                                    <td><Input
                                        elementType={"text"}
                                        elementConfig={{  name:'announcementId',className:'ml-1' ,disabled:true}}
                                        classses={['ml-1']}
                                        value={this.state.announcementId}
                                        changed={changeData}
                                    /></td>
                                </tr>
                                <tr>
                                    <td>{title.ANNOUNCEMENT_NAME}</td>
                                    <td><Input
                                        name={"announcement"}
                                        elementType={'text'}
                                        elementConfig={{
                                            name: 'announcement'
                                        }}
                                        value={this.state.announcement}
                                        classes={['ml-1']}
                                        changed={changeData}
                                    /></td>
                                </tr>
                                <tr>
                                    <td>{title.ANNOUNCEMENT_TYPE}</td>
                                    <td><Input
                                        name={"announcementType"}
                                        elementType='select'
                                        elementConfig= {
                                            {   options: [
                                                    {value: 'team', displayValue: 'TEAM'},
                                                    {value: 'all', displayValue: 'ALL'}
                                                ],
                                                name:'announcementType',
                                                value: this.state.announcementType,
                                                id:'3',
                                                className:['ml-1']
                                            }
                                        }
                                        classes={['ml-1']}
                                        changed={changeData}
                                    /></td>
                                </tr>
                                <tr>
                                    <td>{title.ANNOUNCEMENT_DATE}</td>
                                    <td><Input
                                        name={"announcementDate"}
                                        elementType={'text'}
                                        elementConfig={{
                                            name: 'announcementDate'
                                        }}
                                        value={this.state.announcementDate}
                                        classes={['ml-1']}
                                        changed={changeData}
                                    /></td>
                                </tr>
                                <tr>
                                    <td>{title.ANNOUNCEMENT_NAME}</td>
                                    <td><Input
                                        name={"announcementName"}
                                        elementType={'text'}
                                        elementConfig={{
                                            name: 'announcementName'
                                        }}
                                        value={this.state.announcementName}
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

export default UpdateAnnouncements;
