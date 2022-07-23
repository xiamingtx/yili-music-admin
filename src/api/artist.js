/*
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-23 08:57:34
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-23 10:57:18
 */
import { get, post, put } from './request'

export const list = () => get('/artists')

export const create = artist => post('/artists', artist)

export const update = (id, fields) => put(`/artists/${id}`, fields)
