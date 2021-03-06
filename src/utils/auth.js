/*
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-10 22:24:37
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-14 11:04:01
 */
import Cookies from 'js-cookie'

const TokenKey = 'yuanli-token'

const UserKey = 'current-user'

export const getToken = () => {
  return Cookies.get(TokenKey)
}

export const setToken = token => {
  return Cookies.set(TokenKey, token)
}

export const removeToken = () => {
  Cookies.remove(TokenKey)
}

export const getCurrentUser = () => {
  const user = Cookies.get(UserKey)
  return user === undefined ? null : JSON.parse(user)
}

export const setCurrentUser = currentUser => {
  return Cookies.set(UserKey, JSON.stringify(currentUser))
}

export const removeCurrentUser = () => {
  Cookies.remove(UserKey)
}
