import React, {Component} from 'react';
import * as a from "../../SyledComponent/StyledHomeComp";
import Header from "../Header/Header";
import Navbar from "../NavBar/NavBar";
import ByProject from "./ByProject/ByProject";
import ByResource from "./ByResource/ByResource"
import {withRouter} from 'react-router-dom';
import Breadcrumb from "../BreadCrums/BreadCrums";
import Footer from "../Footer/Footer";
import '../../Styles/MasterCss.css';
class Capacity extends Component {
    render() {
        const path = this.props.location.pathname;
        let loadedComp = null;
        switch (path) {
            case '/pts-ui/capacity/byResource':
                loadedComp = <ByResource/>
                break;
            case '/pts-ui/capacity/byProject':
                loadedComp = <ByProject/>;
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
                    <div className="masterPage container">
                        {loadedComp}
                    </div>
                    <a.FooterStyledDiv className="container-fluid">
                        <Footer/>
                    </a.FooterStyledDiv>
                </React.Fragment>
            </div>
        )
    }
}

export default withRouter(Capacity);
