import Login from './views/Login.vue'
import ForgotPassword from './views/ForgotPassword.vue'
import ResetPassword from './views/ResetPassword.vue'
import Register from './views/Register.vue'
import Dashboard from './views/Dashboard.vue'
import NotFound from './views/NotFound.vue'

import store from './store'
import {createRouter, createWebHistory} from "vue-router";

/** @type {import('vue-router').RouterOptions['routes']} */
const routes = [
  {
    path: '/',
    meta: { title: 'Login', guestOnly: true },
    component: Login,
  },
  {
    path: '/login',
    redirect: '/',
  },
  {
    path: '/register',
    meta: { title: 'Register', guestOnly: true },
    component: Register,
  },
  {
    path: '/reset-password',
    meta: { title: 'Reset Password', guestOnly: true },
    component: ResetPassword,
  },
  {
    path: '/forgot-password',
    meta: { title: 'Forgot Password', guestOnly: true },
    component: ForgotPassword,
  },
  {
    path: '/dashboard',
    meta: { title: 'Dashboard', protected: true },
    component: Dashboard,
  },
  { path: '/:path(.*)', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.protected && !localStorage.getItem('user')) {
    // If route is protected but no user in locale storage
    next({ path: '/login' })
  } else if (to.meta.guestOnly && localStorage.getItem('user')) {
    // If route is only for not logged in and user found in locale storage
    next({ path: '/dashboard' })
  } else {
    next()
  }
})

export default router