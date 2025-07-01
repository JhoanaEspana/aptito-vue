import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { AuthStatus, type User } from '../interfaces'
import { loginAction, checkAuthAction } from '../actions'

export const useAuthStore = defineStore('auth', () => {
    const authStatus = ref<AuthStatus>(AuthStatus.Checking)
    const user = ref<User | undefined>()
    const token = ref<string | undefined>(localStorage.getItem('token') || undefined)

    const checkAuth = async () => {
        try {
            const checkResp = await checkAuthAction()

            if (checkResp.ok && checkResp.user) {
                user.value = checkResp.user
                authStatus.value = AuthStatus.Authenticated
            } else {
                logout()
            }
        } catch (error) {
            console.log('Error en checkAuth:', error)
            logout()
        }
    }

    const login = async (email: string, password: string) => {
        try {
            const loginResp = await loginAction(email, password)

            if (!loginResp.ok) {
                logout()
                return false
            }

            user.value = loginResp.user
            token.value = loginResp.token
            authStatus.value = AuthStatus.Authenticated

            // Guardar token y datos del usuario en localStorage
            if (loginResp.token) {
                localStorage.setItem('token', loginResp.token)
            }
            if (loginResp.user?.id) {
                localStorage.setItem('userId', loginResp.user.id)
            }
            if (loginResp.user?.name) {
                localStorage.setItem('userName', loginResp.user.name)
            }
            if (loginResp.user?.email) {
                localStorage.setItem('userEmail', loginResp.user.email)
            }

            return true
        } catch (error) {
            console.log(error)
            return logout()
        }
    }

    const logout = () => {
        authStatus.value = AuthStatus.Unauthenticated
        user.value = undefined
        token.value = ''
        // Eliminar todos los datos del localStorage
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        localStorage.removeItem('userName')
        localStorage.removeItem('userEmail')
        return false
    }

    return {
        user,
        token,
        authStatus,

        //Getters
        isChecking: computed(() => authStatus.value === AuthStatus.Checking),
        isAuthenticated: computed(() => authStatus.value === AuthStatus.Authenticated),

        userName: computed(() => user.value?.name),

        //Actions
        login,
        checkAuth,
    }
})
