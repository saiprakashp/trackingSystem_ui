import React from 'react';
import * as a from "../../SyledComponent/StyledHomeComp";
import Header from "../Header/Header";
import Navbar from "../NavBar/NavBar";
import Breadcrumb from "../BreadCrums/BreadCrums";
import Footer from "../Footer/Footer";
import {withRouter} from "react-router-dom";

import MyProfile from './MyProfile/MyProfile';
import ChangePass from './MyProfile/ChangePass/ChangePass';

const Users = (props) => {
	let loadingConetent='';
	
	switch(props.location.pathname){
		case '/pts-ui/user/profile/edit':
			loadingConetent=<MyProfile />;
		break;
		
		case '/pts-ui/user/profile/edit/password':
			loadingConetent=<ChangePass />;
		break;
	
	}

    return (
        <div className="homeMain">
          <React.Fragment>
            <a.HeaderStyleDiv>
              <Header userName={"Admin"}/>
            </a.HeaderStyleDiv>
            <div>
              <Navbar/>
            </div>
            <div className="container">
              <Breadcrumb/>
            </div>
            <div className="masterPage container ">
              {loadingConetent}

            </div>
            <a.FooterStyledDiv className="container-fluid">
              <Footer/>
            </a.FooterStyledDiv>
          </React.Fragment>
        </div>
    )

}
export default withRouter(Users);
