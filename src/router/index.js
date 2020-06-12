import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

import Register from '@/components/auth/Register.vue';
import Login from '@/components/auth/Login.vue'
import showIndex from '../components/showIndex.vue';
import Course from '../components/Course.vue';

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'showIndex',
      component: showIndex
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/course',
      name: 'course',
      component: Course
    }
  ]
})
