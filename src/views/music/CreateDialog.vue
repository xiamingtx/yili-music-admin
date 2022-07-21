<!--
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-18 19:39:14
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-21 11:09:35
-->
<template>
  <q-dialog v-model="show" persistent>
    <q-card style="min-width: 350px; padding: 20px 0">
      <q-card-section>
        <div class="text-h6">添加音乐</div>
      </q-card-section>
      <q-form @submit="isEdit ? editMusic : createMusic" class="q-gutter-md">
        <q-card-section class="q-pt-none">
          <q-input
            dense
            v-model="music.name"
            label="音乐名"
            autofocus
            @keyup.enter="show = false"
            :rules="[val => (val && val.length > 0) || '请填写音乐名']"
          />
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-input
            dense
            v-model="music.description"
            label="简介"
            autofocus
            @keyup.enter="show = false"
          />
        </q-card-section>

        <q-card-section>
          <uploader
            label="isEdit ? 编辑音乐 : 上传音乐"
            v-model:file="music.file"
          />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn label="确认" type="submit" color="primary" />
          <q-btn flat label="取消" v-close-popup />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { create, update } from '../../api/music'
import notify from '../../utils/notify'
import { ref, reactive } from 'vue'
import { useCreateUser } from '../../composables/useCreateUser'
import Uploader from '../../components/Uploader.vue'

const props = defineProps({
  data: {
    type: Object,
    default() {
      return null
    }
  }
})

const show = ref(true)

const isEdit = ref(Boolean(props.data))

const music = reactive(props.data || { name: '', description: '', file: null })

const emits = defineEmits(['create-success'])

const createMusic = () => {
  create(music).then(createdMusic => {
    notify.success(`音乐《${createdMusic.name}》创建成功!`)
    show.value = false
    emits('create-success')
  })
}

const editMusic = () => {
  update(music.id, music).then(updatedMusic => {
    notify.success(`音乐《${updatedMusic.name}》更新成功!`)
    show.value = false
    emits('edit-success')
  })
}
</script>

<style lang=""></style>
