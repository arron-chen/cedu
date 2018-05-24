import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index';
import america from '@/views/america';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/america',
      name: 'america',
      component: america
    }
  ]
})
