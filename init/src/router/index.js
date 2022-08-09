import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:'/HomeView',
      children:[
        {
          path: '/HomeView',
          name: 'HomeView',
          component: () => import('../views/HomeView.vue'),
        },
        {
          path: '/about',
          redirect:'/home',
          name: 'about',
          component: () => import('../views/AboutView.vue'),
          children:[
            {
              path:'/home',
              name: 'home',
              meta:{
                title:'首页主页',
                icon:'home-o',
              },
              component:() => import('../components/page/home.vue'),
            },
            {
              path:'/kanchasheji',
              name: 'kanchasheji',
              meta:{
                title:'勘察设计',
                icon:'search',
              },
              component:() => import('../components/page/kanchasheji.vue'),
            },
            {
              path:'/shigongshuju',
              name: 'shigongshuju',
              meta:{
                title:'施工数据',
                icon:'friends-o',
              },
              component:() => import('../components/page/shigongshuju.vue'),
            },
            {
              path:'/wodeshezhi',
              name: 'wodeshezhi',
              meta:{
                title:'我的设置',
                icon:'setting-o',
              },
              component:() => import('../components/page/wodeshezhi.vue'),
            }
          ]
        }
      ]
    },
   
  ]
})

export default router
