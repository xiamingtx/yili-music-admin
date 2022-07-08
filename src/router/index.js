/*
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-07 23:37:08
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-08 08:57:17
 */
import { createRouter, createWebHashHistory } from 'vue-router';

import Layout from '../views/Layout.vue';

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: 'index',
        component: () => import('../views/index/Index.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/403',
    component: () => import('../views/403.vue')
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('../views/404.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
