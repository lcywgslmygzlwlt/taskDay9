import Vue from 'vue'
import VueRouter from 'vue-router'
import Dd from '@/views/Dd.vue'
import Fl from '@/views/Fl.vue'
import Home from '@/views/Home.vue'
import My from '@/views/My.vue'
import NodeFent from '@/views/NodeFent.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/my', component: My },
  { path: '/dd', component: Dd },
  { path: '/Fl', component: Fl },
  { path: '*', component: NodeFent },
]

const router = new VueRouter({
  routes,
})

export default router
