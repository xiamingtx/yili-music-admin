/*
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-18 19:45:35
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-18 19:53:43
 */
import { Notify } from 'quasar'

const success = message => {
  Notify.create({
    type: 'positive',
    message: message,
    position: 'top'
  })
}

const error = message => {
  Notify.create({
    type: 'negative',
    message: message,
    position: 'top'
  })
}

export default { success, error }
