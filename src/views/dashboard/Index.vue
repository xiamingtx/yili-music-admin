<!--
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-07 23:42:45
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-11 00:22:13
-->
<template>
  <div>欢迎光临 {{ nickname }}</div>
  <q-btn @click="logout">退出</q-btn>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'

export default {
  name: 'Index',
  setup() {
    const store = useStore()
    return {
      nickname: computed(() => store.state.user.nickname),
      logout: () => store.dispatch('user/logout').then(() => window.location.reload())
    }
  }
}
</script>

<style scoped></style>
