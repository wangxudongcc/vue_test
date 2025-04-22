import Layout from "@/layout/index.vue";

const element = [
    {
      path: "/element",
      component: Layout,
      children: [{
          path: "index",
          name: "index",
          component: () => import("@/views/element/index"),
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
          component: () => import("@/views/practise/practiseMainEdit.vue"),
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
          component: () => import("@/views/jQuery/parent.vue"),
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
          component: () => import("@/views/zhangxinxuWeb/cssImageAspectRatioLayout.vue"),
          props: (route) => route.query,
        },
        {
          path: "cssTextWrapBalance",
          name: "cssTextWrapBalance",
          component: () => import("@/views/zhangxinxuWeb/cssTextWrapBalance.vue"),
          props: (route) => route.query,
        },
        {
          path: "htmlSampElement",
          name: "htmlSampElement",
          component: () => import("@/views/zhangxinxuWeb/htmlSampElement.vue"),
          props: (route) => route.query,
        },
  {
          path: "overlappingPosition",
          name: "overlappingPosition",
          component: () => import("@/views/zhangxinxuWeb/overlappingPosition.vue"),
          props: (route) => route.query,
        },
        {
          path: "cssAtScope",
          name: "cssAtScope",
          component: () => import("@/views/zhangxinxuWeb/cssAtScope.vue"),
          props: (route) => route.query,
        },
        
      ],
    },
  ];
  const jsProNote = [
    {
      path: "/jsProNote",
      component: Layout,
      redirect: "/jsProNote/all",
      children: [
        {
          path: "all",
          name: "all",
          component: () => import("@/views/jsProNote/all.vue"),
          props: (route) => route.query,
        },
      ],
    },
  ];
  const _20191226 = [
    {
      path: "/20191226",
      component: Layout,
      redirect: "/20191226/index",
      children: [
        {
          path: "index",
          name: "index",
          component: () => import("@/views/20191226/index.vue"),
          props: (route) => route.query,
        },
      ],
    },
  ];
  const _20221026 = [
    {
      path: "/20221026",
      component: Layout,
      redirect: "/20221026/CompositeQueryPanel",
      children: [
        {
          path: "CompositeQueryPanel",
          name: "CompositeQueryPanel",
          component: () => import("@/views/20221026/CompositeQueryPanel.vue"),
          props: (route) => route.query,
        },
      ],
    },
  ];
  
// export const routers = [...element, ...practise,...jQuery,...zhangxinxuWeb,...jsProNote,..._20191226,..._20221026]

export default [...element, ...practise,...jQuery,...zhangxinxuWeb,...jsProNote,..._20191226,..._20221026]