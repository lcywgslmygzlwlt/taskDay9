import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import Classification from './views/Classification.vue';
import home from './views/home.vue';
import mine from './views/mine.vue';
import Order from './views/Order.vue';
import shouye from './views/components/shouye.vue';
import wode from './views/components/wode.vue';
import fenlei from './views//components/fenlei.vue'
Vue.config.productionTip = false;
const routes = [
  { path: '/', redirect: '/home' },

  { path: '/classification', component: Classification },
  {
    path: '/home',
    component: home,
    children: [
      {
        path: 'shouye',
        component: shouye,
        children: [
          {
            path: 'wode',
            component: wode,
          },
        ],
      },
    ],
  },
  { path: '/mine', component: mine },
  { path: '/Order', component: Order },
  { path: '*', component: fenlei },

];
Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
});
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
