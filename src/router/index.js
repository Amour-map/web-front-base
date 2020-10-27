import VueRouter from 'vue-router';
import Login from '@/pages/login';

const routes = [
  {
    path: '/login',
    component: Login
  }
];

const router = new VueRouter({
  routes,
  mode: 'hash'
});

export default router;
