import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  routes: [
    {
      path: '/',
      redirect: { path: '/lists' },
    },
    {
      path: '/lists',
      name: 'lists',
      component: () => import('./views/LIstView.vue'),
    },
    {
      path: '/details/:id',
      name: 'details',
      component: () => import('./views/DetailView.vue'),
    },

  ],
  history: createWebHashHistory(),
});
export default router;
