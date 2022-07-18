/*
import { create } from './../api/user';
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-16 22:27:55
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-18 19:52:43
 */
import { create } from '../api/user'
import { ref } from 'vue'
import { Notify } from 'quasar'
import notify from '../utils/notify'

export const useCreateUser = emits => {
  const username = ref('')
  const password = ref('')
  const show = ref(true)

  const createUser = () => {
    create({ username: username.value, password: password.value }).then(res => {
      show.value = false
      notify.success('用户创建成功!')
      emits('create-success')
    })
  }
  return {
    username,
    password,
    createUser,
    show
  }
}
