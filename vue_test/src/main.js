import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Layout from "@/layout";

Vue.config.productionTip = false;
Vue.use(ElementUI);
// 路由注册全局
Vue.use(VueRouter);

const element = [
  {
    path: "/element",
    component: Layout,
    children: [{
        path: "index",
        name: "index",
        component: () => import("./views/element/index"),
        props: (route) => route.query,
      },
    ],
  },
];
const practise = [
  {
    path: "/practise",
    component: Layout,
    redirect: "index",
    children: [
      {
        path: "index",
        name: "practiseMainEdit",
        component: () => import("./views/practise/practiseMainEdit.vue"),
        props: (route) => route.query,
      },
    ],
  },
];
const router = new VueRouter({
  mode: "history", // require service support
  routes: [...element, ...practise],
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
