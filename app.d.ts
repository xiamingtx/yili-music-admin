/*
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-05 20:37:41
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-05 21:08:32
 */
// 以下两种方案二选一

// 方案一
declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}

//   // 方案二
//   declare module '*.vue' {
//     import { defineComponent } from 'vue'
//     const Component: ReturnType<typeof defineComponent>
//     export default Component
//   }
