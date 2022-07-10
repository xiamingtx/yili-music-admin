/*
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-05 18:02:09
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-11 00:08:53
 */
import { createApp } from "vue";
import { Quasar } from "quasar";
// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";
// Import Quasar css
import "quasar/src/css/index.sass";
import App from "./App.vue";
import router from "./router";
import store from './store'
import './permission'

const myApp = createApp(App);

myApp.use(router);
myApp.use(store);

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});

myApp.mount("#app");
