import { expenseApi } from '@/api/expenseApi'
import type { User } from '../interfaces'

export const getUserAction = async () => {
    try {
        const response = await expenseApi.get<User>('/user')

        return {
            ok: true,
            data: response.data,
        }
    } catch (error) {
        console.error('Error al obtener el usuario:', error)
        return {
            ok: false,
            data: null,
        }
    }
}
