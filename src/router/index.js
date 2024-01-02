import { createRouter, createWebHistory } from 'vue-router';

import {authMiddleware} from '../middlewares/auth.middleware';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Auth',
            component: () => import('../views/auth/Auth.vue'),
            beforeEnter: authMiddleware
        },
        {
            path: '/game',
            name: 'Game',
            component: () => import('../views/game/Game.vue'),
            beforeEnter: authMiddleware
        }
    ]
});

export default router;