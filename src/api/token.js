/*
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-14 09:57:52
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-14 09:58:18
 */
import { post } from './request'

export const createToken = (username, password) => post('/tokens', { username, password })