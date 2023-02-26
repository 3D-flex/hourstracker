import { createRouter, createWebHistory } from 'vue-router';
import store from '../store/index';

const routes = [
  {
    path: "/auth/",
    name: "Auth",
    component: () => import("../views/Auth"),
    children: [
      {
        path: "login",
        name: "Login",
        component: () => import("../containers/auth/Login")
      },
      {
        path: "register",
        name: "Register",
        component: () => import("../containers/auth/Register")
      },
    ],
  },
  {
    path: "/app/",
    meta: {requiresLogin: true}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresLogin)) {
    if (store.getters["user/getUser"])
      return next();
    else return next({name: "Login"});
  }

  return next();
})

export default router
