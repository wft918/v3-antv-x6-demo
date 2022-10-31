import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

export type AppRouteRecordRaw = RouteRecordRaw & {
  hidden?: boolean,
  children?: AppRouteRecordRaw[]
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/index.vue')
    },
    {
      path: '/flow-x6',
      name: 'flow-x6',
      component: () => import('@/views/flow-x6/index.vue')
    }
  ] as AppRouteRecordRaw[]
})
 
export default router