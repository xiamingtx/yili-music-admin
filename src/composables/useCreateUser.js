/*
import { create } from './../api/user';
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-16 22:27:55
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-16 22:46:32
 */
import { create } from '../api/user'
import { ref } from 'vue'

export const useCreateUser = () => {
  const username = ref('')
  const password = ref('')

  const createUser = () => {
    create({ username, password }).then(res => {
      console.log(res)
    })
  }
  return {
    username,
    password,
    createUser
  }
}
