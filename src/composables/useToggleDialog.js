/*
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-16 21:38:49
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-18 21:03:12
 */
import { ref } from 'vue'
export const useToggleDialog = show => {
  const hideDialog = () => {
    show.value = false
  }

  const showDialog = () => {
    show.value = true
  }

  return {
    showDialog,
    hideDialog,
  }
}
