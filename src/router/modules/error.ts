import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/:path(.*)",
    name: "Error404",
    meta: {
      title: "404"
    },
    component: () =>
      import(/* webpackChunkName: "error" */ "@/views/error/404.vue")
  }
];

export default routes;
