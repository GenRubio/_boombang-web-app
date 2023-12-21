import { createRouter, createWebHistory } from 'vue-router';

import AuthMiddleware from '../middlewares/auth.middleware';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Game',
            component: () => import('../views/game/Game.vue'),
        },
        {
            path: '/dashboard',
            name: 'Dashbard',
            component: () => import('../views/dashboard/Dashboard.vue'),
            meta:{
                auth: true
            },
        },
        {
            path: '/auth',
            name: 'Auth',
            component: () => import('../views/auth/Auth.vue')
        }
    ]
});

router.beforeEach(AuthMiddleware);

export default router;