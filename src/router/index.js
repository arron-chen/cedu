import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index';
import america from '@/views/america';
import videoshow from '@/views/videoShow';
import imgshow from '../views/imgshow';
import morevideo from '../views/moreVideo';
import pdf from '../views/pdf';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    // {
    //   path: '/america',
    //   name: 'america',
    //   component: america
    // },
    {
      path:'/videoshow',
      name:'videoshow',
      component:videoshow
    },
    {
      path:'/imgshow',
      name:'imgshow',
      component:imgshow
    },
    {
      path:'/morevideo',
      name:'morevideo',
      component:morevideo
    },
    {
      path:'/pdf',
      name:'pdf',
      component:pdf
    }
  ]
})
