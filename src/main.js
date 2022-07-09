import Vue from 'vue'
import App from './App.vue'
import Find from '@/views/Find' // @是src的绝对地址
import My from '@/views/My'
import Part from '@/views/Part'
import NotFound from '@/views/NotFound'
import Recommend from '@/views/Second/Recommend'
import Ranking from '@/views/Second/Ranking'
import SongList from '@/views/Second/SongList'
// 1. 下载vue-router (yarn add vue-router)
// 2. 引入
import VueRouter from 'vue-router'
// 3. 注册全局组件
Vue.use(VueRouter)
// 4.规则数组
const routes = [
  // {
  //   path: '/', // 默认hash值路径
  //   redirect: '/find', // 重定向到/find
  //   // 浏览器url中#后的路径被改变成/find-重新匹配规则
  // },
  {
    path: '/find',
    name: 'Find',
    component: Find,
    children: [
      {
        path: '/recommend',
        component: Recommend,
        children:[
          {
            path: 'one',
            component: One
          },
          {
            path: 'two',
            component: Two
          }
        ]
      },
      {
        path: '/ranking',
        component: Ranking,
      },
      {
        path: '/songlist',
        component: SongList,
      }
    ],
  },
  {
    path: '/my',
    name: 'My',
    component: My,
  },
  {
    path: '/part',
    name: 'Part',
    component: Part,
  },
  {
    path: '/part/:username', // 有:的路径代表要接收具体的值
    component: Part,
  },
  {
    path: '*', // 配置404
    component: NotFound,
  },
]
const router = new VueRouter({
  routes,
})

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
