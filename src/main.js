import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import FindA from '@/components/views/FindA';
import MyA from '@/components/views/MyA';
import OrderA from '@/components/views/OrderA';
import DiffA from '@/components/views/DiffA';
Vue.config.productionTip = false;
Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    redirect: '/finda',
  },
  {
    path: '/finda',
    component: FindA,
  },
  {
    path: '/mya',
    component: MyA,
  },
  {
    path: '/ordera',
    component: OrderA,
  },
  {
    path: '/diffa',
    component: DiffA,
  },
];
const router = new VueRouter({
  routes,
});
new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
