/*
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-16 21:38:49
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-17 00:29:16
 */
import { ref } from 'vue'
export const useToggleDialog = () => {

  const showDialog = ref(false)

  const toggleDialog = () => {
    showDialog.value = !showDialog.value
  }

  return {
    showDialog,
    toggleDialog
  }
}
