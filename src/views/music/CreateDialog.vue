<!--
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-18 19:39:14
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-18 20:56:50
-->
<template>
  <q-dialog v-model="show" persistent>
    <q-card style="min-width: 350px; padding: 20px 0">
      <q-card-section>
        <div class="text-h6">添加音乐</div>
      </q-card-section>
      <q-form @submit="createMusic" class="q-gutter-md">
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

        <q-card-actions align="right" class="text-primary">
          <q-btn label="确认" type="submit" color="primary" />
          <q-btn flat label="取消" v-close-popup />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { create } from '../../api/music'
import notify from '../../utils/notify'
import { ref, reactive } from 'vue'
import { useCreateUser } from '../../composables/useCreateUser'

const show = ref(true)

const music = reactive({ name: '', description: '' })

const emits = defineEmits(['create-success'])

const createMusic = () => {
  create(music).then(res => {
    notify.success(`音乐《${res.name}》创建成功!`)
    show.value = false
    emits('create-success')
  })
}
</script>

<style lang=""></style>
