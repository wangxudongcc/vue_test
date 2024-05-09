import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Layout from "@/layout/index.vue";
import '@/icons'
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
    redirect: "/practise/practiseMainEdit",
    children: [
      {
        path: "practiseMainEdit",
        name: "practiseMainEdit",
        component: () => import("./views/practise/practiseMainEdit.vue"),
        props: (route) => route.query,
      },
    ],
  },
];
const jQuery = [
  {
    path: "/jquery",
    component: Layout,
    redirect: "/jQuery/parent",
    children: [
      {
        path: "parent",
        name: "parent",
        component: () => import("./views/jQuery/parent.vue"),
        props: (route) => route.query,
      },
    ],
  },
];
const zhangxinxuWeb = [
  {
    path: "/zhangxinxuWeb",
    component: Layout,
    redirect: "/zhangxinxuWeb/cssImageAspectRatioLayout",
    children: [
      {
        path: "cssImageAspectRatioLayout",
        name: "cssImageAspectRatioLayout",
        component: () => import("./views/zhangxinxuWeb/cssImageAspectRatioLayout.vue"),
        props: (route) => route.query,
      },
      {
        path: "cssTextWrapBalance",
        name: "cssTextWrapBalance",
        component: () => import("./views/zhangxinxuWeb/cssTextWrapBalance.vue"),
        props: (route) => route.query,
      },
      {
        path: "htmlSampElement",
        name: "htmlSampElement",
        component: () => import("./views/zhangxinxuWeb/htmlSampElement.vue"),
        props: (route) => route.query,
      },
{
        path: "overlappingPosition",
        name: "overlappingPosition",
        component: () => import("./views/zhangxinxuWeb/overlappingPosition.vue"),
        props: (route) => route.query,
      },
      {
        path: "cssAtScope",
        name: "cssAtScope",
        component: () => import("./views/zhangxinxuWeb/cssAtScope.vue"),
        props: (route) => route.query,
      },
      
    ],
  },
];
const ruanyifeng = [
  {
    path: "/ruanyifeng",
    component: Layout,
    redirect: "/ruanyifeng/index",
    children: [
      {
        path: "index",
        name: "index",
        component: () => import("./views/ruanyifeng/index.vue"),
        props: (route) => route.query,
      },
    ],
  },
];
const jsProNote = [
  {
    path: "/jsProNote",
    component: Layout,
    redirect: "/jsProNote/index",
    children: [
      {
        path: "index",
        name: "index",
        component: () => import("./views/jsProNote/index.vue"),
        props: (route) => route.query,
      },
    ],
  },
];
const a20191226 = [
  {
    path: "/20191226",
    component: Layout,
    redirect: "/20191226/index",
    children: [
      {
        path: "index",
        name: "index",
        component: () => import("./views/20191226/index.vue"),
        props: (route) => route.query,
      },
    ],
  },
];
const a20221026 = [
  {
    path: "/20221026",
    component: Layout,
    redirect: "/20221026/index",
    children: [
      {
        path: "empty",
        name: "empty",
        component: () => import("./views/20221026/empty.vue"),
        props: (route) => route.query,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history", // require service support
  routes: [...element, ...practise,...jQuery,...zhangxinxuWeb,...ruanyifeng,...jsProNote,...a20191226,...a20221026],
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
