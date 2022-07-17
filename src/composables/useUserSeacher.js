// @ts-nocheck
/*
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-16 21:02:01
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-17 22:47:24
 */
import { ref, computed, onMounted } from 'vue'
import { search } from '../api/user'

export const useUserSearch = () => {
  const data = ref([])

  const pagination = ref({
    page: 1,
    rowsPerPage: 10,
    rowsNumber: 10
  })

  const fetchData = (props = { pagination: null }) => {
    const { page, rowsPerPage } = props.pagination || pagination.value

    search({ page: page - 1, size: rowsPerPage }).then(res => {
      data.value = res.content
      pagination.value = {
        page: res.number + 1,
        rowsPerPage: res.size,
        rowsNumber: res.totalElements
      }
    })
  }

  onMounted(() => fetchData({ pagination: pagination.value }))

  return {
    data,
    pagination,
    fetchData
  }
}
