// @ts-nocheck
/*
 * @Description: Description of this file 
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-05 20:54:57
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-14 10:25:01
 */
import axios from 'axios';
import store from '../store'
import { Notify } from 'quasar';

const baseURL = import.meta.env.VITE_API_HOST
const tokenPrefix = 'Bearer '

const instance = axios.create({
    baseURL
})

instance.interceptors.request.use(
    config => {
      // do something before request is sent
    
    if (store.state.user.token) {
        config.headers['Authorization'] = tokenPrefix + store.state.user.token;
    }
    return config;
    },
    error => {
        // do something with request error
        console.log(error); // for debug
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    response => {
        return response.data
    }, 
    error => {
        store.dispatch('/user/logout')
        Notify.create({
            type: "negative",
            message: error.message,
            position:'top'
        })
        return Promise.reject(error);
    }
)


const { get, post, put } = instance

export { get, post, put }