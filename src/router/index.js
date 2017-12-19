import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => { require(['@/views/home/index.vue'], resolve) }
    },
    
    {
      path: 'dimensions',
      component: resolve => { require(['@/views/modules/index.vue'], resolve) },
      redirect: '/dimensions/userAna',
      children: [
        {
          path: 'userAna',
          component: resolve => { require(['@/views/modules/md1/index.vue'], resolve) },
        },
      ]
    },
  ]
})
