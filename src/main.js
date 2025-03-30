import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routers from "@/router/index";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import '@/icons'
Vue.config.productionTip = false;
Vue.config.devtools = false; // 关闭 DevTools 集成
Vue.use(ElementUI);
Vue.use(VueRouter);


new Vue({
  router: new VueRouter({
    mode: "history", // require service support
    routes: routers,
  }),
  render: (h) => h(App),
}).$mount("#app");
