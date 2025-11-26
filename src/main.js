import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routers from "@/router/index";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// 导入ant-design-vue
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import '@/icons'
Vue.config.productionTip = false;
Vue.config.devtools = false; // 关闭 DevTools 集成
Vue.use(ElementUI);
Vue.use(VueRouter);
// 挂载ant-design-vue到全局
Vue.use(Antd);


new Vue({
  router: new VueRouter({
    mode: "history", // require service support
    routes: routers,
  }),
  render: (h) => h(App),
}).$mount("#app");
