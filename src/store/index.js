/*
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-13 00:49:14
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-20 22:52:56
 */
import { createStore, createLogger } from 'vuex'

import user from './modules/user.js'
import setting from './modules/setting'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    user,
    setting
  },
  plugins: debug ? [createLogger()] : []
})
