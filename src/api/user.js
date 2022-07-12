/*
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-10 22:39:24
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-13 00:14:57
 */
import { get, post } from './request'

export const login = (username, password) => {
    return post('/login', { username, password })
}

export const search = (paging) => {
    return get('/users/', { params: paging })
}