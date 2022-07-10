<!--
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-07 22:53:52
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-10 22:06:44
-->
<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> 原力音乐 </q-toolbar-title>
        <q-space />
        <q-avatar color="teal" text-color="white">{{
          nicknameFirstWord
        }}</q-avatar>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above side="left" bordered>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  name: 'Layout',
  setup() {
    const leftDrawerOpen = ref(false)

    const store = useStore()

    return {
      nicknameFirstWord: computed(
        () => store.getters['user/nicknameFirstWord']
      ),
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>

<style scoped></style>
