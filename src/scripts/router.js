import { createRouter, createWebHistory  } from 'vue-router'

const router = createRouter({
    history: createWebHistory('/todo-vue-tailwind/'),
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
        }
    ]
})

export default router