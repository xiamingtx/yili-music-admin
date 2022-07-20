<!--
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-20 14:02:43
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-20 15:07:29
-->
<template>
  <div>
    <q-uploader style="max-width: 300px" :url="url" @added="onFileAdded" />
  </div>
</template>

<script setup>
import { ref } from 'vue'


const url = ref('')
const files = ref([])

const onFileAdded = data => {
  files.value = data
}
</script>

<style lang=""></style>
