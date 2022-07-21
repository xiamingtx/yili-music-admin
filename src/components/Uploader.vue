<!--
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-20 14:02:43
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-21 10:05:27
-->
<template>
  <cos-uploader v-if="!file" :label="label" @file-uploaded="onFileUploaded" />
  <div v-if="file">
    {{ file.name + file.ext }}
    <q-btn @click="reUpload">重新上传</q-btn>
  </div>
</template>

<script setup>
import CosUploader from '../composables/CosUploader'
import { ref } from 'vue'

defineProps({
  label: {
    type: String,
    default: ''
  },
  file: {
    type: Object,
    default() {
      return null
    }
  }
})

const emit = defineEmits(['update:file'])

const onFileUploaded = file => {
  emit('update:file', file)
}

const reUpload = () => {
  emit('update:file', null)
}
</script>

<style lang=""></style>
