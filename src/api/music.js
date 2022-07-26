/*
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-18 17:19:40
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-26 11:34:09
 */
import { get, post, put } from './request'

export const search = (searchFilter) => post('/musics/search', searchFilter)

export const create = music => post('/musics', music)

export const update = (id, music) => {
  return put(`/musics/${id}`, music)
}

export const publish = id => {
  return post(`/musics/publish/${id}`)
}

export const close = id => {
  return post(`/musics/close/${id}`)
}
