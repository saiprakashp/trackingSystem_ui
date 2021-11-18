import React, {useEffect} from 'react';
import Header from "../Header/Header";
import DashBoard from '../DashBoard/DashBoard';
import {withRouter} from 'react-router-dom';
import Footer from "../Footer/Footer";
import Breadcrumb from '../BreadCrums/BreadCrums';
import './Home.css';
import '../../Styles/MasterCss.css';
import * as a from '../../SyledComponent/StyledHomeComp';
import Navbar from "../NavBar/NavBar";

const Home = (props) => {
    let loadingConetent = <DashBoard/>;
    switch (props.location.pathname) {

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
                    <div className="">
                        {loadingConetent}
                    </div>
                    <a.FooterStyledDiv className="container-fluid">
                        <Footer/>
                    </a.FooterStyledDiv>
                </React.Fragment>
            </div>
    )
};

export default (withRouter(Home));
