/*
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-05 21:23:46
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-05 21:25:57
 */

import { get } from './request'

export const sayHello = () => {
    return get('/hello')
}