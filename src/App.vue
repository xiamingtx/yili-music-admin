<!--
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-05 18:02:09
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-20 22:54:38
-->

<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

onMounted(store.dispatch('setting/fetchSiteSetting'))
</script>
<style></style>
