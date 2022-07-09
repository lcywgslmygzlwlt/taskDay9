import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import FindA from '@/components/views/FindA';
import MyA from '@/components/views/MyA';
import OrderA from '@/components/views/OrderA';
import DiffA from '@/components/views/DiffA';
import Ranking from '@/components/views/Second/Ranking';
import Recommend from '@/components/views/Second/Recommend';
import SongList from '@/components/views/Second/SongList';
import Rankin from '@/components/views/Second/third/Rankin';
import Recommen from '@/components/views/Second/third/Recommen';
import SongLis from '@/components/views/Second/third/SongLis';
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
    children: [
      {
        path: 'ranking',
        component: Ranking,
        children: [
          {
            path: 'rankin',
            component: Rankin,
          },
          {
            path: 'recommen',
            component: Recommen,
          },
          {
            path: 'songlis',
            component: SongLis,
          },
        ],
      },
      {
        path: 'recommend',
        component: Recommend,
      },
      {
        path: 'songlist',
        component: SongList,
      },
    ],
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
