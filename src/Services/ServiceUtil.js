import React from "react";
import axios from 'axios';

export const TIME_OUT_SERVICE = 60000;
export const RETRY_COUNT = 2;
export const  BASE_URL = 'https://jsonplaceholder.typicode.com/';
//'https://localhost:8080/pts/';
export const servicesUtil = (props) => {
    return axios.create({
        baseURL: BASE_URL + props.service,
            method: props.method,
            timeout: TIME_OUT_SERVICE,
            //    data: props.data,
            responseType: 'json',
            responseEncoding: 'utf8',
            maxRedirects: RETRY_COUNT,
            //  headers: {'X-Custom-Header': 'PTS', 'token': props.token},
            'Content-Type': props.contentType

    });
};
export const callGetService = (props) => {
    servicesUtil(props).get().then(function (response) {

        return response;
    }).catch((e) => {
        return e;
    })
};
export const fileupload = (props) => {
    let axios = servicesUtil(props);
    let res = '';
    try {

        axios.get().then(function (response) {
            // handle success
            res = {
                data: response.data,
                method: response.method,
                redirect: response.maxRedirects,
                loader: false,
                status: response.status,
                token: response.token,
                isExpired: response.isExpired
            };
            return res;
        })
            .catch(function (error) {
                let err = error.toJSON();

                res = {
                    message: err.message,
                    method: err.method,
                    redirect: err.maxRedirects,
                    loader: false,
                    status: 400,
                    token: err.token,
                    isExpired: err.isExpired
                };
                return res;
            })
            .then(function () {
            });
    } catch (e) {
    }
};
let getResponse
