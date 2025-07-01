import { expenseApi } from '@/api/expenseApi'
import type { User } from '../interfaces'

export const getUsersAction = async () => {
    try {
        const response = await expenseApi.get<{ data: User[] }>('/users')
        const users = response.data.data || []

        return {
            ok: true,
            data: users,
        }
    } catch (error) {
        console.error('Error fetching users:', error)
        return {
            ok: false,
            data: [],
        }
    }
}
