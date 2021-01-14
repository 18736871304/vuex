import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);


//路由重复加上下面这段代码就好了
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}



const routes = [
  {
    path: "/",
    redirect: '/login',
    
  },

  {
    path: '/login',
    meta: {
      title: '登录页面'
    },
    component: () => import("../views/login.vue"),
  },
  {
    path: "/home",
    redirect: '/welcome',
    component: () => import("../components/home.vue"),
    children: [{
        path: '/welcome',
        component: () => import("../views/welcome.vue"),
      },
      {
        path: '/profile',
        component: () => import("../views/profile.vue"),
      },

      {
        path: '/nav',
        component: () => import("../views/nav.vue"),
      },
      {
        path: '/mineInfo',
        component: () => import("../views/mineInfo.vue"),
      },
      {
        path: '/updatePass',
        component: () => import("../views/updatePass.vue"),
      },
      {
        path: '/quillEditor',
        component: () => import("../views/quillEditor.vue"),
      },
      {
        path: '/articleManager',
        component: () => import("../views/articleManager.vue"),
      },
      {
        path: '/mail',
        component: () => import("../views/mail.vue"),
      },


      {
        path: '/slider',
        component: () => import("../views/slider.vue"),
      },
      {
        path: '/uploadFile',
        component: () => import("../views/uploadFile.vue"),
      },
      {
        path: '/cardList',
        component: () => import("../views/cardList.vue"),
      },
      {
        path: '/waterfall',
        component: () => import("../views/waterfall.vue"),
      },

      {
        path: '/steps',
        component: () => import("../views/steps.vue"),
      },
      {
        path: '/echarts',
        component: () => import("../views/echarts.vue"),
      }

    ]
  },


  // { //注册页面
  //   path: '/register',
  //   meta: {
  //     title: '注册页面'
  //   },
  //   component: register
  // },
  // {
  //   path: '/login',
  //   meta: {
  //     title: '登录页面'
  //   },
  //   component: login
  // },
  {
    path: '/404',
    meta: {
      title: '错误页面-404'
    },
    component: () => import("../views/error/NotPath_404.vue"),
  },




];

const router = new VueRouter({
  routes
});

export default router;