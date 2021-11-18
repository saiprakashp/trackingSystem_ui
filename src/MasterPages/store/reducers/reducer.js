import * as actionType from '../actions/PtsUserTypes';

const saveToLocalStore = (props) => {
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem("userInfo", JSON.stringify({
            userName: props.userName,
            token: props.token,
            timeOut: props.timeOut,
            loginTime: props.loginTime
        }));
    }
};
const removeFromLocalStore = (props) => {
    try {
        if (typeof (Storage) !== "undefined") {
            localStorage.clear()
        }
    } catch (e) {
    }
};

const initialState = {
    user: {
        userName: '',
        userId: 0,
        lastLogin: '',
        loginTime: '',
        supervisorName: '',
        supervisorId: ''
    },
    loginValid: true,
    secure: {
        hotKey: '',
        refresh: '',
        loginTime: new Date().getDate() + '/' + (new Date().getDay() + 1) + '/' + new Date().getFullYear() + '-' + new Date().getHours(),
        timeOut: 2
    }
};
const reducer = (state = initialState, action) => {
        switch (action.type) {
            case actionType.LOGIN_USER:
                saveToLocalStore({
                    userName: action.userValue,
                    token: action.secureValue,
                    timeOut: action.timeOutVal,
                    loginTime: new Date().getDate() + '/' + (new Date().getDay() + 1) + '/' + new Date().getFullYear() + '-' + new Date().getHours()
                });
                return {
                    ...state,
                    user: {
                        ...state.user,
                        [action.userKey]: (action.userValue != null) ? action.userValue : '',


                        errorKey: (action.errorKey != null) ? action.errorKey : null,
                        errVal: (action.errVal != null) ? action.errVal : null

                    }, loginValid: true,
                    secure: {
                        [action.secureKey]: action.secureValue,
                        loginTime: new Date().getDate() + '/' + (new Date().getDay() + 1) + '/' + new Date().getFullYear() + '-' + new Date().getHours(),
                        timeOutKey: action.timeOutVal
                    }

                }
                    ;
            case
            actionType.LOGOUT_USER:
                removeFromLocalStore();
                return {
                    state: null,
                    loginValid: false
                }
                    ;
            case
            actionType.FORGOT_USER:
                removeFromLocalStore();
                return {
                    state: null,
                    loginValid: false
                }
                    ;
            case
            actionType.ERROR:
                return {
                    ...state,
                    [action.failedkey]: action.failedValue
                }
                    ;
            default:
                return state;

        }

    }
;

export default reducer;
