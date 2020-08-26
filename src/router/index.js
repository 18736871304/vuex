import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [{
    path: "/",
    redirect: '/home',
  },
  {
    path: "/home",
    redirect: '/welcome',
    component: () => import("../components/home.vue"),
    children: [{
      path: '/welcome',
      component: () => import("../views/welcome.vue"),
    }]
  },





];

const router = new VueRouter({
  routes
});

export default router;