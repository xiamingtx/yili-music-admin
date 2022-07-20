/*
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-20 14:49:37
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-20 17:10:31
 */
import { post } from './request'

export const initUpload = file => post('/files/upload_init', file)

export const finishUpload = fileId => post(`/files/upload_finish/${fileId}`)

