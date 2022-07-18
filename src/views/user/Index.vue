<!--
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-12 22:29:21
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-18 21:03:48
-->
<template>
  <div class="page">
    <div class="q-mt-md q-mb-md">
      <q-btn color="primary" label="添加用户" @click="showDialog" />
    </div>
    <q-table
      :columns="columns"
      :rows="data"
      row-key="name"
      @request="fetchData"
      v-model:pagination="pagination"
    />
    <CreateDialog v-if="show" @hide="hideDialog" @create-success="fetchData" />
  </div>
</template>

<script setup>
import { useUserSearch } from '../../composables/useUserSeacher'
import CreateDialog from './CreateDialog.vue'
import { useToggleDialog } from '../../composables/useToggleDialog'
import { ref } from 'vue'

const columns = [
  {
    field: 'id',
    label: 'ID'
  },
  {
    field: 'username',
    label: '用户名'
  },
  {
    field: 'nickname',
    label: '昵称'
  }
]

const show = ref(false)

const { showDialog, hideDialog } = useToggleDialog(show)

const { data, pagination, pagesNumber, fetchData } = useUserSearch()
</script>
<style lang=""></style>
