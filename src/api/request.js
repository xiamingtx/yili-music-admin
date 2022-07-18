// @ts-nocheck
/*
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-05 20:54:57
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-18 19:51:52
 */
import axios from 'axios'
import store from '../store'
import { Notify } from 'quasar'
import notify from '../utils/notify'

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
    if (response.data.code) {
      handleErrorResponse(response)
      return Promise.reject(response.data)
    }
    return response.data
  },
  error => {
    handleErrorResponse(error.response)
    return Promise.reject(error)
  }
)

const handleErrorResponse = response => {
  console.log(response) // for debug
  if (response.status === 401 || response.status === 403) {
    store.dispatch('user/logout').then(() => window.location.reload())
  } else {
    if (response.data instanceof Array) {
      response.data.forEach(item => {
        notify.error(item.message)
      })
    } else {
      notify.error(response.data.message)
    }
  }
}

const { get, post, put } = instance

export { get, post, put }
