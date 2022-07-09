import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home.vue'
import Classification from '@/views/classification.vue'
import Order from '@/views/order.vue'
import My from '@/views/my.vue'
import Homepage from '@/components/homepage.vue'
import Homepage1 from '@/components/homepage1.vue'
import Homepage2 from '@/components/homepage2.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/classification',
    component: Classification
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/my',
    component: My,
    children: [
      path
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
