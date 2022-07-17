/*
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-16 21:38:49
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-17 21:02:29
 */
import { ref } from 'vue'
export const useToggleDialog = () => {
  const show = ref(false)

  const hideDialog = () => {
    show.value = false
  }

  const showDialog = () => {
    show.value = true
  }

  return {
    showDialog,
    hideDialog,
    show
  }
}
