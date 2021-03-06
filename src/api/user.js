/*
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-10 22:39:24
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-17 20:46:12
 */
import { get, post } from './request'

export const search = paging => {
    return get('/users', { params: paging })
}

export const me = () => get('/users/me')

export const create = user => {
    return post('/users', user)
}
