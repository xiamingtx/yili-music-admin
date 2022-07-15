// @ts-nocheck
/*
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-05 20:54:57
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-15 19:59:55
 */
import axios from 'axios'
import store from '../store'
import { Notify } from 'quasar'
import { handleError } from 'vue'

const baseURL = import.meta.env.VITE_API_HOST
const tokenPrefix = 'Bearer '

const instance = axios.create({
  baseURL
})

instance.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.state.user.token) {
      config.headers['Authorization'] = tokenPrefix + store.state.user.token
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    handleErrorResponse(error.response)
    return Promise.reject(error)
  }
)

const handleErrorResponse = response => {
  if (response.status === 401 || response.status === 403) {
    store.dispatch('user/logout').then(() => window.location.reload())
  } else {
    Notify.create({
      type: 'negative',
      message: response.data.message,
      position: 'top'
    })
  }
}

const { get, post, put } = instance

export { get, post, put }
