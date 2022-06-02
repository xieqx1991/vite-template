import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import errorRoutes from "./modules/error";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "首页"
    },
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/home/index.vue")
  },
  ...errorRoutes // 错误页面路由放到最后
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  // TODO: 在此处添加路由守卫
  next();
});

export default router;
