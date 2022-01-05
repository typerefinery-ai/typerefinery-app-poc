import Vue from 'vue'
import Router from 'vue-router'
import Home from '../src/components/HelloWorld.vue'
import Login from './views/login.vue'
import Register from '../src/views/register.vue'
import ForgetPassword from '../src/views/forgetpassword.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
      },
      {
        path: '/forgetPassword',
        name: 'forgetPassword',
        component: ForgetPassword
      },
   
  ]
})
