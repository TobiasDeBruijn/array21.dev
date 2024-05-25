import {createRouter, createWebHistory} from 'vue-router'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: () => import('@/pages/Home.vue'),
        },
        {
            path: "/projects",
            component: () => import('@/pages/Projects.vue'),
        }
    ]
})