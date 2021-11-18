import React, {Component} from 'react';
import WrapperHoc from '../../HOC/WrapperHoc';
import './Footer.css';
import ChatBot from "../ChatBot/ChatBot";

export default class Footer extends Component {
    render() {
const chatbot='';// <ChatBot/>;
        return (
            <WrapperHoc className=" mt-2">

             {/*
               <footer className="footer">
                <div className="chatbotMain">
                    {chatbot}
                </div>
			      <div className="container">
			        <span className="text-muted">PTS FOOTER.</span>
			      </div>
			   </footer>*/}
            </WrapperHoc>)
    }
}
