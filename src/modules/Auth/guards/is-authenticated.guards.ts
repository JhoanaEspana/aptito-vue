import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

const isAuthenticatedGuard = (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext,
) => {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')

    localStorage.setItem('lastPath', to.path)

    if (!token || !userId) {
        return next({ name: 'login' })
    }

    return next()
}

export default isAuthenticatedGuard
