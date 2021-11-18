import React from 'react';
import '../../Styles/MasterCss.css';
import './Header.css';
import logo from '../../resources/images/logo.png';
import logo1 from '../../resources/images/elogo2.png';
import * as title from '../../Utils/constants/UIConstants';
import $ from 'jquery';

const Header = (props) => {
    let disableAccount = true;

    if (props.enableAccount) {
        disableAccount = false;
    }
    const hoverProfile = () => {
        $('.dropdown').hover(function () {
            $('.dropProfile').css('dispaly', 'block');
            $(this).find('.dropProfile').stop(true, true).delay(1).fadeIn(20);
        }, function () {
            $(this).find('.dropProfile').stop(true, true).delay(121).fadeOut(300);
        })
    };
    var navClass = ['navbar', 'navbar-expand-lg', 'navbar-light', 'pb-0'];
    var rightNav = ['collapse', 'navbar-collapse'];
    var navleftId = 'navbarSupportedContent';
    var navBarRight = ['navbar-nav', 'ml-auto', 'pb-0'];
    var navBrand = ['navbar-brand'];
    var imgClass = ['rounded'];
    var imgClass1 = ['rounded '];
    if (props.backgroundColor) {
        navClass.push('addLoginNav');
        navBrand.push('text-white');
        rightNav.push('displayNone');
        navleftId = 'none';
        navBarRight.push('displayNone');
        navleftId = 'none';
        imgClass.push('displayNone');
        imgClass1.push('mr-2  img-fluid loginBanner');
    } else {
        imgClass1.push('displayNone');
    }
    let headerConst = [];
    if (props.fullContainer) {
        headerConst.push('container-fluid');
    } else {
        headerConst.push('container');
    }

    return (
        <div className={headerConst.join(' ')}>
            <nav className={navClass.join(' ')}>
                <a className={navBrand.join(' ')} href="#"> <img width={50}
                                                                 src={logo}
                                                                 className={imgClass.join(' ')} alt="Logo"/>
                    <img width={40}
                         src={logo1}
                         className={imgClass1.join(' ')} alt="Logo"/>
                    {title.TITLE}
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={rightNav.join(' ')} id={navleftId}>
                    <ul className={navBarRight.join(' ')}>
                        <li className="nav-item active  pb-0">
                            <a className="nav-link" href="#">
                                <span className="text-left">  Account Name:</span><select disabled={disableAccount}
                                                                                          defaultValue={1}
                                                                                          className="userAccounts ml-1 float-right">
                                <option value="0">All</option>
                                <option value="1">Verizon-RICO</option>
                            </select></a>
                        </li>

                        <li className="nav-item dropdown mr-2" onMouseEnter={hoverProfile}>
                            <div className="btn-group ">
                                <a className="nav-link dropdown-toggle droplef text-primary "
                                   href="#"
                                   id="navbarDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className={' fa fa-user text-center'}> <span className="nav-link deactiveLink"
                                                                                    href="#">{props.userName}</span></i>
                                </a>
                                <div className="dropdown-menu dropProfile ">
                                    <a className="dropdown-item" href="/pts-ui/user/profile/edit">{title.EDIT_PASS}</a>
                                    <div className="dropdown-divider text-dark"></div>
                                    <a className="dropdown-item" href="/pts-ui/logout">{title.LOG_OUT}</a>
                                </div>
                            </div>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    )
};
export default Header;
