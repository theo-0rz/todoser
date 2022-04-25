import { createRouter, createWebHashHistory } from 'vue-router';
import Login from 'views/login/Login.vue';
import Home from 'views/home/Home.vue';
import Todos from 'views/tab/Index.vue';
import Calendar from 'views/tab/Calendar.vue';

const routes = [
  {
    // 登录页
    path: '/',
    redirect: '/home',
  },
  {
    // 登录页
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    // 主页面
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/home/',
        component: Todos,
      },
      {
        // tab1: 代办列表
        path: '/home/todos',
        name: 'todos',
        component: Todos,
      },
      {
        // tab2: 日历
        path: '/home/calendar',
        name: 'calendar',
        component: Calendar,
      },
      //   { // 其他，待定
      //       path: 'todoser/other',
      //       name: 'other',
      //       component: Other,
      //   },
      {
        path: 'home/:other',
        redirect: '/home/todos',
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    redirect: '/home',
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 全局路由守卫
router.beforeEach((to, from) => {
  // ...
  // 返回 false 以取消导航
});
router.afterEach((to, from) => {});

export default router;
