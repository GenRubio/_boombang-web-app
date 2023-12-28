import { createRouter, createWebHistory } from 'vue-router';

import AuthMiddleware from '../middlewares/auth.middleware';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Auth',
            component: () => import('../views/auth/Auth.vue')
        },
        {
            path: '/game',
            name: 'Game',
            component: () => import('../views/game/Game.vue'),
            meta:{
                auth: true
            },
        }
    ]
});

router.beforeEach(AuthMiddleware);

export default router;