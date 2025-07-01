import { createRouter, createWebHistory } from 'vue-router'
import NotFoundView from '@/modules/Auth/views/NotFoundView.vue'
import isAuthenticatedGuard from '@/modules/Auth/guards/is-authenticated.guards.ts'
import isNotAuthenticatedGuard from '@/modules/Auth/guards/is-not-authenticated.guards.ts'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            beforeEnter: isAuthenticatedGuard,
            redirect: '/dashboard',
            component: () => import('@/layouts/DashboardLayout.vue'),
            children: [
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    component: () => import('@/modules/dashboard/views/DashboardView.vue'),
                },
                {
                    path: 'add-item',
                    name: 'add-item',
                    component: () => import('@/modules/addItem/views/AddItemsView.vue'),
                },
                {
                    path: 'user-detail',
                    name: 'user-detail',
                    component: () => import('@/modules/userDetail/views/UserDetailView.vue'),
                },
                {
                    path: 'movements',
                    name: 'movements',
                    component: () => import('@/modules/movementsDetail/views/MovementsDetail.vue'),
                },
            ],
        },

        //auth
        {
            path: '/auth',
            redirect: { name: 'login' },
            component: () => import('@/modules/Auth/layouts/AuthLayout.vue'),
            beforeEnter: isNotAuthenticatedGuard,
            children: [
                {
                    path: 'login',
                    name: 'login',
                    component: () => import('@/modules/Auth/views/LoginView.vue'),
                },
                {
                    path: 'register',
                    name: 'register',
                    component: () => import('@/modules/Auth/views/RegisterView.vue'),
                },
            ],
        },

        //404
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundView,
        },
    ],
})

export default router
