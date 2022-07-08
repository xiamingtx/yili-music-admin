/*
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-08 00:01:31
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-08 00:47:41
 */
module.exports = {
  extends: ["plugin:vue/vue3-recommended", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }]
  },
  plugins: ["prettier"],
};
