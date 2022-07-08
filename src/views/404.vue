<!--
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-08 01:36:29
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-08 11:40:12
-->
<template>
  <div class="page">
    <div class="error-code">404</div>
    <div class="tips">抱歉, 您访问的页面不存在!</div>
    <div class="action-area">
      <q-btn color="primary" label="返回" @click="() => { this.$router.back() }" />
      <q-btn
        color="primary"
        outline
        label="首页"
        @click="
          () => {
            this.$router.push('/')
          }
        "
      />
    </div>
  </div>
</template>

<script>
export default {
  name: '404'
}
</script>

<style scoped lang="less">
.page {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .error-code {
    font-size: 300px;
    line-height: 350px;
  }
  .tips {
    color: #999;
    margin-bottom: 60px;
  }
  .action-area {
    display: flex;
    width: 200px;
    flex-direction: row;
    justify-content: space-around;
  }
}
</style>
