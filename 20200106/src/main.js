// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

Vue.config.productionTip = false

import Home from './components/home.vue';
import About from "./components/about.vue";
import Public from './components/public.vue';

const routes = [
  {
    path:'/',
    component:Home
  },
  {
    path:'/about',
    component:About
  },{
    path:'/public',
    component:Public
  }
];

/* eslint-disable no-new */

const router = new VueRouter({
  mode:'history',
  routes
})

new Vue({
  router,
  render:h=>h(App)
}).$mount('#app');
