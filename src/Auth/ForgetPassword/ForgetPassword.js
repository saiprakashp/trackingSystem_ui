import React, {useState} from 'react';
import {forgotUser} from '../../MasterPages/store/actions/indexAction';
import {withRouter} from 'react-router-dom';
import {genericAlert} from "../../MasterPages/UI/errorComponenet";
import connect from "react-redux/lib/connect/connect";
import * as a from "../../SyledComponent/StyledHomeComp";
import Header from "../../MasterPages/Header/Header";
import Footer from "../../MasterPages/Footer/Footer";
import * as title from '../../Utils/constants/UIConstants';
import '../../Styles/MasterCss.css';

const ForgetPassword = (props) => {
    const [errorMessage, seterrorMessage] = useState(null);
    const [errorClasses, seterrorClasses] = useState('alert ml-4 alert-warning alert-dismissible fade show vis-hide ');
    const [inputCss, setInputCss] = useState('form-control form-control-sm mt-3');

    const [userName, setuserName] = useState('');
    const [password, setpassword] = useState('');
    const [repassword, setrepassword] = useState('');
    const changeInput = (event) => {
        if (event.target.name === 'userName') {

            setuserName(event.target.value);
        } else if (event.target.name === 'password') {

            setpassword(event.target.value);
        } else if (event.target.name === 'repassword') {

            setrepassword(event.target.value);
        }
        if (userName === '' || password === '') {
            setInputCss(
                'form-control form-control-sm mt-3 border-danger');
        } else {
            setInputCss(
                'form-control form-control-sm mt-3 border-info');
        }
    };
    const loginuser = () => {
        seterrorMessage(null);
        seterrorClasses('alert alert-warning alert-dismissible fade show vis-hide ');
        if (userName != null && userName !== '' && password != null && password !== '' && repassword != null
            && repassword !== '') {
            if (password !== repassword) {
                seterrorMessage('Password Should Match');
                seterrorClasses('alert alert-danger alert-dismissible ml-4 fade show vis-show');
            } else {
                props.onForgotUser('userName', userName,
                    'password', password,
                    props.history);
            }

        } else {
            seterrorMessage('User Name and Password Required');
            seterrorClasses('alert alert-danger alert-dismissible ml-4 fade show vis-show');
            if (userName === null || userName === '') {
                setInputCss('form-control form-control-sm mt-3 border-warn');
            }

            if (password === null || password === '') {
                setInputCss('form-control form-control-sm mt-3 border-warn');
            }
            if (repassword === null || repassword === '') {
                setInputCss('form-control form-control-sm mt-3 border-warn');
            }
        }

    };

    return (
        <div className="loginMain">
            <a.HeaderStyleDiv>
                <Header userName={""} backgroundColor='true' fullContainer={true}/>
            </a.HeaderStyleDiv>
            <div className="row mt-2 mb-3 container">
                <div className="col">{(errorMessage != null) ? genericAlert(errorMessage, errorClasses) : null}</div>
            </div>
            <div className='containerLF'>
                <form className=' mt-3 ml-2 mr-2 mb-2 border border-1 border-light rounded '>
                    <small id="passwordHelpBlock" className="form-text text-muted">
                        {title.FORGOT_MESSAGE}
                    </small>
                    <div className="form-group ">
                        <input className={inputCss} type="text"
                               onBlur={changeInput}
                               name="userName"
                               required={true}
                               placeholder="Email"/>
                    </div>
                    <div className="form-group ">
                        <input className={inputCss} type="password" name="password"
                               onBlur={changeInput}
                               required={true}
                               placeholder="Password"/>
                    </div>
                    <div className="form-group ">
                        <input className={inputCss} type="password" name="repassword"
                               onBlur={changeInput}
                               required={true}
                               placeholder="Re-Enter Password"/>
                    </div>
                    <div className='row '>
                        <div className='col-sm-12 col-md-5'></div>
                        <div className='col-sm-12 col-md-7'>
                            <button type="button" onClick={loginuser}
                                    className="btn  float-right mr-3 btn-sm btn-primary">{title.SAVE}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <a.FooterStyledDiv className="container-fluid">
                <Footer/>
            </a.FooterStyledDiv>
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        user: state.ctr.user,
        error: state.ctr.error
    }
};
const mapDispatchtoProps = dispatch => {
    return {
        onForgotUser: (userKey, userValue, passwordKey, passwordValue,
                       history) => {
            dispatch(forgotUser(userKey, userValue, passwordKey,
                passwordValue, history))
        }
    }
};
export default connect(mapStatetoProps, mapDispatchtoProps)(withRouter(ForgetPassword));
