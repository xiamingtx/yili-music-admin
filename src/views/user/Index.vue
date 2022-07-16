<!--
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-12 22:29:21
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-17 00:30:14
-->
<template>
  <div class="page">
    <div class="q-mt-md q-mb-md">
      <q-btn color="primary" label="添加用户" @click="toggleDialog" />
    </div>
    <q-table :rows="data" :columns="columns" row-key="name" hide-pagination />
    <div class="row justify-center q-mt-md">
      <q-pagination
        v-model="pagination.page"
        color="grey-8"
        :max="pagesNumber"
        size="sm"
      />
    </div>
    <CreateDialog v-if="showDialog" @hide="toggleDialog" />
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

const { data, pagination, pagesNumber, fetchData } = useUserSearch()

const { showDialog, toggleDialog } = useToggleDialog()
</script>

<style lang=""></style>
