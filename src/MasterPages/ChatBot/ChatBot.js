import React,{Component} from 'react';
import $ from 'jquery';
import '../../Styles/MasterCss.css';
class ChatBot extends Component  {

    componentDidMount() {
    }
     chatExpander = (oper) =>{

         if(oper==='min'){
             $(".chatmin").hide();
             $(".messageController").hide();
             $(".btn-minimize").empty();
             $(".btn-minimize").html('<i class="fa fa-plus minimize" onclick="chatExpander(\'max\')" aria-hidden="true"></i>');
         }else{
             $(".btn-minimize").empty();
             $(".chatmin").show();
             $(".messageController").show();
             $(".btn-minimize").html('<i class="fa fa-times-circle minimize" onclick="chatExpander(\'min\')" aria-hidden="true"></i>');
         }

     };
    render(){
    return (

        <div className="catbot">
            <div className="container-fluid chatwindow ">
                <div className="row ">
                    <div className="col-sm-7">
                    </div>
                    <div className="col-sm-5 rounded-sm border-danger border border-sm chatMain" >
                        <div className="card bg-light shadow-sm p-1 mb-1 bg-white ">
                            <div className="card-header chatheader">
                                <div className="row">
                                    <div className="col-sm-6">
                                        Header
                                    </div>
                                    <div className="col-sm-6 text-right btn-minimize">
                                        <i className="fa fa-times-circle minimize" onClick={this.chatExpander('min')}
                                           aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body chatmin">
                                <h5 className="card-title"></h5>
                            </div>
                        </div>
                        <div className="row messageController">
                            <div className="col-sm-10">
                     <textarea className="messageBox">
                     </textarea>
                            </div>
                            <div className="col-sm-2">
                                <i className="fa fa-eraser float-left text-danger clearMessage" aria-hidden="true"></i>
                                <i className="fa fa-paper-plane float-right text-danger sendMessage"
                                   aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}};

export default ChatBot;
