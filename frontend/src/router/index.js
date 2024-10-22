import { createRouter, createWebHistory } from '@ionic/vue-router';
//import { RouteRecordRaw } from 'vue-router';
import Example from '@/components/Example.vue';
import Login from '../views/auth/Login.vue';
import Register from '../views/auth/Register.vue';
import ResetPassword from '../views/auth/ResetPassword.vue';

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/reset-password', component: ResetPassword },
  {
    path: '/',
    component: Example,
    children: [
      {
        path: '',
        redirect: '/ats',
      },
      {
        path: 'home',
        component: () => import('@/views/HomePage.vue'),
      },
      {
        path: 'location',
        component: () => import('@/views/LocationView.vue'),
      },
      {
        path: 'radio',
        component: () => import('@/views/RadioPage.vue'),
      },
      {
        name: 'detail',
        path: 'detail/:id',
        component: () => import('@/views/LibraryPage.vue'),
      },
      {
        path: 'search',
        component: () => import('@/views/SearchPage.vue'),
      },
      {
        path: 'map',
        component: () => import('@/views/HouseMap.vue'),
      },
      {
        path: 'settings',
        component: () => import('@/views/SettingsPage.vue'),
      },
    ],
  },
];

const router = createRouter({
  // Use: createWebHistory(process.env.BASE_URL) in your app
  history: createWebHistory(),
  routes,
});

export default router;