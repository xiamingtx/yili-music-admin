/*
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-10 22:24:37
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-10 22:24:39
 */
import Cookies from 'js-cookie';

const TokenKey = 'yuanli-token';

export const getToken = () => {
  return Cookies.get(TokenKey);
};

export const setToken = token => {
  return Cookies.set(TokenKey, token);
};

export const removeToken = () => {
  return Cookies.remove(TokenKey);
};