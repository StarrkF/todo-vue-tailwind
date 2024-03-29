import { createRouter, createWebHashHistory  } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory('/todo-vue-tailwind/'),
    routes: [
        {
            path: '/',
            name: 'todo',
            component: () => import('../pages/Todo.vue')
        },
        {
            path: '/preview',
            name: 'preview',
            component: () => import('../pages/Preview.vue')
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: () => import('../pages/Detail.vue')
          }
    ]
})

export default router