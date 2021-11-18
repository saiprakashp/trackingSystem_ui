import * as actionTypes from './PtsUserTypes';
import axios from "axios";
import React from "react";
import {setAuthUser} from '../../../Auth/AuthRouter';

export const getLoginUser = (userKey, userValue, passwordKey, passwordValue, secureKey, secureValue, timeOutKey, timeOutVal) => {
    return {
        type: actionTypes.LOGIN_USER,
        userKey: userKey,
        userValue: userValue,
        secureKey: secureKey,
        secureValue: secureValue,
        passwordKey: passwordKey,
        passwordValue: passwordValue,
        timeOutKey: timeOutKey,
        timeOutVal: timeOutVal
    };
};
export const getForgotUser = (userKey, userValue, passwordKey, passwordValue, timeOutKey, timeOutVal) => {
    return {
        type: actionTypes.LOGIN_USER,
        userKey: userKey,
        userValue: userValue,
        passwordKey: passwordKey,
        passwordValue: passwordValue,
        timeOutKey: timeOutKey,
        timeOutVal: timeOutVal
    };
};

let timer = null;
export const loginUser = (userKey, userValue, passwordKey, passwordValue, secureKey, secureValue, history) => {
    let user = '';
    return async (dispatch) => {
        timer = setTimeout(() => {
            axios({
                url: `https://jsonplaceholder.typicode.com/posts/1`,
                date: {
                    "userId": 1,
                    "id": 1,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "body": "asdasd"
                }
                ,
                timeout: 10000,
                method: 'get'
            }).then(res => {
                setAuthUser(res);

                user = res.data.name;
                secureValue = res.data.id;
                dispatch(getLoginUser(userKey, userValue, passwordKey, passwordValue, 'secureKey', secureValue, 'timeOut', 10));
                history.push('/pts-ui/home');
            }).catch(err => {
                dispatch(failedMessage(userKey, userValue, 'error', 'ERROR'));
            }).then(function () {
            });

        }, 1000);
    };
};

const forceUserTimeout = () => {
    clearTimeout(timer);
}
const logoutUserAction = (userKey, userValue,) => {
    return {
        type: actionTypes.LOGOUT_USER,
        userKey: userKey,
        userValue: userValue
    };
}
const forgetUserAction = (userKey, userValue,) => {
    return {
        type: actionTypes.FORGOT_USER,
        userKey: userKey,
        userValue: userValue
    };
}
export const forgotUser = (userKey, userValue, passwordKey, passwordValue, history) => {
    let user = '';
    return async (dispatch) => {
        timer = setTimeout(() => {
            axios({
                url: `https://jsonplaceholder.typicode.com/posts/1`,
                date: {
                    "userId": 1,
                    "id": 1,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "body": "asdasd"
                }
                ,
                timeout: 10000,
                method: 'get'
            }).then(res => {
                setAuthUser(res);
                user = res.data.name;
                dispatch(getForgotUser(userKey, userValue, passwordKey, passwordValue, 'timeOut', 10));
                history.push('/pts-ui/');
            }).catch(err => {
                dispatch(failedMessage(userKey, userValue, 'error', 'ERROR'));
            }).then(function () {
            });

        }, 1000);
    };
};
export const logoutUser = (userKey, userValue, history) => {
    return (dispatch) => {
        dispatch(logoutUserAction(userKey, userValue));
        history.push('/pts-ui');
    };


};
export const failedMessage = (userKey, userValue, failedkey, failedValue) => {
    return {
        type: actionTypes.ERROR,
        userKey: userKey,
        userValue: userValue,
        failedkey: failedkey,
        failedValue: failedValue
    };
};
