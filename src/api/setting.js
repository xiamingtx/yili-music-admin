/*
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-20 22:45:54
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-20 23:52:47
 */

import { get } from './request'

export const getSiteSetting = () => get('/settings/site')
