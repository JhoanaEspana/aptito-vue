import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { useAuthStore } from '../stores/auth.store'
import { AuthStatus } from '../interfaces'

const isNotAuthenticatedGuard = async (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext,
) => {
    const authStore = useAuthStore()
    await authStore.checkAuth()

    // Si el usuario está autenticado, redirigir al dashboard
    if (authStore.authStatus === AuthStatus.Authenticated) {
        return next({ name: 'dashboard' })
    }

    // Si no está autenticado, permitir el acceso
    return next()
}

export default isNotAuthenticatedGuard
