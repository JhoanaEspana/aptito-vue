import { expenseApi } from '@/api/expenseApi'
import type { AuthResponse, User } from '../interfaces'
import { isAxiosError } from 'axios'

interface LoginResponse {
    ok: boolean
    user?: User
    token?: string
    message?: string
}

export const loginAction = async (email: string, password: string): Promise<LoginResponse> => {
    try {
        const { data } = await expenseApi.post<AuthResponse>('/login', {
            email,
            password,
        })

        return {
            ok: true,
            user: data.user,
            token: data.token,
        }
    } catch (error) {
        console.log(error)
        if (isAxiosError(error)) {
            return {
                ok: false,
                message: error.response?.data.message,
            }
        }

        return {
            ok: false,
            message: 'Error al iniciar sesión',
        }
    }
}
