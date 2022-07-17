<!--
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-16 21:29:13
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-17 21:20:42
-->
<template>
  <q-dialog v-model="show" persistent>
    <q-card style="min-width: 350px; padding: 20px 0">
      <q-card-section>
        <div class="text-h6">添加用户</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input
          dense
          v-model="username"
          label="用户名"
          autofocus
          @keyup.enter="show = false"
        />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input
          dense
          v-model="password"
          label="密码"
          type="password"
          autofocus
          @keyup.enter="show = false"
        />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn
          label="确认"
          color="primary"
          @click="createUser(username, password)"
        />
        <q-btn flat label="取消" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from 'vue'
import { useCreateUser } from '../../composables/useCreateUser'

const emits = defineEmits(['create-success'])

const { username, password, createUser, show } = useCreateUser(emits)
</script>

<style lang=""></style>
