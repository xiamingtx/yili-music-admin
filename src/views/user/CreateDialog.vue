<!--
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-16 21:29:13
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-18 20:52:24
-->
<template>
  <q-dialog v-model="show" persistent>
    <q-card style="min-width: 350px; padding: 20px 0">
      <q-card-section>
        <div class="text-h6">添加用户</div>
      </q-card-section>
      <q-form @submit="createUser" class="q-gutter-md">
        <q-card-section class="q-pt-none">
          <q-input
            dense
            v-model="username"
            label="用户名"
            autofocus
            @keyup.enter="show = false"
            :rules="[
              val =>
                (val && val.length >= 4 && val.length <= 64) ||
                '用户名在4-64个字符之间'
            ]"
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
            :rules="[
              val =>
                (val && val.length >= 4 && val.length <= 64) ||
                '密码在4-64个字符之间'
            ]"
          />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn label="确认" color="primary" type="submit" />
          <q-btn flat label="取消" v-close-popup />
        </q-card-actions>
      </q-form>
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
