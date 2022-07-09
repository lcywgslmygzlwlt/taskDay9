import Vue from 'vue'
import VueRouter from 'vue-router'
import Dd from '@/views/Dd.vue'
import Fl from '@/views/Fl.vue'
import Home from '@/views/Home.vue'
import My from '@/views/My.vue'
import NodeFent from '@/views/NodeFent.vue'

// 二级
import Hot from '@/views/send/热点.vue'
import New from '@/views/send/最新.vue'

// 三级
import Bd from '@/views/send/local/Bd.vue'
import Hw from '@/views/send/local/海外热点.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: 'hot',
        component: Hot,
        children: [
          { path: 'bd', component: Bd },
          { path: 'hw', component: Hw },
        ],
      },
      { path: 'new', component: New },
    ],
  },
  { path: '/my', component: My },
  { path: '/dd', component: Dd },
  { path: '/Fl', component: Fl },
  { path: '*', component: NodeFent },
]

const router = new VueRouter({
  routes,
})

export default router
