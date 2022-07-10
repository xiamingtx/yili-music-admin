/*
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-10 22:39:24
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-10 22:39:40
 */
import { post } from './request'

export const login = (username, password) => {
    return post('/login', { username, password })
}