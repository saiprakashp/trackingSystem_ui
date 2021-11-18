import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ComponentGen from './ComponentLoader/ComponentGen';
import './App.css';
import Provider from "react-redux/lib/components/Provider";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import reducer from "./MasterPages/store/reducers/reducer";
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
const App = (props) => {


    const rootReducer = combineReducers({ctr: reducer});
    const validateUser = () => {
    };


    const logger = store => {
        return next => {
            return action => {
                const result = next(action);
                if (action.type == undefined && !store.getState().ctr.loginValid) {
                } else if (!store.getState().ctr.loginValid) {
                }

                return result;
            }
        }
    };

    let localStorageCheck = () => {

    };

    const composrEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(rootReducer, composrEnhacer(applyMiddleware(logger, thunk)));

    return (
        <div onLoad={localStorageCheck}>
            <Provider store={store}>

                <Router>
                    <Switch>
                        {/*
                            <AuthContext.Provider value={{
                                loginValid: this.state.isValidLogin,
                                allowdLinks: this.state.allowdLinks,
                                validateUser: this.validateUser
                            }}> //Note commented as Redux is current standard
                            */}
                        <Route on exact path="/pts-ui/">
                            <ComponentGen type="login"/>
                        </Route>
                        <Route exact path="/pts-ui/logout">
                            <ComponentGen type="logout"/>
                        </Route>
                        <Route exact path="/pts-ui/home">
                            <ComponentGen type="home"/>
                        </Route>
                        <Route path="/pts-ui/timeSheet">
                            <ComponentGen type="timeSheet"/>
                        </Route>
                        <Route path="/pts-ui/user/profile">
                            <ComponentGen type="user"/>
                        </Route>
                        <Route path="/pts-ui/capacity">
                            <ComponentGen type="capacity"/>
                        </Route>
                        <Route path="/pts-ui/reports">
                            <ComponentGen type="reports"/>
                        </Route>
                        <Route path="/pts-ui/projects">
                            <ComponentGen type="projects"/>
                        </Route>
                        <Route path="/pts-ui/forgetPassword">
                            <ComponentGen type="forgetPassword"/>
                        </Route>
                    </Switch>
                </Router>
            </Provider>
        </div>)
};

export default App;
