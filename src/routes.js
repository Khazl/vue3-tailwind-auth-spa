import Login from './views/Login.vue'
import ForgotPassword from './views/ForgotPassword.vue'
import ResetPassword from './views/ResetPassword.vue'
import Register from './views/Register.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Login, meta: { title: 'Login' } },
  {
    path: '/register',
    meta: { title: 'Register' },
    component: Register,
  },
  {
    path: '/reset-password',
    meta: { title: 'Reset Password' },
    component: ResetPassword,
  },
  {
    path: '/forgot-password',
    meta: { title: 'Forgot Password' },
    component: ForgotPassword,
  },
  {
    path: '/login',
    redirect: '/'
  },
  { path: '/:path(.*)', component: NotFound },
]
