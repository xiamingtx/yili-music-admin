// @ts-nocheck
/*
 * @Description: Description of this file 
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-05 20:54:57
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-05 22:04:06
 */
import axios from 'axios';

const baseURL = import.meta.env.VITE_API_HOST

const instance = axios.create({
    baseURL
})

const { get, post, put } = instance

export { get, post, put }