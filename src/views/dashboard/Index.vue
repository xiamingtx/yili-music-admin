<!--
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-07 23:42:45
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-20 17:12:16
-->
<template>
  <div class="page">
    <CosUploader label="上传" style="width: 40vw" />
  </div>
</template>

<script setup>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'
import CosUploader from '../../composables/useCosUploader'

const store = useStore()
const nickname = computed(() => store.state.user.nickname)
</script>

<style scoped></style>
