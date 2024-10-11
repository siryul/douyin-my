export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/home/index.vue'),
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('@/pages/shop/index.vue'),
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('@/pages/message/index.vue'),
  },
  {
    path: '/me',
    name: 'Me',
    component: () => import('@/pages/me/index.vue'),
  },
  {
    path: '/shop/detail',
    name: 'GoodsDetail',
    component: () => import('@/pages/shop/GoodsDetail.vue'),
  },
];
