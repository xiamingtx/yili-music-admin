/*
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-07 23:37:08
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-12 23:20:20
 */
import { createRouter, createWebHashHistory } from 'vue-router';

import Layout from '../views/Layout.vue';

export const menuRoutes = [
  {
    path: 'dashboard',
    name: 'Dashboard',
    meta: { title: '控制台', icon: 'dashboard' },
    component: () => import('../views/dashboard/Index.vue')
  },
  {
    path: 'user',
    name: 'User',
    meta: { title: '用户管理', icon: 'manage_accounts' },
    component: () => import('../views/user/Index.vue')
  }
]

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: 'dashboard',
    children: menuRoutes
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
